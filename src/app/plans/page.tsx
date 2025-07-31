import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PricingSection } from '@/components/home';

export default function PlansPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
