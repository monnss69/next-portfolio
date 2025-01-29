// src/types/index.ts
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ProjectMetrics {
  performance?: number;
  uptime?: number;
  coverage?: number;
  completed?: boolean;
  duration?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: ProjectMetrics;
  links: {
    github?: string;
    live?: string;
    certificate?: string;
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

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
}