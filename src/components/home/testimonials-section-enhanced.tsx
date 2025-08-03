'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { TestimonialsSlider } from './testimonials-slider';
import { testimonialsData } from '@/data';
import { motion } from 'framer-motion';

interface TestimonialsSectionEnhancedProps {
  layout?: 'cards' | 'circular' | 'rolling';
}

export function TestimonialsSectionEnhanced({ 
  layout = 'cards' 
}: TestimonialsSectionEnhancedProps) {

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real people who have transformed their lives with Body By Bunch.
          </p>
        </motion.div>

        {/* Render based on layout prop */}
        {layout === 'cards' && (
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
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
              </motion.div>
            ))}
          </motion.div>
        )}

        {(layout === 'circular' || layout === 'rolling') && (
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TestimonialsSlider 
              variant={layout} 
              testimonials={testimonialsData}
            />
          </motion.div>
        )}

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/testimonials">
            <Button variant="outline" size="lg" className="border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white">
              View All Success Stories
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}