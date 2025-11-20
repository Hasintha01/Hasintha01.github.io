/**
 * Hero Section Component
 * Main landing section with headline, CTA, stats, and visual elements
 * Features neo-brutalist design with bold shadows and colorful accents
 */

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: TEXT FOCUSED */}
        <div>
          {/* Main headline */}
          <h1 className="text-6xl lg:text-7xl font-black font-grotesk leading-tight mb-6">
            BUILD RESILIENT INFRASTRUCTURE &amp; AUTOMATED SYSTEMS
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Optimizing CI/CD, monitoring, and cloud infra for developers &amp; teams.
          </p>

          {/* CTA Button */}
          <button
            className="border-4 border-black bg-yellow-400 shadow-[6px_6px_0px_0px_#000] px-10 py-4 text-xl font-black 
                       hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 
                       transition-all"
          >
            EXPLORE PROJECTS →
          </button>
        </div>

        {/* RIGHT: VISUAL FOCUSED */}
        <div className="relative">
          {/* Main profile card */}
          <div className="relative inline-block">
            <div className="border-4 border-black shadow-[12px_12px_0px_0px_#000] bg-linear-to-br from-pink-300 via-purple-300 to-teal-300 p-8 rotate-2">
              <div className="w-80 h-96 border-4 border-black overflow-hidden bg-gray-100">
                <img
                  src="/images/profile.jpg"
                  alt="Profile portrait"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* Status badge */}
            <div className="absolute -top-4 -right-12 border-4 border-black bg-teal-300 px-6 py-3 font-black text-sm shadow-[4px_4px_0px_0px_#000] status-badge">
              ✓ OPEN FOR INTERNSHIPS
            </div>
          </div>

          {/* Decorative graphic elements */}
          <div className="absolute top-10 -left-10 w-20 h-20 bg-yellow-400 border-4 border-black shadow-[4px_4px_0px_0px_#000] rotate-12"></div>
          <div className="absolute bottom-20 -right-6 w-16 h-16 bg-pink-400 border-4 border-black rounded-full"></div>

          {/* Chart illustration */}
          <div className="absolute -bottom-8 left-10 border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_#000] -rotate-3">
            <div className="flex items-end gap-2 h-20">
              <div className="w-8 bg-teal-400 border-2 border-black" style={{ height: '40%' }}></div>
              <div className="w-8 bg-teal-400 border-2 border-black" style={{ height: '65%' }}></div>
              <div
                className="w-8 bg-yellow-400 border-2 border-black"
                style={{ height: '100%' }}
              ></div>
            </div>
            <div className="mt-2 text-xs font-bold">↑ 200% AUTOMATION EFFICIENCY</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
