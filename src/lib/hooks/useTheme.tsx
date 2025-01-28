'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { Theme } from '@/types';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const themes: Theme[] = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'modern' },
];

const defaultTheme = themes[1];

const ThemeContext = createContext<ThemeContextType | null>(null);

function getInitialTheme(): Theme {
  if (typeof window !== 'undefined') {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      return themes.find(t => t.value === savedTheme) || defaultTheme;
    }
  }
  return defaultTheme;
}

export function ThemeProvider({
  children,
  defaultMode = defaultTheme.value,
}: {
  children: React.ReactNode;
  defaultMode?: string;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return themes.find(t => t.value === savedTheme) || defaultTheme;
      }
    }
    return themes.find(t => t.value === defaultMode) || defaultTheme;
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme.value);
      localStorage.setItem('theme', theme.value);
    }
  }, [theme, mounted]);

  // Prevent hydration mismatch
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    // Return a default theme instead of throwing an error
    return {
      theme: defaultTheme,
      setTheme: () => {
        console.warn('ThemeProvider not found, using default theme');
      },
    };
  }
  return context;
}