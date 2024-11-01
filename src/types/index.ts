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
}

export interface NavCard {
  title: string;
  gradientFrom: string;
  gradientTo: string;
  to: string;
}
