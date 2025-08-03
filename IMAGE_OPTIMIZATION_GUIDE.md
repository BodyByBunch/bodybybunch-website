# Image Optimization Guide
## Best Practices for Body By Bunch Website

### 🏗️ Current Implementation

#### Next.js Image Component Usage
```tsx
import Image from 'next/image';

// Hero images (above the fold) - use priority
<Image
  src="/images/hero/main-hero.jpg"
  alt="Descriptive alt text for SEO"
  width={800}
  height={600}
  priority // Load immediately
  className="object-cover"
/>

// Secondary images - use lazy loading
<Image
  src="/images/about/story-image.jpg"
  alt="Lane Bunch's fitness journey"
  width={400}
  height={300}
  loading="lazy" // Load when in viewport
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Low quality placeholder
  className="object-cover rounded-lg"
/>
```

### 📁 Recommended Image Structure

```
public/images/
├── hero/
│   ├── hero-light.jpg (1920x1080, WebP/AVIF)
│   └── hero-dark.jpg (1920x1080, WebP/AVIF)
├── about/
│   ├── lane-headshot.jpg (800x800, WebP)
│   └── story-images/ (600x400 each)
├── services/
│   ├── personal-training.jpg (600x400)
│   ├── nutrition-coaching.jpg (600x400)
│   └── transformation.jpg (600x400)
├── testimonials/
│   ├── before-after/ (800x600 each)
│   └── client-photos/ (400x400 each)
├── training/
│   └── gallery/ (various sizes for masonry)
└── brand/
    ├── logo.png (512x512)
    ├── logo-white.png (512x512)
    └── favicon.png (32x32)
```

### 🎯 SEO Image Requirements

#### Open Graph Images (Social Media)
```
- Size: 1200x630 pixels
- Format: JPEG (better compression for photos)
- File size: < 1MB
- Include branding and key message
- Text should be readable on mobile

Required files:
- /og-image.jpg (main site)
- /og-about.jpg (about page)
- /og-testimonials.jpg (testimonials)
```

#### App Icons (PWA/Mobile)
```
- /favicon.ico (32x32, ICO format)
- /favicon.png (32x32, PNG)
- /apple-touch-icon.png (180x180, PNG)
- /android-chrome-192x192.png (192x192, PNG)
- /android-chrome-512x512.png (512x512, PNG)
```

### ⚙️ Configuration

#### next.config.ts Settings
```typescript
images: {
  formats: ['image/webp', 'image/avif'], // Modern formats
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  domains: ['images.unsplash.com'], // External domains
  dangerouslyAllowSVG: true, // For icons/logos
},
```

### 📐 Responsive Image Sizes

#### Breakpoint Guidelines
```css
/* Mobile First Approach */
- Mobile (320-768px): 100vw
- Tablet (768-1024px): 50vw 
- Desktop (1024px+): 33vw or fixed width

/* Hero Images */
- Mobile: 100vw (full width)
- Desktop: 50vw (half viewport)

/* Gallery Images */
- Mobile: 100vw
- Tablet: 50vw
- Desktop: 25vw (4 columns)
```

#### Implementation Example
```tsx
<Image
  src="/images/service/personal-training.jpg"
  alt="Personal training session with Lane Bunch"
  width={600}
  height={400}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="w-full h-auto object-cover rounded-lg"
/>
```

### 🔧 Image Processing Workflow

#### 1. Original Images
- **Format**: RAW/JPEG from camera
- **Size**: High resolution (3000px+ width)
- **Quality**: Maximum for archival

#### 2. Web Optimization
- **Resize**: Multiple sizes for responsive design
- **Compress**: 80-85% quality for JPEG, maximum for WebP
- **Format**: Convert to WebP/AVIF when possible
- **Alt Text**: Descriptive, keyword-rich descriptions

#### 3. Tools Recommended
- **Squoosh.app**: Online image optimization
- **ImageMagick**: Batch processing
- **Photoshop**: Professional editing
- **TinyPNG**: Quick compression

### 🚀 Performance Best Practices

#### Loading Strategy
```tsx
// Above the fold (hero) - Priority loading
<Image priority />

// Below the fold - Lazy loading with placeholder
<Image 
  loading="lazy"
  placeholder="blur"
  blurDataURL="..." 
/>

// Gallery/Masonry - Native lazy loading
<Image loading="lazy" />
```

#### Alt Text Guidelines
```tsx
// Bad
alt="image"
alt="photo"

// Good
alt="Lane Bunch demonstrating proper squat form during personal training session"
alt="Before and after transformation results showing 30-pound weight loss"
alt="Nutrition coaching session with meal planning charts"
```

#### File Naming Convention
```
// SEO-friendly file names
lane-bunch-personal-trainer.jpg
client-transformation-before-after.jpg
nutrition-coaching-session.jpg

// Avoid
IMG_0001.jpg
photo.jpg
image1.jpg
```

### 📊 Performance Metrics

#### Current Optimization Level
- ✅ Next.js Image component: 100% implementation
- ✅ Modern format support: WebP/AVIF enabled
- ✅ Lazy loading: Implemented for secondary images
- ✅ Priority loading: Hero images optimized
- ✅ Responsive sizing: Multiple breakpoints configured

#### Expected Improvements
- **Page Load Speed**: 25-40% faster image loading
- **Bandwidth Savings**: 30-50% smaller file sizes
- **SEO Score**: Improved image optimization scores
- **User Experience**: Smooth loading with placeholders

### 🔄 Ongoing Maintenance

#### Monthly Tasks
1. **Audit Image Sizes**: Check for oversized images
2. **Update Alt Text**: Improve SEO descriptions
3. **Performance Review**: Monitor loading times
4. **Format Updates**: Convert new images to WebP/AVIF

#### When Adding New Images
1. **Optimize before upload**: Compress and resize
2. **Use descriptive filenames**: SEO-friendly naming
3. **Add proper alt text**: Descriptive and keyword-rich
4. **Test responsive behavior**: Check on multiple devices
5. **Monitor performance**: Ensure fast loading times

This optimization strategy ensures maximum performance, SEO benefits, and user experience for the Body By Bunch website.