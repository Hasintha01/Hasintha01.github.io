/**
 * Projects Section Component
 * Showcases featured projects with descriptions, tech stack, and links
 * Each project card includes an icon, category badge, and hover effects
 */

import React from 'react';
import FolderGit2 from 'lucide-react/dist/esm/icons/folder-git-2';
import Database from 'lucide-react/dist/esm/icons/database';
import Terminal from 'lucide-react/dist/esm/icons/terminal';
import Code2 from 'lucide-react/dist/esm/icons/code-2';
import FolderOpen from 'lucide-react/dist/esm/icons/folder-open';
import type { Project } from '../types';

// Icon mapping for projects
const projectIconMap: Record<string, React.ReactNode> = {
  'project-weather-dashboard': <FolderGit2 size={80} strokeWidth={3} />,   // Weather Dashboard
  'project-1': <FolderGit2 size={80} strokeWidth={3} />,   // Grafana Dashboard
  'project-2': <Database size={80} strokeWidth={3} />,     // Database project
  'project-3': <Terminal size={80} strokeWidth={3} />,     // Automation
  'project-4': <Code2 size={80} strokeWidth={3} />,        // Code project
};

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-12 px-3 sm:px-6 bg-gray-50 border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-3xl sm:text-5xl font-black font-grotesk mb-8 sm:mb-12 rotate-1 flex items-center gap-2 sm:gap-4">
          <div className="border-4 border-black bg-pink-300 p-3 shadow-[4px_4px_0px_0px_#000]">
            <FolderOpen size={36} strokeWidth={3} />
          </div>
          FEATURED PROJECTS
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] overflow-hidden hover:shadow-[6px_6px_0px_0px_#000] sm:hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 sm:hover:-translate-x-1 sm:hover:-translate-y-1 transition-all"
            >
              <div className="flex flex-col sm:grid sm:grid-cols-2">
                {/* Project icon/visual */}
                <div
                  className={`bg-linear-to-br ${project.bgGradient} border-b-4 sm:border-b-0 sm:border-r-4 border-black h-48 sm:h-80 flex items-center justify-center`}
                >
                  <div className="border-4 border-black bg-white p-4 sm:p-8 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000]">
                    {projectIconMap[project.id] || project.icon}
                  </div>
                </div>

                {/* Project details */}
                <div className="p-4 sm:p-8">
                  {/* Category badge */}
                  <div
                    className={`inline-block border-2 border-black ${project.categoryBg} px-3 sm:px-4 py-1 text-xs font-black mb-3 sm:mb-4`}
                  >
                    {project.category}
                  </div>

                  {/* Project title */}
                  <h3 className="text-xl sm:text-3xl font-black mb-3 sm:mb-4">{project.title}</h3>

                  {/* Project description */}
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="border-2 border-black px-2 sm:px-3 py-1 text-xs font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    {/* View on GitHub button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-3 border-black bg-black text-white px-4 sm:px-6 py-2 font-bold hover:bg-white hover:text-black transition-colors inline-block"
                    >
                      VIEW ON GITHUB →
                    </a>

                    {/* Demo button (if available) */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-3 border-black bg-white text-black px-4 sm:px-6 py-2 font-bold hover:bg-gray-100 transition-colors inline-block"
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
