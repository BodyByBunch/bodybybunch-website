'use client';

import { transformationItems } from '@/data/testimonials';
import Masonry from '@/components/ui/Masonry';
import { Star } from 'lucide-react';

export function TransformationsGrid() {
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
        <div className="max-w-7xl mx-auto h-[800px] md:h-[1000px] lg:h-[1200px] xl:h-[1400px] relative mb-16">
          <Masonry
            items={transformationItems}
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

        {/* Success Stats Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Proven Results That Speak for Themselves
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
              <p className="text-lg font-semibold text-foreground">Successful Transformations</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                <div className="text-3xl font-bold text-orange-600">5</div>
                <Star className="h-6 w-6 fill-orange-600 text-orange-600" />
              </div>
              <p className="text-lg font-semibold text-foreground">Average Client Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">95%</div>
              <p className="text-lg font-semibold text-foreground">Client Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}