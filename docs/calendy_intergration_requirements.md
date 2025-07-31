# Calendly Integration Requirements

## Overview
This document outlines the essential components and setup required to implement Calendly integration in any project using the reusable `CalendlyButton` component.

## Required Files

### 1. Core Component
**File:** `src/components/ui/calendly-button.tsx`
```typescript
import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export interface CalendlyButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  calendlyUrl: string;
}

const CalendlyButton = React.forwardRef<HTMLAnchorElement, CalendlyButtonProps>(
  ({ className, variant, size, children, calendlyUrl, onClick, ...props }, ref) => {
    const handleScheduleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: calendlyUrl });
      } else {
        console.error('Calendly widget script not loaded.');
        window.location.href = calendlyUrl;
      }
      return false;
    };

    return (
      <a
        ref={ref}
        href={calendlyUrl}
        onClick={handleScheduleClick}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </a>
    );
  }
);
CalendlyButton.displayName = 'CalendlyButton';

export { CalendlyButton };
```

### 2. Button Variants (Required for styling)
**File:** `src/components/ui/button-variants.ts`
```typescript
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export { buttonVariants }
```

### 3. Utility Function
**File:** `src/lib/utils.ts`
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Required Dependencies

Add these to your `package.json`:
```json
{
  "dependencies": {
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

## HTML Setup

Add these tags to your `public/index.html` in the `<head>` section:
```html
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
```

## Usage Example

```typescript
import { CalendlyButton } from "@/components/ui/calendly-button";

// Basic usage
<CalendlyButton
  calendlyUrl="https://calendly.com/your-calendly-url"
  variant="default"
  size="lg"
>
  Schedule A Call
</CalendlyButton>

// With custom styling
<CalendlyButton
  calendlyUrl="https://calendly.com/your-calendly-url"
  variant="outline"
  className="w-full"
>
  Book Demo
</CalendlyButton>
```

## Implementation Checklist

- [ ] Copy `calendly-button.tsx` to `src/components/ui/`
- [ ] Copy `button-variants.ts` to `src/components/ui/`
- [ ] Copy `utils.ts` to `src/lib/`
- [ ] Install required dependencies (`class-variance-authority`, `clsx`, `tailwind-merge`)
- [ ] Add Calendly script and CSS links to `public/index.html`
- [ ] Ensure Tailwind CSS is configured in the project
- [ ] Test the component with your Calendly URL

## Notes

- The component requires Tailwind CSS to be set up in the project
- Make sure your Calendly URLs are correct and accessible
- The component includes fallback behavior if the Calendly script fails to load
- TypeScript support is included with proper type definitions

## Troubleshooting

If the Calendly popup doesn't appear:
1. Check that the script tags are properly added to `index.html`
2. Verify the Calendly URL is correct and accessible
3. Check browser console for any JavaScript errors
4. Ensure the component is not being blocked by ad blockers or privacy extensions