export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
};

export type Skill = {
  name: string;
  icon: string;
};

export type Experience = {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
};

export type Education = {
  id: number;
  institution: string;
  degree: string;
  duration: string;
};

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  telegram?: string;
}