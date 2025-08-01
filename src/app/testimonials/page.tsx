
import { TestimonialsHero, TransformationsGrid } from '@/components/testimonials';
import { CTASection } from '@/components/cta';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <main>
        <TestimonialsHero />
        <TransformationsGrid />
        <CTASection />
      </main>
    </div>
  );
}
