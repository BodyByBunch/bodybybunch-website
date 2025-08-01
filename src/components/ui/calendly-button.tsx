'use client';

import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

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
        // Fallback to direct link
        window.open(calendlyUrl, '_blank');
      }
      return false;
    };

    return (
      <a
        ref={ref}
        href={calendlyUrl}
        onClick={handleScheduleClick}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);
CalendlyButton.displayName = 'CalendlyButton';

export { CalendlyButton };