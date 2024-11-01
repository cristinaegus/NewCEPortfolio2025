import type { SiteConfig } from '../types';

export const SITE_CONFIG: SiteConfig = {
  title: "Ibrahim Elkamali's Portfolio",
  description:
    'Front-end web development portfolio showcasing skills and projects',
  url: 'https://www.ibrahimelkamali.com/',
  author: 'Ibrahim Elkamali',
  social: {
    github: 'https://github.com/Marve10s',
    telegram: 'https://t.me/TheCr1nge',
    instagram: 'https://www.instagram.com/_just._.him_/',
    upwork: 'https://www.upwork.com/freelancers/~010112495fc6870d30',
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
