export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  thesis?: string;
  details: string[];
  url?: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
  url?: string;
}

export interface Grant {
  title: string;
  role: string;
  period: string;
  amount: string;
  description: string[];
  url?: string;
}

export interface Publication {
  year: string;
  citation: string;
  type: 'Journal' | 'Conference' | 'Book Chapter';
  url?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Award {
  year: string;
  title: string;
  institution: string;
  description?: string;
}

export interface Service {
  role: string;
  organization: string;
  details: string;
}

export interface Teaching {
  module: string;
  level: string;
  description: string;
}

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  media: MediaItem[];
  link?: string;
}