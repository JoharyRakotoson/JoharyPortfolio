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

export const home = {
  title: 'DÉVELOPPEUR FULLSTACK',
  name: 'MICHAEL RAKOTOSON',
  description:
    'Je crée des applications web modernes et évolutives, pensées pour répondre aux besoins métier tout en offrant une expérience utilisateur fluide et une architecture solide.',
  cvLabel: 'Télécharger CV',
  projectsLabel: 'Voir mes projets',
};

export const skillsSection = {
  eyebrow: 'Compétences',
  title: 'Technologies maîtrisées',
};

export const contactSection = {
  title: 'Contactez-moi',
  socialTitle: 'Suivez-moi',
  formTitle: 'Collaborons ensemble',
  submitLabel: 'Envoyer',
  contactMethods: [
    {
      icon: 'email',
      label: 'Email',
      value: 'johariniainarakotoson40@gmail.com',
      hint: 'Réponse rapide garantie.',
    },
    {
      icon: 'phone',
      label: 'Contact',
      value: '+261 34 21 489 76',
      hint: 'Disponible pour projets et collaborations.',
    },
    {
      icon: 'location',
      label: 'Localisation',
      value: 'Antananarivo, Madagascar',
      hint: 'Ouvert aux opportunités hybrides, distantes et en présentiel.',
    },
  ],
  formFields: [
    { label: 'Nom', name: 'name', type: 'text', placeholder: 'Votre nom' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'email@gmail.com' },
    { label: 'Sujet', name: 'subject', type: 'text', placeholder: 'Sujet du message' },
    {
      label: 'Message',
      name: 'message',
      type: 'textarea',
      placeholder: 'Votre message',
      rows: 5,
    },
  ],
  messages: {
    validation: 'Veuillez remplir tous les champs.',
    success: 'Message envoyé !',
    error: "Erreur lors de l'envoi du message.",
    server: 'Impossible de contacter le serveur.',
  },
};

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
    title: 'Gestion de camions – BioTrans',
    tag: 'CodeIgniter',
    subtitle: 'Gestion intelligente de flotte de camions',
    date: '2021',
    client: 'Biotrans',
    role: "Développeur d'application Web",
    duration: '6 mois',
    image: '/images/projects/biotrans.webp',
    description:
      'Application web de gestion de flotte de camions (suivi, affectation, maintenance)',
    objectives: [
      'Centraliser le suivi des camions',
      'Gérer les affectations et la maintenance',
    ],
    technologies: ['CodeIgniter', 'MySQL', 'Bootstrap'],
    features: [
      'Suivi de la flotte en temps réel',
      'Gestion des affectations',
      'Planification de la maintenance',
    ],
    challenges: [
      'Coordination avec les équipes terrain',
      'Fiabilité des données en temps réel',
    ],
    results: ['Données de flotte centralisées', "Temps d'arrêt réduits"],
    link: '#',
  },
  {
    title: 'WOW – Tag IP',
    tag: 'Phoenix / Storybook',
    subtitle: 'Interfaces UI modernes et design system',
    date: '2022',
    client: 'Tag-lp',
    role: 'Développeur Web',
    duration: '1 an',
    image: '/images/projects/TagIP.webp',
    description:
      'Développement d’interfaces UI modernes et design system avec composants réutilisables',
    objectives: [
      'Développer des interfaces modernes et responsives',
      'Créer un design system réutilisable',
    ],
    technologies: ['Phoenix', 'Storybook', 'Tailwind CSS'],
    features: [
      'Composants UI réutilisables',
      'Documentation Storybook',
      'Design system global',
    ],
    challenges: [
      'Harmoniser les styles entre les produits',
      'Garantir l’accessibilité des composants',
    ],
    results: [
      'Design system adopté par l’entreprise',
      'Composants partagés entre les équipes',
    ],
    link: '#',
  },
  {
    title: 'Signature numérique – MEF',
    tag: 'Angular / Spring Boot',
    subtitle: 'Système de signature électronique sécurisé',
    date: '2025',
    client: "MEF",
    role: 'Stagiaire en développement IA & Web',
    duration: '6 mois',
    image: '/images/projects/signature.webp',
    description: 'Système de signature électronique sécurisé avec intégration Wacom',
    objectives: [
      'Sécuriser le processus de signature électronique',
      'Intégrer la capture de signature Wacom',
    ],
    technologies: ['Angular', 'Spring Boot', 'Wacom'],
    features: [
      'Signature électronique sécurisée',
      'Intégration matérielle Wacom',
      'Vérification des documents signés',
    ],
    challenges: [
      'Conformité et sécurité des signatures',
      'Intégration du matériel Wacom',
    ],
    results: ['Module de signature déployé', 'Processus de signature simplifié'],
    link: '#',
  },
  {
    title: 'Génération Angular – MEF',
    tag: 'Angular / FastAPI / RAG',
    subtitle: 'Génération automatique d’interfaces Angular par IA',
    date: '2025',
    client: "MEF",
    role: 'Stagiaire en développement IA & Web',
    duration: '6 mois',
    image: '/images/projects/codegen.webp',
    description: 'Plateforme de génération automatique d’interfaces Angular assistée par IA',
    objectives: [
      'Automatiser la génération d’interfaces Angular',
      'Exploiter les cahiers des charges via un système RAG',
    ],
    technologies: ['Angular', 'FastAPI', 'Python', 'RAG'],
    features: [
      'Génération de code Angular',
      'Système RAG sur les cahiers des charges',
      'API FastAPI',
    ],
    challenges: [
      'Qualité et cohérence du code généré',
      'Coupler le LLM au contexte métier',
    ],
    results: [
      'Gain de temps sur le développement',
      'Génération à partir de cahiers des charges',
    ],
    link: '#',
  },
  {
    title: 'CampusFlow',
    tag: 'React / Node.js',
    subtitle: 'Application de gestion universitaire',
    date: '2024',
    client: 'IT University',
    role: 'Développeur Full-Stack',
    duration: '3 mois',
    image: '/images/projects/Etudiant.webp',
    description:
      'Application web de gestion universitaire (cours, étudiants, emplois du temps)',
    objectives: [
      'Centraliser la gestion des cours et des étudiants',
      'Faciliter la création des emplois du temps',
    ],
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: ['Gestion des cours', 'Gestion des étudiants', 'Emplois du temps'],
    challenges: ['Gérer les conflits de planning', 'Concevoir une interface intuitive'],
    results: ['Organisation universitaire centralisée', 'Plannings optimisés'],
    link: '#',
  },
  {
    title: 'BioCanada – BioeSoil',
    tag: 'Shopify',
    subtitle: 'Site e-commerce d’huiles essentielles',
    date: '2023',
    client: 'BioCanada',
    role: 'Développeur Shopify',
    duration: '2 mois',
    image: '/images/projects/bio.webp',
    description:
      'Site e-commerce de vente d’huiles essentielles avec gestion produits et commandes',
    objectives: ['Lancer une boutique en ligne', 'Gérer les produits et les commandes'],
    technologies: ['Shopify', 'Liquid', 'Tailwind CSS'],
    features: ['Catalogue de produits', 'Gestion des commandes', 'Paiement en ligne'],
    challenges: [
      'Personnalisation du thème',
      'Optimisation du taux de conversion',
    ],
    results: ['Boutique en ligne opérationnelle', 'Gestion simplifiée des commandes'],
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
    description: 'Mobiquité, Bases de Données et Intégration de Systèmes',
    institution: 'IT University Andoharanofotsy',
  },
  {
    date: '2023',
    title: 'Licence en Développement Web',
    description: 'Développement web et applications modernes',
    institution: 'IT University Andoharanofotsy',
  },
  {
    date: '2017',
    title: 'Baccalauréat – Enseignement général',
    description: 'Série générale',
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
    period: 'Novembre 2025',
    role: 'Stagiaire en développement IA & Web',
    company: "MEF",
    description:
      "Conception et développement d'un module de signature numérique sécurisé avec Angular et Spring Boot. Mise en place d'un système de RAG permettant la génération automatique de code Angular à partir de cahiers des charges (TDR) avec FastAPI.",
  },
  {
    period: 'Février 2023',
    role: 'Développeur Web',
    company: 'Tag-lp',
    description:
      "Développement d'interfaces utilisateurs responsives et modernes avec Phoenix et Tailwind CSS. Conception du Design System UI global de l'entreprise pour harmoniser les produits.",
  },
  {
    period: 'Octobre 2022',
    role: 'Stagiaire en développement Web',
    company: 'Tag-lp',
    description:
      "Participation au développement des applications front end. Conception du système de design UI de l'entreprise.",
  },
  {
    period: 'Juin 2021',
    role: "Développeur d'application Web",
    company: 'Biotrans',
    description:
      "Conception d'une solution digitale pour la gestion intelligente de flotte de camions.",
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
