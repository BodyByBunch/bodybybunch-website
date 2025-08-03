'use client';

import { Button } from '@/components/ui/button';
import { CalendlyButton } from '@/components/ui/calendly-button';
import { Reveal } from '@/components/ui/reveal';
import { Play, Award, MapPin, Target, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection2() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background w-full max-w-full pt-16 lg:pt-0">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <Reveal direction="left" distance={60} className="space-y-6 lg:space-y-8 text-center lg:text-left">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CalendlyButton
                calendlyUrl="https://calendly.com/bodybybunch"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300 bg-brand-sky text-white"
              >
                Get Started Today
              </CalendlyButton>
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-white" asChild>
                <a href="#why">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Learn More
                </a>
              </Button>
            </div>
          </Reveal>

          {/* Image - Right Side */}
          <Reveal direction="right" distance={60} className="relative w-full h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero/sliderbg-bodybybunch.png"
              alt="Body By Bunch Hero Background"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: '80% center' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

            {/* Floating Stats Cards - Hidden on mobile, visible on lg+ */}
            <motion.div 
              className="hidden lg:block absolute top-4 right-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-border"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-border">
                  <Award className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Clients Transformed</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hidden lg:block absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-border"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-border">
                  <MapPin className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">San Antonio, TX</p>
                  <p className="text-sm text-muted-foreground">Local & Online</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hidden lg:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-border"
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-border">
                  <Heart className="h-4 w-4 text-brand-orange" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">5+ Years</p>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Mobile Stats - Positioned below image on mobile */}
        <div className="flex flex-wrap justify-center lg:hidden gap-3 mt-4">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-border">
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-brand-sky" />
              <div>
                <p className="text-sm font-bold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground">Clients</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-border">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-brand-orange" />
              <div>
                <p className="text-xs font-bold text-foreground">San Antonio</p>
                <p className="text-xs text-muted-foreground">TX</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-border">
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-brand-sky" />
              <div>
                <p className="text-xs font-bold text-foreground">5+ Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
