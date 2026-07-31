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

export const home = {
  title: 'FULLSTACK DEVELOPER',
  name: 'MICHAEL RAKOTOSON',
  description:
    'I build modern and scalable web applications designed to meet business needs while delivering smooth user experience and solid architecture.',
  cvLabel: 'Download CV',
  projectsLabel: 'View my projects',
};

export const skillsSection = {
  eyebrow: 'Skills',
  title: 'Technologies I work with',
};

export const contactSection = {
  title: 'Contact me',
  socialTitle: 'Follow me',
  formTitle: 'Let’s work together',
  submitLabel: 'Send',
  contactMethods: [
    {
      icon: 'email',
      label: 'Email',
      value: 'johariniainarakotoson40@gmail.com',
      hint: 'Fast response guaranteed.',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+261 34 21 489 76',
      hint: 'Available for projects and collaborations.',
    },
    {
      icon: 'location',
      label: 'Location',
      value: 'Antananarivo, Madagascar',
      hint: 'Open to hybrid, remote and on-site opportunities.',
    },
  ],
  formFields: [
    { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'email@gmail.com' },
    { label: 'Subject', name: 'subject', type: 'text', placeholder: 'Message subject' },
    {
      label: 'Message',
      name: 'message',
      type: 'textarea',
      placeholder: 'Your message',
      rows: 5,
    },
  ],
  messages: {
    validation: 'Please fill in all fields.',
    success: 'Message sent!',
    error: 'An error occurred while sending the message.',
    server: 'Unable to reach the server.',
  },
};

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

export const projects: ProjectItem[] = [
  {
    title: 'Truck Fleet Management – BioTrans',
    tag: 'CodeIgniter',
    subtitle: 'Intelligent truck fleet management',
    date: '2021',
    client: 'Biotrans',
    role: 'Web Application Developer',
    duration: '6 months',
    image: '/images/projects/biotrans.webp',
    description:
      'Web application for truck fleet management (tracking, assignment, maintenance)',
    objectives: [
      'Centralize truck fleet tracking',
      'Manage assignments and maintenance',
    ],
    technologies: ['CodeIgniter', 'MySQL', 'Bootstrap'],
    features: [
      'Real-time fleet tracking',
      'Assignment management',
      'Maintenance scheduling',
    ],
    challenges: [
      'Coordination with field teams',
      'Reliability of real-time data',
    ],
    results: ['Centralized fleet data', 'Reduced downtime'],
    link: '#',
  },
  {
    title: 'WOW – Tag IP',
    tag: 'Phoenix / Storybook',
    subtitle: 'Modern UI interfaces and design system',
    date: '2022',
    client: 'Tag-lp',
    role: 'Web Developer',
    duration: '1 year',
    image: '/images/projects/TagIP.webp',
    description:
      'Development of modern UI interfaces and a design system with reusable components',
    objectives: [
      'Build modern and responsive interfaces',
      'Create a reusable design system',
    ],
    technologies: ['Phoenix', 'Storybook', 'Tailwind CSS'],
    features: [
      'Reusable UI components',
      'Storybook documentation',
      'Global design system',
    ],
    challenges: [
      'Harmonizing styles across products',
      'Ensuring component accessibility',
    ],
    results: [
      'Design system adopted company-wide',
      'Components shared across teams',
    ],
    link: '#',
  },
  {
    title: 'Digital Signature – MEF',
    tag: 'Angular / Spring Boot',
    subtitle: 'Secure electronic signature system',
    date: '2025',
    client: 'MEF',
    role: 'AI & Web Development Intern',
    duration: '6 months',
    image: '/images/projects/signature.webp',
    description: 'Secure electronic signature system with Wacom integration',
    objectives: [
      'Secure the electronic signature process',
      'Integrate Wacom signature capture',
    ],
    technologies: ['Angular', 'Spring Boot', 'Wacom'],
    features: [
      'Secure electronic signature',
      'Wacom hardware integration',
      'Signed document verification',
    ],
    challenges: [
      'Signature security and compliance',
      'Wacom hardware integration',
    ],
    results: ['Deployed signature module', 'Simplified signing process'],
    link: '#',
  },
  {
    title: 'Angular Generation – MEF',
    tag: 'Angular / FastAPI / RAG',
    subtitle: 'AI-assisted automatic Angular interface generation',
    date: '2025',
    client: 'MEF',
    role: 'AI & Web Development Intern',
    duration: '6 months',
    image: '/images/projects/codegen.webp',
    description: 'AI-assisted platform for automatic generation of Angular interfaces',
    objectives: [
      'Automate Angular interface generation',
      'Leverage technical specifications through a RAG system',
    ],
    technologies: ['Angular', 'FastAPI', 'Python', 'RAG'],
    features: [
      'Angular code generation',
      'RAG system over technical specifications',
      'FastAPI API',
    ],
    challenges: [
      'Quality and consistency of generated code',
      'Coupling the LLM with business context',
    ],
    results: [
      'Time savings in development',
      'Generation from technical specifications',
    ],
    link: '#',
  },
  {
    title: 'CampusFlow',
    tag: 'React / Node.js',
    subtitle: 'University management application',
    date: '2024',
    client: 'IT University',
    role: 'Full-Stack Developer',
    duration: '3 months',
    image: '/images/projects/Etudiant.webp',
    description:
      'Web application for university management (courses, students, timetables)',
    objectives: [
      'Centralize course and student management',
      'Simplify timetable creation',
    ],
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: ['Course management', 'Student management', 'Timetables'],
    challenges: [
      'Handling schedule conflicts',
      'Designing an intuitive interface',
    ],
    results: ['Centralized university organization', 'Optimized timetables'],
    link: '#',
  },
  {
    title: 'BioCanada – BioeSoil',
    tag: 'Shopify',
    subtitle: 'Essential oils e-commerce website',
    date: '2023',
    client: 'BioCanada',
    role: 'Shopify Developer',
    duration: '2 months',
    image: '/images/projects/bio.webp',
    description:
      'E-commerce site for selling essential oils with product and order management',
    objectives: ['Launch an online store', 'Manage products and orders'],
    technologies: ['Shopify', 'Liquid', 'Tailwind CSS'],
    features: ['Product catalog', 'Order management', 'Online payments'],
    challenges: ['Theme customization', 'Conversion rate optimization'],
    results: ['Operational online store', 'Simplified order management'],
    link: '#',
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
    company: 'MEF',
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
