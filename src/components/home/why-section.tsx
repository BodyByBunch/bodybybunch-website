'use client';

import Image from 'next/image';
import { ContactButton } from '@/components/ui/contact-button';
import { Button } from '@/components/ui/button';
import { SITE_CTA_LABELS } from '@/data/site';
import { WHY_POINTS } from '@/data/marketing';
import { ctaStyles, headingStyles, mediaStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type WhyPoint = (typeof WHY_POINTS)[number];

function WhyRow({ point }: { point: WhyPoint }) {
  const reverse = point.align === 'right';

  return (
    <div className={cn('flex flex-col items-center gap-12', reverse ? 'md:flex-row-reverse' : 'md:flex-row')}>
      <div className="flex-shrink-0">
        <div className={cn('w-64 h-64 rounded-xl flex items-center justify-center relative overflow-hidden', mediaStyles.placeholder)}>
          <Image
            src={point.image}
            alt={point.alt}
            fill
            sizes="256px"
            className="object-cover"
          />
          <div className={cn('absolute inset-0 rounded-xl', mediaStyles.overlay)} />
        </div>
      </div>
      <div className={cn('text-center flex-1 max-w-lg', reverse ? 'md:text-right' : 'md:text-left')}>
        {!reverse ? <div className="w-8 h-1 bg-proof mb-3 mx-auto md:mx-0" /> : null}
        <h3 className="text-2xl font-bold text-foreground mb-4">{point.title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">{point.description}</p>
      </div>
    </div>
  );
}

export function WhySection() {
  return (
    <section id="why" className={sectionStyles.default}>
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="space-y-2 mb-6">
            <div className={headingStyles.rule}></div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Body By Bunch?
            </h2>
            <div className={headingStyles.rule}></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every fitness journey is unique. Here&apos;s why clients choose our
            personalized approach over generic programs and restrictive meal
            plans.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {WHY_POINTS.map((point) => (
            <WhyRow key={point.title} point={point} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-6">
            Ready to experience a truly personalized approach to fitness?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactButton
              size="default"
              className={ctaStyles.primary}
            >
              {SITE_CTA_LABELS.callback}
            </ContactButton>
            <Link href="#services">
              <Button
                variant="outline"
                size="default"
                className={ctaStyles.outline}
              >
                Learn More About Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
