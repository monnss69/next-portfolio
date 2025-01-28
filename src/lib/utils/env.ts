export const env = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  gaTrackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  githubToken: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/username',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/username',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/username',
  },
} as const;