'use client';

import { transformationItems } from '@/data/testimonials';
import Masonry from '@/components/ui/Masonry';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export function TransformationsGrid() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAllItems, setShowAllItems] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Limit items on mobile to prevent layout issues unless user requests all items
  const displayItems = (isMobile && !showAllItems) ? transformationItems.slice(0, 12) : transformationItems;
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Client Transformations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible results our clients have achieved through personalized training, 
            nutrition coaching, and consistent accountability.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className={`${showAllItems ? 'max-h-none' : 'max-h-[600px] md:max-h-[800px] lg:max-h-none'} overflow-hidden`}>
            <Masonry
              items={displayItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>
          {isMobile && !showAllItems && transformationItems.length > 12 && (
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Showing {displayItems.length} of {transformationItems.length} transformations
              </p>
              <button 
                onClick={() => setShowAllItems(true)}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-brand-sky hover:bg-brand-sky/90 text-white px-6 py-2"
              >
                View All Transformations
              </button>
            </div>
          )}
        </div>

        {/* Success Stats Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Proven Results That Speak for Themselves
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-brand-sky mb-2">500+</div>
              <p className="text-lg font-semibold text-foreground">Successful Transformations</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                <div className="text-3xl font-bold text-brand-orange">5</div>
                <Star className="h-6 w-6 fill-brand-orange text-brand-orange" />
              </div>
              <p className="text-lg font-semibold text-foreground">Average Client Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-orange-light mb-2">95%</div>
              <p className="text-lg font-semibold text-foreground">Client Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
