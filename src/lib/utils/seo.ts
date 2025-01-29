import { env } from './env';

const name = 'Pham Hai Minh';
const role = 'Computer Science Student';
const description = 'Computer Science student at National University of Singapore with experience in full-stack development and quantitative research.';

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
    handle: '@phm',
    site: '@phm',
    cardType: 'summary_large_image',
  },
};