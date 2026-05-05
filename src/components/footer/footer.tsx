import { MapPin, Phone } from 'lucide-react';
import { FooterLogo } from '@/components/ui/logo';
import { CallButton, SocialIcons } from '@/components/ui';
import {
  FOOTER_LEGAL_LINKS,
  FOOTER_LINK_GROUPS,
  SITE_CONTACT,
  SITE_CTA_LABELS,
} from '@/data/site';
import { ctaStyles } from '@/lib/design';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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
                <div className="flex items-center justify-center sm:justify-start text-proof">
                  <Phone className="mr-2 h-4 w-4" />
                  <a href={SITE_CONTACT.phoneHref} className="text-sm font-medium hover:text-action transition-colors">
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span className="text-sm">{SITE_CONTACT.location}</span>
                </div>
              </div>
              
              {/* Social Links */}
              <SocialIcons className="flex justify-center sm:justify-start space-x-4" />
            </div>

            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title} className="text-center sm:text-left">
                <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {group.links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-action transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Get Started */}
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-foreground">Get Started</h3>
              <div className="mt-6 space-y-4">
                <CallButton
                  variant="default"
                  className={cn('w-full', ctaStyles.primary)}
                >
                  {SITE_CTA_LABELS.callback}
                </CallButton>
                {/* <Link href="/contact">
                  <button className="w-full px-4 py-2 text-sm border border-proof text-proof hover:bg-proof hover:text-brand transition-colors rounded-md">
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
                {FOOTER_LEGAL_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-xs text-muted-foreground hover:text-action transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
