'use client';

import { Button } from '@/components/ui/button';
import { CalendlyButton } from '@/components/ui/calendly-button';
import { Award, MapPin, Target, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSectionLight() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile/Tablet - Image on top, Desktop - Image on right */}
          <div className="relative order-1 lg:order-2 w-full">
            <div className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/sliderbg-2-bodybybunch.jpg"
                alt="Lane Bunch Personal Training"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Cards - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block absolute -top-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center border border-border">
                  <Target className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Clients Transformed</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center border border-border">
                  <MapPin className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">San Antonio, TX</p>
                  <p className="text-sm text-muted-foreground">Local & Online</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center border border-border">
                  <Heart className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">5+ Years</p>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Order 2 on mobile (below image), Order 1 on desktop (left side) */}
          <motion.div 
            className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tagline */}
            <div className="space-y-2">
              <p className="font-semibold tracking-wide uppercase text-sm text-brand-orange">
                NASM Certified Personal Trainer & Nutrition Coach
              </p>
              <div className="w-16 h-1 shadow-lg bg-brand-orange mx-auto lg:mx-0"></div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                <span className="text-foreground">Fitness.</span>
                <br />
                <span className="text-foreground">Nutrition.</span>
                <br />
                <span className="text-brand-sky">Accountability.</span>
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed max-w-lg font-medium text-muted-foreground mx-auto lg:mx-0">
                "My passion revolves around people. I strive every day to help others become the best version of themselves. 
                Fitness and nutrition aren't just a hobby for me. It is me. It's who I am."
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <CalendlyButton
                calendlyUrl="https://calendly.com/bodybybunch"
                size="lg"
                className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 bg-brand-sky text-white"
              >
                Get Started Today
              </CalendlyButton>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 transition-all duration-300 border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-white" asChild>
                <a href="#why">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Learn More
                </a>
              </Button>
            </motion.div>

            {/* Mobile Stats - Visible only on mobile/tablet */}
            <div className="flex flex-wrap justify-center lg:hidden gap-4 pt-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-brand-sky" />
                  <div>
                    <p className="text-lg font-bold text-foreground">500+</p>
                    <p className="text-xs text-muted-foreground">Clients</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-brand-orange" />
                  <div>
                    <p className="text-sm font-bold text-foreground">San Antonio</p>
                    <p className="text-xs text-muted-foreground">TX</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-brand-sky" />
                  <div>
                    <p className="text-sm font-bold text-foreground">5+ Years</p>
                    <p className="text-xs text-muted-foreground">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}