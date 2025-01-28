'use client';

import { useKeyboard } from '@/lib/hooks/useKeyboard';
import { scrollToSection } from '@/lib/utils/scroll';
import { useTheme, themes } from '@/lib/hooks/useTheme';

export function KeyboardShortcuts() {
  const { theme, setTheme } = useTheme();

  useKeyboard({
    'h': () => scrollToSection('hero'),
    'e': () => scrollToSection('experience'),
    'p': () => scrollToSection('projects'),
    't': () => scrollToSection('technologies'),
    'c': () => scrollToSection('contact'),
    'd': () => {
      const currentIndex = themes.findIndex(t => t.value === theme.value);
      const nextIndex = (currentIndex + 1) % themes.length;
      setTheme(themes[nextIndex]);
    },
  });

  return null;
}