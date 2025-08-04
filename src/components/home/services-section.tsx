'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Fitness. Nutrition. Accountability.
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Learn how to live a joyful, balanced lifestyle with personalized coaching from Lane Bunch.
          </p>
        </div>

        {/* Services Grid - Single column on mobile, 2x2 on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div>
            <Card className="group relative overflow-hidden bg-slate-800 text-white border-slate-700 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 cursor-pointer min-h-[400px] md:h-[480px] p-0">
              {/* Image Area */}
              <div className="relative h-48 md:h-64 transition-all duration-300 overflow-hidden bg-gray-200 dark:bg-gray-700">
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
              <div className="flex flex-col min-h-[200px] md:min-h-[220px] transition-all duration-300 p-4 md:p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-xl md:text-2xl text-white">Full Program</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Complete cardio, nutrition, and workout programs including coaching, education, 
                    Zoom meetings, form corrections, progressive overloading, and biomechanics guidance.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>

          <div>
            <Card className="group relative overflow-hidden bg-slate-800 text-white border-slate-700 hover:shadow-2xl hover:shadow-brand-orange/20 transition-all duration-500 cursor-pointer min-h-[400px] md:h-[480px] p-0">
              {/* Image Area */}
              <div className="relative h-48 md:h-64 transition-all duration-300 overflow-hidden bg-gray-200 dark:bg-gray-700">
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
              <div className="flex flex-col min-h-[200px] md:min-h-[220px] transition-all duration-300 p-4 md:p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-xl md:text-2xl text-white">Nutritional Coaching</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Daily coaching through nutritional choices, scheduling, and macro manipulation. 
                    Learn to live a joyful, balanced lifestyle - this is not a set "meal plan."
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>

          <div>
            <Card className="group relative overflow-hidden bg-slate-800 text-white border-slate-700 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 cursor-pointer min-h-[400px] md:h-[480px] p-0">
              {/* Image Area */}
              <div className="relative h-48 md:h-64 transition-all duration-300 overflow-hidden bg-gray-200 dark:bg-gray-700">
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
              <div className="flex flex-col min-h-[200px] md:min-h-[220px] transition-all duration-300 p-4 md:p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-xl md:text-2xl text-white">Daily Accountability</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    3-6x weekly check-ins depending on your needs. Available anytime for questions, 
                    education, and support. Personalized approach because you are unique.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>

          <div>
            <Card className="group relative overflow-hidden bg-slate-800 text-white border-slate-700 hover:shadow-2xl hover:shadow-brand-orange/20 transition-all duration-500 cursor-pointer min-h-[400px] md:h-[480px] p-0">
              {/* Image Area */}
              <div className="relative h-48 md:h-64 transition-all duration-300 overflow-hidden bg-gray-200 dark:bg-gray-700">
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
              <div className="flex flex-col min-h-[200px] md:min-h-[220px] transition-all duration-300 p-4 md:p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-xl md:text-2xl text-white">Weekly Check-ins</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Every Monday we analyze your data from the past week: average body weight, 
                    weekly goals, accomplishments, and create a plan for the following week.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
