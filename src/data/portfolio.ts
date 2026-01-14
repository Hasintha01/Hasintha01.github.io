/**
 * Last portfolio updated date
 */
export const lastUpdated = 'January 14, 2026';
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
import navigationData from './navigation.json';
import principlesData from './principles.json';
import contactData from './contact.json';
import interestsData from './interests.json';

/**
 * Navigation menu items (loaded from JSON)
 */
export const navLinks: NavLink[] = navigationData.navLinks;

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
 * DevOps philosophy principles (loaded from JSON)
 */
export const principles: Principle[] = principlesData.principles;

/**
 * Contact links (loaded from JSON)
 */
export const contactLinks: ContactLink[] = contactData.contactLinks;

/**
 * User interests tags (loaded from JSON)
 */
export const interests: string[] = interestsData.interests;
