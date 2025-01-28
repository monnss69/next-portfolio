// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/providers/Analytics";
import { KeyboardShortcuts } from "@/components/providers/KeyboardShortcuts";
import { AppBar } from "@/components/ui/AppBar";
import { KeyboardHelp } from "@/components/ui/KeyboardHelp";
import { defaultSEO } from "@/lib/utils/seo";
import { skipToContent } from "@/lib/utils/a11y";
import ThemeLayout from "@/components/providers/ThemeLayout";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...defaultSEO,
  metadataBase: new URL(defaultSEO.canonical),
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: [{ url: "/favicon.ico" }],
  },
  alternates: {
    canonical: "/",
  },
};

export { viewport } from './viewport';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
      </body>
    </html>
  );
}