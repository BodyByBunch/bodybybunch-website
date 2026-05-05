'use client';

import { CallButton } from '@/components/ui/call-button';
import { SITE_CTA_LABELS } from '@/data/site';
import { ctaStyles, headingStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';
import { Phone, Calendar } from 'lucide-react';

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
          <CallButton
            size="default"
            className={cn('px-8 py-4 border-0', ctaStyles.primary)}
          >
            <Calendar className="mr-2 h-5 w-5" />
            {SITE_CTA_LABELS.consultation}
          </CallButton>
          <CallButton
            variant="outline"
            size="default"
            className={cn('px-8 py-4', ctaStyles.proof)}
          >
            <Phone className="mr-2 h-5 w-5" />
            {SITE_CTA_LABELS.callback}
          </CallButton>
        </div>
      </div>
    </section>
  );
} 
