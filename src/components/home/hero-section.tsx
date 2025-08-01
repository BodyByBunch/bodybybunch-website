import { Button } from '@/components/ui/button';
import { Phone, Play, Award, MapPin, Target, Heart } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-background text-foreground min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="space-y-2">
              <p className="text-brand-orange-light font-semibold tracking-wide uppercase text-sm">
                NASM Certified Personal Trainer & Nutrition Coach
              </p>
              <div className="w-16 h-1 bg-brand-orange-light"></div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Transform Your</span>
                <br />
                <span className="text-brand-sky-light">Life Today</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                "My passion revolves around people. I strive every day to help others become the best version of themselves. 
                Fitness and nutrition aren't just a hobby for me. It is me. It's who I am."
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                              <Button size="lg" className="text-lg px-8 py-4 bg-brand-sky hover:bg-primary text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-brand-orange text-brand-orange-light hover:bg-brand-orange hover:text-white transition-all duration-300">
                <Phone className="mr-2 h-5 w-5" />
                (512) 818-4281
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-2">
                                  <div className="w-3 h-3 bg-brand-sky-light rounded-full"></div>
                <span className="text-sm text-muted-foreground">NASM Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-brand-orange-light rounded-full"></div>
                <span className="text-sm text-muted-foreground">San Antonio, TX</span>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl">
                {/* Background Image Placeholder */}
                <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 h-96 relative">
                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6 p-8">
                      {/* Play Button */}
                      <div className="w-20 h-20 bg-teal-500/90 rounded-full mx-auto flex items-center justify-center cursor-pointer hover:bg-teal-400 transition-all duration-300 shadow-2xl">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-white font-bold text-lg">Watch My Story</p>
                        <p className="text-gray-300 text-sm">See how I help clients transform their lives</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-lg">500+</p>
                    <p className="text-slate-600 text-xs">Clients Transformed</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-lg">San Antonio</p>
                    <p className="text-slate-600 text-xs">Local & Online</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-orange-400" />
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-teal-400" />
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-transparent rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 