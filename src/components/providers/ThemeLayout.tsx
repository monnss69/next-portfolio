// src/components/providers/ThemeLayout.tsx
import { ThemeProviderClient } from "./ThemeProviderClient";

export default function ThemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProviderClient>
      {children}
    </ThemeProviderClient>
  );
}