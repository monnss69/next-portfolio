import { Experience, Project, Technology, SocialLink } from '@/types';

export const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'Remote',
    period: '2021 - Present',
    description: [
      'Led development of microservices architecture using Node.js and TypeScript',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['TypeScript', 'Node.js', 'Docker', 'Kubernetes', 'AWS'],
  },
  // Add more experiences...
];

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with Next.js and Three.js',
    image: '/meta-image.webp',
    technologies: ['React', 'TypeScript', 'Next.js', 'Three.js', 'Tailwind CSS'],
    metrics: {
      stars: 25,
      forks: 8,
      issues: 2,
    },
    links: {
      github: 'https://github.com/username/portfolio',
      live: 'https://portfolio.dev',
    },
  },
  // Add more projects...
];

export const technologies: Technology[] = [
  {
    name: 'React',
    icon: 'logos:react',
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    category: 'languages',
  },
  // Add more technologies...
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/username',
    icon: 'mdi:github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/username',
    icon: 'mdi:linkedin',
  },
  // Add more social links...
];