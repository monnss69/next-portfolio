import { env } from './env';

export const defaultSEO = {
  title: 'John Doe | Software Engineer',
  description: 'Personal portfolio website showcasing my work and experience in web development, design, and software engineering.',
  canonical: env.appUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.appUrl,
    siteName: 'John Doe Portfolio',
    title: 'John Doe | Software Engineer',
    description: 'Personal portfolio website showcasing my work and experience in web development, design, and software engineering.',
    images: [
      {
        url: `${env.appUrl}/meta-image.webp`,
        width: 1200,
        height: 630,
        alt: 'John Doe Portfolio',
      },
    ],
  },
  twitter: {
    handle: '@johndoe',
    site: '@johndoe',
    cardType: 'summary_large_image',
  },
}