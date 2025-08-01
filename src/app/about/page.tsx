import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AboutHero, AboutStory, AboutCredentials } from '@/components/about';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutCredentials />
        {/* <AboutPhilosophy /> */}
      </main>
      <Footer />
    </div>
  );
} 