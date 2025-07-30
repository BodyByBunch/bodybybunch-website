import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Lane Bunch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My passion revolves around people. I strive every day to help others become the best version of themselves. 
            Fitness and nutrition aren't just a hobby for me. It is me. It's who I am.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary" className="text-sm">NASM Certified</Badge>
                Personal Trainer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Certified through the National Academy of Sports Medicine (NASM), 
                I bring professional expertise to every training session.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary" className="text-sm">NASM Certified</Badge>
                Nutrition Coach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Specialized in nutrition coaching to help you achieve your health 
                and fitness goals through proper nutrition.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16" />

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            My Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I believe that everyone deserves to live a joyful, balanced lifestyle. 
            Through personalized fitness training, nutrition guidance, and ongoing accountability, 
            I help my clients transform not just their bodies, but their entire approach to health and wellness.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Ready to start your transformation journey?
              </p>
              <p className="text-lg font-semibold text-gray-900">
                Phone: (512) 818-4281
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
} 