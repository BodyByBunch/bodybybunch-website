'use client';

import { HeroImageCarousel } from '@/components/shared/hero-image-carousel';
import { CallButton } from '@/components/ui/call-button';
import { ABOUT_HERO_IMAGES, SITE_CTA_LABELS } from '@/data/site';
import { ctaStyles, sectionStyles } from '@/lib/design';
import { Calendar, Phone } from 'lucide-react';

export function AboutHero() {
  return (
    <section className={sectionStyles.default}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Image Carousel - Order 1 on mobile (top), Order 2 on desktop (right) */}
            <div className="relative order-1 lg:order-2 w-full overflow-hidden">
              <HeroImageCarousel 
                images={[...ABOUT_HERO_IMAGES]}
                showBadges={false}
                className="relative w-full h-[500px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl"
              />
              {/* Credentials badge */}
              <div className="absolute bottom-4 left-4 bg-action text-action-foreground px-6 py-3 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">ISSA Certified</div>
                <div className="text-xs opacity-90">Personal Trainer & PN1 Nutritionist</div>
                <div className="text-xs opacity-90 mt-1">Weight Loss Specialist</div>
              </div>
            </div>

            {/* Content - Order 2 on mobile (below image), Order 1 on desktop (left) */}
            <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Meet Lane Bunch
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  My passion revolves around people. I strive every day to help others become the best version of themselves. 
                  Fitness and nutrition aren&apos;t just a hobby for me. <strong className="text-action">It is me. It&apos;s who I am.</strong>
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Hey there! My name is Lane Bunch and I am the founder and owner of BodybyBunch. BodybyBunch is a personal 
                  training fitness company that offers in-person and online coaching. I train in-person clients at my 
                  private gym in San Antonio, Tx, and I train online clients nationwide.
                </p>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I am a &quot;forever student,&quot; constantly learning and growing in the fitness/nutrition world to be the best 
                  trainer and coach for my clients. As long as you are communicating with me and being consistent and 
                  compliant to the program we design to the best of your ability, the results will follow.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <CallButton
                  size="lg"
                  className={ctaStyles.primary}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {SITE_CTA_LABELS.consultation}
                </CallButton>
                <CallButton
                  variant="outline"
                  size="lg"
                  className={ctaStyles.outline}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {SITE_CTA_LABELS.callback}
                </CallButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
