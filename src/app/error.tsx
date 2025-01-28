'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-base-content/70 mb-8">{error.message}</p>
      <button
        onClick={() => reset()}
        className="btn btn-primary"
      >
        Try again
      </button>
    </div>
  );
}