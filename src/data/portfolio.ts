/**
 * Portfolio data configuration
 * Centralized data source loading from JSON files
 * Provides type-safe access to all portfolio content
 */

import type {
  Project,
  Article,
  HomelabService,
  Technology,
  Principle,
  ContactLink,
  NavLink,
} from '../types';

// Import JSON data
import projectsData from './projects.json';
import skillsData from './skills.json';
import blogsData from './blogs.json';
import homelabData from './homelab.json';

/**
 * Navigation menu items
 */
export const navLinks: NavLink[] = [
  { id: 'nav-1', label: 'ABOUT', href: '#about', decorationColor: 'decoration-yellow-400' },
  { id: 'nav-2', label: 'SKILLS', href: '#skills', decorationColor: 'decoration-teal-400' },
  { id: 'nav-3', label: 'PROJECTS', href: '#projects', decorationColor: 'decoration-pink-400' },
  { id: 'nav-4', label: 'HOMELAB', href: '#homelab', decorationColor: 'decoration-purple-400' },
  { id: 'nav-5', label: 'BLOG', href: '#blog', decorationColor: 'decoration-yellow-400' },
  { id: 'nav-6', label: 'CONTACT', href: '#contact', decorationColor: 'decoration-teal-400' },
];

/**
 * Technologies/Tools in the tech stack (loaded from JSON)
 */
export const technologies: Technology[] = skillsData.technologies;

/**
 * Expertise areas (loaded from JSON)
 */
export const expertise: string[] = skillsData.expertise;

/**
 * Featured projects (loaded from JSON)
 */
export const projects: Project[] = projectsData.projects;

/**
 * Homelab services (loaded from JSON)
 */
export const homelabServices: HomelabService[] = homelabData.services;

/**
 * Blog articles (loaded from JSON)
 */
export const articles: Article[] = blogsData.articles;

/**
 * DevOps philosophy principles
 */
export const principles: Principle[] = [
  {
    id: 'principle-1',
    title: 'AUTOMATE EVERYTHING',
    description:
      'If you do it twice, automate it. Eliminate manual toil and let humans focus on creative problem-solving.',
    icon: '🤖',
    bgColor: 'bg-teal-400',
  },
  {
    id: 'principle-2',
    title: 'MONITOR & OBSERVE',
    description:
      "You can't fix what you can't see. Build observability into everything from day one.",
    icon: '📊',
    bgColor: 'bg-pink-400',
  },
  {
    id: 'principle-3',
    title: 'INFRASTRUCTURE AS CODE',
    description:
      'Treat infrastructure like software. Version control, code review, and test everything.',
    icon: '📝',
    bgColor: 'bg-yellow-400',
  },
];

/**
 * Contact links
 */
export const contactLinks: ContactLink[] = [
  {
    id: 'contact-1',
    label: 'Email',
    icon: 'mail',
    bgColor: 'bg-teal-100',
    link: 'mailto:hasintha@example.com',
  },
  {
    id: 'contact-2',
    label: 'LinkedIn',
    icon: 'linkedin',
    bgColor: 'bg-pink-100',
    link: '#',
  },
  {
    id: 'contact-3',
    label: 'Twitter',
    icon: 'twitter',
    bgColor: 'bg-yellow-100',
    link: '#',
  },
  {
    id: 'contact-4',
    label: 'Phone',
    icon: 'phone',
    bgColor: 'bg-purple-100',
    link: '#',
  },
];

/**
 * User interests tags
 */
export const interests: string[] = [
  'Linux Systems',
  'Cloud Architecture',
  'Automation',
  'Observability',
  'Containerization',
  'CI/CD',
  'Technical Writing',
  'Continuous Learning',
];
