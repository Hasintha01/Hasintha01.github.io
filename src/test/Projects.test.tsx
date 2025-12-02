/**
 * Unit tests for Projects Component
 * Tests project card rendering, technology tags, and interaction elements
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';
import type { Project } from '../types';

describe('Projects Component', () => {
  const mockProjects: Project[] = [
    {
      id: 'project-1',
      title: 'Test Project 1',
      description: 'A comprehensive test project description for testing purposes',
      icon: 'folder-git-2',
      bgGradient: 'from-purple-200 to-purple-400',
      category: 'DEVOPS',
      categoryBg: 'bg-purple-400',
      technologies: ['Docker', 'Kubernetes', 'Terraform'],
      githubUrl: 'https://github.com/test/project1',
      demoUrl: 'https://demo.project1.com',
    },
    {
      id: 'project-2',
      title: 'Test Project 2',
      description: 'Another test project with different tech stack',
      icon: 'database',
      bgGradient: 'from-blue-200 to-blue-400',
      category: 'INFRASTRUCTURE',
      categoryBg: 'bg-blue-400',
      technologies: ['Python', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/test/project2',
      demoUrl: undefined,
    },
  ];

  it('renders the projects section title', () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByText('FEATURED PROJECTS')).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();
  });

  it('displays project descriptions', () => {
    render(<Projects projects={mockProjects} />);
    expect(
      screen.getByText('A comprehensive test project description for testing purposes')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Another test project with different tech stack')
    ).toBeInTheDocument();
  });

  it('displays category badges', () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByText('DEVOPS')).toBeInTheDocument();
    expect(screen.getByText('INFRASTRUCTURE')).toBeInTheDocument();
  });

  it('displays all technology tags', () => {
    render(<Projects projects={mockProjects} />);
    
    // Project 1 technologies
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
    expect(screen.getByText('Terraform')).toBeInTheDocument();
    
    // Project 2 technologies
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('Redis')).toBeInTheDocument();
  });

  it('renders GitHub links for all projects', () => {
    render(<Projects projects={mockProjects} />);
    const githubLinks = screen.getAllByText(/VIEW ON GITHUB/);
    expect(githubLinks).toHaveLength(2);
  });

  it('renders demo link when available', () => {
    render(<Projects projects={mockProjects} />);
    const demoLink = screen.getByText(/LIVE DEMO/);
    expect(demoLink).toBeInTheDocument();
  });

  it('GitHub links have correct href attributes', () => {
    render(<Projects projects={mockProjects} />);
    const allLinks = screen.getAllByRole('link');
    const githubLink1 = allLinks.find(
      (link) => link.getAttribute('href') === 'https://github.com/test/project1'
    );
    const githubLink2 = allLinks.find(
      (link) => link.getAttribute('href') === 'https://github.com/test/project2'
    );
    
    expect(githubLink1).toBeInTheDocument();
    expect(githubLink2).toBeInTheDocument();
  });

  it('demo link has correct href when provided', () => {
    render(<Projects projects={mockProjects} />);
    const allLinks = screen.getAllByRole('link');
    const demoLink = allLinks.find(
      (link) => link.getAttribute('href') === 'https://demo.project1.com'
    );
    
    expect(demoLink).toBeInTheDocument();
  });

  it('applies correct background gradient classes', () => {
    const { container } = render(<Projects projects={mockProjects} />);
    const projectCards = container.querySelectorAll('.bg-linear-to-br');
    expect(projectCards.length).toBeGreaterThan(0);
  });

  it('renders empty state when no projects provided', () => {
    render(<Projects projects={[]} />);
    expect(screen.getByText('FEATURED PROJECTS')).toBeInTheDocument();
    expect(screen.queryByText('Test Project 1')).not.toBeInTheDocument();
  });

  it('has proper accessibility with section id', () => {
    const { container } = render(<Projects projects={mockProjects} />);
    const section = container.querySelector('#projects');
    expect(section).toBeInTheDocument();
  });

  it('renders correct number of technology tags per project', () => {
    render(<Projects projects={mockProjects} />);
    const allTechTags = screen.getAllByText(/Docker|Kubernetes|Terraform|Python|PostgreSQL|Redis/);
    expect(allTechTags).toHaveLength(6); // 3 + 3 technologies
  });

  it('links open in new tab (target="_blank")', () => {
    render(<Projects projects={mockProjects} />);
    const externalLinks = screen.getAllByRole('link');
    externalLinks.forEach((link) => {
      if (link.getAttribute('href')?.startsWith('http')) {
        expect(link).toHaveAttribute('target', '_blank');
      }
    });
  });
});
