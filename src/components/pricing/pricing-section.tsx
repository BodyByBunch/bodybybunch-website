'use client';

import { useState } from 'react';
import { Check, Phone, X } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { CallButton } from '@/components/ui/call-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PRICING_PERIODS, PRICING_PLANS, type PricingPeriod } from '@/data/pricing';
import { SITE_CTA_LABELS } from '@/data/site';
import { ctaStyles, headingStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';

type PricingPlan = (typeof PRICING_PLANS)[number];
type PricingFeature = PricingPlan['features'][number];

function FeatureRow({ feature }: { feature: PricingFeature }) {
  const Icon = feature.included ? Check : X;

  return (
    <div className="flex items-center gap-3">
      <Icon
        className={cn(
          'h-5 w-5 flex-shrink-0',
          feature.included ? 'text-action' : 'text-muted-foreground'
        )}
      />
      <span className={cn('text-sm sm:text-base', !feature.included && 'text-muted-foreground')}>
        {feature.label}
      </span>
    </div>
  );
}

function PeriodSelector({
  selectedPeriod,
  onPeriodChange,
}: {
  selectedPeriod: PricingPeriod;
  onPeriodChange: (period: PricingPeriod) => void;
}) {
  return (
    <RadioGroup
      value={selectedPeriod}
      onValueChange={(value) => onPeriodChange(value as PricingPeriod)}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      {PRICING_PERIODS.map((period) => (
        <div key={period.value} className="flex items-center space-x-2">
          <RadioGroupItem value={period.value} id={period.value} />
          <label
            htmlFor={period.value}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {period.label}
          </label>
        </div>
      ))}
    </RadioGroup>
  );
}

function PricingCard({ plan, selectedPeriod }: { plan: PricingPlan; selectedPeriod: PricingPeriod }) {
  const periodLabel = PRICING_PERIODS.find((period) => period.value === selectedPeriod)?.label;

  return (
    <div className={plan.featured ? 'pt-8 pb-6' : undefined}>
      <div className="relative">
        {plan.featured ? (
          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-action text-action-foreground px-4 py-1 z-20">
            Most Popular
          </Badge>
        ) : null}
        <Card
          className={cn(
            'relative bg-card text-card-foreground transition-shadow',
            plan.featured
              ? 'border-2 border-action hover:shadow-xl'
              : 'border border-border hover:shadow-lg'
          )}
        >
          <CardHeader className={cn('pb-8', plan.featured && 'pt-8')}>
            <div className="w-8 h-1 bg-proof mb-3" />
            <CardTitle className="text-xl lg:text-2xl font-bold">{plan.title}</CardTitle>
            <p className="text-sm lg:text-base text-muted-foreground">{plan.description}</p>
            <div className="mt-4">
              <span className="text-4xl font-bold">${plan.prices[selectedPeriod]}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground">for {periodLabel}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {plan.features.map((feature) => (
                <FeatureRow key={feature.label} feature={feature} />
              ))}
            </div>

            <CallButton
              className={cn(
                'w-full mt-6',
                plan.featured
                  ? ctaStyles.primary
                  : 'bg-muted-foreground hover:bg-foreground text-background'
              )}
            >
              {SITE_CTA_LABELS.callback}
            </CallButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function PricingSection() {
  const [selectedPeriod, setSelectedPeriod] = useState<PricingPeriod>('6months');

  return (
    <section id="pricing" className={sectionStyles.default}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="space-y-2 mb-6">
            <div className={headingStyles.rule} />
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Training Programs Tailored to Your Goals
            </h2>
            <div className={headingStyles.rule} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the program that best fits your fitness journey. Each plan is customized to your needs.
          </p>
        </div>

        <div className="text-center mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Select Your Commitment Period</h3>
            <PeriodSelector selectedPeriod={selectedPeriod} onPeriodChange={setSelectedPeriod} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} selectedPeriod={selectedPeriod} />
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-lg text-muted-foreground">
            Not sure which plan is right for you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton
              size="default"
              variant="outline"
              className={ctaStyles.outline}
            >
              <Phone className="mr-2 h-4 w-4" />
              {SITE_CTA_LABELS.callback}
            </CallButton>
            <CallButton
              size="default"
              className={ctaStyles.primary}
            >
              <Phone className="mr-2 h-4 w-4" />
              {SITE_CTA_LABELS.callback}
            </CallButton>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            All plans are customized to your specific needs and goals.
          </p>
        </div>
      </div>
    </section>
  );
}
