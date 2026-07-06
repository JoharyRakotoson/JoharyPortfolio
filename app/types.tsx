import type { NavItem } from "./data";

type SkillItem = {
  name: string;
  image: string;
};

type ProjectItem = {
  title: string;
  tag: string;
  description: string;
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