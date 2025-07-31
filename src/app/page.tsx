import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';
import {
  HeroThemeAware,
  ServicesSection,
  CertificationsSection,
  TestimonialsSection,
  CTASection
} from '@/components/home';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroThemeAware />
        <ServicesSection />
        <Separator />
        <CertificationsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
