
import type { Metadata } from 'next';
import { TestimonialsHero, TransformationsGrid } from '@/components/testimonials';
import { CTASection } from '@/components/cta';

export const metadata: Metadata = {
  title: 'Client Success Stories & Transformations',
  description: 'See real transformation results from Body By Bunch clients. Read testimonials and view before/after photos of successful fitness journeys with Lane Bunch in San Antonio, TX.',
  keywords: [
    'fitness transformations',
    'client testimonials',
    'before after photos',
    'success stories',
    'weight loss results',
    'body transformation',
    'San Antonio fitness results',
    'personal training testimonials'
  ],
  openGraph: {
    title: 'Client Success Stories & Transformations',
    description: 'See real transformation results from Body By Bunch clients. Read testimonials and view before/after photos of successful fitness journeys.',
    url: '/testimonials',
    images: [
      {
        url: '/og-testimonials.jpg',
        width: 1200,
        height: 630,
        alt: 'Client Transformation Results',
      },
    ],
  },
  twitter: {
    title: 'Client Success Stories & Transformations',
    description: 'See real transformation results from Body By Bunch clients in San Antonio, TX.',
  },
  alternates: {
    canonical: '/testimonials',
  },
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <main>
        <TestimonialsHero />
        <TransformationsGrid />
        <CTASection />
      </main>
    </div>
  );
}
