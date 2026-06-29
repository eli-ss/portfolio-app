export interface Skill {
  name: string;
  percentage: number;
  category: 'Development' | 'Marketing' | 'Design';
  icon: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
  category: string;
  featured?: boolean;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  type: 'experience' | 'education';
  description: string[];
  skills?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
