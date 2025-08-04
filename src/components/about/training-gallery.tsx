'use client';

import Masonry from '@/components/ui/Masonry';
import { CTASection } from '@/components/cta/cta-section';

const trainingImages = [
  {
    id: '1',
    img: '/images/training/IMG_0560.jpeg',
    url: '/images/training/IMG_0560.jpeg',
    height: 400
  },
  {
    id: '2',
    img: '/images/training/IMG_0561.jpeg',
    url: '/images/training/IMG_0561.jpeg',
    height: 420
  },
  {
    id: '3',
    img: '/images/training/IMG_0562.jpeg',
    url: '/images/training/IMG_0562.jpeg',
    height: 380
  },
  {
    id: '4',
    img: '/images/training/IMG_0563.jpeg',
    url: '/images/training/IMG_0563.jpeg',
    height: 450
  },
  {
    id: '5',
    img: '/images/training/IMG_0564.jpeg',
    url: '/images/training/IMG_0564.jpeg',
    height: 410
  },
  {
    id: '6',
    img: '/images/training/IMG_0565.jpeg',
    url: '/images/training/IMG_0565.jpeg',
    height: 400
  },
  {
    id: '7',
    img: '/images/training/IMG_0566.jpeg',
    url: '/images/training/IMG_0566.jpeg',
    height: 360
  },
  {
    id: '8',
    img: '/images/training/IMG_0567.jpeg',
    url: '/images/training/IMG_0567.jpeg',
    height: 390
  },
  {
    id: '9',
    img: '/images/training/IMG_0568.jpeg',
    url: '/images/training/IMG_0568.jpeg',
    height: 420
  },
  {
    id: '10',
    img: '/images/training/IMG_0569.jpeg',
    url: '/images/training/IMG_0569.jpeg',
    height: 400
  },
  {
    id: '11',
    img: '/images/training/IMG_0570.jpeg',
    url: '/images/training/IMG_0570.jpeg',
    height: 370
  },
  {
    id: '12',
    img: '/images/training/IMG_0571.jpeg',
    url: '/images/training/IMG_0571.jpeg',
    height: 430
  },
  {
    id: '13',
    img: '/images/training/IMG_0572.jpeg',
    url: '/images/training/IMG_0572.jpeg',
    height: 350
  },
  {
    id: '14',
    img: '/images/training/IMG_0573.jpeg',
    url: '/images/training/IMG_0573.jpeg',
    height: 440
  },
  {
    id: '15',
    img: '/images/training/IMG_0574.jpeg',
    url: '/images/training/IMG_0574.jpeg',
    height: 460
  },
  {
    id: '16',
    img: '/images/training/IMG_0575.jpeg',
    url: '/images/training/IMG_0575.jpeg',
    height: 380
  },
  {
    id: '17',
    img: '/images/training/IMG_0576.jpeg',
    url: '/images/training/IMG_0576.jpeg',
    height: 360
  },
  {
    id: '18',
    img: '/images/training/IMG_0577.jpeg',
    url: '/images/training/IMG_0577.jpeg',
    height: 400
  },
  {
    id: '19',
    img: '/images/training/IMG_0488.jpeg',
    url: '/images/training/IMG_0488.jpeg',
    height: 400
  },
  {
    id: '20',
    img: '/images/training/IMG_0485.jpeg',
    url: '/images/training/IMG_0485.jpeg',
    height: 350
  },
  {
    id: '21',
    img: '/images/training/IMG_0483.jpeg',
    url: '/images/training/IMG_0483.jpeg',
    height: 450
  },
  {
    id: '22',
    img: '/images/training/IMG_0481.jpeg',
    url: '/images/training/IMG_0481.jpeg',
    height: 380
  },
  {
    id: '23',
    img: '/images/training/IMG_0480.jpeg',
    url: '/images/training/IMG_0480.jpeg',
    height: 420
  },
  {
    id: '24',
    img: '/images/training/IMG_0478.jpeg',
    url: '/images/training/IMG_0478.jpeg',
    height: 360
  },
  {
    id: '25',
    img: '/images/training/IMG_0477.jpeg',
    url: '/images/training/IMG_0477.jpeg',
    height: 390
  },
  {
    id: '26',
    img: '/images/training/IMG_0476.jpeg',
    url: '/images/training/IMG_0476.jpeg',
    height: 410
  },
  {
    id: '27',
    img: '/images/training/IMG_0473.jpeg',
    url: '/images/training/IMG_0473.jpeg',
    height: 370
  }
];

export function TrainingGallery() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Transform Your Body, Transform Your Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the results of our personalized training programs. Every client's journey is unique, 
            and every transformation is celebrated.
          </p>
        </div>
        
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
