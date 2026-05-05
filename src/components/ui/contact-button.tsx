import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';

import { SITE_CONTACT } from '@/data/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

export interface ContactButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const ContactButton = React.forwardRef<HTMLAnchorElement, ContactButtonProps>(
  ({ className, variant, size, href, target, rel, ...props }, ref) => {
    const resolvedHref = href ?? SITE_CONTACT.formHref;
    const isExternal = /^https?:\/\//.test(resolvedHref);
    const resolvedTarget = target ?? (isExternal ? '_blank' : undefined);
    const resolvedRel = rel ?? (resolvedTarget === '_blank' ? 'noopener noreferrer' : undefined);

    return (
      <a
        ref={ref}
        href={resolvedHref}
        target={resolvedTarget}
        rel={resolvedRel}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

ContactButton.displayName = 'ContactButton';

export { ContactButton };
