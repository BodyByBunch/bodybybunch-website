import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Heart, Users, Calendar } from 'lucide-react';

export function ServicesSection() {
  return (
    <section className="py-20 bg-slate-900">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow bg-slate-800 text-white border-slate-700">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-teal-600/20 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-teal-400" />
              </div>
              <CardTitle className="text-2xl text-white">Full Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Complete cardio, nutrition, and workout programs including coaching, education, 
                Zoom meetings, form corrections, progressive overloading, and biomechanics guidance.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-slate-800 text-white border-slate-700">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-orange-400" />
              </div>
              <CardTitle className="text-2xl text-white">Nutritional Coaching</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Daily coaching through nutritional choices, scheduling, and macro manipulation. 
                Learn to live a joyful, balanced lifestyle - this is not a set "meal plan."
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-slate-800 text-white border-slate-700">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-teal-600/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-teal-400" />
              </div>
              <CardTitle className="text-2xl text-white">Daily Accountability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                3-6x weekly check-ins depending on your needs. Available anytime for questions, 
                education, and support. Personalized approach because you are unique.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-slate-800 text-white border-slate-700">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-orange-400" />
              </div>
              <CardTitle className="text-2xl text-white">Weekly Check-ins</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Every Monday we analyze your data from the past week: average body weight, 
                weekly goals, accomplishments, and create a plan for the following week.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 