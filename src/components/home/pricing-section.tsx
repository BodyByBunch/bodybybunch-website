import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Phone } from 'lucide-react';
import Link from 'next/link';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="space-y-2 mb-6">
            <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Training Programs Tailored to Your Goals
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the program that best fits your fitness journey. Each plan is customized to your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Personal Training Plan */}
          <Card className="relative bg-card text-card-foreground border border-border hover:shadow-lg transition-shadow">
            <CardHeader className="pb-8">
              <div className="w-8 h-1 bg-brand-orange-light mb-3"></div>
              <CardTitle className="text-2xl font-bold">Personal Training</CardTitle>
              <p className="text-muted-foreground">Perfect for individuals looking to start their fitness journey.</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-muted-foreground">/session</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>1-on-1 Personal Training Sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>Form Corrections & Cues</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>Progressive Overloading</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>Biomechanics Guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Nutrition Coaching</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Daily Accountability</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button className="w-full mt-6 bg-muted-foreground hover:bg-foreground text-background">
                Schedule A Call
              </Button>
            </CardContent>
          </Card>

          {/* Full Program (Featured) */}
                        <Card className="relative bg-card text-card-foreground border-2 border-brand-sky hover:shadow-xl transition-shadow">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-sky text-white px-4 py-1">
              Most Popular
            </Badge>
            <CardHeader className="pb-8 pt-8">
              <div className="w-8 h-1 bg-brand-orange-light mb-3"></div>
              <CardTitle className="text-2xl font-bold">Full Program</CardTitle>
              <p className="text-muted-foreground">Ideal for comprehensive transformation with complete support.</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>Complete Cardio, Nutrition & Workout Programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>Coaching, Education & Zoom Meetings</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>Form Corrections & Progressive Overloading</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>Daily Nutritional Coaching</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>3-6x Weekly Check-ins</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>Weekly Monday Data Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>24/7 Support & Accountability</span>
                </div>
              </div>

              {/* CTA Button */}
                                <Button className="w-full mt-6 bg-brand-sky hover:bg-primary text-white">
                Schedule A Call
              </Button>
            </CardContent>
          </Card>

          {/* Nutrition Only */}
          <Card className="relative bg-card text-card-foreground border border-border hover:shadow-lg transition-shadow">
            <CardHeader className="pb-8">
              <div className="w-8 h-1 bg-brand-orange-light mb-3"></div>
              <CardTitle className="text-2xl font-bold">Nutrition Coaching</CardTitle>
              <p className="text-muted-foreground">Focus on nutritional guidance and lifestyle coaching.</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>Daily Nutritional Coaching</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>Macro Manipulation Guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>Lifestyle Education (Not Meal Plans)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-brand-sky" />
                  <span>Weekly Check-ins</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Workout Programming</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Personal Training Sessions</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button className="w-full mt-6 bg-muted-foreground hover:bg-foreground text-background">
                Schedule A Call
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-lg text-muted-foreground">
            Not sure which plan is right for you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Button variant="outline" className="border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white">
              <Phone className="mr-2 h-4 w-4" />
              Call (512) 818-4281
            </Button>
            <Link href="/contact">
                                <Button className="bg-brand-sky hover:bg-primary text-white">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            All plans are customized to your specific needs and goals.
          </p>
        </div>
      </div>
    </section>
  );
}