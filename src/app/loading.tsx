'use client';

import { ThemeProvider } from '@/lib/hooks/useTheme';

export default function Loading() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    </ThemeProvider>
  );
}