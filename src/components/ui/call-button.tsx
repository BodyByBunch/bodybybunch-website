import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';

import { SITE_CONTACT } from '@/data/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

export interface CallButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const CallButton = React.forwardRef<HTMLAnchorElement, CallButtonProps>(
  ({ className, variant, size, href = SITE_CONTACT.phoneHref, ...props }, ref) => (
    <a
      ref={ref}
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);

CallButton.displayName = 'CallButton';

export { CallButton };
