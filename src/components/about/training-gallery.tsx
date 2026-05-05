'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, Dumbbell } from 'lucide-react';

import { CTASection } from '@/components/cta/cta-section';
import { Button } from '@/components/ui/button';
import { headingStyles, sectionStyles } from '@/lib/design';

const trainingImages = [
  '/images/training/IMG_0560.jpeg',
  '/images/training/IMG_0561.jpeg',
  '/images/training/IMG_0562.jpeg',
  '/images/training/IMG_0563.jpeg',
  '/images/training/IMG_0564.jpeg',
  '/images/training/IMG_0565.jpeg',
  '/images/training/IMG_0566.jpeg',
  '/images/training/IMG_0567.jpeg',
  '/images/training/IMG_0568.jpeg',
  '/images/training/IMG_0569.jpeg',
  '/images/training/IMG_0570.jpeg',
  '/images/training/IMG_0571.jpeg',
  '/images/training/IMG_0572.jpeg',
  '/images/training/IMG_0573.jpeg',
  '/images/training/IMG_0574.jpeg',
  '/images/training/IMG_0575.jpeg',
  '/images/training/IMG_0576.jpeg',
  '/images/training/IMG_0577.jpeg',
  '/images/training/IMG_0488.jpeg',
  '/images/training/IMG_0485.jpeg',
  '/images/training/IMG_0483.jpeg',
  '/images/training/IMG_0481.jpeg',
  '/images/training/IMG_0480.jpeg',
  '/images/training/IMG_0478.jpeg',
] as const;

const INITIAL_COUNT = 9;

export function TrainingGallery() {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? trainingImages : trainingImages.slice(0, INITIAL_COUNT);

  return (
    <>
      <section className={sectionStyles.muted}>
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-action/10 text-action">
                <Camera className="h-6 w-6" />
              </div>
            </div>
            <div className="space-y-2 mb-5">
              <div className={headingStyles.rule} />
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Training Environment
              </h2>
              <div className={headingStyles.rule} />
            </div>
            <p className="text-lg leading-8 text-muted-foreground">
              A look inside the coaching environment, client sessions, and the training culture behind Body By Bunch.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleImages.map((src, index) => (
              <article
                key={src}
                className="group overflow-hidden rounded-lg border border-border bg-surface-raised shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative min-h-[280px] bg-section-strong">
                  <Image
                    src={src}
                    alt={`Body By Bunch training environment ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-section-strong/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-section-strong-foreground">
                    <Dumbbell className="h-4 w-4 text-proof" />
                    <span className="text-xs font-bold uppercase tracking-[0.12em]">
                      Coaching in action
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {!showAll && trainingImages.length > INITIAL_COUNT ? (
            <div className="mt-10 text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                Showing {visibleImages.length} of {trainingImages.length} training photos
              </p>
              <Button type="button" variant="outline" onClick={() => setShowAll(true)}>
                View More Training Photos
              </Button>
            </div>
          ) : null}
        </div>
      </section>

      <CTASection />
    </>
  );
}
