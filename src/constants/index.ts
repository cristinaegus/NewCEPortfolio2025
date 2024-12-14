import type { SiteConfig } from '../types';

export const SITE_CONFIG: SiteConfig = {
  title: "Cristina Egusquiza's Portfolio",
  description:
    'Front-end web development portfolio showcasing skills and projects',
  url: '',
  author: 'Cristina Egusquiza',
  social: {
    github: 'https://github.com/cristinaegus',
    LinkedIn: 'https://www.linkedin.com/in/cristina-egusquiza-875a4134/',
    email: 'mailto:egusquizacristina@gmail.com',
  },
};

export const ANIMATION_CONFIG = {
  cardOffset: 10,
  scaleFactor: 0.06,
  flipInterval: 5000,
} as const;

export const TECH_COLORS = {
  React: { color: '#61DAFB', hover: '#4FA8CC' },
  Astro: { color: '#FF5D01', hover: '#CC4A01' },
  Tailwind: { color: '#38B2AC', hover: '#2C8F8A' },
  // Add other tech colors...
} as const;
