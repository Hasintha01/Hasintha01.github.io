/**
 * Projects Section Component
 * Showcases featured projects with descriptions, tech stack, and links
 * Each project card includes an icon, category badge, and hover effects
 */

import React from 'react';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-5xl font-black font-grotesk mb-12 rotate-1">FEATURED PROJECTS</h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] overflow-hidden hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="grid md:grid-cols-2">
                {/* Project icon/visual */}
                <div
                  className={`bg-linear-to-br ${project.bgGradient} border-r-4 border-black h-80 flex items-center justify-center text-6xl font-black`}
                >
                  {project.icon}
                </div>

                {/* Project details */}
                <div className="p-8">
                  {/* Category badge */}
                  <div
                    className={`inline-block border-2 border-black ${project.categoryBg} px-4 py-1 text-xs font-black mb-4`}
                  >
                    {project.category}
                  </div>

                  {/* Project title */}
                  <h3 className="text-3xl font-black mb-4">{project.title}</h3>

                  {/* Project description */}
                  <p className="text-gray-700 mb-6">{project.description}</p>

                  {/* Technology tags */}
                  <div className="flex gap-4 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="border-2 border-black px-3 py-1 text-xs font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    {/* View on GitHub button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-3 border-black bg-black text-white px-6 py-2 font-bold hover:bg-gray-800 transition-colors inline-block"
                    >
                      VIEW ON GITHUB →
                    </a>

                    {/* Demo button (if available) */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-3 border-black bg-white text-black px-6 py-2 font-bold hover:bg-gray-100 transition-colors inline-block"
                      >
                        LIVE DEMO →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
