import { Button } from '@/components/ui/button';
import { Phone, Play, Award, MapPin, Target, Heart } from 'lucide-react';
import Image from 'next/image';

export function HeroSection2() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/sliderbg-bodybybunch.png"
          alt="Body By Bunch Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for better text readability - very dark for light mode */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent dark:from-black/50 dark:via-black/40 dark:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 p-8 rounded-2xl">
            {/* Tagline */}
            <div className="space-y-2">
              <p className="font-semibold tracking-wide uppercase text-sm" style={{color: 'var(--brand-orange-light)', textShadow: '2px 2px 4px rgba(0,0,0,0.9), -1px -1px 2px rgba(0,0,0,0.7), 1px -1px 2px rgba(0,0,0,0.7), -1px 1px 2px rgba(0,0,0,0.7)'}}>
                NASM Certified Personal Trainer & Nutrition Coach
              </p>
              <div className="w-16 h-1 bg-brand-orange-light shadow-lg"></div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="drop-shadow-2xl shadow-black/80" style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>Fitness.</span>
                <br />
                <span className="drop-shadow-2xl shadow-black/80" style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>Nutrition.</span>
                <br />
                <span className="drop-shadow-2xl shadow-black/80" style={{color: '#5eead4', textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>Accountability.</span>
              </h1>
              <p className="text-xl leading-relaxed max-w-lg font-medium" style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.9), -1px -1px 2px rgba(0,0,0,0.7), 1px -1px 2px rgba(0,0,0,0.7), -1px 1px 2px rgba(0,0,0,0.7)'}}>
                "My passion revolves around people. I strive every day to help others become the best version of themselves. 
                Fitness and nutrition aren't just a hobby for me. It is me. It's who I am."
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-4 bg-brand-teal hover:bg-primary border-0 shadow-lg hover:shadow-xl transition-all duration-300" style={{color: '#ffffff'}}>
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 transition-all duration-300 bg-white/10 backdrop-blur-sm" style={{borderColor: '#ffffff', color: '#ffffff'}} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#000000'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#ffffff'; }}>
                <Phone className="mr-2 h-5 w-5" />
                (512) 818-4281
              </Button>
            </div>


          </div>

          {/* Right Side - Stats Cards Only */}
          <div className="relative lg:flex hidden">
            {/* Floating Stats Cards */}
            <div className="absolute top-8 left-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl z-20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold text-lg">500+</p>
                  <p className="text-slate-600 dark:text-gray-300 text-xs">Clients Transformed</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl z-20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold text-lg">Austin, TX</p>
                  <p className="text-slate-600 dark:text-gray-300 text-xs">Local & Online</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl p-3 shadow-xl z-20">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold text-sm">5+ Years</p>
                  <p className="text-slate-600 dark:text-gray-300 text-xs">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 