'use client';

import Image from 'next/image';
import { ABOUT_STORY_ROWS } from '@/data/marketing';
import { headingStyles, mediaStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';

type AboutStoryRow = (typeof ABOUT_STORY_ROWS)[number];

function StoryRow({ row }: { row: AboutStoryRow }) {
  const reverse = row.align === 'right';

  return (
    <div className={cn('flex flex-col items-center gap-12', reverse ? 'md:flex-row-reverse' : 'md:flex-row')}>
      <div className="flex-shrink-0">
        <div className={cn('w-64 h-64 rounded-xl flex items-center justify-center relative overflow-hidden', mediaStyles.placeholder)}>
          <Image
            src={row.image}
            alt={row.alt}
            width={256}
            height={256}
            className="object-cover rounded-xl"
            loading="lazy"
          />
          <div className={cn('absolute inset-0 rounded-xl', mediaStyles.overlay)} />
        </div>
      </div>
      <div className="text-center md:text-left flex-1 max-w-lg">
        {!reverse ? <div className="w-8 h-1 bg-proof mb-3 mx-auto md:mx-0" /> : null}
        <h3 className="text-2xl font-bold text-foreground mb-4">{row.title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">{row.description}</p>
      </div>
    </div>
  );
}

export function AboutStory() {
  return (
    <section className={sectionStyles.muted}>
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="space-y-2 mb-6">
            <div className={headingStyles.rule}></div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              My Story &amp; Mission
            </h2>
            <div className={headingStyles.rule}></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the journey that led to BodybyBunch and my commitment to
            helping others achieve their fitness and nutrition goals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {ABOUT_STORY_ROWS.map((row) => (
            <StoryRow key={row.title} row={row} />
          ))}
        </div>
      </div>
    </section>
  );
}
