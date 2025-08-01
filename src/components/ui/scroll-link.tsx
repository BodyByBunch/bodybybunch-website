import { forwardRef } from "react";
import { smoothScrollTo } from "@/lib/smoothScroll";

interface ScrollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  ({ href, onClick, children, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const id = href.replace("#", "");
      smoothScrollTo(id);
      onClick?.(e);
    };

    return (
      <a ref={ref} href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }
);

ScrollLink.displayName = "ScrollLink"; 