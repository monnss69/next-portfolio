'use client';

import { ThemeProvider } from '@/lib/hooks/useTheme';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <p className="text-base-content/70 mb-8">{error.message}</p>
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
}