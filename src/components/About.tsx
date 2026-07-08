/**
 * About Section Component
 * Introduces the developer with story, interests, and visual profile
 * Two-column layout with profile image and text content
 */

import React from 'react';
import User from 'lucide-react/dist/esm/icons/user';
import Server from 'lucide-react/dist/esm/icons/server';
import Cloud from 'lucide-react/dist/esm/icons/cloud';
import Wrench from 'lucide-react/dist/esm/icons/wrench';
import Activity from 'lucide-react/dist/esm/icons/activity';
import Container from 'lucide-react/dist/esm/icons/container';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap';

interface AboutProps {
  interests: string[];
}

// Icon mapping for interests
const interestIconMap: Record<string, React.ReactNode> = {
  'Linux Systems': <Server size={16} strokeWidth={3} />,
  'Cloud Architecture': <Cloud size={16} strokeWidth={3} />,
  'Automation': <Wrench size={16} strokeWidth={3} />,
  'Observability': <Activity size={16} strokeWidth={3} />,
  'Containerization': <Container size={16} strokeWidth={3} />,
  'CI/CD': <Rocket size={16} strokeWidth={3} />,
  'Technical Writing': <FileText size={16} strokeWidth={3} />,
  'Continuous Learning': <GraduationCap size={16} strokeWidth={3} />,
};

const About: React.FC<AboutProps> = ({ interests }) => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-grotesk mb-8 sm:mb-10 md:mb-12 rotate-1 flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="border-3 sm:border-4 border-black bg-teal-300 p-2 sm:p-3 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]">
          <User size={24} strokeWidth={3} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
        </div>
        ABOUT ME
      </h2>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 md:gap-16 items-start">
        {/* Left: Story card with rotation */}
        <div className="border-3 sm:border-4 border-black bg-yellow-100 p-5 sm:p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] -rotate-1">
          <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">MY DIRECTION</h3>
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-3 sm:mb-4">
            I&apos;m a DevOps Intern within Managed Infrastructure Services at MillenniumIT ESP and an
            IT undergraduate at SLIIT. My current work involves cloud monitoring, alert
            investigation, Linux troubleshooting, deployment support, operational documentation,
            and internal engineering initiatives.
          </p>
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-3 sm:mb-4">
            I enjoy understanding how systems behave in real environments, investigating failures,
            reducing repetitive work through automation, and contributing to tools that improve
            day-to-day engineering operations.
          </p>
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
            I&apos;m working toward a career in DevOps, Cloud Engineering, and Platform Engineering,
            with a long-term focus on automation, observability, and reliable infrastructure.
          </p>
        </div>

        {/* Right: Interests card */}
        <div className="border-3 sm:border-4 border-black bg-teal-100 p-5 sm:p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
          <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">INTERESTS</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="border-2 sm:border-3 border-black bg-white px-3 sm:px-4 py-1.5 sm:py-2 font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
              >
                <span className="hidden xs:inline">{interestIconMap[interest]}</span>
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
