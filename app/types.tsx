import type { NavItem } from './data';

type SkillItem = {
  name: string;
  image: string;
};

type ProjectItem = {
  title: string;
  tag: string;
  subtitle: string;
  date: string;
  client: string;
  role: string;
  duration: string;
  image: string;
  description: string;
  objectives: string[];
  technologies: string[];
  features: string[];
  challenges: string[];
  results: string[];
  link: string;
};

type EducationItem = {
  date: string;
  title: string;
  description: string;
  institution: string;
};

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};

export type LangData = {
  navItems: NavItem[];
  home: {
    title: string;
    name: string;
    description: string;
    cvLabel: string;
    projectsLabel: string;
  };
  skillsSection: {
    eyebrow: string;
    title: string;
  };
  contactSection: {
    title: string;
    socialTitle: string;
    formTitle: string;
    submitLabel: string;
    contactMethods: {
      icon: string;
      label: string;
      value: string;
      hint: string;
    }[];
    formFields: {
      label: string;
      name: string;
      type: 'text' | 'email' | 'textarea';
      placeholder: string;
      rows?: number;
    }[];
    messages: {
      validation: string;
      success: string;
      error: string;
      server: string;
    };
  };
  aboutParagraphs: string[];
  qualities: string[];
  skills: SkillItem[];
  projects: ProjectItem[];
  educationData: EducationItem[];
  experiences: ExperienceItem[];
  socialLink: {
    name: string;
    url: string;
    icon: string;
  }[];
};
