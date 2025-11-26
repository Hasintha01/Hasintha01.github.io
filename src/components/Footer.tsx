/**
 * Footer Component
 * Site footer with branding, copyright, and credits
 * Centered layout with neo-brutalist styling note
 */

import React from 'react';
import { lastUpdated } from '../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-black py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Brand name */}
        <div className="text-4xl font-black font-grotesk mb-4">HASINTHA PASINDU</div>

        {/* Subtitle */}
        <p className="text-gray-600 mb-4">Infrastructure • Automation • Reliability</p>

        {/* Last updated date */}
        <div className="inline-block rounded px-4 py-2 bg-black text-white font-semibold text-sm shadow-lg mt-4">
          Last sync: {lastUpdated}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
