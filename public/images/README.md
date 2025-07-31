# Image Assets Documentation

This directory contains all static image assets for the Body By Bunch website, organized by purpose and usage context.

## 📁 Directory Structure

```
public/images/
├── brand/          # Logo and branding assets
├── hero/           # Hero section backgrounds and images
├── why/            # Why section value proposition images
├── services/       # Service-related images
├── training/       # Client training sessions and workout photos
├── testimonials/   # Client photos and testimonials
├── team/           # Team member photos
└── icons/          # Custom icons and small graphics
```

## 🎨 Brand Assets (`/brand`)
- **Logo files**: Main brand logo in various formats
- **Favicons**: Website favicon variations
- **Brand elements**: Supporting brand graphics

### Available Brand Assets:
- `logo.png` - Main logo for light backgrounds
- `logo-white.png` - White logo for dark backgrounds

## 🏠 Hero Images (`/hero`)
- **Background images**: Full-screen hero backgrounds
- **Promotional images**: Featured content images
- **Call-to-action visuals**: Supporting CTA graphics

### 📁 Available Hero Images
- `sliderbg-bodybybunch.png` - High quality 2400x1600px (dark mode background)
- `sliderbg-2-bodybybunch.jpg` - New light mode hero image (positioned right)
- `sliderbg-bodybybunch-300x200.jpg` - Small version 300x200px (legacy)
- `sliderbg-bodybybunch-crop-300x170.jpg` - Cropped small version (backup)

## 🎯 Why Section Images (`/why`)
Images showcasing the unique value propositions and differentiators of Body By Bunch services.

### Image Specifications:
- **Dimensions**: 256x256px minimum (displayed as 256x256px)
- **Format**: JPG for photos, PNG for graphics with transparency
- **Style**: Professional, clean, high-quality photography
- **Theme**: Fitness, nutrition, coaching, personal connection

### Required Images:
- `personalized-training.jpg` - Custom workout planning and form correction
- `nutrition-education.jpg` - Healthy meal prep, education, balanced lifestyle
- `ongoing-support.jpg` - Coach-client interaction, accountability, motivation
- `certified-expertise.jpg` - NASM certifications, professional credentials

### 📝 Image Guidelines:
- **Personalized Training**: Show one-on-one coaching, form correction, custom workout planning
- **Nutrition Education**: Healthy foods, meal planning, education (not restrictive dieting)
- **Ongoing Support**: Phone/text communication, motivation, celebration of wins
- **Certified Expertise**: Professional setting, certifications, evidence-based approach

## 🎯 Services Images (`/services`)
- **Service illustrations**: Visual representations of services
- **Equipment photos**: Gym and training equipment
- **Activity shots**: Training session photos

## 💪 Training Images (`/training`)
- **Client training sessions**: Photos of clients working out with the trainer
- **Workout demonstrations**: Exercise form and technique shots
- **Training environments**: Gym, home, or outdoor training settings
- **Progress tracking**: Before/after photos (with client permission)
- **Motivational shots**: Action shots during workouts

### Image Specifications:
- **Dimensions**: 800x600px minimum (4:3 ratio recommended)
- **Format**: JPG for photos, PNG for graphics with transparency
- **Style**: Professional, motivational, high-quality photography
- **Theme**: Fitness, training, coaching, personal development

## 💬 Testimonials (`/testimonials`)
- **Client photos**: Profile pictures for testimonials
- **Before/after**: Transformation photos (with permission)
- **Review graphics**: Visual testimonial elements

## 👥 Team Images (`/team`)
- **Staff photos**: Professional headshots
- **Action shots**: Team members in action
- **Group photos**: Team collaboration images

## 🔧 Usage Guidelines

### 1. File Naming Convention
- Use kebab-case: `my-image-name.jpg`
- Include descriptive names: `hero-background-gym.jpg`
- Add size indicators when needed: `logo-small-32x32.png`

### 2. Image Optimization
- Compress images before uploading
- Use appropriate formats: JPG for photos, PNG for graphics with transparency, SVG for simple graphics
- Consider WebP format for better compression

### 3. Responsive Images
- Provide multiple sizes for responsive design
- Use Next.js Image component for automatic optimization
- Set appropriate `sizes` prop for responsive images

### 4. Recommended Image Sizes
- **Logo**: 200x60px (main), 60x60px (square), 32x32px (favicon)
- **Hero Images**: 1920x1080px (16:9 ratio)
- **Profile Photos**: 400x400px (1:1 ratio)
- **Service Images**: 800x600px (4:3 ratio)
- **Testimonial Photos**: 200x200px (1:1 ratio)

### ✅ Image Quality Update
Hero background now uses high-quality images optimized for both light and dark themes:
- ✅ Perfect resolution for full-screen display
- ✅ No blurriness or scaling issues
- ✅ Crisp, professional appearance on all devices
- ✅ Separate optimized images for light/dark modes

### 5. Performance Tips
- Use `priority` prop for above-the-fold images
- Implement lazy loading for below-the-fold content
- Consider using placeholder blur for better UX
- Optimize alt text for accessibility and SEO

### 6. Next.js Image Component Example
```tsx
import Image from 'next/image'

<Image
  src="/images/hero/background.jpg"
  alt="Descriptive alt text"
  width={1920}
  height={1080}
  priority={true} // For above-the-fold images
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## 🚀 Adding New Images

1. **Place images in appropriate subdirectory**
2. **Follow naming conventions**
3. **Optimize file size and quality**
4. **Update this README if adding new categories**
5. **Test responsive behavior across devices**

## 📱 Mobile Considerations
- Ensure images work well on mobile devices
- Consider different aspect ratios for mobile vs desktop
- Test loading performance on slower connections
- Provide appropriate fallbacks for older browsers