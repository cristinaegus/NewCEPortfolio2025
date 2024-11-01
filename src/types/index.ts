<<<<<<< HEAD
export interface NavLink {
  href: string;
  label: string;
}

=======
>>>>>>> 47cfc0121705570c2b413d3699ae3c051a788490
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
<<<<<<< HEAD
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
=======
}

export interface NavCard {
  title: string;
  gradientFrom: string;
  gradientTo: string;
  to: string;
>>>>>>> 47cfc0121705570c2b413d3699ae3c051a788490
}
