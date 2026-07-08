import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Resume from '../components/Resume';

describe('Resume Component', () => {
  it('provides a non-broken resume request until the PDF is added', () => {
    render(<Resume />);
    expect(screen.getByRole('heading', { name: 'RESUME' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /email for resume/i })).toHaveAttribute(
      'href',
      'mailto:Hasinthapasindu20@gmail.com?subject=Resume%20Request',
    );
  });

  it('has the navigation target', () => {
    const { container } = render(<Resume />);
    expect(container.querySelector('#resume')).toBeInTheDocument();
  });
});
