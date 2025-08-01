import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Link from 'next/link';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real people who have transformed their lives with Body By Bunch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="bg-slate-700 border-slate-600 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-white">Sarah M.</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
              <Badge className="bg-orange-600 text-white hover:bg-orange-700">-45 lbs in 6 months</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 italic">
                "Lane completely changed my life! I lost 45 pounds and gained so much confidence. 
                Her nutrition coaching was the missing piece I needed."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-700 border-slate-600 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-white">Mike R.</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
              <Badge className="bg-orange-600 text-white hover:bg-orange-700">+20 lbs muscle</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 italic">
                "Working with Lane has been incredible. I gained 20 pounds of muscle and finally 
                achieved the physique I've always wanted."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-700 border-slate-600 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-white">Jennifer L.</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
              <Badge className="bg-orange-600 text-white hover:bg-orange-700">-30 lbs in 4 months</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 italic">
                "Lane's accountability and support made all the difference. I lost 30 pounds and 
                learned how to maintain a healthy lifestyle."
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/testimonials">
                          <Button variant="outline" size="lg" className="border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white">
              View All Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 