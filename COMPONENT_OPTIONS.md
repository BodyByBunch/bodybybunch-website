# Component Options & Variants - Best Practices

## 🎯 **Approach 1: Separate Component Files (Recommended)**

### **Structure**
```
src/components/home/
├── hero-section.tsx      # Original design
├── hero-section-2.tsx    # Background image design
├── hero-switcher.tsx     # Component switcher
└── index.ts             # Barrel exports
```

### **Usage**
```tsx
// Direct import
import { HeroSection2 } from '@/components/home/hero-section-2';

// Using switcher
import { HeroSwitcher } from '@/components/home/hero-switcher';
<HeroSwitcher variant="background-image" />

// Convenience imports
import { BackgroundImageHero } from '@/components/home/hero-switcher';
```

### **Pros**
- ✅ Clean separation of concerns
- ✅ Easy to maintain and debug
- ✅ Can have completely different implementations
- ✅ Easy to A/B test
- ✅ Version control friendly

### **Cons**
- ❌ More files to manage
- ❌ Potential code duplication

---

## 🎯 **Approach 2: Props-Based Variants**

### **Structure**
```tsx
interface HeroSectionProps {
  variant: 'original' | 'background-image';
  backgroundImage?: string;
  overlay?: boolean;
}

export function HeroSection({ variant, backgroundImage, overlay }: HeroSectionProps) {
  // Conditional rendering based on props
}
```

### **Usage**
```tsx
<HeroSection variant="background-image" backgroundImage="/images/hero/bg.jpg" />
<HeroSection variant="original" />
```

### **Pros**
- ✅ Single component to maintain
- ✅ Flexible configuration
- ✅ Easy to extend

### **Cons**
- ❌ Can become complex with many variants
- ❌ Harder to read with many conditionals

---

## 🎯 **Approach 3: Composition Pattern**

### **Structure**
```tsx
// Base component
export function HeroSection({ children, background }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen">
      {background && <BackgroundImage src={background} />}
      {children}
    </section>
  );
}

// Specialized components
export function HeroContent() { /* ... */ }
export function HeroBackground() { /* ... */ }
```

### **Usage**
```tsx
<HeroSection background="/images/hero/bg.jpg">
  <HeroContent />
</HeroSection>
```

### **Pros**
- ✅ Highly flexible
- ✅ Reusable components
- ✅ Clear separation

### **Cons**
- ❌ More complex setup
- ❌ Requires understanding of composition

---

## 🎯 **Current Implementation: Separate Files + Switcher**

We're using **Approach 1** with a switcher component because:

1. **Clean Code**: Each hero variant is self-contained
2. **Easy Testing**: Can easily switch between designs
3. **Maintainable**: Changes to one variant don't affect others
4. **Scalable**: Easy to add more variants

### **How to Switch Variants**

```tsx
// In your page component
import { HeroSwitcher } from '@/components/home/hero-switcher';

// Use background image version (default)
<HeroSwitcher />

// Use original version
<HeroSwitcher variant="original" />

// Or import directly
import { BackgroundImageHero } from '@/components/home/hero-switcher';
<BackgroundImageHero />
```

### **Adding New Variants**

1. Create new component file: `hero-section-3.tsx`
2. Add to switcher: `hero-switcher.tsx`
3. Export from index: `index.ts`
4. Use in pages as needed

---

## 🎯 **Best Practices**

### **Naming Convention**
- Use descriptive names: `hero-section-background.tsx`
- Include version numbers: `hero-section-v2.tsx`
- Use kebab-case for files

### **File Organization**
- Keep related variants in same directory
- Use barrel exports for clean imports
- Create switcher components for easy management

### **Documentation**
- Document each variant's purpose
- Include usage examples
- Explain when to use each variant

### **Testing**
- Test each variant independently
- Ensure responsive behavior
- Check accessibility across variants 