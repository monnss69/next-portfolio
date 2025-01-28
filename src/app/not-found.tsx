import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-base-content/70 mb-8">Could not find requested resource</p>
      <Link href="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  );
}