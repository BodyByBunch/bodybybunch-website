import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your fitness journey? Get in touch with me today to discuss your goals 
            and schedule your first session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    className="w-full min-h-[120px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your fitness goals and what you'd like to achieve..."
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900">(512) 818-4281</p>
                <p className="text-gray-600">Call or text me anytime</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900">lane@bodybybunch.com</p>
                <p className="text-gray-600">I'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900">Austin, TX</p>
                <p className="text-gray-600">Serving the greater Austin area</p>
                <p className="text-sm text-gray-500 mt-2">
                  In-home training available • Gym sessions • Virtual coaching
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">By appointment</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-16" />

        {/* FAQ Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>What should I expect in my first session?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your first session will include a fitness assessment, goal setting discussion, 
                  and a light workout to evaluate your current fitness level.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer virtual training?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! I offer virtual coaching sessions for clients who prefer to train from home 
                  or live outside the Austin area.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What equipment do I need?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  I can work with whatever equipment you have available, from full gym setups 
                  to bodyweight-only workouts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long until I see results?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Most clients start seeing results within 2-4 weeks of consistent training 
                  and following the nutrition guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to Get Started?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Don't wait to start your transformation. Contact me today to schedule 
                your free consultation and take the first step toward your goals.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="mr-4">
                  Call Now: (512) 818-4281
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
} 