type ViewportConfig = {
  width: string
  initialScale: number
  maximumScale: number
  themeColor: { media: string; color: string }[]
}

export const viewport: ViewportConfig = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}