'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HeroSection2 } from './hero-section-2';
import { HeroSectionLight } from './hero-section-light';

export function HeroThemeAware() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return light mode as default during SSR
    return <HeroSectionLight />;
  }

  // Determine the actual theme
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Use dark hero for dark theme, light hero for light theme
  return currentTheme === 'dark' ? <HeroSection2 /> : <HeroSectionLight />;
}