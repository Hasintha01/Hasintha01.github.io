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
      description: 'Metrics collection & time-series storage',
      bgColor: 'bg-orange-50',
    },
    {
      id: 'service-2',
      name: 'Grafana',
      description: 'Visualization & alerting dashboards',
      bgColor: 'bg-pink-50',
    },
    {
      id: 'service-3',
      name: 'Node Exporter',
      description: 'System metrics from endpoint servers',
      bgColor: 'bg-blue-50',
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
    expect(screen.getByText('Node Exporter')).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(<Homelab services={mockServices} />);
    expect(screen.getByText(/Metrics collection & time-series storage/i)).toBeInTheDocument();
    expect(screen.getByText(/Visualization & alerting dashboards/i)).toBeInTheDocument();
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
    const orangeCard = container.querySelector('.bg-orange-50');
    const pinkCard = container.querySelector('.bg-pink-50');
    const blueCard = container.querySelector('.bg-blue-50');
    expect(orangeCard).toBeInTheDocument();
    expect(pinkCard).toBeInTheDocument();
    expect(blueCard).toBeInTheDocument();
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
    expect(screen.getByText('Node Exporter')).toBeInTheDocument();
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
