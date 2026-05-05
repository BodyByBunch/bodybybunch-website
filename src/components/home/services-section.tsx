'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BarChart3, Check, ClipboardList, MessageCircle, Utensils } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ContactButton } from '@/components/ui/contact-button';
import { SERVICES } from '@/data/marketing';
import { SITE_CTA_LABELS } from '@/data/site';
import { ctaStyles, headingStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';

type Service = (typeof SERVICES)[number];

const serviceIcons = {
  'Full Program': ClipboardList,
  'Nutritional Coaching': Utensils,
  'Daily Accountability': MessageCircle,
  'Weekly Check-ins': BarChart3,
} as const;

function ServicePillar({ service }: { service: Service }) {
  const Icon = serviceIcons[service.title];

  return (
    <article className="group rounded-lg border border-section-strong-foreground/10 bg-section-strong-foreground/[0.03] p-4 transition-colors hover:border-action/50 hover:bg-section-strong-foreground/[0.06] sm:p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-action/10 text-action">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-proof">
            {service.outcome}
          </p>
          <h3 className="mt-1 text-xl font-bold leading-tight text-section-strong-foreground">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-section-strong-foreground/70">
            {service.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.includes.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 rounded-md border border-section-strong-foreground/10 px-2.5 py-1 text-xs font-semibold text-section-strong-foreground/75"
              >
                <Check className="h-3 w-3 text-action" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  const [primaryService, ...supportingServices] = SERVICES;

  return (
    <section id="services" className={sectionStyles.strong}>
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className={cn(headingStyles.strongSectionTitle, 'mb-4')}>
            Fitness. Nutrition. Accountability.
          </h2>
          <p className={headingStyles.strongSectionLead}>
            One coaching system built around training structure, nutrition clarity, and consistent support.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
          <article className="overflow-hidden rounded-lg border border-action/40 bg-surface-raised text-foreground shadow-2xl shadow-action/10">
            <div className="relative min-h-[280px] bg-section-strong sm:min-h-[380px]">
              <Image
                src={primaryService.image}
                alt={primaryService.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-section-strong via-section-strong/25 to-transparent" />
              <div className="absolute left-4 top-4 rounded-md bg-action px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-action-foreground">
                Best fit for transformation
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-proof">
                  {primaryService.outcome}
                </p>
                <h3 className="mt-2 text-3xl font-bold leading-tight text-section-strong-foreground sm:text-4xl">
                  {primaryService.title}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                {primaryService.description}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {primaryService.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-md bg-muted/45 px-3 py-2 text-sm font-semibold text-foreground">
                    <Check className="h-4 w-4 text-action" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ContactButton className={cn('sm:min-w-48', ctaStyles.primary)}>
                  {SITE_CTA_LABELS.callback}
                </ContactButton>
                <Button variant="outline" className={ctaStyles.outline} asChild>
                  <Link href="#pricing">Compare Plans</Link>
                </Button>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {supportingServices.map((service) => (
              <ServicePillar key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
