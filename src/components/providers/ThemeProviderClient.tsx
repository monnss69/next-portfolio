'use client';

import { ThemeProvider } from '@/lib/hooks/useTheme';

export function ThemeProviderClient({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}