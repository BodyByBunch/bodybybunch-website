import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Check } from 'lucide-react';

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Plans + Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to help you achieve your fitness and nutrition goals. 
            All plans include personalized coaching and ongoing support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Basic Plan */}
          <Card className="relative">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Basic Plan</CardTitle>
              <div className="text-3xl font-bold text-gray-900">
                $99<span className="text-lg text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>2 Personal Training Sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Basic Nutrition Guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Weekly Check-ins</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Workout Plans</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-2 border-blue-500">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-500 text-white">Most Popular</Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Premium Plan</CardTitle>
              <div className="text-3xl font-bold text-gray-900">
                $199<span className="text-lg text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>4 Personal Training Sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Comprehensive Nutrition Coaching</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Daily Accountability</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Custom Meal Plans</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Progress Tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>24/7 Support</span>
                </li>
              </ul>
              <Button className="w-full">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Elite Plan */}
          <Card className="relative">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Elite Plan</CardTitle>
              <div className="text-3xl font-bold text-gray-900">
                $299<span className="text-lg text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Unlimited Training Sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>1-on-1 Nutrition Coaching</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Daily Check-ins</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Custom Workout Programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Body Composition Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Priority Support</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16" />

        {/* Additional Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Single Session</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900 mb-2">$75</p>
                <p className="text-gray-600">Perfect for trying out personal training</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Nutrition Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900 mb-2">$50</p>
                <p className="text-gray-600">One-time nutrition assessment and plan</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to Start Your Journey?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Contact me today to discuss your goals and find the perfect plan for you.
              </p>
              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-900">
                  Phone: (512) 818-4281
                </p>
                <Button size="lg">
                  Schedule a Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
} 