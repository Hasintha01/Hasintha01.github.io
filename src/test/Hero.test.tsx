/**
 * Unit tests for Hero Component
 * Tests hero section rendering, CTA button, and responsive layout
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    expect(screen.getByText(/BUILDING RELIABLE CLOUD INFRASTRUCTURE/i)).toBeInTheDocument();
  });

  it('renders the subheadline', () => {
    render(<Hero />);
    expect(screen.getByText(/DevOps Intern at MillenniumIT ESP/i)).toBeInTheDocument();
  });

  it('renders the CTA button with correct link', () => {
    render(<Hero />);
    const ctaButton = screen.getByRole('link', { name: /View my work/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '#projects');
  });

  it('renders the profile image with correct alt text', () => {
    render(<Hero />);
    const profileImage = screen.getByAltText(/Professional portrait of Hasintha Pasindu/i);
    expect(profileImage).toBeInTheDocument();
  });

  it('renders the infrastructure focus card without an unsupported uptime claim', () => {
    render(<Hero />);
    expect(screen.getByText(/AWS · LINUX · OBSERVABILITY/i)).toBeInTheDocument();
    expect(screen.queryByText(/99.9% UPTIME/i)).not.toBeInTheDocument();
  });

  it('profile image has proper loading attributes', () => {
    render(<Hero />);
    const profileImage = screen.getByAltText(/Hasintha Pasindu/i);
    expect(profileImage).toHaveAttribute('loading', 'eager');
    expect(profileImage).toHaveAttribute('decoding', 'async');
  });

  it('has proper section ID for navigation', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('#hero');
    expect(section).toBeInTheDocument();
  });

  it('renders decorative graphic elements', () => {
    const { container } = render(<Hero />);
    // Check for decorative divs with background colors
    const decorativeElements = container.querySelectorAll('.bg-purple-400, .bg-pink-400');
    expect(decorativeElements.length).toBeGreaterThan(0);
  });

  it('has responsive padding classes', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('section');
    expect(section?.className).toMatch(/pt-20|sm:pt-24|md:pt-32/);
  });

  it('CTA button has hover effects', () => {
    render(<Hero />);
    const ctaButton = screen.getByRole('link', { name: /View my work/i });
    expect(ctaButton.className).toContain('hover:shadow');
    expect(ctaButton.className).toContain('transition-all');
  });
});
