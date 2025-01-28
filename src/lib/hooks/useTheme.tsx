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
    const initialTheme = themes.find(t => t.value === defaultMode) || defaultTheme;
    return initialTheme;
  });
  const [mounted, setMounted] = useState(false);

  // Effect for initial client-side setup
  useEffect(() => {
    setMounted(true);
    const savedTheme = getInitialTheme();
    setTheme(savedTheme);
  }, []);

  // Effect for theme changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme.value);
      localStorage.setItem('theme', theme.value);
    }
  }, [theme, mounted]);

  const contextValue = {
    theme,
    setTheme,
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}