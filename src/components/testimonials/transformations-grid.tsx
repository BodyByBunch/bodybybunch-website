'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, Trophy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { transformationItems } from '@/data/testimonials';
import { ctaStyles, headingStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';

const INITIAL_COUNT = 12;

export function TransformationsGrid() {
  const [showAllItems, setShowAllItems] = useState(false);
  const displayItems = showAllItems ? transformationItems : transformationItems.slice(0, INITIAL_COUNT);

  return (
    <section className={cn(sectionStyles.strong, 'border-y border-section-strong-foreground/10')}>
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-action/10 text-action">
              <Camera className="h-6 w-6" />
            </div>
          </div>
          <h2 className={cn(headingStyles.strongSectionTitle, 'mb-4')}>
            Transformation Archive
          </h2>
          <p className={headingStyles.strongSectionLead}>
            A static gallery of client progress photos, kept simple so the results stay the focus.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayItems.map((item, index) => (
            <article
              key={item.id}
              className={cn(
                'group overflow-hidden rounded-lg border border-section-strong-foreground/10 bg-surface-raised text-foreground shadow-lg transition-transform duration-300 hover:-translate-y-1',
                index % 5 === 0 && 'lg:row-span-2'
              )}
            >
              <div className={cn('relative bg-section-strong', index % 5 === 0 ? 'min-h-[420px]' : 'min-h-[280px]')}>
                <Image
                  src={item.img}
                  alt={item.name ?? 'Client transformation'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-section-strong via-section-strong/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex items-center gap-2 text-section-strong-foreground">
                    <Trophy className="h-4 w-4 text-proof" />
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em]">
                      {item.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-section-strong-foreground/75">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!showAllItems && transformationItems.length > INITIAL_COUNT ? (
          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-section-strong-foreground/65">
              Showing {displayItems.length} of {transformationItems.length} transformations
            </p>
            <Button type="button" className={ctaStyles.primary} onClick={() => setShowAllItems(true)}>
              View All Transformations
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
