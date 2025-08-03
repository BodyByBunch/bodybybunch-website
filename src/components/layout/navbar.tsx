"use client"

import { useState, useEffect } from "react";
import { HeaderLogo } from "@/components/ui/logo"
import { BrandName } from "@/components/ui/brand-name"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/ui/calendly-button"
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
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon"
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
        <div className="container py-3 md:hidden border-t border-border bg-background">
          <nav className="flex flex-col space-y-3">
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
                  className={`w-full justify-start hover:!bg-brand-sky/10 hover:!text-brand-sky focus:!bg-brand-sky/10 focus:!text-brand-sky ${isActive ? "bg-brand-sky/10 text-brand-sky" : ""}`}
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
            <CalendlyButton
              calendlyUrl="https://calendly.com/your-calendly-url"
              variant="default"
              className="w-full mt-2 bg-brand-sky hover:bg-primary text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Free Consultation
            </CalendlyButton>
          </nav>
        </div>
      )}
    </header>
  )
}