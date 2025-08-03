'use client';

import { transformationItems } from '@/data/testimonials';
import Masonry from '@/components/ui/Masonry';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Client Transformations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible results our clients have achieved through personalized training, 
            nutrition coaching, and consistent accountability.
          </p>
        </motion.div>

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
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Proven Results That Speak for Themselves
          </h3>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
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
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="text-3xl font-bold text-brand-sky mb-2">500+</div>
              <p className="text-lg font-semibold text-foreground">Successful Transformations</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                <div className="text-3xl font-bold text-brand-orange">5</div>
                <Star className="h-6 w-6 fill-brand-orange text-brand-orange" />
              </div>
              <p className="text-lg font-semibold text-foreground">Average Client Rating</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="text-3xl font-bold text-brand-orange-light mb-2">95%</div>
              <p className="text-lg font-semibold text-foreground">Client Success Rate</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}