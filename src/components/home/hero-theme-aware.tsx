'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HeroSection } from './hero-section';

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
        <HeroSection theme="light" />
      </div>
    );
  }

  // Once mounted, show the correct hero with smooth transition
  return (
    <div className="transition-opacity duration-200">
      <HeroSection theme={resolvedTheme === 'dark' ? 'dark' : 'light'} />
    </div>
  );
}
