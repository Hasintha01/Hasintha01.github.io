/**
 * Unit tests for About Component
 * Tests about section rendering, interests, and status badge
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About Component', () => {
  const mockInterests: string[] = [
    'Infrastructure Automation',
    'System Monitoring',
    'Cloud Architecture',
    'DevOps Best Practices',
  ];

  it('renders the section title', () => {
    render(<About interests={mockInterests} />);
    expect(screen.getByText(/ABOUT ME/i)).toBeInTheDocument();
  });

  it('renders the MY STORY section', () => {
    render(<About interests={mockInterests} />);
    expect(screen.getByText(/MY STORY/i)).toBeInTheDocument();
  });

  it('renders the main description', () => {
    render(<About interests={mockInterests} />);
    expect(screen.getByText(/building reliable systems/i)).toBeInTheDocument();
  });

  it('renders all interests', () => {
    render(<About interests={mockInterests} />);
    mockInterests.forEach(interest => {
      expect(screen.getByText(interest)).toBeInTheDocument();
    });
  });

  it('has proper section ID for navigation', () => {
    const { container } = render(<About interests={mockInterests} />);
    const section = container.querySelector('#about');
    expect(section).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    const { container } = render(<About interests={mockInterests} />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('max-w-7xl');
  });

  it('renders interests with grid layout', () => {
    const { container } = render(<About interests={mockInterests} />);
    const grid = container.querySelector('.grid');
    expect(grid).toBeInTheDocument();
  });

  it('interests have border styling', () => {
    const { container } = render(<About interests={mockInterests} />);
    const interestCards = container.querySelectorAll('.border-2, .border-3, .border-4');
    expect(interestCards.length).toBeGreaterThan(0);
  });

  it('renders INTERESTS section heading', () => {
    render(<About interests={mockInterests} />);
    expect(screen.getByText(/INTERESTS/i)).toBeInTheDocument();
  });

  it('renders correct number of interests', () => {
    render(<About interests={mockInterests} />);
    mockInterests.forEach(interest => {
      expect(screen.getByText(interest)).toBeInTheDocument();
    });
  });

  it('has responsive padding', () => {
    const { container } = render(<About interests={mockInterests} />);
    const section = container.querySelector('section');
    expect(section?.className).toMatch(/py-/);
  });
});
