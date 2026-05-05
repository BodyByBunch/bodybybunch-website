'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Quote, Trophy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { featuredTestimonials, transformationItems } from '@/data/testimonials';
import { ctaStyles, headingStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';

const featuredStory = featuredTestimonials[2];
const proofItems = transformationItems.slice(0, 6);
const outcomeStats = [
  { value: '1% better', label: 'daily mindset' },
  { value: 'Custom', label: 'meal + training plan' },
  { value: 'Weekly', label: 'accountability' },
] as const;

export function TestimonialsSectionEnhanced() {
  return (
    <section id="testimonials" className={sectionStyles.strong}>
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className={cn(headingStyles.strongSectionTitle, 'mb-4')}>
            Client Success Stories
          </h2>
          <p className={headingStyles.strongSectionLead}>
            Real coaching proof from clients who built strength, confidence, and sustainable habits.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <article className="overflow-hidden rounded-lg border border-section-strong-foreground/10 bg-surface-raised text-foreground shadow-2xl">
            <div className="relative min-h-[320px] bg-section-strong sm:min-h-[420px] lg:min-h-[360px]">
              <Image
                src={featuredStory.image}
                alt={`${featuredStory.name} transformation`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
              <div className="absolute inset-0 bg-media-overlay/10" />
              <div className="absolute left-4 top-4 rounded-md bg-section-strong/85 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-section-strong-foreground backdrop-blur">
                Featured client
              </div>
            </div>

            <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-8">
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-action/10 text-action">
                  <Quote className="h-5 w-5" />
                </div>
                <p className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
                  &ldquo;{featuredStory.quote}&rdquo;
                </p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-proof">
                  {featuredStory.achievement}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {featuredStory.program}
                  {featuredStory.timeFrame ? ` / ${featuredStory.timeFrame}` : ''}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-border pt-5">
                {outcomeStats.map((stat) => (
                  <div key={stat.value}>
                    <div className="text-lg font-bold text-foreground">{stat.value}</div>
                    <div className="mt-1 text-[0.68rem] font-semibold uppercase leading-tight tracking-[0.1em] text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {proofItems.map((item, index) => (
              <Link
                key={item.id}
                href="/testimonials"
                className={cn(
                  'group relative min-h-[170px] overflow-hidden rounded-lg border border-section-strong-foreground/10 bg-surface-raised shadow-lg transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action',
                  index === 0 || index === 5 ? 'sm:min-h-[240px]' : 'sm:min-h-[190px]'
                )}
              >
                <Image
                  src={item.img}
                  alt={item.name ?? 'Client transformation'}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-section-strong via-section-strong/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <div className="flex items-center gap-2 text-section-strong-foreground">
                    <Trophy className="h-3.5 w-3.5 text-proof" />
                    <span className="text-xs font-bold uppercase tracking-[0.12em]">
                      {item.name}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-section-strong-foreground/75">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-section-strong-foreground/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="max-w-xl text-sm leading-6 text-section-strong-foreground/70">
            See more client photos, long-form stories, and the training context behind each result.
          </p>
          <Link href="/testimonials">
            <Button variant="outline" size="lg" className={ctaStyles.outline}>
              View All Success Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
