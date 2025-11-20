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
      {/* Section title */}
      <h2 className="text-5xl font-black font-grotesk mb-12 rotate-1">ABOUT ME</h2>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Story card with rotation */}
        <div className="border-4 border-black bg-yellow-100 p-8 shadow-[8px_8px_0px_0px_#000] -rotate-1">
          <h3 className="text-2xl font-black mb-4">MY STORY</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
              I'm Hasintha Pasindu, passionate about building reliable systems and automating
              infrastructure. I focus on keeping services running smoothly, whether that's through
              CI/CD pipelines, monitoring, or cloud automation.
          </p>
          <p className="text-gray-800 leading-relaxed">
            My journey started with Linux system administration and evolved into cloud
              infrastructure, deployment automation, and system monitoring. I believe in learning by
              doing—building projects to solve real problems and keeping production systems healthy.
          </p>
        </div>

        {/* Right: Interests card */}
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
    </section>
  );
};

export default About;
