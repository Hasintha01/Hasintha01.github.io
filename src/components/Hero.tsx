/**
 * Hero Section Component
 * Main landing section with headline, CTA, stats, and visual elements
 * Features neo-brutalist design with bold shadows and colorful accents
 */

import React from 'react';
import profileImage from '../images/hp-profile.jpg';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
        {/* LEFT: TEXT FOCUSED */}
        <div>
          {/* Main headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black font-grotesk leading-tight mb-3 sm:mb-4 md:mb-6">
            BUILD RESILIENT INFRASTRUCTURE &amp; AUTOMATED SYSTEMS
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
          Automating infrastructure, monitoring systems, and keeping services running.
          </p>

          {/* CTA Button (links to GitHub profile) */}
          <a
            href="https://github.com/Hasintha01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-3 sm:border-4 border-black bg-yellow-400 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] px-5 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 text-sm sm:text-base md:text-xl font-black 
                       hover:shadow-[6px_6px_0px_0px_#000] sm:hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 
                       transition-all active:shadow-none active:translate-x-0 active:translate-y-0"
          >
            EXPLORE PROJECTS →
          </a>
        </div>

        {/* RIGHT: VISUAL FOCUSED */}
        <div className="relative flex justify-center lg:justify-end mt-8 sm:mt-10 lg:mt-0">
          {/* Main profile card */}
          <div className="relative inline-block">
            <div className="border-3 sm:border-4 border-black shadow-[8px_8px_0px_0px_#000] sm:shadow-[12px_12px_0px_0px_#000] bg-linear-to-br from-pink-300 via-purple-300 to-teal-300 p-3 sm:p-4 md:p-6 lg:p-8 rotate-2">
              <div className="w-40 h-52 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 border-3 sm:border-4 border-black overflow-hidden bg-gray-100">
                <img
                  src={profileImage.src}
                  alt="Profile portrait"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Decorative graphic elements */}
          <div className="absolute top-1 sm:top-4 md:top-10 -left-1 sm:-left-4 md:-left-10 w-8 sm:w-12 md:w-16 lg:w-20 h-8 sm:h-12 md:h-16 lg:h-20 bg-purple-400 border-3 sm:border-4 border-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] rotate-12"></div>
          <div className="absolute bottom-6 sm:bottom-12 md:bottom-20 -right-1 sm:-right-3 md:-right-6 w-6 sm:w-10 md:w-12 lg:w-16 h-6 sm:h-10 md:h-12 lg:h-16 bg-pink-400 border-3 sm:border-4 border-black rounded-full"></div>

          {/* Infrastructure stats card */}
          <div className="absolute -bottom-3 sm:-bottom-6 md:-bottom-8 left-1 sm:left-4 md:left-10 border-3 sm:border-4 border-black bg-white p-2 sm:p-3 md:p-4 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] -rotate-3">
            <div className="flex items-end gap-1 sm:gap-2 h-8 sm:h-14 md:h-16 lg:h-20">
              <div className="w-3 sm:w-5 md:w-6 lg:w-8 bg-teal-400 border-2 border-black" style={{ height: '40%' }}></div>
              <div className="w-3 sm:w-5 md:w-6 lg:w-8 bg-purple-400 border-2 border-black" style={{ height: '65%' }}></div>
              <div
                className="w-3 sm:w-5 md:w-6 lg:w-8 bg-teal-400 border-2 border-black"
                style={{ height: '100%' }}
              ></div>
            </div>
            <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-bold whitespace-nowrap">↑ 99.9% UPTIME</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
