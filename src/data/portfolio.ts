import { Experience, Project, Technology, SocialLink } from '@/types';

export const experiences: Experience[] = [
  {
    title: 'Junior Software Engineer',
    company: 'National University of Singapore, TeleHealthCore',
    location: 'Remote',
    period: 'Sep 2024 - Present',
    description: [
      'Led development of a full-stack healthcare platform experimental features using React, Express.js and integrating Claude AI API, reducing API response time by 40% through optimized React architecture',
      'Designed responsive UI/UX using Tailwind CSS and established RESTful API architecture',
      'Established automated QA testing framework using Playwright with 90% coverage across critical features',
    ],
    technologies: ['React', 'Express.js', 'Tailwind CSS', 'Playwright', 'REST API'],
  },
  {
    title: 'Research Consultant',
    company: 'WorldQuant BRAIN',
    location: 'Remote',
    period: 'Nov 2024 - Jan 2025',
    description: [
      'Created and optimized 100+ quantitative financial models (Alphas) using WorldQuant\'s BRAIN platform to predict market movements effectively',
      'Conducted extensive data analysis, leveraging a database of over 120,000 fields across diverse financial instruments and regions',
    ],
    technologies: ['Data Analysis', 'Quantitative Modeling', 'Financial Markets'],
  },
];

export const projects: Project[] = [
  {
    title: 'Academic Web Forum',
    description: 'Full-stack academic forum built with React, TypeScript, Go, and PostgreSQL, enabling real-time discussions across 3 specialized categories',
    image: '/projects/forum.jpg',
    technologies: ['React', 'TypeScript', 'Go', 'PostgreSQL', 'Tailwind CSS', 'JWT', 'Framer Motion'],
    metrics: {
      performance: 96,
      uptime: 99,
    },
    links: {
      github: 'https://github.com/monnss69/StudentHUB-frontend',
      live: 'https://student-hub-frontend.vercel.app/',
    },
  },
  {
    title: 'JPMorgan Chase & Co. Quantitative Research Virtual Experience Program',
    description: 'Completed a simulation focused on quantitative research methods, analyzing loan books and using dynamic programming for FICO score analysis',
    image: '/projects/jpmc.jpg',
    technologies: ['Quantitative Research', 'Dynamic Programming', 'Financial Analysis'],
    metrics: {
      completed: true,
      duration: '1 month',
    },
    links: {
      certificate: '/certificate.pdf',
    },
  }
];

export const technologies: Technology[] = [
  // Frontend
  {
    name: 'React',
    icon: 'logos:react',
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon',
    category: 'frontend'
  },
  {
    name: 'Framer Motion',
    icon: 'logos:framer',
    category: 'frontend'
  },
  
  // Backend
  {
    name: 'Express.js',
    icon: 'logos:express',
    category: 'backend'
  },
  {
    name: 'Go',
    icon: 'logos:go',
    category: 'backend'
  },
  {
    name: 'PostgreSQL',
    icon: 'logos:postgresql',
    category: 'backend'
  },

  // Languages
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    category: 'languages'
  },
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
    category: 'languages'
  },
  {
    name: 'Python',
    icon: 'logos:python',
    category: 'languages'
  },

  // Tools & Technologies
  {
    name: 'JWT',
    icon: 'logos:jwt-icon',
    category: 'tools'
  },
  {
    name: 'REST API',
    icon: 'logos:rest',
    category: 'tools'
  },
  {
    name: 'Playwright',
    icon: 'logos:playwright',
    category: 'tools'
  },
  {
    name: 'Vercel',
    icon: 'logos:vercel-icon',
    category: 'tools'
  },
  {
    name: 'Supabase',
    icon: 'logos:supabase-icon',
    category: 'tools'
  },
  {
    name: 'bcrypt',
    icon: 'logos:nodejs-icon',
    category: 'tools'
  },
  {
    name: 'Dynamic Programming',
    icon: 'carbon:algorithm',
    category: 'tools'
  }
];

// Add categories typed constant for type safety
export const techCategories = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  languages: 'Programming Languages',
  tools: 'Tools & Technologies'
} as const;

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/monnss69',
    icon: 'mdi:github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ph%E1%BA%A1m-h%E1%BA%A3i-minh-74950829b/',
    icon: 'mdi:linkedin',
  }
];