import { HeroSection } from './hero-section';
import { HeroSection2 } from './hero-section-2';
import { HeroSectionLight } from './hero-section-light';

interface HeroSwitcherProps {
  variant?: 'original' | 'background-image' | 'light-mode';
}

export function HeroSwitcher({ variant = 'light-mode' }: HeroSwitcherProps) {
  switch (variant) {
    case 'original':
      return <HeroSection />;
    case 'background-image':
      return <HeroSection2 />;
    case 'light-mode':
      return <HeroSectionLight />;
    default:
      return <HeroSectionLight />;
  }
}

// Convenience exports for easy switching
export { HeroSection as OriginalHero } from './hero-section';
export { HeroSection2 as BackgroundImageHero } from './hero-section-2';
export { HeroSectionLight as LightModeHero } from './hero-section-light'; 