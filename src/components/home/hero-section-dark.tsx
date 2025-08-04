'use client';

import { Button } from '@/components/ui/button';
import { CalendlyButton } from '@/components/ui/calendly-button';
import { ArrowRight, Award, MapPin, Heart } from 'lucide-react';

import { HeroImageCarousel } from './hero-image-carousel';

export function HeroSection2() {
  return (
    <section className="relative min-h-screen flex items-center bg-background w-full max-w-full pt-16 lg:pt-0 px-4 lg:px-8">
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Tagline */}
            <div className="space-y-2">
              <p className="font-semibold tracking-wide uppercase text-sm text-brand-orange">
                ISSA Certified Personal Trainer & PN1 Nutritionist
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

            {/* Stats Badges - Elegant vertical stack */}
            <div className="hidden lg:block mt-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-brand-sky/10 rounded-lg flex items-center justify-center group-hover:bg-brand-sky/20 transition-colors">
                    <Award className="h-4 w-4 text-brand-sky" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-foreground">100+</span>
                    <span className="text-sm text-muted-foreground ml-2">Clients Transformed</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-lg flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                    <MapPin className="h-4 w-4 text-brand-orange" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-foreground">San Antonio, TX</span>
                    <span className="text-sm text-muted-foreground ml-2">Local & Online</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-brand-sky/10 rounded-lg flex items-center justify-center group-hover:bg-brand-sky/20 transition-colors">
                    <Heart className="h-4 w-4 text-brand-sky" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-foreground">5+ Years</span>
                    <span className="text-sm text-muted-foreground ml-2">Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Carousel - Right Side */}
          <div className="relative">
            <div className="max-w-4xl mx-auto">
              <HeroImageCarousel 
                images={[
                  '/images/hero/sliderbg-2-bodybybunch.jpg',
                  '/images/training/IMG_0572.jpeg',
                  '/images/training/IMG_0561.jpeg',
                  '/images/training/IMG_0565.jpeg',
                  '/images/training/IMG_0570.jpeg',
                  '/images/training/IMG_0575.jpeg',
                  '/images/training/IMG_0577.jpeg'
                ]}
                showBadges={false}
                className="relative w-full h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Mobile Stats - Positioned below image on mobile */}
        <div className="flex flex-wrap justify-center lg:hidden gap-3 mt-4">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-border">
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-brand-sky" />
              <div>
                <p className="text-sm font-bold text-foreground">100+</p>
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
