import { Phone, Mail, MapPin } from 'lucide-react';
import { FooterLogo } from '@/components/ui/logo';
import { CalendlyButton, SocialIcons } from '@/components/ui';
import Link from 'next/link';

const serviceLinks = [
  { name: "Personal Training", href: "#pricing" },
  { name: "Nutrition Coaching", href: "#pricing" },
  { name: "Full Program", href: "#pricing" },
  { name: "Daily Accountability", href: "#services" },
]

const aboutLinks = [
  { name: "About Lane", href: "/about" },
  { name: "Success Stories", href: "/testimonials" },
  { name: "Training Philosophy", href: "/about" },
  { name: "Credentials", href: "/about" },
]

const resourceLinks = [
  { name: "Fitness Tips", href: "#" },
  { name: "Nutrition Guidance", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Contact", href: "/contact" },
]



export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 py-12 md:py-16 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {/* Company Info */}
            <div className="space-y-6 text-center sm:text-left">
              <div className="flex justify-center sm:justify-start">
                <FooterLogo />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Body By Bunch</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  ISSA Certified Personal Trainer & PN1 Nutritionist. 
                  Transform your life with personalized fitness and nutrition coaching.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-center sm:justify-start text-brand-orange-light">
                  <Phone className="mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">(512) 818-4281</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span className="text-sm">San Antonio, TX</span>
                </div>
              </div>
              
              {/* Social Links */}
              <SocialIcons className="flex justify-center sm:justify-start space-x-4" />
            </div>

            {/* Services */}
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-foreground">Services</h3>
              <ul role="list" className="mt-6 space-y-4">
                {serviceLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-brand-orange transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-foreground">About</h3>
              <ul role="list" className="mt-6 space-y-4">
                {aboutLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-brand-orange transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Started */}
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-foreground">Get Started</h3>
              <div className="mt-6 space-y-4">
                <CalendlyButton
                  calendlyUrl="https://calendly.com/lanebunch-bodybybunch/30min"
                  variant="default"
                  className="w-full bg-brand-sky hover:bg-brand-sky/90 text-white dark:text-white"
                >
                  Schedule Consultation
                </CalendlyButton>
                {/* <Link href="/contact">
                  <button className="w-full px-4 py-2 text-sm border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors rounded-md">
                    Contact Me
                  </button>
                </Link> */}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-xs leading-5 text-muted-foreground">
                &copy; {new Date().getFullYear()} Lane Bunch | Body By Bunch. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-xs text-muted-foreground hover:text-brand-orange transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-xs text-muted-foreground hover:text-brand-orange transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}