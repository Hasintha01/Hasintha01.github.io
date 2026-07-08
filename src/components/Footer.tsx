/**
 * Footer Component
 * Site footer with branding, copyright, and credits
 * Centered layout with neo-brutalist styling note
 */

import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="border-t-3 sm:border-t-4 border-black py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Brand name */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-black font-grotesk mb-3 sm:mb-4">HASINTHA PASINDU</div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Infrastructure • Automation • Reliability</p>

        <p className="text-xs sm:text-sm font-semibold mt-3 sm:mt-4">© {new Date().getFullYear()} Hasintha Pasindu</p>
      </div>
    </footer>
  );
};

export default Footer;
