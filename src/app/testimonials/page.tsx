import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TestimonialsHero, TransformationsGrid } from '@/components/testimonials';
import { CTASection } from '@/components/cta';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TestimonialsHero />
        <TransformationsGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
