export const footerLabels = {
  navigation: { fr: 'Navigation', en: 'Navigation' },
  contact: { fr: 'Contact', en: 'Contact' },
  skills: { fr: 'Compétences', en: 'Skills' },
  about: { fr: 'Développeur Fullstack Web', en: 'Fullstack Web Developer' },
  tagline: {
    fr: 'Créons ensemble des expériences web mémorables.',
    en: "Let's build memorable web experiences together.",
  },
  rights: { fr: 'Tous droits réservés', en: 'All rights reserved' },
  location: { fr: 'Antananarivo, Madagascar', en: 'Antananarivo, Madagascar' },
} as const;

export function footerLabel(lang: string, key: keyof typeof footerLabels) {
  return lang === 'fr' ? footerLabels[key].fr : footerLabels[key].en;
}
