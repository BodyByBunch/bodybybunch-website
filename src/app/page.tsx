import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';
import {
  HeroSection,
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
        <HeroSection />
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
