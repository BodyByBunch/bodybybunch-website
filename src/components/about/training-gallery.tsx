'use client';

import Masonry from '@/components/ui/Masonry';
import { CTASection } from '@/components/cta/cta-section';
import { motion } from 'framer-motion';

const trainingImages = [
  {
    id: '1',
    img: '/images/training/IMG_0488.jpeg',
    url: '/images/training/IMG_0488.jpeg',
    height: 400
  },
  {
    id: '2',
    img: '/images/training/IMG_0485.jpeg',
    url: '/images/training/IMG_0485.jpeg',
    height: 350
  },
  {
    id: '3',
    img: '/images/training/IMG_0483.jpeg',
    url: '/images/training/IMG_0483.jpeg',
    height: 450
  },
  {
    id: '4',
    img: '/images/training/IMG_0481.jpeg',
    url: '/images/training/IMG_0481.jpeg',
    height: 380
  },
  {
    id: '5',
    img: '/images/training/IMG_0480.jpeg',
    url: '/images/training/IMG_0480.jpeg',
    height: 420
  },
  {
    id: '6',
    img: '/images/training/IMG_0478.jpeg',
    url: '/images/training/IMG_0478.jpeg',
    height: 360
  },
  {
    id: '7',
    img: '/images/training/IMG_0477.jpeg',
    url: '/images/training/IMG_0477.jpeg',
    height: 390
  },
  {
    id: '8',
    img: '/images/training/IMG_0476.jpeg',
    url: '/images/training/IMG_0476.jpeg',
    height: 410
  },
  {
    id: '9',
    img: '/images/training/IMG_0473.jpeg',
    url: '/images/training/IMG_0473.jpeg',
    height: 370
  },
  {
    id: '10',
    img: '/images/training/IMG_0469.jpeg',
    url: '/images/training/IMG_0469.jpeg',
    height: 400
  },
  {
    id: '11',
    img: '/images/training/bodybybunch-main11-300x195.jpg',
    url: '/images/training/bodybybunch-main11-300x195.jpg',
    height: 300
  },
  {
    id: '12',
    img: '/images/training/bodybybunch-main9-300x195.jpg',
    url: '/images/training/bodybybunch-main9-300x195.jpg',
    height: 320
  }
];

export function TrainingGallery() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Transform Your Body, Transform Your Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the results of our personalized training programs. Every client's journey is unique, 
            and every transformation is celebrated.
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          <Masonry
            items={trainingImages}
            ease="power3.out"
            duration={0.8}
            stagger={0.1}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={1.05}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </div>
      
      {/* Use the CTA Section component */}
      <CTASection />
    </section>
  );
} 