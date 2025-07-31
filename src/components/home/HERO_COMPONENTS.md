# Hero Component Options

This document explains the different hero component variants available and their use cases.

## 🎯 Available Hero Components

### 1. `HeroSectionLight` (Current Default)
**Use Case**: Light theme optimized hero section
- ✅ Clean background with image positioned right
- ✅ Uses `sliderbg-2-bodybybunch.jpg` with transparent background
- ✅ Natural text colors, no shadows needed
- ✅ Floating stats cards for visual interest
- ✅ Perfect for light mode browsing

### 2. `HeroSection2` (Dark Mode)
**Use Case**: Dark theme with dramatic background
- ✅ Full-screen background image (`sliderbg-bodybybunch.png`)
- ✅ Dark overlay for text readability
- ✅ Text with shadows/outlines for visibility
- ✅ Immersive, dramatic design

### 3. `HeroSection` (Original)
**Use Case**: Minimal, text-focused design
- ✅ Clean, minimal design
- ✅ No background image
- ✅ Text-focused layout
- ✅ Fast loading

## 🔄 Current Setup

The main page uses `HeroThemeAware` which automatically switches between variants:

```tsx
// src/app/page.tsx
import { HeroThemeAware } from '@/components/home';

export default function HomePage() {
  return (
    <main>
      <HeroThemeAware /> {/* Auto-switches based on theme */}
      {/* Other sections */}
    </main>
  );
}
```

## 🎨 Component Features Comparison

| Feature | HeroSectionLight | HeroSection2 | HeroSection |
|---------|------------------|--------------|-------------|
| Background Image | Right-positioned | Full-screen | None |
| Text Visibility | Natural colors | Enhanced shadows | Standard |
| Theme Optimization | Light mode | Dark mode | Universal |
| Performance | Fast | Medium | Fastest |
| Visual Impact | Modern | Dramatic | Minimal |

## 🚀 Switching Between Variants

### Option 1: Direct Import (Current)
```tsx
import { HeroSectionLight } from '@/components/home';
<HeroSectionLight />
```

### Option 2: Using HeroSwitcher
```tsx
import { HeroSwitcher } from '@/components/home';

// Available variants: 'light-mode' | 'background-image' | 'original'
<HeroSwitcher variant="light-mode" />
```

### Option 3: Theme-Based Auto-Switching (Current)
```tsx
// Automatically switches based on user's theme preference
import { HeroThemeAware } from '@/components/home';
<HeroThemeAware /> // Uses HeroSectionLight for light theme, HeroSection2 for dark theme
```

## 🌈 Design Philosophy

Each hero variant is purpose-built:

- **HeroSectionLight**: Clean, professional, perfect for business users in light mode
- **HeroSection2**: Bold, engaging, great for dramatic impact in dark mode  
- **HeroSection**: Fast, accessible, works everywhere

## 📱 Responsive Behavior

All hero components include:
- ✅ Mobile-responsive design
- ✅ Proper image optimization
- ✅ Accessible markup
- ✅ Fast loading with Next.js Image optimization

## 🔧 Customization

To modify a hero variant:
1. Edit the specific component file (e.g., `hero-section-light.tsx`)
2. Changes only affect that variant
3. Other variants remain unchanged
4. Easy to test and maintain

This separation allows for optimal user experience across different themes and use cases.