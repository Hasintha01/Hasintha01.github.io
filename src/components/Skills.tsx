/**
 * Skills Section Component
 * Displays tech stack with icon grid and highlighted expertise list
 * Asymmetric two-column layout for visual interest
 */

import React from 'react';
import type { Technology } from '../types';

interface SkillsProps {
  technologies: Technology[];
  expertise: string[];
}

const Skills: React.FC<SkillsProps> = ({ technologies, expertise }) => {

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-5xl font-black font-grotesk mb-12 -rotate-1">
          TECH STACK &amp; EXPERTISE
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: STACKED TECH ICONS */}
          <div className="grid grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_#000] flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="font-black text-sm">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: HIGHLIGHTED SKILLS */}
          <div className="border-4 border-black bg-yellow-100 p-8 shadow-[8px_8px_0px_0px_#000]">
            <ul className="space-y-3 text-lg">
              {expertise.map((skill, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-black"></span>
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
