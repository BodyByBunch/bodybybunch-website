import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

export function AboutHero() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Meet Lane Bunch
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  My passion revolves around people. I strive every day to help others become the best version of themselves. 
                  Fitness and nutrition aren't just a hobby for me. <strong>It is me. It's who I am.</strong>
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hey there! My name is Lane Bunch and I am the founder and owner of BodybyBunch. BodybyBunch is a personal 
                  training fitness company that offers in-person and online coaching. I train in-person clients at my 
                  private gym in San Antonio, Tx, and I train online clients nationwide.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a "forever student," constantly learning and growing in the fitness/nutrition world to be the best 
                  trainer and coach for my clients. As long as you are communicating with me and being consistent and 
                  compliant to the program we design to the best of your ability, the results will follow.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (512) 818-4281
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/about_img.jpeg"
                  alt="Lane Bunch - NASM Certified Personal Trainer and Nutrition Coach"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent"></div>
              </div>
              
              {/* Credentials badge */}
              <div className="absolute -bottom-4 -left-4 bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">NASM Certified</div>
                <div className="text-xs opacity-90">Personal Trainer & Nutrition Coach</div>
                <div className="text-xs opacity-90 mt-1">Weight Loss Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 