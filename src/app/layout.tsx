import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProviderClient } from "@/components/providers/ThemeProviderClient";
import { Analytics } from "@/components/providers/Analytics";
import { KeyboardShortcuts } from "@/components/providers/KeyboardShortcuts";
import { AppBar } from "@/components/ui/AppBar";
import { KeyboardHelp } from "@/components/ui/KeyboardHelp";
import { defaultSEO } from "@/lib/utils/seo";
import { skipToContent } from "@/lib/utils/a11y";

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
    apple: [
      { url: "/favicon.ico" },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a {...skipToContent} />
        <ThemeProviderClient>
          <AppBar />
          <main id="main-content" className="min-h-screen bg-base-100 text-base-content">
            {children}
          </main>
          <KeyboardHelp />
        </ThemeProviderClient>
        <Analytics />
        <KeyboardShortcuts />
      </body>
    </html>
  );
}
