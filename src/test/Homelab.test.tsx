/**
 * Unit tests for Homelab Component
 * Tests homelab section rendering and service cards
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Homelab from '../components/Homelab';
import type { HomelabService } from '../types';

describe('Homelab Component', () => {
  const mockServices: HomelabService[] = [
    {
      id: 'service-1',
      name: 'Prometheus',
      icon: 'activity',
      description: 'Metrics collection and alerting system',
      bgColor: 'bg-orange-400',
    },
    {
      id: 'service-2',
      name: 'Grafana',
      icon: 'bar-chart',
      description: 'Visualization and analytics platform',
      bgColor: 'bg-purple-400',
    },
  ];

  it('renders the section title', () => {
    render(<Homelab services={mockServices} />);
    expect(screen.getByText(/HOMELAB SHOWCASE/i)).toBeInTheDocument();
  });

  it('renders all service cards', () => {
    render(<Homelab services={mockServices} />);
    expect(screen.getByText('Prometheus')).toBeInTheDocument();
    expect(screen.getByText('Grafana')).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(<Homelab services={mockServices} />);
    expect(screen.getByText(/Metrics collection and alerting system/i)).toBeInTheDocument();
    expect(screen.getByText(/Visualization and analytics platform/i)).toBeInTheDocument();
  });

  it('renders homelab architecture section', () => {
    render(<Homelab services={mockServices} />);
    expect(screen.getByText(/ARCHITECTURE/i)).toBeInTheDocument();
  });

  it('has proper section ID for navigation', () => {
    const { container } = render(<Homelab services={mockServices} />);
    const section = container.querySelector('#homelab');
    expect(section).toBeInTheDocument();
  });

  it('service cards have correct background colors', () => {
    const { container } = render(<Homelab services={mockServices} />);
    const orangeCard = container.querySelector('.bg-orange-400');
    const purpleCard = container.querySelector('.bg-purple-400');
    expect(orangeCard).toBeInTheDocument();
    expect(purpleCard).toBeInTheDocument();
  });

  it('has proper section styling', () => {
    const { container } = render(<Homelab services={mockServices} />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('py-12');
  });

  it('renders correct number of services', () => {
    render(<Homelab services={mockServices} />);
    expect(screen.getByText('Prometheus')).toBeInTheDocument();
    expect(screen.getByText('Grafana')).toBeInTheDocument();
  });

  it('has grid layout for services', () => {
    const { container } = render(<Homelab services={mockServices} />);
    const grid = container.querySelector('.grid');
    expect(grid).toBeInTheDocument();
  });

  it('service cards have border styling', () => {
    const { container } = render(<Homelab services={mockServices} />);
    const cards = container.querySelectorAll('.border-3, .border-4');
    expect(cards.length).toBeGreaterThan(0);
  });
});
