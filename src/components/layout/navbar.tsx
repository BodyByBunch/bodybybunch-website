"use client"

import { useState, useEffect } from "react";
import { HeaderLogo } from "@/components/ui/logo"
import { BrandName } from "@/components/ui/brand-name"
import { Button } from "@/components/ui/button"
import { CalendlyButton, SocialIcons } from "@/components/ui"
import { ModeToggle } from "@/components/mode-toggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ScrollLink } from "@/components/ui/scroll-link";
import { Menu, X, Calendar, Phone } from "lucide-react"
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { smoothScrollTo } from "@/lib/smoothScroll";

export function Navbar() {
  const activeSection = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#pricing", label: "Plans + Pricing" },
    { href: "/testimonials", label: "Client Testimonials" },
    { href: "#faqs", label: "FAQs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="w-full max-w-none flex h-16 items-center px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 ml-8">
          <HeaderLogo />
          <BrandName variant="sporty" format="camelCase" className="hidden sm:block" />
        </div>

        {/* Navigation - Centered */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6">
          {navItems.map((item) => {
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
                className={`hover:!bg-brand-sky/10 hover:!text-brand-sky focus:!bg-brand-sky/10 focus:!text-brand-sky ${isActive ? "bg-brand-sky/10 text-brand-sky" : ""}`}
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
          <CalendlyButton
            calendlyUrl="https://calendly.com/your-calendly-url"
            variant="default"
            size="sm"
            className="bg-brand-sky hover:bg-primary text-white"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Schedule
          </CalendlyButton>
        </div>

        {/* Mobile Menu Button - moved to far right */}
        <div className="flex items-center gap-2 md:hidden ml-auto">
          <SocialIcons className="flex space-x-2" iconClassName="h-4 w-4" />
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-brand-sky/10 hover:text-brand-sky hover:border-brand-sky/30"
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
        <div className="absolute top-full left-0 right-0 md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-lg">
          <div className="container py-4">
            <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
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
                  size="default"
                  asChild
                  className={`w-full justify-start h-12 text-base hover:!bg-brand-sky/10 hover:!text-brand-sky focus:!bg-brand-sky/10 focus:!text-brand-sky ${isActive ? "bg-brand-sky/10 text-brand-sky" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link 
                    href={item.href}
                    onClick={isHashLink ? (e) => {
                      handleNavClick(item.href, e);
                      setMobileMenuOpen(false);
                    } : undefined}
                  >
                    {item.label}
                  </Link>
                </Button>
              );
            })}

            </nav>
          </div>
        </div>
      )}
    </header>
  )
}