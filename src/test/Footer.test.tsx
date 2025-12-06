/**
 * Unit tests for Footer Component
 * Tests footer rendering, copyright, and links
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  it('renders the footer', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('renders copyright text with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear}`, 'i'))).toBeInTheDocument();
  });

  it('renders Hasintha Pasindu name', () => {
    render(<Footer />);
    expect(screen.getByText(/Hasintha Pasindu/i)).toBeInTheDocument();
  });

  it('has border styling', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer?.className).toMatch(/border-t/);
  });

  it('has background color', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer?.className).toContain('bg-gray-50');
  });

  it('has proper padding', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer?.className).toMatch(/py-/);
  });

  it('is centered', () => {
    const { container } = render(<Footer />);
    const centerDiv = container.querySelector('.text-center');
    expect(centerDiv).toBeInTheDocument();
  });

  it('renders last sync date', () => {
    render(<Footer />);
    expect(screen.getByText(/Last sync:/i)).toBeInTheDocument();
  });

  it('mentions infrastructure keywords', () => {
    render(<Footer />);
    expect(screen.getByText(/Infrastructure/i)).toBeInTheDocument();
  });
});
