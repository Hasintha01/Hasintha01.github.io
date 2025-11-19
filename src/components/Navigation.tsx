/**
 * Navigation Component
 * Fixed navigation bar with brand name and menu links
 * Features hover effects with colored underlines
 */

import React from 'react';
import type { NavLink } from '../types';

interface NavigationProps {
  links: NavLink[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  /**
   * Handle smooth scrolling for anchor links
   */
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href || href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b-4 border-black z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand name */}
        <div className="text-2xl font-black font-grotesk">HASINTHA PASINDU</div>

        {/* Navigation links */}
        <ul className="flex gap-8 text-sm font-semibold">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`hover:underline decoration-4 ${link.decorationColor}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
