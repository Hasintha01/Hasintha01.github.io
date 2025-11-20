/**
 * Skills Section Component
 * Displays tech stack with icon grid and highlighted expertise list
 * Asymmetric two-column layout for visual interest
 */

import React from 'react';
import { Server, Container, Cloud, Cog, Activity, Wrench, Laptop } from 'lucide-react';
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
    <section id="skills" className="py-20 px-6 bg-gray-50 border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-5xl font-black font-grotesk mb-12 -rotate-1 flex items-center gap-4">
          <div className="border-4 border-black bg-purple-300 p-3 shadow-[4px_4px_0px_0px_#000]">
            <Laptop size={36} strokeWidth={3} />
          </div>
          TECH STACK &amp; EXPERTISE
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: STACKED TECH ICONS */}
          <div className="grid grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_#000] 
                           hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5
                           transition-all cursor-pointer group"
              >
                <div className="text-center">
                  <div className="mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    {iconMap[tech.id] || tech.icon}
                  </div>
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
