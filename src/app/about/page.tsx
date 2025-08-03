
import type { Metadata } from 'next';
import { AboutHero, AboutStory, AboutCredentials } from '@/components/about';
import { TrainingGallery } from '@/components/about/training-gallery';

export const metadata: Metadata = {
  title: 'About Lane Bunch - NASM Certified Personal Trainer',
  description: 'Meet Lane Bunch, NASM Certified Personal Trainer and Nutrition Coach in San Antonio, TX. Learn about his fitness journey, certifications, and passion for helping clients transform their lives.',
  keywords: [
    'Lane Bunch',
    'NASM certified trainer',
    'personal trainer San Antonio',
    'fitness coach background',
    'trainer biography',
    'nutrition coach credentials'
  ],
  openGraph: {
    title: 'About Lane Bunch - NASM Certified Personal Trainer',
    description: 'Meet Lane Bunch, NASM Certified Personal Trainer and Nutrition Coach in San Antonio, TX. Learn about his fitness journey and passion for transformation.',
    url: '/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Lane Bunch - Personal Trainer',
      },
    ],
  },
  twitter: {
    title: 'About Lane Bunch - NASM Certified Personal Trainer',
    description: 'Meet Lane Bunch, NASM Certified Personal Trainer and Nutrition Coach in San Antonio, TX.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        <AboutHero />
        <AboutStory />
        <TrainingGallery />
      </main>
    </div>
  );
} 