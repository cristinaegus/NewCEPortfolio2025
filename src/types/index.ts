export interface NavLink {
  href: string;
  label: string;
}

export interface Card {
  id: number;
  name: string;
  designation: string;
  content: string;
}

export interface ProjectCard {
  title: string;
  description: string;
  technologies: string[];
  href: string;
  imgSrc: string;
  imgAlt: string;
  techColors?: Record<string, string>;
}

export interface TechnologyStyle {
  color: string;
  background: string;
  hover: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: string;
  social: Record<string, string>;
}
