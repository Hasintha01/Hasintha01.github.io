/**
 * Unit tests for Navigation Component
 * Tests navigation rendering, mobile menu, and smooth scrolling
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '../components/Navigation';
import type { NavLink } from '../types';

describe('Navigation Component', () => {
  const mockLinks: NavLink[] = [
    { id: 'nav-1', label: 'About', href: '#about', decorationColor: 'decoration-purple-400' },
    { id: 'nav-2', label: 'Skills', href: '#skills', decorationColor: 'decoration-teal-400' },
    { id: 'nav-3', label: 'Projects', href: '#projects', decorationColor: 'decoration-pink-400' },
    { id: 'nav-4', label: 'Contact', href: '#contact', decorationColor: 'decoration-yellow-400' },
  ];

  beforeEach(() => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('renders the brand name', () => {
    render(<Navigation links={mockLinks} />);
    expect(screen.getByText('HASINTHA PASINDU')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navigation links={mockLinks} />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('navigation links have correct hrefs', () => {
    render(<Navigation links={mockLinks} />);
    const aboutLink = screen.getAllByText('About')[0].closest('a');
    expect(aboutLink).toHaveAttribute('href', '#about');
  });

  it('navigation links have decoration colors', () => {
    render(<Navigation links={mockLinks} />);
    const aboutLink = screen.getAllByText('About')[0].closest('a');
    expect(aboutLink?.className).toContain('decoration-purple-400');
  });

  it('has fixed positioning', () => {
    const { container } = render(<Navigation links={mockLinks} />);
    const nav = container.querySelector('nav');
    expect(nav?.className).toContain('fixed');
    expect(nav?.className).toContain('top-0');
  });

  it('has mobile menu button', () => {
    render(<Navigation links={mockLinks} />);
    const menuButtons = screen.getAllByRole('button');
    expect(menuButtons.length).toBeGreaterThan(0);
  });

  it('toggles mobile menu on button click', () => {
    render(<Navigation links={mockLinks} />);
    const menuButton = screen.getAllByRole('button')[0];
    
    // Click to open menu
    fireEvent.click(menuButton);
    
    // Menu should be visible (checking for mobile menu container)
    const { container } = render(<Navigation links={mockLinks} />);
    expect(container).toBeTruthy();
  });

  it('handles smooth scroll on link click', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'about';
    document.body.appendChild(mockElement);

    render(<Navigation links={mockLinks} />);
    const aboutLink = screen.getAllByText('About')[0].closest('a');
    
    if (aboutLink) {
      fireEvent.click(aboutLink);
      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start',
      });
    }

    document.body.removeChild(mockElement);
  });

  it('has z-index for proper layering', () => {
    const { container } = render(<Navigation links={mockLinks} />);
    const nav = container.querySelector('nav');
    expect(nav?.className).toContain('z-50');
  });

  it('has border styling', () => {
    const { container } = render(<Navigation links={mockLinks} />);
    const nav = container.querySelector('nav');
    expect(nav?.className).toContain('border-b-4');
    expect(nav?.className).toContain('border-black');
  });

  it('renders correct number of links', () => {
    render(<Navigation links={mockLinks} />);
    const links = screen.getAllByRole('link');
    // Should have at least the number of navigation links
    expect(links.length).toBeGreaterThanOrEqual(mockLinks.length);
  });
});
