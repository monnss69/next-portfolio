'use client';

import { Analytics } from '@/components/providers/Analytics';
import { KeyboardShortcuts } from '@/components/providers/KeyboardShortcuts';
import { AppBar } from '@/components/ui/AppBar';
import { KeyboardHelp } from '@/components/ui/KeyboardHelp';
import ThemeLayout from '@/components/providers/ThemeLayout';
import { skipToContent } from '@/lib/utils/a11y';
import { Suspense } from 'react';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeLayout>
      <a {...skipToContent} />
      <AppBar />
      <main id="main-content" className="min-h-screen bg-base-100 text-base-content">
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </main>
      <KeyboardHelp />
      <Suspense fallback={null}>
        <Analytics />
      </Suspense>
      <KeyboardShortcuts />
    </ThemeLayout>
  );
}