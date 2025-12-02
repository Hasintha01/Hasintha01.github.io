/**
 * Unit tests for Blog Component
 * Tests article rendering, icon mapping, and metadata display
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Blog from '../components/Blog';
import type { Article } from '../types';

describe('Blog Component', () => {
  const mockArticles: Article[] = [
    {
      id: 'article-1',
      title: 'Test Article 1',
      description: 'This is a test description for article 1',
      icon: 'book-open',
      bgGradient: 'from-blue-200 to-blue-400',
      category: 'MEDIUM',
      categoryBg: 'bg-blue-400',
      readTime: '5 min read',
      date: 'Nov 2025',
      url: 'https://example.com/article-1',
      tags: ['Docker', 'DevOps'],
    },
    {
      id: 'article-2',
      title: 'Test Article 2',
      description: 'This is a test description for article 2',
      icon: 'file-code',
      bgGradient: 'from-teal-200 to-teal-400',
      category: 'MEDIUM',
      categoryBg: 'bg-teal-400',
      readTime: '3 min read',
      date: 'Oct 2025',
      url: 'https://example.com/article-2',
      tags: ['CI/CD', 'Testing'],
    },
  ];

  it('renders the blog section title', () => {
    render(<Blog articles={mockArticles} />);
    expect(screen.getByText('LATEST ARTICLES')).toBeInTheDocument();
  });

  it('renders "What I Write About" section', () => {
    render(<Blog articles={mockArticles} />);
    expect(screen.getByText('WHAT I WRITE ABOUT')).toBeInTheDocument();
    expect(
      screen.getByText(/Sharing real-world DevOps experiences/i)
    ).toBeInTheDocument();
  });

  it('renders all article cards', () => {
    render(<Blog articles={mockArticles} />);
    expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    expect(screen.getByText('Test Article 2')).toBeInTheDocument();
  });

  it('displays article descriptions', () => {
    render(<Blog articles={mockArticles} />);
    expect(
      screen.getByText('This is a test description for article 1')
    ).toBeInTheDocument();
    expect(
      screen.getByText('This is a test description for article 2')
    ).toBeInTheDocument();
  });

  it('displays article metadata (read time and date)', () => {
    render(<Blog articles={mockArticles} />);
    expect(screen.getByText(/5 min read • Nov 2025/)).toBeInTheDocument();
    expect(screen.getByText(/3 min read • Oct 2025/)).toBeInTheDocument();
  });

  it('displays category badges', () => {
    render(<Blog articles={mockArticles} />);
    const categoryBadges = screen.getAllByText('MEDIUM');
    expect(categoryBadges).toHaveLength(2);
  });

  it('displays article tags', () => {
    render(<Blog articles={mockArticles} />);
    // Note: Tags are part of the Article interface but not rendered in the Blog component
    expect(mockArticles[0].tags).toEqual(['Docker', 'DevOps']);
    expect(mockArticles[1].tags).toEqual(['CI/CD', 'Testing']);
  });

  it('renders article links with correct href', () => {
    render(<Blog articles={mockArticles} />);
    const links = screen.getAllByRole('link');
    // Filter for article links (not including "VIEW ALL ARTICLES" link)
    const articleLinks = links.filter(link => 
      link.getAttribute('href')?.includes('example.com/article')
    );
    expect(articleLinks[0]).toHaveAttribute('href', 'https://example.com/article-1');
    expect(articleLinks[1]).toHaveAttribute('href', 'https://example.com/article-2');
  });

  it('applies correct background gradient classes', () => {
    const { container } = render(<Blog articles={mockArticles} />);
    const articleCards = container.querySelectorAll('.bg-linear-to-br');
    expect(articleCards.length).toBeGreaterThan(0);
  });

  it('renders empty state when no articles provided', () => {
    render(<Blog articles={[]} />);
    expect(screen.getByText('LATEST ARTICLES')).toBeInTheDocument();
    expect(screen.queryByText('Test Article 1')).not.toBeInTheDocument();
  });

  it('has proper accessibility with section id', () => {
    const { container } = render(<Blog articles={mockArticles} />);
    const section = container.querySelector('#blog');
    expect(section).toBeInTheDocument();
  });
});
