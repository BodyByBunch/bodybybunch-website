'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ContactButton } from '@/components/ui/contact-button';
import { SITE_CTA_LABELS } from '@/data/site';
import { ctaStyles, headingStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className={sectionStyles.strong}>
      <div className="container mx-auto px-4 text-center">
        <div>
          <div className={cn(headingStyles.rule, 'mb-4')}></div>
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-section-strong-foreground/75">
            Join hundreds of clients who have transformed their lives with Body By Bunch. 
            Your success story could be next!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <ContactButton
            size="default"
            className={cn('px-8 py-4 border-0', ctaStyles.primary)}
          >
            {SITE_CTA_LABELS.callback}
          </ContactButton>
          <Button
            variant="outline"
            size="default"
            className={cn('px-8 py-4', ctaStyles.proof)}
            asChild
          >
            <Link href="/#pricing">
              View Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 
