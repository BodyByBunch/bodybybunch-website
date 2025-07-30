import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who have transformed their lives with Body By Bunch. 
            See the incredible results and hear from our amazing clients.
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Testimonial 1 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Sarah M.</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <Badge variant="secondary">-45 lbs in 6 months</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 italic">
                "Lane completely changed my life! I lost 45 pounds and gained so much confidence. 
                Her nutrition coaching was the missing piece I needed. I feel amazing!"
              </p>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Mike R.</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <Badge variant="secondary">+20 lbs muscle</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 italic">
                "Working with Lane has been incredible. I gained 20 pounds of muscle and finally 
                achieved the physique I've always wanted. Her training programs are challenging but effective."
              </p>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Jennifer L.</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <Badge variant="secondary">-30 lbs in 4 months</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 italic">
                "Lane's accountability and support made all the difference. I lost 30 pounds and 
                learned how to maintain a healthy lifestyle. She's not just a trainer, she's a life coach!"
              </p>
            </CardContent>
          </Card>

          {/* Testimonial 4 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">David K.</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <Badge variant="secondary">Improved energy</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 italic">
                "I came to Lane feeling tired and unmotivated. Her nutrition guidance and training 
                completely transformed my energy levels. I feel like a new person!"
              </p>
            </CardContent>
          </Card>

          {/* Testimonial 5 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Amanda T.</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <Badge variant="secondary">-25 lbs in 5 months</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 italic">
                "Lane helped me break through my weight loss plateau. Her personalized approach 
                and constant encouragement kept me motivated. I'm so grateful for her expertise!"
              </p>
            </CardContent>
          </Card>

          {/* Testimonial 6 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Robert P.</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <Badge variant="secondary">Better mobility</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 italic">
                "At 55, I was struggling with mobility and strength. Lane's training program 
                has me feeling stronger than I have in years. She truly understands how to work with all ages."
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16" />

        {/* Transformation Stories */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Transformation Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Sarah's Journey</CardTitle>
                <Badge variant="secondary">6 Month Transformation</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Sarah came to me feeling frustrated with her weight loss journey. 
                  Through personalized nutrition coaching and consistent training, 
                  she lost 45 pounds and completely transformed her relationship with food and fitness.
                </p>
                <div className="text-sm text-gray-500">
                  <p><strong>Starting Weight:</strong> 185 lbs</p>
                  <p><strong>Current Weight:</strong> 140 lbs</p>
                  <p><strong>Key Achievement:</strong> Ran her first 5K</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mike's Transformation</CardTitle>
                <Badge variant="secondary">8 Month Journey</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Mike wanted to build muscle and improve his overall strength. 
                  With a focused training program and proper nutrition guidance, 
                  he gained 20 pounds of muscle and achieved his fitness goals.
                </p>
                <div className="text-sm text-gray-500">
                  <p><strong>Starting Weight:</strong> 160 lbs</p>
                  <p><strong>Current Weight:</strong> 180 lbs</p>
                  <p><strong>Key Achievement:</strong> Deadlift 315 lbs</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to Start Your Transformation?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Join the hundreds of clients who have transformed their lives with Body By Bunch. 
                Your success story could be next!
              </p>
              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-900">
                  Phone: (512) 818-4281
                </p>
                <p className="text-sm text-gray-500">
                  Schedule your free consultation today
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
} 