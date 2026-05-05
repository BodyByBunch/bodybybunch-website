'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Quote, Star, X } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { featuredTestimonials, type FeaturedTestimonial } from '@/data/testimonials';
import { ctaStyles, headingStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';

const proofStats = [
  { value: '5', label: 'detailed client stories' },
  { value: '21', label: 'transformation photos' },
  { value: 'Online + local', label: 'coaching formats' },
] as const;

function StoryCard({
  testimonial,
  index,
  onRead,
}: {
  testimonial: FeaturedTestimonial;
  index: number;
  onRead: (testimonial: FeaturedTestimonial) => void;
}) {
  const featured = index === 0;

  return (
    <article
      className={cn(
        'group overflow-hidden rounded-lg border bg-surface-raised text-foreground shadow-sm transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 hover:shadow-xl',
        featured ? 'border-action/50 lg:col-span-2' : 'border-border hover:border-action/40'
      )}
    >
      <div className={cn('grid h-full', featured && 'lg:grid-cols-[0.92fr_1.08fr]')}>
        <div
          className={cn(
            'relative bg-section-strong',
            featured ? 'min-h-[340px] lg:min-h-full' : 'min-h-[260px]'
          )}
        >
          <Image
            src={testimonial.image}
            alt={`${testimonial.name} client result`}
            fill
            sizes={featured ? '(max-width: 1024px) 100vw, 40vw' : '(max-width: 1024px) 100vw, 33vw'}
            className="object-contain"
          />
          <div className="absolute inset-0 bg-media-overlay/10" />
          <Badge className="absolute left-4 top-4 bg-section-strong/85 text-section-strong-foreground backdrop-blur">
            {testimonial.achievement}
          </Badge>
        </div>

        <div className="flex flex-col p-5 sm:p-6 lg:p-7">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-action/10 text-action">
            <Quote className="h-5 w-5" />
          </div>

          <blockquote className={cn('font-bold leading-tight text-foreground', featured ? 'text-2xl sm:text-3xl' : 'text-xl')}>
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <div className="mt-5 space-y-2">
            <div className="text-lg font-bold text-foreground">{testimonial.name}</div>
            <p className="text-sm leading-6 text-muted-foreground">
              {testimonial.program}
              {testimonial.timeFrame ? ` / ${testimonial.timeFrame}` : ''}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, ratingIndex) => (
                  <Star key={ratingIndex} className="h-4 w-4 fill-proof text-proof" />
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Verified review
              </span>
            </div>
          </div>

          <div className="mt-auto pt-6">
            <Button
              type="button"
              variant="outline"
              className={cn('w-full justify-between', ctaStyles.outline)}
              onClick={() => onRead(testimonial)}
            >
              Read Full Story
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

function StoryModal({
  testimonial,
  onClose,
}: {
  testimonial: FeaturedTestimonial | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!testimonial) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [testimonial, onClose]);

  if (!testimonial) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end bg-section-strong/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="testimonial-story-title"
      onMouseDown={onClose}
    >
      <div
        className="max-h-[92vh] w-full overflow-hidden rounded-t-lg border border-border bg-background shadow-2xl sm:mx-auto sm:max-w-5xl sm:rounded-lg"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-proof">
              Full client story
            </p>
            <h2 id="testimonial-story-title" className="mt-1 text-xl font-bold text-foreground">
              {testimonial.name}
            </h2>
          </div>
          <Button type="button" variant="ghost" size="icon" onClick={onClose} aria-label="Close story">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid max-h-[calc(92vh-73px)] overflow-y-auto lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[320px] bg-section-strong lg:min-h-full">
            <Image
              src={testimonial.image}
              alt={`${testimonial.name} client result`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain"
            />
          </div>

          <div className="p-5 sm:p-7 lg:p-8">
            <Badge className="mb-5 bg-action text-action-foreground">
              {testimonial.achievement}
            </Badge>
            <blockquote className="text-2xl font-bold leading-tight text-foreground">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {testimonial.program}
              {testimonial.timeFrame ? ` / ${testimonial.timeFrame}` : ''}
            </p>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              {testimonial.fullText.split('\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsHero() {
  const [selectedStory, setSelectedStory] = useState<FeaturedTestimonial | null>(null);

  return (
    <section className={sectionStyles.default}>
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="space-y-2 mb-5">
            <div className={headingStyles.rule} />
            <h1 className="text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              Client Success Stories
            </h1>
            <div className={headingStyles.rule} />
          </div>
          <p className="text-lg leading-8 text-muted-foreground">
            Real transformations, full client context, and photo proof from people who used Body By Bunch coaching to build lasting habits.
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-3 border-y border-border py-4 sm:grid-cols-3">
          {proofStats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-2xl font-bold text-action">{stat.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {featuredTestimonials.map((testimonial, index) => (
            <StoryCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              onRead={setSelectedStory}
            />
          ))}
        </div>
      </div>

      <StoryModal testimonial={selectedStory} onClose={() => setSelectedStory(null)} />
    </section>
  );
}
