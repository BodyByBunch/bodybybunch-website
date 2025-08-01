
import { AboutHero, AboutStory, AboutCredentials } from '@/components/about';
import { TrainingGallery } from '@/components/about/training-gallery';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        <AboutHero />
        <AboutStory />
        <TrainingGallery />
        
        {/* <AboutCredentials /> */}
        
        {/* <AboutPhilosophy /> */}
      </main>
    </div>
  );
} 