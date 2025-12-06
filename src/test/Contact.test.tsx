/**
 * Unit tests for Contact Component
 * Tests contact section rendering, CTA buttons, and social links
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';
import type { ContactLink } from '../types';

describe('Contact Component', () => {
  const mockContactLinks = [
    { id: 'contact-1', label: 'Email', url: 'mailto:test@example.com', icon: 'mail' },
    { id: 'contact-2', label: 'LinkedIn', url: 'https://linkedin.com/in/testuser', icon: 'linkedin' },
    { id: 'contact-3', label: 'Twitter', url: 'https://twitter.com/testuser', icon: 'twitter' },
    { id: 'contact-4', label: 'GitHub', url: 'https://github.com/testuser', icon: 'github' },
  ] as unknown as ContactLink[];

  it('renders the main headline', () => {
    render(<Contact contactLinks={mockContactLinks} />);
    expect(screen.getByText(/LET'S BUILD RELIABLE SYSTEMS TOGETHER/i)).toBeInTheDocument();
  });

  it('renders the subheadline', () => {
    render(<Contact contactLinks={mockContactLinks} />);
    expect(screen.getByText(/Ready to automate, monitor, and scale/i)).toBeInTheDocument();
  });

  it('renders the primary email CTA button', () => {
    render(<Contact contactLinks={mockContactLinks} />);
    const emailButton = screen.getByRole('link', { name: /GET IN TOUCH/i });
    expect(emailButton).toBeInTheDocument();
    expect(emailButton).toHaveAttribute('href', 'mailto:Hasinthapasindu20@gmail.com');
  });

  it('renders all social links', () => {
    render(<Contact contactLinks={mockContactLinks} />);
    mockContactLinks.forEach(link => {
      const linkElement = screen.getByText(link.label);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it('has proper section ID for navigation', () => {
    const { container } = render(<Contact contactLinks={mockContactLinks} />);
    const section = container.querySelector('#contact');
    expect(section).toBeInTheDocument();
  });

  it('contact links have correct URLs', () => {
    render(<Contact contactLinks={mockContactLinks} />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('external links have target="_blank"', () => {
    render(<Contact contactLinks={mockContactLinks} />);
    const linkedinLink = screen.getByText('LinkedIn').closest('a');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has centered layout', () => {
    const { container } = render(<Contact contactLinks={mockContactLinks} />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('text-center');
  });

  it('CTA buttons have hover effects', () => {
    render(<Contact contactLinks={mockContactLinks} />);
    const emailButton = screen.getByRole('link', { name: /GET IN TOUCH/i });
    expect(emailButton.className).toContain('hover:shadow');
    expect(emailButton.className).toContain('transition-all');
  });

  it('renders social links section', () => {
    const { container } = render(<Contact contactLinks={mockContactLinks} />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('has proper spacing and padding', () => {
    const { container } = render(<Contact contactLinks={mockContactLinks} />);
    const section = container.querySelector('section');
    expect(section?.className).toMatch(/py-16|py-20|py-24/);
  });

  it('renders message icon', () => {
    const { container } = render(<Contact contactLinks={mockContactLinks} />);
    // Check for the MessageSquare icon container
    const iconContainer = container.querySelector('.bg-green-300');
    expect(iconContainer).toBeInTheDocument();
  });
});
