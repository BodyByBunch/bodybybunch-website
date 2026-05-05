"use client"

import { useState, useEffect } from "react";
import { HeaderLogo } from "@/components/ui/logo"
import { BrandName } from "@/components/ui/brand-name"
import { Button } from "@/components/ui/button"
import { ContactButton, SocialIcons } from "@/components/ui"
import { ModeToggle } from "@/components/mode-toggle";
import { SITE_CTA_LABELS, SITE_NAV_ITEMS } from "@/data/site";
import { ctaStyles } from "@/lib/design";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ChevronRight, Menu, X } from "lucide-react"
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { smoothScrollTo } from "@/lib/smoothScroll";

export function Navbar() {
  const activeSection = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    // Handle hash links that need cross-page navigation
    if (href.startsWith('#')) {
      e.preventDefault();
      
      // If we're on home page, just scroll
      if (pathname === '/') {
        const id = href.replace('#', '');
        smoothScrollTo(id);
      } else {
        // Navigate to home page with hash
        router.push(`/${href}`);
      }
    }
    // Regular links handled normally by Next.js Link
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="w-full max-w-none flex h-14 md:h-16 items-center px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 md:ml-8">
          <HeaderLogo />
          <BrandName variant="sporty" format="camelCase" className="hidden sm:block" />
        </div>

        {/* Navigation - Centered */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6">
          {SITE_NAV_ITEMS.map((item) => {
            const isHashLink = item.href.startsWith('#');
            
            // Determine if this nav item should be highlighted
            let isActive = false;
            if (isHashLink) {
              // For hash links, check if the section is active
              isActive = activeSection === item.href.slice(1);
            } else {
              // For page links, check if the current pathname matches
              isActive = pathname === item.href;
            }
            
            return (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                asChild
                className={`hover:!bg-action/10 hover:!text-action focus:!bg-action/10 focus:!text-action ${isActive ? "bg-action/10 text-action" : ""}`}
              >
                <Link 
                  href={item.href} 
                  onClick={isHashLink ? (e) => handleNavClick(item.href, e) : undefined}
                >
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </nav>

        {/* Right side items - moved to far right */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <SocialIcons className="flex space-x-3" iconClassName="h-4 w-4" />
          <ModeToggle />
          <ContactButton
            variant="default"
            size="sm"
            className={ctaStyles.primary}
          >
            {SITE_CTA_LABELS.callback}
          </ContactButton>
        </div>

        {/* Mobile Menu Button - moved to far right */}
        <div className="flex items-center gap-2 md:hidden ml-auto">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-action/10 hover:text-action hover:border-action/30"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden border-t border-border bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-xl">
          <div className="px-4 py-5">
            <div className="rounded-xl border border-border bg-surface-raised shadow-lg overflow-hidden">
              <nav className="flex flex-col divide-y divide-border">
                {SITE_NAV_ITEMS.map((item) => {
                  const isHashLink = item.href.startsWith('#');
                  
                  let isActive = false;
                  if (isHashLink) {
                    isActive = activeSection === item.href.slice(1);
                  } else {
                    isActive = pathname === item.href;
                  }
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex h-12 items-center justify-between px-4 text-sm font-semibold transition-colors hover:bg-action/10 hover:text-action ${isActive ? "bg-action/10 text-action" : "text-foreground"}`}
                      onClick={isHashLink ? (e) => {
                        handleNavClick(item.href, e);
                        setMobileMenuOpen(false);
                      } : () => setMobileMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="mt-4 grid gap-3">
              <ContactButton
                size="lg"
                className={`${ctaStyles.primary} h-11 w-full text-sm font-semibold`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {SITE_CTA_LABELS.callback}
              </ContactButton>
              <SocialIcons className="flex justify-center gap-5" iconClassName="h-4 w-4" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
