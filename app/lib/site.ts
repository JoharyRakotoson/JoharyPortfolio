export const siteName = 'RAKOTOSON Johariniaina Michael';

export const siteTitle =
  'RAKOTOSON Johariniaina Michael | Développeur Fullstack Web – Portfolio';

export const siteDescription =
  "Portfolio de RAKOTOSON Johariniaina Michael, développeur Fullstack web basé à Antananarivo, Madagascar. Diplômé d'un Master MBDS de l'IT University. Création d'applications web modernes avec React, Angular, Node.js, Spring Boot, PostgreSQL et MongoDB.";

export const siteKeywords = [
  'RAKOTOSON Johariniaina Michael',
  'Michael Rakotoson',
  'Johary Rakotoson',
  'Développeur fullstack',
  'Développeur fullstack web',
  'Développeur web',
  'Fullstack developer',
  'IT University',
  'IT University Madagascar',
  'Master MBDS',
  'Master 2 MBDS',
  'Antananarivo',
  'Madagascar',
  'applications web',
  'développement web',
  'React',
  'Angular',
  'Node.js',
  'Spring Boot',
  'Tailwind CSS',
  'PostgreSQL',
  'MongoDB',
  'Portfolio développeur web',
];

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, '');

  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return 'http://localhost:3000';
}
