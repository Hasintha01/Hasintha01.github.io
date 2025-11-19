/**
 * Type definitions for portfolio data structures
 * These interfaces ensure type safety across all components
 */

/**
 * Project card interface
 * Represents a featured project with all necessary metadata
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgGradient: string;
  category: string;
  categoryBg: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string | null;
}

/**
 * Blog article interface
 * Represents a blog post or article with metadata
 */
export interface Article {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgGradient: string;
  category: string;
  categoryBg: string;
  readTime: string;
  date: string;
  url: string;
  tags: string[];
}

/**
 * Homelab service interface
 * Represents a self-hosted service in the homelab
 */
export interface HomelabService {
  id: string;
  name: string;
  icon: string;
  description: string;
  bgColor: string;
}

/**
 * Skill/Technology interface
 * Represents a technology or tool in the tech stack
 */
export interface Technology {
  id: string;
  name: string;
  icon: string;
  category: string;
}

/**
 * Philosophy principle interface
 * Represents a core DevOps philosophy principle
 */
export interface Principle {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}

/**
 * Contact link interface
 * Represents a social media or contact method
 */
export interface ContactLink {
  id: string;
  label: string;
  icon: string;
  bgColor: string;
  link: string;
}

/**
 * Navigation link interface
 * Represents a navigation menu item
 */
export interface NavLink {
  id: string;
  label: string;
  href: string;
  decorationColor: string;
}
