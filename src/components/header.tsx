import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { HeaderLogo } from '@/components/ui/logo';
import { BrandName } from '@/components/ui/brand-name';

export function Header() {
  return (
    <header className="bg-background border-b border-border py-4 px-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <HeaderLogo />
          <BrandName variant="sporty" format="camelCase" className="hidden sm:block" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors cursor-pointer">
            Plans + Pricing
          </a>
          <Link href="/testimonials" className="text-foreground hover:text-primary transition-colors">
            Client Testimonials
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Phone Number & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:text-secondary"
            asChild
          >
            <a href="tel:5128184281">
              <Phone className="mr-2 h-4 w-4" />
              (512) 818-4281
            </a>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}