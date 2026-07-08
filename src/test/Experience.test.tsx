import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from '../components/Experience';

describe('Experience Component', () => {
  it('presents the current professional role', () => {
    render(<Experience />);
    expect(screen.getByText('PROFESSIONAL EXPERIENCE')).toBeInTheDocument();
    expect(screen.getByText('DEVOPS INTERN')).toBeInTheDocument();
    expect(screen.getByText('MILLENNIUMIT ESP')).toBeInTheDocument();
    expect(screen.getByText(/DEC 2025 — PRESENT/i)).toBeInTheDocument();
  });

  it('describes cloud operations without exposing client regions', () => {
    render(<Experience />);
    expect(screen.getByText(/production and non-production cloud operations/i)).toBeInTheDocument();
    expect(screen.queryByText(/United Kingdom|Singapore/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Amazon CloudWatch logs/i)).toBeInTheDocument();
  });

  it('has the navigation target', () => {
    const { container } = render(<Experience />);
    expect(container.querySelector('#experience')).toBeInTheDocument();
  });
});
