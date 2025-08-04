'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { TestimonialsSlider } from './testimonials-slider';
import { testimonialsData } from '@/data';


interface TestimonialsSectionEnhancedProps {
  layout?: 'cards' | 'circular' | 'rolling';
}

export function TestimonialsSectionEnhanced({ 
  layout = 'cards' 
}: TestimonialsSectionEnhancedProps) {

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real people who have transformed their lives with Body By Bunch.
          </p>
        </div>

        {/* Render based on layout prop */}
        {layout === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            {testimonialsData.map((testimonial, index) => (
              <div key={testimonial.id}>
                <Card className="bg-slate-700 border-slate-600 text-white h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                        ))}
                      </div>
                    </div>
                    <Badge className="bg-brand-orange text-white hover:bg-brand-orange/80">
                      {testimonial.achievement}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}

        {(layout === 'circular' || layout === 'rolling') && (
          <div className="mb-12">
            <TestimonialsSlider 
              variant={layout} 
              testimonials={testimonialsData}
            />
          </div>
        )}

        <div className="text-center">
          <Link href="/testimonials">
            <Button variant="outline" size="lg" className="border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white">
              View All Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}