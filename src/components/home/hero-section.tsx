'use client';

import { Button } from '@/components/ui/button';
import { CallButton } from '@/components/ui/call-button';
import { HERO_IMAGES, SITE_CTA_LABELS } from '@/data/site';
import { ctaStyles, headingStyles } from '@/lib/design';
import { cn } from '@/lib/utils';
import { ArrowRight, Award, Heart, MapPin, Target } from 'lucide-react';

import { HeroImageCarousel } from '@/components/shared/hero-image-carousel';

type HeroTheme = keyof typeof HERO_IMAGES;

interface HeroSectionProps {
  theme?: HeroTheme;
}

const heroConfig = {
  light: {
    sectionClassName: 'overflow-hidden',
    carouselClassName: 'h-[340px] sm:h-[420px] lg:h-[600px]',
  },
  dark: {
    sectionClassName: 'px-4 lg:px-8',
    carouselClassName: 'h-[340px] sm:h-[440px] lg:h-[700px]',
  },
} as const;

export function HeroSection({ theme = 'light' }: HeroSectionProps) {
  const config = heroConfig[theme];
  const ClientsIcon = theme === 'dark' ? Award : Target;

  return (
    <section
      className={cn(
        'relative bg-background w-full max-w-full py-6 sm:py-14 lg:min-h-screen lg:flex lg:items-center lg:py-0 lg:pt-0',
        config.sectionClassName
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-3.5 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-2">
              <p className={cn(headingStyles.eyebrow, 'text-[0.7rem] sm:text-sm leading-snug max-w-[19rem] sm:max-w-none mx-auto lg:mx-0')}>
                ISSA Certified Personal Trainer & PN1 Nutritionist
              </p>
              <div className="w-12 sm:w-16 h-1 shadow-lg bg-proof mx-auto lg:mx-0" />
            </div>

            <div className="space-y-2.5 lg:space-y-5">
              <h1 className="text-[2.28rem] sm:text-6xl lg:text-7xl font-bold leading-[0.94] sm:leading-none lg:leading-tight text-foreground">
                <span className="text-foreground">Fitness.</span>
                <br />
                <span className="text-foreground">Nutrition.</span>
                <br />
                <span className="text-action">Accountability.</span>
              </h1>
              <p className="lg:hidden text-sm leading-relaxed max-w-[19rem] font-medium text-muted-foreground mx-auto">
                Personalized coaching for real accountability, in San Antonio and online.
              </p>
              <p className="hidden lg:block text-xl leading-relaxed max-w-lg font-medium text-muted-foreground mx-auto lg:mx-0">
                &quot;My passion revolves around people. I strive every day to help others become the best version of themselves.
                Fitness and nutrition aren&apos;t just a hobby for me. It is me. It&apos;s who I am.&quot;
              </p>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2.5 sm:gap-4 justify-center lg:justify-start">
              <CallButton
                size="lg"
                className={cn('h-10 sm:h-10 text-sm sm:text-lg px-3 sm:px-8 shadow-lg hover:shadow-xl transition-all duration-300', ctaStyles.primary)}
              >
                {SITE_CTA_LABELS.getStarted}
              </CallButton>
              <Button size="lg" variant="outline" className="h-10 sm:h-10 text-sm sm:text-lg px-3 sm:px-8 transition-all duration-300 border-text-subtle text-text-subtle hover:bg-brand hover:text-brand-foreground" asChild>
                <a href="#why">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Learn More
                </a>
              </Button>
            </div>

            <div className="hidden lg:block mt-8">
              <HeroStats ClientsIcon={ClientsIcon} />
            </div>
          </div>

          <div className="relative">
            <div className="max-w-4xl mx-auto px-1 sm:px-0">
              <HeroImageCarousel
                images={[...HERO_IMAGES[theme]]}
                showBadges={false}
                className={cn(
                  'relative w-full rounded-2xl overflow-hidden shadow-2xl',
                  config.carouselClassName
                )}
              />
            </div>
            <div className="flex flex-wrap justify-center lg:hidden gap-2.5 mt-3">
              <MobileStat icon={ClientsIcon} value="100+" label="Clients" />
              <MobileStat icon={MapPin} value="San Antonio" label="TX" compact />
              <MobileStat icon={Heart} value="5+ Years" label="Experience" compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStats({ ClientsIcon }: { ClientsIcon: typeof Award }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3 group">
        <div className="w-8 h-8 bg-action/10 rounded-lg flex items-center justify-center group-hover:bg-action/20 transition-colors">
          <ClientsIcon className="h-4 w-4 text-action" />
        </div>
        <div>
          <span className="text-lg font-bold text-foreground">100+</span>
          <span className="text-sm text-muted-foreground ml-2">Clients Transformed</span>
        </div>
      </div>
      <div className="flex items-center space-x-3 group">
        <div className="w-8 h-8 bg-proof/10 rounded-lg flex items-center justify-center group-hover:bg-proof/20 transition-colors">
          <MapPin className="h-4 w-4 text-proof" />
        </div>
        <div>
          <span className="text-lg font-bold text-foreground">San Antonio, TX</span>
          <span className="text-sm text-muted-foreground ml-2">Local & Online</span>
        </div>
      </div>
      <div className="flex items-center space-x-3 group">
        <div className="w-8 h-8 bg-action/10 rounded-lg flex items-center justify-center group-hover:bg-action/20 transition-colors">
          <Heart className="h-4 w-4 text-action" />
        </div>
        <div>
          <span className="text-lg font-bold text-foreground">5+ Years</span>
          <span className="text-sm text-muted-foreground ml-2">Experience</span>
        </div>
      </div>
    </div>
  );
}

function MobileStat({
  icon: Icon,
  value,
  label,
  compact = false,
}: {
  icon: typeof Award;
  value: string;
  label: string;
  compact?: boolean;
}) {
  return (
    <div className="bg-surface-raised px-3 py-2 rounded-lg shadow-sm border border-border">
      <div className="flex items-center space-x-2">
        <Icon className={cn('h-3.5 w-3.5', value === 'San Antonio' ? 'text-proof' : 'text-action')} />
        <div>
          <p className={cn('font-bold leading-tight text-foreground', compact ? 'text-[0.7rem]' : 'text-xs')}>{value}</p>
          <p className="text-[0.65rem] leading-tight text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
}
