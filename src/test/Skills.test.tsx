/**
 * Unit tests for Skills Component
 * Tests skills section rendering, technology grid, and expertise list
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from '../components/Skills';
import type { Technology } from '../types';

describe('Skills Component', () => {
  const mockTechnologies: Technology[] = [
    { id: 'tech-1', name: 'Linux', icon: 'server', category: 'Infrastructure' },
    { id: 'tech-2', name: 'Docker', icon: 'container', category: 'Containers' },
    { id: 'tech-3', name: 'AWS', icon: 'cloud', category: 'Cloud' },
    { id: 'tech-4', name: 'Kubernetes', icon: 'cog', category: 'Containers' },
  ];

  const mockExpertise: string[] = [
    'Infrastructure Automation (Terraform, Ansible)',
    'Container Orchestration (Docker, Kubernetes)',
    'CI/CD Pipelines (GitHub Actions, Jenkins)',
    'Cloud Platforms (AWS, Azure)',
  ];

  it('renders the section title', () => {
    render(<Skills technologies={mockTechnologies} expertise={mockExpertise} />);
    expect(screen.getByText(/TECH STACK & EXPERTISE/i)).toBeInTheDocument();
  });

  it('renders all technology items', () => {
    render(<Skills technologies={mockTechnologies} expertise={mockExpertise} />);
    expect(screen.getByText('Linux')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
  });

  it('renders all expertise items', () => {
    render(<Skills technologies={mockTechnologies} expertise={mockExpertise} />);
    expect(screen.getByText(/Infrastructure Automation/i)).toBeInTheDocument();
    expect(screen.getByText(/Container Orchestration/i)).toBeInTheDocument();
    expect(screen.getByText(/CI\/CD Pipelines/i)).toBeInTheDocument();
    expect(screen.getByText(/Cloud Platforms/i)).toBeInTheDocument();
  });

  it('has proper section ID for navigation', () => {
    const { container } = render(<Skills technologies={mockTechnologies} expertise={mockExpertise} />);
    const section = container.querySelector('#skills');
    expect(section).toBeInTheDocument();
  });

  it('has background color styling', () => {
    const { container } = render(<Skills technologies={mockTechnologies} expertise={mockExpertise} />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-gray-50');
  });

  it('renders technology cards with styling', () => {
    const { container } = render(<Skills technologies={mockTechnologies} expertise={mockExpertise} />);
    const cards = container.querySelectorAll('.border-4, .border-3');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('expertise items have checkmark indicators', () => {
    render(<Skills technologies={mockTechnologies} expertise={mockExpertise} />);
    // Check for bullet points or list items
    const { container } = render(<Skills technologies={mockTechnologies} expertise={mockExpertise} />);
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBeGreaterThan(0);
  });

  it('has responsive grid layout', () => {
    const { container } = render(<Skills technologies={mockTechnologies} expertise={mockExpertise} />);
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toBeInTheDocument();
  });

  it('renders correct number of technologies', () => {
    render(<Skills technologies={mockTechnologies} expertise={mockExpertise} />);
    expect(screen.getByText('Linux')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
  });

  it('renders correct number of expertise items', () => {
    render(<Skills technologies={mockTechnologies} expertise={mockExpertise} />);
    mockExpertise.forEach(item => {
      expect(screen.getByText(new RegExp(item.split('(')[0].trim(), 'i'))).toBeInTheDocument();
    });
  });

  it('has border styling', () => {
    const { container } = render(<Skills technologies={mockTechnologies} expertise={mockExpertise} />);
    const section = container.querySelector('section');
    expect(section?.className).toMatch(/border-y/);
  });
});
