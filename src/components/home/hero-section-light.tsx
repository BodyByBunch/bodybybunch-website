import { Button } from '@/components/ui/button';
import { CalendlyButton } from '@/components/ui/calendly-button';
import { Award, MapPin, Target, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HeroSectionLight() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="space-y-2">
              <p className="font-semibold tracking-wide uppercase text-sm text-brand-orange">
                NASM Certified Personal Trainer & Nutrition Coach
              </p>
              <div className="w-16 h-1 shadow-lg bg-brand-orange"></div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                <span className="text-foreground">Fitness.</span>
                <br />
                <span className="text-foreground">Nutrition.</span>
                <br />
                <span className="text-brand-sky">Accountability.</span>
              </h1>
              <p className="text-xl leading-relaxed max-w-lg font-medium text-muted-foreground">
                "My passion revolves around people. I strive every day to help others become the best version of themselves. 
                Fitness and nutrition aren't just a hobby for me. It is me. It's who I am."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton
                calendlyUrl="https://calendly.com/your-calendly-url"
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
            </div>
          </div>

          {/* Right Side - Background Image */}
          <div className="relative lg:flex hidden">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
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

            {/* Floating Stats Cards */}
            <div className="absolute -top-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-border">
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

            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-border">
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

            <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-border">
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
        </div>
      </div>
    </section>
  );
}