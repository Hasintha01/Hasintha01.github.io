/**
 * Hero Section Component
 * Main landing section with headline, CTA, stats, and visual elements
 * Features neo-brutalist design with bold shadows and colorful accents
 */

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-20 sm:pt-32 pb-10 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
        {/* LEFT: TEXT FOCUSED */}
        <div>
          {/* Main headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-grotesk leading-tight mb-4 sm:mb-6">
            BUILD RESILIENT INFRASTRUCTURE &amp; AUTOMATED SYSTEMS
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
          Automating infrastructure, monitoring systems, and keeping services running.
          </p>

          {/* CTA Button (links to GitHub profile) */}
          <a
            href="https://github.com/Hasintha01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-4 border-black bg-yellow-400 shadow-[6px_6px_0px_0px_#000] px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-xl font-black 
                       hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 
                       transition-all"
          >
            EXPLORE PROJECTS →
          </a>
        </div>

        {/* RIGHT: VISUAL FOCUSED */}
        <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
          {/* Main profile card */}
          <div className="relative inline-block">
            <div className="border-4 border-black shadow-[12px_12px_0px_0px_#000] bg-linear-to-br from-pink-300 via-purple-300 to-teal-300 p-4 sm:p-8 rotate-2">
              <div className="w-48 h-60 sm:w-80 sm:h-96 border-4 border-black overflow-hidden bg-gray-100">
                <img
                  src="/images/hp-profile.jpg"
                  alt="Profile portrait"
                  width={192}
                  height={240}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Decorative graphic elements */}
          <div className="absolute top-2 sm:top-10 -left-2 sm:-left-10 w-10 sm:w-20 h-10 sm:h-20 bg-purple-400 border-4 border-black shadow-[4px_4px_0px_0px_#000] rotate-12"></div>
          <div className="absolute bottom-8 sm:bottom-20 -right-2 sm:-right-6 w-8 sm:w-16 h-8 sm:h-16 bg-pink-400 border-4 border-black rounded-full"></div>

          {/* Infrastructure stats card */}
          <div className="absolute -bottom-4 sm:-bottom-8 left-2 sm:left-10 border-4 border-black bg-white p-2 sm:p-4 shadow-[6px_6px_0px_0px_#000] -rotate-3">
            <div className="flex items-end gap-1 sm:gap-2 h-10 sm:h-20">
              <div className="w-4 sm:w-8 bg-teal-400 border-2 border-black" style={{ height: '40%' }}></div>
              <div className="w-4 sm:w-8 bg-purple-400 border-2 border-black" style={{ height: '65%' }}></div>
              <div
                className="w-4 sm:w-8 bg-teal-400 border-2 border-black"
                style={{ height: '100%' }}
              ></div>
            </div>
            <div className="mt-1 sm:mt-2 text-xs font-bold">↑ 99.9% UPTIME TARGET</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
