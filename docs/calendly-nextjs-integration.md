# Calendly Integration for Next.js - Body By Bunch

## Overview
This document outlines the Calendly integration implemented for the Body By Bunch Next.js project using modern Shadcn components.

## Files Created

### 1. CalendlyButton Component
**File:** `src/components/ui/calendly-button.tsx`
- Modern Next.js component with 'use client' directive
- Uses existing Shadcn button variants and utilities
- Includes TypeScript types and proper error handling
- Fallback behavior opens Calendly in new tab if popup fails

### 2. Test Page
**File:** `src/app/test-calendly/page.tsx`
- Test page to verify integration works
- Shows different button variants and styling options
- Includes setup instructions

### 3. Layout Updates
**File:** `src/app/layout.tsx`
- Added Calendly CSS and JavaScript imports to Next.js layout
- Scripts load asynchronously for better performance

## Key Differences from Vite Version

1. **Next.js Specific**:
   - Added 'use client' directive for client-side functionality
   - Scripts added to layout.tsx instead of index.html
   - Uses Next.js head element

2. **Modern Shadcn Integration**:
   - No need for separate button-variants.ts file
   - Uses existing buttonVariants from button.tsx
   - Leverages modern Shadcn component structure

3. **Enhanced Error Handling**:
   - Better fallback behavior (opens in new tab vs redirect)
   - Console error logging for debugging

## Dependencies Already Available
- ✅ `class-variance-authority`: ^0.7.1
- ✅ `clsx`: ^2.1.1
- ✅ `tailwind-merge`: ^3.3.1
- ✅ `@radix-ui/react-slot`: ^1.2.3
- ✅ `lucide-react`: ^0.525.0

## Usage Examples

### Basic Usage
```tsx
import { CalendlyButton } from '@/components/ui/calendly-button';

<CalendlyButton
  calendlyUrl="https://calendly.com/your-calendly-url"
  variant="default"
  size="lg"
>
  Schedule Free Consultation
</CalendlyButton>
```

### With Icons
```tsx
import { CalendlyButton } from '@/components/ui/calendly-button';
import { Calendar } from 'lucide-react';

<CalendlyButton
  calendlyUrl="https://calendly.com/your-calendly-url"
  variant="outline"
  size="lg"
>
  <Calendar className="mr-2 h-5 w-5" />
  Book a Call
</CalendlyButton>
```

### Custom Styling
```tsx
<CalendlyButton
  calendlyUrl="https://calendly.com/your-calendly-url"
  variant="default"
  className="w-full bg-teal-600 hover:bg-teal-700"
  size="lg"
>
  Schedule Your Transformation
</CalendlyButton>
```

## Testing Instructions

1. Navigate to `/test-calendly` to see the component in action
2. Replace placeholder URL with your actual Calendly URL
3. Test different variants and sizes
4. Verify popup functionality works
5. Test fallback behavior by disabling JavaScript

## Integration Checklist

- [x] Create CalendlyButton component
- [x] Add Calendly scripts to layout
- [x] Create test page
- [x] Verify no linting errors
- [ ] Replace placeholder Calendly URL with real URL
- [ ] Integrate into existing components (CTA, Hero, etc.)
- [ ] Remove test page after integration complete

## Next Steps

1. Get your actual Calendly URL from Lane
2. Replace the placeholder URL in components
3. Integrate CalendlyButton into:
   - CTA sections
   - Hero sections
   - About page
   - Contact buttons
4. Remove old contact form approach
5. Test thoroughly across different browsers

## Notes

- Component is fully accessible and keyboard navigable
- Works with both light and dark themes
- Includes proper TypeScript types
- Follows Next.js best practices
- Uses modern React patterns with forwardRef