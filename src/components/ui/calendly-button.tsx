import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button-variants'; // Use variants directly
import { cn } from '@/lib/utils';

// Ensure Calendly is declared on the window object
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

// Define props, extending standard anchor attributes and adding variant props + calendlyUrl
export interface CalendlyButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  calendlyUrl: string;
}

const CalendlyButton = React.forwardRef<HTMLAnchorElement, CalendlyButtonProps>(
  ({ className, variant, size, children, calendlyUrl, onClick, ...props }, ref) => {

    const handleScheduleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      // Prevent default anchor behavior
      event.preventDefault();

      // Call original onClick if provided
      if (onClick) {
        onClick(event);
      }

      // Open Calendly popup
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: calendlyUrl });
      } else {
        console.error('Calendly widget script not loaded.');
        // Fallback: Maybe redirect to the Calendly URL directly
        window.location.href = calendlyUrl;
      }
      return false;
    };

    return (
      <a
        ref={ref}
        href={calendlyUrl} // Provide the URL as href for fallback/SEO
        onClick={handleScheduleClick}
        className={cn(buttonVariants({ variant, size, className }))} // Apply button styles
        {...props} // Pass down other anchor props
      >
        {children}
      </a>
    );
  }
);
CalendlyButton.displayName = 'CalendlyButton';

export { CalendlyButton }; 