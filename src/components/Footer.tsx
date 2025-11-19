/**
 * Footer Component
 * Site footer with branding, copyright, and credits
 * Centered layout with neo-brutalist styling note
 */

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-black py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Brand name */}
        <div className="text-4xl font-black font-grotesk mb-4">HASINTHA PASINDU</div>

        {/* Subtitle */}
        <p className="text-gray-600 mb-4">Aspiring Platform Engineer • DevOps • SRE</p>

        {/* Copyright and credits */}
        <div className="text-sm text-gray-500">
          <p>© {currentYear} Hasintha Pasindu</p>
          <p className="mt-2">🎨 Neo-Brutalist Style – Bold &amp; Boxy Aesthetic</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
