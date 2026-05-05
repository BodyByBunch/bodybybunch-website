'use client';

import { useState } from 'react';
import { ArrowRight, Check, ClipboardList, Minus } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { ContactButton } from '@/components/ui/contact-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PRICING_PERIODS, PRICING_PLANS, type PricingPeriod } from '@/data/pricing';
import { SITE_CTA_LABELS } from '@/data/site';
import { ctaStyles, headingStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';

type PricingPlan = (typeof PRICING_PLANS)[number];
type PricingFeature = PricingPlan['features'][number];

function FeatureRow({ feature }: { feature: PricingFeature }) {
  const Icon = feature.included ? Check : Minus;

  return (
    <div className="flex items-start gap-2.5">
      <Icon
        className={cn(
          'mt-0.5 h-4 w-4 flex-shrink-0',
          feature.included ? 'text-action' : 'text-muted-foreground'
        )}
      />
      <span className={cn('text-sm leading-6', !feature.included && 'text-muted-foreground')}>
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
      className="mx-auto grid w-full max-w-xl grid-cols-1 gap-1 rounded-lg border border-border bg-surface-raised p-1 shadow-sm sm:grid-cols-3"
    >
      {PRICING_PERIODS.map((period) => (
        <div key={period.value} className="relative">
          <RadioGroupItem value={period.value} id={`pricing-${period.value}`} className="sr-only" />
          <label
            htmlFor={`pricing-${period.value}`}
            className={cn(
              'flex min-h-14 cursor-pointer flex-col items-center justify-center rounded-md px-3 py-2 text-center text-sm font-semibold transition-colors',
              selectedPeriod === period.value
                ? 'bg-action text-action-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <span>{period.label}</span>
            <span
              className={cn(
                'mt-0.5 text-[0.68rem] font-medium leading-tight',
                selectedPeriod === period.value ? 'text-action-foreground/80' : 'text-muted-foreground'
              )}
            >
              {period.helper}
            </span>
          </label>
        </div>
      ))}
    </RadioGroup>
  );
}

function PricingCard({ plan, selectedPeriod }: { plan: PricingPlan; selectedPeriod: PricingPeriod }) {
  const periodLabel = PRICING_PERIODS.find((period) => period.value === selectedPeriod)?.label;
  const includedFeatures = plan.features.filter((feature) => feature.included);
  const excludedFeatures = plan.features.filter((feature) => !feature.included);

  return (
    <Card
      className={cn(
        'relative flex h-full flex-col overflow-hidden rounded-lg bg-card text-card-foreground transition-[border-color,box-shadow,transform] hover:-translate-y-0.5',
        plan.featured
          ? 'border-2 border-action shadow-xl shadow-action/10'
          : 'border border-border shadow-sm hover:border-action/40 hover:shadow-lg'
      )}
    >
      {plan.featured ? (
        <div className="bg-action px-5 py-2 text-center text-xs font-bold uppercase tracking-[0.14em] text-action-foreground">
          Best Value
        </div>
      ) : null}

      <CardHeader className="space-y-5 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className={cn(
                'border-proof/35 bg-proof/10 text-proof',
                plan.featured && 'border-action/35 bg-action/10 text-action'
              )}
            >
              {plan.eyebrow}
            </Badge>
            <CardTitle className="text-xl font-bold leading-tight lg:text-2xl">{plan.title}</CardTitle>
          </div>
          <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-action/10 text-action flex items-center justify-center">
            <ClipboardList className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold leading-6 text-foreground">{plan.bestFor}</p>
          <p className="text-sm leading-6 text-muted-foreground">{plan.outcome}</p>
        </div>

        <div className="rounded-lg border border-border bg-muted/35 p-4">
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold leading-none">${plan.prices[selectedPeriod]}</span>
            <span className="pb-1 text-sm font-medium text-muted-foreground">/month</span>
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {periodLabel} commitment
          </p>
        </div>

        <ContactButton
          className={cn(
            'w-full',
            plan.featured
              ? ctaStyles.primary
              : 'bg-foreground text-background hover:bg-foreground/90'
          )}
        >
          {SITE_CTA_LABELS.callback}
          <ArrowRight className="ml-2 h-4 w-4" />
        </ContactButton>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col p-5 pt-0 sm:p-6 sm:pt-0">
        <div className="space-y-3">
          {includedFeatures.map((feature) => (
            <FeatureRow key={feature.label} feature={feature} />
          ))}
        </div>

        {excludedFeatures.length > 0 ? (
          <div className="mt-5 border-t border-border pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Not included
            </p>
            <div className="space-y-2">
              {excludedFeatures.map((feature) => (
                <FeatureRow key={feature.label} feature={feature} />
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export function PricingSection() {
  const [selectedPeriod, setSelectedPeriod] = useState<PricingPeriod>('6months');

  return (
    <section id="pricing" className={sectionStyles.default}>
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="space-y-2 mb-5">
            <div className={headingStyles.rule} />
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Training Programs Tailored to Your Goals
            </h2>
            <div className={headingStyles.rule} />
          </div>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Pick the coaching lane that matches where you need the most structure. Every plan is personalized after intake.
          </p>
        </div>

        <div className="mb-8 text-center sm:mb-10">
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-foreground">Select Your Commitment Period</h3>
            <PeriodSelector selectedPeriod={selectedPeriod} onPeriodChange={setSelectedPeriod} />
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} selectedPeriod={selectedPeriod} />
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 border-t border-border pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-semibold text-foreground">
              Not sure which plan fits?
            </p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Use the intake form and Lane can point you to the right coaching level.
            </p>
          </div>
          <ContactButton size="default" variant="outline" className={cn('shrink-0', ctaStyles.outline)}>
            {SITE_CTA_LABELS.callback}
          </ContactButton>
        </div>
      </div>
    </section>
  );
}
