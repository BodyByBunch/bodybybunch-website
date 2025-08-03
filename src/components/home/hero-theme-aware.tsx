'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HeroSection2 } from './hero-section-dark';
import { HeroSectionLight } from './hero-section-light';

export function HeroThemeAware() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration flash by rendering a invisible container until mounted
  if (!mounted) {
    return (
      <div className="opacity-0 pointer-events-none">
        <HeroSectionLight />
      </div>
    );
  }

  // Once mounted, show the correct hero with smooth transition
  return (
    <div className="transition-opacity duration-200">
      {resolvedTheme === 'dark' ? <HeroSection2 /> : <HeroSectionLight />}
    </div>
  );
}