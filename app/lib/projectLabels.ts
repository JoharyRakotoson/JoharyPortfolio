export const projectLabels = {
  date: { fr: 'Date', en: 'Date' },
  client: { fr: 'Client', en: 'Client' },
  role: { fr: 'Rôle', en: 'Role' },
  duration: { fr: 'Durée', en: 'Duration' },
  description: { fr: 'Description', en: 'Description' },
  objectives: { fr: 'Objectifs', en: 'Objectives' },
  technologies: { fr: 'Technologies', en: 'Tech Stack' },
  features: { fr: 'Fonctionnalités', en: 'Features' },
  challenges: { fr: 'Défis', en: 'Challenges' },
  results: { fr: 'Résultats', en: 'Results' },
  close: { fr: 'Fermer', en: 'Close' },
} as const;

export function projectLabel(lang: string, key: keyof typeof projectLabels) {
  return lang === 'fr' ? projectLabels[key].fr : projectLabels[key].en;
}
