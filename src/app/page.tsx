import { Separator } from '@/components/ui/separator';
import {
  HeroThemeAware,
  WhySection,
  ServicesSection,
  TestimonialsSectionEnhanced,
} from '@/components/home';
import { CTASection } from '@/components/cta';
import { PricingSection } from '@/components/pricing/pricing-section';

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