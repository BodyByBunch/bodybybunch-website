import { Separator } from '@/components/ui/separator';
import {
  HeroThemeAware,
  WhySection,
  ServicesSection,
  TestimonialsSectionEnhanced,
  PricingSection
} from '@/components/home';
import { CTASection } from '@/components/cta';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroThemeAware />
      <WhySection />
      <ServicesSection />
      <Separator />
      <PricingSection />
      <TestimonialsSectionEnhanced layout="circular" />
      <CTASection />
    </div>
  );
}