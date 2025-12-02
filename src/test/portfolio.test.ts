/**
 * Unit tests for Portfolio Data Module
 * Tests data imports, exports, and data integrity
 */

import { describe, it, expect } from 'vitest';
import {
  lastUpdated,
  navLinks,
  technologies,
  expertise,
  projects,
  homelabServices,
  articles,
  principles,
  contactLinks,
  interests,
} from '../data/portfolio';

describe('Portfolio Data Module', () => {
  describe('lastUpdated', () => {
    it('exports a valid lastUpdated date string', () => {
      expect(lastUpdated).toBeDefined();
      expect(typeof lastUpdated).toBe('string');
      expect(lastUpdated.length).toBeGreaterThan(0);
    });
  });

  describe('navLinks', () => {
    it('exports navigation links array', () => {
      expect(Array.isArray(navLinks)).toBe(true);
      expect(navLinks.length).toBeGreaterThan(0);
    });

    it('each nav link has required properties', () => {
      navLinks.forEach((link) => {
        expect(link).toHaveProperty('id');
        expect(link).toHaveProperty('label');
        expect(link).toHaveProperty('href');
        expect(link).toHaveProperty('decorationColor');
        expect(link.href).toMatch(/^#/); // Should be anchor links
      });
    });

    it('nav links have unique ids', () => {
      const ids = navLinks.map((link) => link.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });

  describe('technologies', () => {
    it('exports technologies array', () => {
      expect(Array.isArray(technologies)).toBe(true);
      expect(technologies.length).toBeGreaterThan(0);
    });

    it('each technology has required properties', () => {
      technologies.forEach((tech) => {
        expect(tech).toHaveProperty('id');
        expect(tech).toHaveProperty('name');
        expect(tech).toHaveProperty('icon');
        expect(tech).toHaveProperty('category');
      });
    });
  });

  describe('expertise', () => {
    it('exports expertise array', () => {
      expect(Array.isArray(expertise)).toBe(true);
      expect(expertise.length).toBeGreaterThan(0);
    });

    it('each expertise item is a string', () => {
      expertise.forEach((item) => {
        expect(typeof item).toBe('string');
        expect(item.length).toBeGreaterThan(0);
      });
    });
  });

  describe('projects', () => {
    it('exports projects array', () => {
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
    });

    it('each project has required properties', () => {
      projects.forEach((project) => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('bgGradient');
        expect(project).toHaveProperty('category');
        expect(project).toHaveProperty('categoryBg');
        expect(project).toHaveProperty('technologies');
        expect(project).toHaveProperty('githubUrl');
        expect(Array.isArray(project.technologies)).toBe(true);
      });
    });

    it('projects have unique ids', () => {
      const ids = projects.map((project) => project.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });

  describe('homelabServices', () => {
    it('exports homelab services array', () => {
      expect(Array.isArray(homelabServices)).toBe(true);
      expect(homelabServices.length).toBeGreaterThan(0);
    });

    it('each service has required properties', () => {
      homelabServices.forEach((service) => {
        expect(service).toHaveProperty('id');
        expect(service).toHaveProperty('name');
        expect(service).toHaveProperty('description');
        expect(service).toHaveProperty('icon');
        expect(service).toHaveProperty('bgColor');
      });
    });
  });

  describe('articles', () => {
    it('exports articles array', () => {
      expect(Array.isArray(articles)).toBe(true);
      expect(articles.length).toBeGreaterThan(0);
    });

    it('each article has required properties', () => {
      articles.forEach((article) => {
        expect(article).toHaveProperty('id');
        expect(article).toHaveProperty('title');
        expect(article).toHaveProperty('description');
        expect(article).toHaveProperty('icon');
        expect(article).toHaveProperty('bgGradient');
        expect(article).toHaveProperty('category');
        expect(article).toHaveProperty('categoryBg');
        expect(article).toHaveProperty('readTime');
        expect(article).toHaveProperty('date');
        expect(article).toHaveProperty('url');
        expect(article).toHaveProperty('tags');
        expect(Array.isArray(article.tags)).toBe(true);
      });
    });

    it('article URLs are valid', () => {
      articles.forEach((article) => {
        expect(article.url).toMatch(/^https?:\/\//);
      });
    });
  });

  describe('principles', () => {
    it('exports principles array', () => {
      expect(Array.isArray(principles)).toBe(true);
      expect(principles.length).toBe(3); // Hardcoded, should be 3
    });

    it('each principle has required properties', () => {
      principles.forEach((principle) => {
        expect(principle).toHaveProperty('id');
        expect(principle).toHaveProperty('title');
        expect(principle).toHaveProperty('description');
        expect(principle).toHaveProperty('icon');
        expect(principle).toHaveProperty('bgColor');
      });
    });

    it('has expected principle titles', () => {
      const titles = principles.map((p) => p.title);
      expect(titles).toContain('AUTOMATE EVERYTHING');
      expect(titles).toContain('MONITOR & OBSERVE');
      expect(titles).toContain('INFRASTRUCTURE AS CODE');
    });
  });

  describe('contactLinks', () => {
    it('exports contact links array', () => {
      expect(Array.isArray(contactLinks)).toBe(true);
      expect(contactLinks.length).toBeGreaterThan(0);
    });

    it('each contact link has required properties', () => {
      contactLinks.forEach((contact) => {
        expect(contact).toHaveProperty('id');
        expect(contact).toHaveProperty('label');
        expect(contact).toHaveProperty('icon');
        expect(contact).toHaveProperty('bgColor');
        expect(contact).toHaveProperty('link');
      });
    });

    it('contact links have valid URLs or mailto links', () => {
      contactLinks.forEach((contact) => {
        expect(contact.link).toMatch(/^(https?:\/\/|mailto:)/);
      });
    });

    it('includes expected contact platforms', () => {
      const labels = contactLinks.map((c) => c.label);
      expect(labels).toContain('Email');
      expect(labels).toContain('LinkedIn');
      expect(labels).toContain('GitHub');
    });
  });

  describe('interests', () => {
    it('exports interests array', () => {
      expect(Array.isArray(interests)).toBe(true);
      expect(interests.length).toBeGreaterThan(0);
    });

    it('each interest is a non-empty string', () => {
      interests.forEach((interest) => {
        expect(typeof interest).toBe('string');
        expect(interest.length).toBeGreaterThan(0);
      });
    });

    it('includes expected technical interests', () => {
      expect(interests).toContain('Linux Systems');
      expect(interests).toContain('Cloud Architecture');
      expect(interests).toContain('Automation');
    });
  });
});
