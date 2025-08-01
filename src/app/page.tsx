import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';
import {
  HeroThemeAware,
  WhySection,
  ServicesSection,
  CertificationsSection,
  TestimonialsSectionEnhanced,
  PricingSection
} from '@/components/home';
import { CTASection } from '@/components/cta';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroThemeAware />
        <WhySection />
        <ServicesSection />
        <Separator />
        <PricingSection />
        <TestimonialsSectionEnhanced layout="circular" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
