import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Heart, Users } from 'lucide-react';

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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow bg-slate-800 text-white border-slate-700">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-teal-600/20 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-teal-400" />
              </div>
              <CardTitle className="text-2xl text-white">Personal Training</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Customized workout programs designed specifically for your goals, 
                fitness level, and lifestyle. NASM Certified Personal Trainer.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-slate-800 text-white border-slate-700">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-orange-400" />
              </div>
              <CardTitle className="text-2xl text-white">Nutrition Coaching</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Comprehensive nutrition guidance to fuel your workouts and achieve 
                your health goals. NASM Certified Nutrition Coach.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-slate-800 text-white border-slate-700">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-teal-600/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-teal-400" />
              </div>
              <CardTitle className="text-2xl text-white">Accountability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Ongoing support and motivation to keep you on track and help you 
                build lasting healthy habits for life.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 