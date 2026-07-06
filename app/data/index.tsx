export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'A propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Éducation', href: '#education' },
  { label: 'Expérience', href: '#experience' },
];


export const aboutParagraphs = [
  `Diplômé d’un Master MBDS à l’ITU, je suis développeur Full-Stack, spécialisé dans la création d’applications web modernes, performantes et évolutives. J’interviens sur l’ensemble du cycle de développement.`,
  `J’aime transformer des besoins métier en solutions concrètes. J’apprécie autant concevoir des interfaces simples et intuitives que construire des architectures solides et maintenables, avec une forte attention à la qualité et à l’expérience utilisateur.`,
  `Je cherche un environnement stimulant pour continuer à apprendre, progresser et collaborer avec des équipes passionnées. Curieux et adaptable, je m’intéresse aussi à l’IA, notamment aux LLM et au RAG.`,
  `Ce portfolio présente mes projets et ma manière de concevoir des applications web utiles, modernes et bien structurées.`,
];
export const qualities = [
  'Envie — Apprendre continuellement',
  'État d’esprit — Qualité & pragmatisme',
  'Adaptabilité — S’adapter aux stacks',
  'Curiosité — Veille & prototypage',
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
    title: "Gestion de camions – BioTrans",
    tag: "CodeIgniter",
    description: "Application web de gestion de flotte de camions (suivi, affectation, maintenance)",
  },
  {
    title: "WOW – Tag IP",
    tag: "Phoenix / Storybook",
    description: "Développement d’interfaces UI modernes et design system avec composants réutilisables",
  },
  {
    title: "Signature numérique – MEF",
    tag: "Angular / Spring Boot",
    description: "Système de signature électronique sécurisé avec intégration Wacom",
  },
  {
    title: "Génération Angular – MEF",
    tag: "Angular / FastAPI / RAG",
    description: "Plateforme de génération automatique d’interfaces Angular assistée par IA",
  },
  {
    title: "CampusFlow",
    tag: "React / Node.js",
    description: "Application web de gestion universitaire (cours, étudiants, emplois du temps)",
  },
  {
    title: "BioCanada – BioeSoil",
    tag: "Shopify",
    description: "Site e-commerce de vente d’huiles essentielles avec gestion produits et commandes",
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
    date: "2025",
    title: "Master 2 MBDS",
    description: "Mobiquité, Bases de Données et Intégration de Systèmes",
    institution: "IT University Andoharanofotsy",
  },
  {
    date: "2023",
    title: "Licence en Développement Web",
    description: "Développement web et applications modernes",
    institution: "IT University Andoharanofotsy",
  },
  {
    date: "2017",
    title: "Baccalauréat – Enseignement général",
    description: "Série générale",
    institution: "Le Petit Nid – Soavimbahoaka",
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
    period: "Novembre 2025",
    role: "Stagiaire en développement IA & Web",
    company: "Ministère de l'Économie et des Finances",
    description:
      "Conception et développement d'un module de signature numérique sécurisé avec Angular et Spring Boot. Mise en place d'un système de RAG permettant la génération automatique de code Angular à partir de cahiers des charges (TDR) avec FastAPI.",
  },
  {
    period: "Février 2023",
    role: "Développeur Web",
    company: "Tag-lp",
    description:
      "Développement d'interfaces utilisateurs responsives et modernes avec Phoenix et Tailwind CSS. Conception du Design System UI global de l'entreprise pour harmoniser les produits.",
  },
  {
    period: "Octobre 2022",
    role: "Stagiaire en développement Web",
    company: "Tag-lp",
    description:
      "Participation au développement des applications front end. Conception du système de design UI de l'entreprise.",
  },
  {
    period: "Juin 2021",
    role: "Développeur d'application Web",
    company: "Biotrans",
    description:
      "Conception d'une solution digitale pour la gestion intelligente de flotte de camions.",
  },
];

export const socialLink = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/johariniaina-michael-rakotoson-93359232b/",
    icon: "in",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/michael.rakotoson.906/",
    icon: "f",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rakotosonmichael?igsh=MWhneDd3OTVqbmVvcA==",
    icon: "ig",
  },
];