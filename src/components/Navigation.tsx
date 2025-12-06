/**
 * Navigation Component
 * Fixed navigation bar with brand name and menu links
 * Features hover effects with colored underlines
 * Mobile-responsive with hamburger menu
 */

import React, { useState, useEffect, useRef } from 'react';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import type { NavLink } from '../types';

interface NavigationProps {
  links: NavLink[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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
    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  /**
   * Handle escape key to close menu
   */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Focus first link when menu opens
      const firstLink = menuRef.current?.querySelector('a');
      firstLink?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b-4 border-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* Brand name - responsive sizing */}
        <div className="text-lg sm:text-xl md:text-2xl font-black font-grotesk">
          HASINTHA PASINDU
        </div>

        {/* Desktop Navigation links */}
        <ul className="hidden md:flex gap-4 lg:gap-8 text-sm font-semibold">
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

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden border-2 border-black p-2 bg-yellow-300 hover:bg-yellow-400 transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          id="mobile-menu"
          className="md:hidden border-t-4 border-black bg-white"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.id} className="border-b-2 border-black last:border-b-0">
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`block px-6 py-4 font-bold text-base hover:bg-gray-100 active:bg-gray-200 ${link.decorationColor}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
