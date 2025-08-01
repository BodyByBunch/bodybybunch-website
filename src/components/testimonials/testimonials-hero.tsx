'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { featuredTestimonials } from '@/data/testimonials';

export function TestimonialsHero() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Client Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations from real people. Discover how Body By Bunch has helped clients 
            achieve their fitness goals and build lasting healthy habits.
          </p>
        </div>

        {/* Featured Testimonials - Row Layout */}
        <div className="max-w-5xl mx-auto space-y-8 mb-12">
          {featuredTestimonials.slice(0, 6).map((testimonial, index) => (
            <Card key={testimonial.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                
                <div className={`grid lg:grid-cols-2 gap-0 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Client Photo */}
                  
                  <div className={`relative h-64 lg:h-80 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-contain object-center rounded-lg"
                    />
                    
                    
                    {/* Achievement badge on image */}
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-teal-600 text-white text-sm px-3 py-1">
                        {testimonial.achievement}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 lg:p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    {/* Quote Icon */}
                    <Quote className="h-8 w-8 text-teal-600 mb-4 opacity-60" />
                    
                    {/* Quote Text */}
                    <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6 font-medium">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="space-y-3">
                      <div>
                        <div className="font-bold text-foreground text-xl mb-1">{testimonial.name}</div>
                        <p className="text-base text-muted-foreground">
                          {testimonial.program}
                          {testimonial.timeFrame && ` • ${testimonial.timeFrame}`}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">
                          Verified Client Review
                        </span>
                      </div>

                      {/* Read More Button */}
                      <button 
                        className="group inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors text-sm"
                        onClick={() => {
                          // You can implement a modal or expand functionality here
                          console.log('Read full testimonial:', testimonial.fullText);
                        }}
                      >
                        Read Full Story
                        <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}