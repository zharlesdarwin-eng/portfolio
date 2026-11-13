export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  location: string;
  timezone: string;
  email: string;
  shortBio: string;
  socials: {
    name: string;
    url: string;
  }[];
  navLinks: {
    title: string;
    href: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  client: string;
  description: string;
  fullOverview: string;
  challenges: string;
  solution: string;
  technologies: string[];
  image: string;
  gallery: string[];
  color: string;
  liveUrl: string;
  nextProjectId?: string;
}
