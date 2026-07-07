export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
];

export const aboutParagraphs = [
  `Graduate of a Master's in MBDS from ITU, I am a Full-Stack developer specialized in creating modern, high-performance, and scalable web applications. I work across the entire development cycle.`,
  `I enjoy turning business needs into concrete solutions. I like designing simple and intuitive interfaces just as much as building solid and maintainable architectures, with strong attention to quality and user experience.`,
  `I am looking for a stimulating environment to keep learning, growing, and collaborating with passionate teams. Curious and adaptable, I am also interested in AI, particularly LLMs and RAG.`,
  `This portfolio showcases my projects and my approach to designing useful, modern, and well-structured web applications.`,
];
export const qualities = [
  'Drive — Continuous learning',
  'Mindset — Quality & pragmatism',
  'Adaptability — Adjusting to different stacks',
  'Curiosity — Research & prototyping',
  'Collaboration — Pair programming & communication',
];

export type SkillItem = {
  name: string;
  image: string;
};

export const skills: SkillItem[] = [
  { name: 'React', image: '/stacks/reactjs.svg' },
  { name: 'Angular', image: '/stacks/angular.svg' },
  { name: 'Spring', image: '/stacks/spring.svg' },
  { name: 'Tailwind', image: '/stacks/tailwindcss.svg' },
  { name: 'Node.js', image: '/stacks/nodejs.svg' },
  { name: 'MongoDB', image: '/stacks/mongodb.svg' },
  { name: 'Git', image: '/stacks/git.svg' },
  { name: 'Figma', image: '/stacks/figma.svg' },
  { name: 'PostgreSQL', image: '/stacks/postgresql.svg' },
  { name: 'MySQL', image: '/stacks/mysql.svg' },
  { name: 'Phoenix', image: '/stacks/phoenix.svg' },
];

export type ProjectItem = {
  title: string;
  tag: string;
  description: string;
};

export const projects: ProjectItem[] = [
  {
    title: 'Truck Fleet Management – BioTrans',
    tag: 'CodeIgniter',
    description: 'Web application for truck fleet management (tracking, assignment, maintenance)',
  },
  {
    title: 'WOW – Tag IP',
    tag: 'Phoenix / Storybook',
    description: 'Development of modern UI interfaces and a design system with reusable components',
  },
  {
    title: 'Digital Signature – MEF',
    tag: 'Angular / Spring Boot',
    description: 'Secure electronic signature system with Wacom integration',
  },
  {
    title: 'Angular Generation – MEF',
    tag: 'Angular / FastAPI / RAG',
    description: 'AI-assisted platform for automatic generation of Angular interfaces',
  },
  {
    title: 'CampusFlow',
    tag: 'React / Node.js',
    description: 'Web application for university management (courses, students, timetables)',
  },
  {
    title: 'BioCanada – BioeSoil',
    tag: 'Shopify',
    description: 'E-commerce site for selling essential oils with product and order management',
  },
];

export type EducationItem = {
  date: string;
  title: string;
  description: string;
  institution: string;
};

export const educationData: EducationItem[] = [
  {
    date: '2025',
    title: 'Master 2 MBDS',
    description: 'Mobility, Databases and Systems Integration',
    institution: 'IT University Andoharanofotsy',
  },
  {
    date: '2023',
    title: "Bachelor's Degree in Web Development",
    description: 'Web development and modern applications',
    institution: 'IT University Andoharanofotsy',
  },
  {
    date: '2017',
    title: 'Baccalaureate – General Education',
    description: 'General track',
    institution: 'Le Petit Nid – Soavimbahoaka',
  },
];

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};

export const experiences: ExperienceItem[] = [
  {
    period: 'November 2025',
    role: 'AI & Web Development Intern',
    company: 'Ministry of Economy and Finance',
    description:
      'Design and development of a secure digital signature module using Angular and Spring Boot. Implementation of a RAG system enabling automatic generation of Angular code from technical specifications (TDR) using FastAPI.',
  },
  {
    period: 'February 2023',
    role: 'Web Developer',
    company: 'Tag-lp',
    description:
      "Development of responsive and modern user interfaces with Phoenix and Tailwind CSS. Design of the company's global UI Design System to harmonize products.",
  },
  {
    period: 'October 2022',
    role: 'Web Development Intern',
    company: 'Tag-lp',
    description:
      "Participated in front-end application development. Design of the company's UI design system.",
  },
  {
    period: 'June 2021',
    role: 'Web Application Developer',
    company: 'Biotrans',
    description: 'Design of a digital solution for intelligent truck fleet management.',
  },
];

export const socialLink = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/johariniaina-michael-rakotoson-93359232b/',
    icon: 'in',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/michael.rakotoson.906/',
    icon: 'f',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/rakotosonmichael?igsh=MWhneDd3OTVqbmVvcA==',
    icon: 'ig',
  },
];
