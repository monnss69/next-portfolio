export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: {
    stars: number;
    forks: number;
    issues: number;
  };
  links: {
    github?: string;
    live?: string;
  };
}

export interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Theme {
  name: string;
  value: string;
}