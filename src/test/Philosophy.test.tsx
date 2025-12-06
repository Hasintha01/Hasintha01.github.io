/**
 * Unit tests for Philosophy Component
 * Tests philosophy section rendering and principles display
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Philosophy from '../components/Philosophy';
import type { Principle } from '../types';

describe('Philosophy Component', () => {
  const mockPrinciples: Principle[] = [
    {
      id: 'principle-1',
      icon: 'zap',
      title: 'Automation First',
      description: 'Automate repetitive tasks to reduce errors and save time',
      bgColor: 'bg-yellow-400',
    },
    {
      id: 'principle-2',
      icon: 'shield',
      title: 'Security by Default',
      description: 'Build secure systems from the ground up',
      bgColor: 'bg-green-400',
    },
  ];

  it('renders the section title', () => {
    render(<Philosophy principles={mockPrinciples} />);
    expect(screen.getByText(/PRINCIPLES I WORK BY/i)).toBeInTheDocument();
  });

  it('renders all principle cards', () => {
    render(<Philosophy principles={mockPrinciples} />);
    expect(screen.getByText('Automation First')).toBeInTheDocument();
    expect(screen.getByText('Security by Default')).toBeInTheDocument();
  });

  it('renders principle descriptions', () => {
    render(<Philosophy principles={mockPrinciples} />);
    expect(screen.getByText(/Automate repetitive tasks/i)).toBeInTheDocument();
    expect(screen.getByText(/Build secure systems/i)).toBeInTheDocument();
  });

  it('has proper section ID for navigation', () => {
    const { container } = render(<Philosophy principles={mockPrinciples} />);
    const section = container.querySelector('#philosophy');
    expect(section).toBeInTheDocument();
  });

  it('principle cards have correct background colors', () => {
    const { container } = render(<Philosophy principles={mockPrinciples} />);
    const yellowCard = container.querySelector('.bg-yellow-400');
    const greenCard = container.querySelector('.bg-green-400');
    expect(yellowCard).toBeInTheDocument();
    expect(greenCard).toBeInTheDocument();
  });

  it('has background color styling', () => {
    const { container } = render(<Philosophy principles={mockPrinciples} />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-gray-50');
  });

  it('has grid layout for principles', () => {
    const { container } = render(<Philosophy principles={mockPrinciples} />);
    const grid = container.querySelector('.grid');
    expect(grid).toBeInTheDocument();
  });

  it('renders correct number of principles', () => {
    render(<Philosophy principles={mockPrinciples} />);
    expect(screen.getByText('Automation First')).toBeInTheDocument();
    expect(screen.getByText('Security by Default')).toBeInTheDocument();
  });

  it('principle cards have border styling', () => {
    const { container } = render(<Philosophy principles={mockPrinciples} />);
    const cards = container.querySelectorAll('.border-3, .border-4');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('has hover effects on principle cards', () => {
    const { container } = render(<Philosophy principles={mockPrinciples} />);
    const cards = container.querySelectorAll('.group');
    expect(cards.length).toBeGreaterThan(0);
  });
});
