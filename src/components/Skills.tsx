/**
 * Skills Section Component
 * Displays tech stack with icon grid and highlighted expertise list
 * Asymmetric two-column layout for visual interest
 */

import React from 'react';
import Server from 'lucide-react/dist/esm/icons/server';
import Container from 'lucide-react/dist/esm/icons/container';
import Cloud from 'lucide-react/dist/esm/icons/cloud';
import Cog from 'lucide-react/dist/esm/icons/cog';
import Activity from 'lucide-react/dist/esm/icons/activity';
import Wrench from 'lucide-react/dist/esm/icons/wrench';
import Laptop from 'lucide-react/dist/esm/icons/laptop';
import type { Technology } from '../types';

// Icon mapping for technologies
const iconMap: Record<string, React.ReactNode> = {
  'tech-1': <Server size={40} strokeWidth={3} />,      // Linux
  'tech-2': <Container size={40} strokeWidth={3} />,   // Docker
  'tech-3': <Cloud size={40} strokeWidth={3} />,       // AWS
  'tech-4': <Cog size={40} strokeWidth={3} />,         // K8s
  'tech-5': <Activity size={40} strokeWidth={3} />,    // Prometheus
  'tech-6': <Wrench size={40} strokeWidth={3} />,      // Terraform
};

interface SkillsProps {
  technologies: Technology[];
  expertise: string[];
}

const Skills: React.FC<SkillsProps> = ({ technologies, expertise }) => {

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50 border-y-3 sm:border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-grotesk mb-8 sm:mb-10 md:mb-12 -rotate-1 flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="border-3 sm:border-4 border-black bg-purple-300 p-2 sm:p-3 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]">
            <Laptop size={24} strokeWidth={3} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
          </div>
          <span className="leading-tight">TECH STACK &amp; EXPERTISE</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* LEFT: STACKED TECH ICONS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="border-3 sm:border-4 border-black bg-white p-4 sm:p-5 md:p-6 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] 
                           hover:shadow-[5px_5px_0px_0px_#000] sm:hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5
                           transition-all cursor-pointer group active:shadow-none active:translate-x-0 active:translate-y-0"
              >
                <div className="text-center">
                  <div className="mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    {React.isValidElement(iconMap[tech.id])
                      ? React.cloneElement(iconMap[tech.id] as React.ReactElement, {
                          className: 'w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10'
                        } as any)
                      : <span className="text-3xl">{tech.icon}</span>}
                  </div>
                  <div className="font-black text-xs sm:text-sm">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: HIGHLIGHTED SKILLS */}
          <div className="border-3 sm:border-4 border-black bg-yellow-100 p-5 sm:p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base md:text-lg">
              {expertise.map((skill, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black shrink-0"></span>
                  <span className="font-bold">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
