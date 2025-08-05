'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendlyButton } from '@/components/ui/calendly-button';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check, X, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';

type PricingPeriod = '1year' | '6months' | '3months';

interface PricingData {
  [key: string]: {
    [period in PricingPeriod]: number;
  };
}

const pricingData: PricingData = {
  nutrition: {
    '1year': 50,
    '6months': 75,
    '3months': 100,
  },
  workout: {
    '1year': 50,
    '6months': 75,
    '3months': 100,
  },
  full: {
    '1year': 125,
    '6months': 150,
    '3months': 175,
  },
};

export function PricingSection() {
  const [selectedPeriod, setSelectedPeriod] = useState<PricingPeriod>('6months');

  const getPeriodLabel = (period: PricingPeriod) => {
    switch (period) {
      case '1year': return '1 Year';
      case '6months': return '6 Months';
      case '3months': return '3 Months';
    }
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section heading */}
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

        {/* Pricing Period Selector */}
        <div className="text-center mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Select Your Commitment Period</h3>
            <RadioGroup
              value={selectedPeriod}
              onValueChange={(value) => setSelectedPeriod(value as PricingPeriod)}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1year" id="1year" />
                <label htmlFor="1year" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  1 Year
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="6months" id="6months" />
                <label htmlFor="6months" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  6 Months
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3months" id="3months" />
                <label htmlFor="3months" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  3 Months
                </label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Pricing Cards */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            
            {/* Workout Coaching Only */}
            <div>
              <Card className="relative bg-card text-card-foreground border border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-8">
                  <div className="w-8 h-1 bg-brand-orange-light mb-3"></div>
                  <CardTitle className="text-xl lg:text-2xl font-bold">Workout Coaching Only</CardTitle>
                  <p className="text-sm lg:text-base text-muted-foreground">Perfect for individuals looking to start their fitness journey.</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${pricingData.workout[selectedPeriod]}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">for {getPeriodLabel(selectedPeriod)}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                      <span className="text-sm sm:text-base">Form Corrections & Cues</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                      <span className="text-sm sm:text-base">Progressive Overloading</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                      <span className="text-sm sm:text-base">Biomechanics Guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground text-sm sm:text-base">Nutrition Coaching</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground text-sm sm:text-base">Daily Accountability</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <CalendlyButton
                    calendlyUrl="https://calendly.com/lanebunch-bodybybunch/phone-meeting"
                    className="w-full mt-6 bg-muted-foreground hover:bg-foreground text-background"
                  >
                    Schedule A Call
                  </CalendlyButton>
                </CardContent>
              </Card>
            </div>

            {/* Full Program (Featured) */}
            <div className="pt-8 pb-6">
              <div className="relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-sky text-white px-4 py-1 z-20">
                  Most Popular
                </Badge>
                <Card className="relative bg-card text-card-foreground border-2 border-brand-sky hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-8 pt-8">
                    <div className="w-8 h-1 bg-brand-orange-light mb-3"></div>
                    <CardTitle className="text-2xl font-bold">Full Program</CardTitle>
                    <p className="text-muted-foreground">Ideal for comprehensive transformation with complete support.</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">${pricingData.full[selectedPeriod]}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground">for {getPeriodLabel(selectedPeriod)}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Features */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                        <span className="text-sm sm:text-base">Complete Cardio, Nutrition & Workout Programs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                        <span className="text-sm sm:text-base">Coaching, Education & Zoom Meetings</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                        <span className="text-sm sm:text-base">Form Corrections & Progressive Overloading</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                        <span className="text-sm sm:text-base">Daily Nutritional Coaching</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                        <span className="text-sm sm:text-base">3-6x Weekly Check-ins</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                        <span className="text-sm sm:text-base">Weekly Monday Data Analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                        <span className="text-sm sm:text-base">24/7 Support & Accountability</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <CalendlyButton
                      calendlyUrl="https://calendly.com/lanebunch-bodybybunch/phone-meeting"
                      className="w-full mt-6 bg-brand-sky hover:bg-primary text-white"
                    >
                      Schedule A Call
                    </CalendlyButton>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Nutrition Coaching Only */}
            <div>
              <Card className="relative bg-card text-card-foreground border border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-8">
                  <div className="w-8 h-1 bg-brand-orange-light mb-3"></div>
                  <CardTitle className="text-2xl font-bold">Nutrition Coaching Only</CardTitle>
                  <p className="text-muted-foreground">Focus on nutritional guidance and lifestyle coaching.</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${pricingData.nutrition[selectedPeriod]}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">for {getPeriodLabel(selectedPeriod)}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                      <span className="text-sm sm:text-base">Daily Nutritional Coaching</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                      <span className="text-sm sm:text-base">Macro Manipulation Guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                      <span className="text-sm sm:text-base">Lifestyle Education (Not Meal Plans)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-brand-sky flex-shrink-0" />
                      <span className="text-sm sm:text-base">Weekly Check-ins</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground text-sm sm:text-base">Workout Programming</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground text-sm sm:text-base">Personal Training Sessions</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <CalendlyButton
                    calendlyUrl="https://calendly.com/lanebunch-bodybybunch/phone-meeting"
                    className="w-full mt-6 bg-muted-foreground hover:bg-foreground text-background"
                  >
                    Schedule A Call
                  </CalendlyButton>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-lg text-muted-foreground">
            Not sure which plan is right for you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton
              calendlyUrl="https://calendly.com/lanebunch-bodybybunch/30min"
              size="default"
              variant="outline"
              className="border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Free Consultation
            </CalendlyButton>
            <CalendlyButton
              calendlyUrl="https://calendly.com/lanebunch-bodybybunch/phone-meeting"
              size="default"
              className="bg-brand-sky hover:bg-primary text-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              Book a Call
            </CalendlyButton>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            All plans are customized to your specific needs and goals.
          </p>
        </div>
      </div>
    </section>
  );
}
