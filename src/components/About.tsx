/**
 * About Section Component
 * Introduces the developer with story, interests, and visual profile
 * Two-column layout with profile image and text content
 */

import React from 'react';

interface AboutProps {
  interests: string[];
}

const About: React.FC<AboutProps> = ({ interests }) => {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Profile Photo/Visual */}
        <div className="relative">
          {/* Profile card */}
          <div className="border-4 border-black shadow-[12px_12px_0px_0px_#000] bg-linear-to-br from-teal-200 via-blue-200 to-purple-200 p-8 -rotate-2">
            <div className="w-full aspect-square bg-gray-700 border-4 border-black flex items-center justify-center text-white text-8xl font-black">
              HP
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 border-4 border-black shadow-[6px_6px_0px_0px_#000] rotate-12"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-400 border-4 border-black rounded-full"></div>
        </div>

        {/* Right: Story & Interests */}
        <div>
          {/* Section title */}
          <h2 className="text-5xl font-black font-grotesk mb-8 rotate-1">ABOUT ME</h2>

          {/* Story card */}
          <div className="border-4 border-black bg-yellow-100 p-8 shadow-[8px_8px_0px_0px_#000] mb-6">
            <h3 className="text-2xl font-black mb-4">MY STORY</h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              I'm Hasintha Pasindu, an aspiring Platform Engineer passionate about building
              resilient infrastructure and automating everything that can be automated. Currently
              exploring the DevOps and SRE landscape while completing my degree.
            </p>
            <p className="text-gray-800 leading-relaxed">
              My journey started with Linux system administration and evolved into cloud
              infrastructure, CI/CD pipelines, and monitoring systems. I believe in learning by
              doing, which is why I've built multiple projects to understand real-world DevOps
              challenges.
            </p>
          </div>

          {/* Interests card */}
          <div className="border-4 border-black bg-teal-100 p-8 shadow-[8px_8px_0px_0px_#000]">
            <h3 className="text-2xl font-black mb-4">INTERESTS</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="border-3 border-black bg-white px-4 py-2 font-bold text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
