/**
 * Philosophy Section Component
 * Showcases DevOps philosophy with principle cards and a main quote
 * Asymmetric two-column layout with rotated cards for visual interest
 */

import React from 'react';
import { Bot, Activity, FileText, Lightbulb } from 'lucide-react';
import type { Principle } from '../types';

// Icon mapping for principles
const principleIconMap: Record<string, React.ReactNode> = {
  'principle-1': <Bot size={28} strokeWidth={3} />,        // Automation
  'principle-2': <Activity size={28} strokeWidth={3} />,   // Monitoring
  'principle-3': <FileText size={28} strokeWidth={3} />,   // Documentation
};

interface PhilosophyProps {
  principles: Principle[];
}

const Philosophy: React.FC<PhilosophyProps> = ({ principles }) => {
  /**
   * Rotation classes for principle cards
   * Creates a dynamic, non-uniform appearance
   */
  const rotations = ['', '-rotate-1', 'rotate-1'];

  return (
    <section id="philosophy" className="py-20 px-6 bg-gray-50 border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
  {/* Section title */}
  <h2 className="text-5xl font-black font-grotesk mb-12 rotate-1 flex items-center gap-4">
    <div className="border-4 border-black bg-orange-300 p-3 shadow-[4px_4px_0px_0px_#000]">
      <Lightbulb size={36} strokeWidth={3} />
    </div>
    PRINCIPLES I WORK BY
  </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Smaller Principle Cards */}
          <div className="space-y-6">
            {principles.map((principle, index) => (
              <div
                key={principle.id}
                className={`border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_#000] 
                           hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 
                           transition-all group ${rotations[index % rotations.length]}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 ${principle.bgColor} border-2 border-black flex items-center justify-center shrink-0 
                               group-hover:border-4 transition-all`}
                  >
                    {principleIconMap[principle.id] || principle.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2">{principle.title}</h3>
                    <p className="text-sm text-gray-700">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Large Philosophy Statement */}
          <div className="border-4 border-black bg-yellow-400 p-12 shadow-[12px_12px_0px_0px_#000] rotate-2">
            <div className="text-6xl font-black mb-4">&quot;</div>
            <p className="text-3xl font-bold font-grotesk leading-tight mb-8">
              Reliable systems come from clear ownership, ruthless automation, fast feedback
              loops and empathetic collaboration. I focus on reducing toil, surfacing signal
              early and making shipping safer &amp; faster.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-black border-2 border-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                HP
              </div>
              <div>
                <div className="font-black text-lg">Hasintha Pasindu</div>
                <div className="text-sm font-semibold">Infrastructure &amp; Automation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
