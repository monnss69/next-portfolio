import { env } from './env';

const name = 'Monnss69';
const role = 'Software Engineer';
const description = 'Personal portfolio website showcasing my work and experience in web development, design, and software engineering.';

export const defaultSEO = {
  title: `${name} | ${role}`,
  description,
  canonical: env.appUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.appUrl,
    siteName: `${name} Portfolio`,
    title: `${name} | ${role}`,
    description,
    images: [
      {
        url: `${env.appUrl}/meta-image.webp`,
        width: 1200,
        height: 630,
        alt: `${name} Portfolio`,
      },
    ],
  },
  twitter: {
    handle: '@monnss69',
    site: '@monnss69',
    cardType: 'summary_large_image',
  },
}