import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Fitness. Nutrition. Accountability.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn how to live a joyful, balanced lifestyle with personalized coaching from Lane Bunch.
          </p>
        </div>

        {/* Services Grid - 2x2 layout on larger screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="group relative overflow-hidden bg-slate-800 text-white border-slate-700 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 cursor-pointer h-[480px] p-0">
            {/* Image Area */}
            <div className="relative h-64 group-hover:h-44 transition-all duration-500 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <Image
                src="/images/services/services_img_1.jpeg"
                alt="Full Program Training"
                width={400}
                height={192}
                className="object-cover w-full h-full"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
            </div>
            
            {/* Content Area */}
            <div className="flex flex-col h-56 group-hover:h-72 transition-all duration-500 p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-2xl text-white">Full Program</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col justify-between">
                <p className="text-gray-300 leading-relaxed">
                  Complete cardio, nutrition, and workout programs including coaching, education, 
                  Zoom meetings, form corrections, progressive overloading, and biomechanics guidance.
                </p>
                
                {/* Hidden link that slides up on hover */}
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 mt-4">
                  <Link href="/plans">
                    <Button variant="outline" className="w-full border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>

          <Card className="group relative overflow-hidden bg-slate-800 text-white border-slate-700 hover:shadow-2xl hover:shadow-brand-orange/20 transition-all duration-500 cursor-pointer h-[480px] p-0">
            {/* Image Area */}
            <div className="relative h-64 group-hover:h-44 transition-all duration-500 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <Image
                src="/images/services/services_img_2.jpg"
                alt="Nutritional Coaching"
                width={400}
                height={192}
                className="object-cover w-full h-full"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
            </div>
            
            {/* Content Area */}
            <div className="flex flex-col h-56 group-hover:h-72 transition-all duration-500 p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-2xl text-white">Nutritional Coaching</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col justify-between">
                <p className="text-gray-300 leading-relaxed">
                  Daily coaching through nutritional choices, scheduling, and macro manipulation. 
                  Learn to live a joyful, balanced lifestyle - this is not a set "meal plan."
                </p>
                
                {/* Hidden link that slides up on hover */}
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 mt-4">
                  <Link href="/plans">
                    <Button variant="outline" className="w-full border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>

          <Card className="group relative overflow-hidden bg-slate-800 text-white border-slate-700 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 cursor-pointer h-[480px] p-0">
            {/* Image Area */}
            <div className="relative h-64 group-hover:h-44 transition-all duration-500 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <Image
                src="/images/services/services_img_3.jpeg"
                alt="Daily Accountability"
                width={400}
                height={192}
                className="object-cover w-full h-full"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
            </div>
            
            {/* Content Area */}
            <div className="flex flex-col h-56 group-hover:h-72 transition-all duration-500 p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-2xl text-white">Daily Accountability</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col justify-between">
                <p className="text-gray-300 leading-relaxed">
                  3-6x weekly check-ins depending on your needs. Available anytime for questions, 
                  education, and support. Personalized approach because you are unique.
                </p>
                
                {/* Hidden link that slides up on hover */}
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 mt-4">
                  <Link href="/plans">
                    <Button variant="outline" className="w-full border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>

          <Card className="group relative overflow-hidden bg-slate-800 text-white border-slate-700 hover:shadow-2xl hover:shadow-brand-orange/20 transition-all duration-500 cursor-pointer h-[480px] p-0">
            {/* Image Area */}
            <div className="relative h-64 group-hover:h-44 transition-all duration-500 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <Image
                src="/images/services/services_img_4.jpeg"
                alt="Weekly Check-ins"
                width={400}
                height={192}
                className="object-cover w-full h-full"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
            </div>
            
            {/* Content Area */}
            <div className="flex flex-col h-56 group-hover:h-72 transition-all duration-500 p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-2xl text-white">Weekly Check-ins</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col justify-between">
                <p className="text-gray-300 leading-relaxed">
                  Every Monday we analyze your data from the past week: average body weight, 
                  weekly goals, accomplishments, and create a plan for the following week.
                </p>
                
                {/* Hidden link that slides up on hover */}
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 mt-4">
                  <Link href="/plans">
                    <Button variant="outline" className="w-full border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
} 