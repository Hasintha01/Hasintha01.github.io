/**
 * Philosophy Section Component
 * Showcases DevOps philosophy with principle cards and a main quote
 * Asymmetric two-column layout with rotated cards for visual interest
 */

import React from 'react';
import Bot from 'lucide-react/dist/esm/icons/bot';
import Activity from 'lucide-react/dist/esm/icons/activity';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
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
    <section id="philosophy" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50 border-y-3 sm:border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
  {/* Section title */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-grotesk mb-8 sm:mb-10 md:mb-12 rotate-1 flex items-center gap-2 sm:gap-3 md:gap-4">
    <div className="border-3 sm:border-4 border-black bg-orange-300 p-2 sm:p-3 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]">
      <Lightbulb size={24} strokeWidth={3} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
    </div>
    <span className="leading-tight">PRINCIPLES I WORK BY</span>
  </h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left: Smaller Principle Cards */}
          <div className="space-y-4 sm:space-y-6">
            {principles.map((principle, index) => (
              <div
                key={principle.id}
                className={`border-3 sm:border-4 border-black bg-white p-4 sm:p-5 md:p-6 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] 
                           hover:shadow-[5px_5px_0px_0px_#000] sm:hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 
                           transition-all group active:shadow-none active:translate-x-0 active:translate-y-0 ${rotations[index % rotations.length]}`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 ${principle.bgColor} border-2 border-black flex items-center justify-center shrink-0 
                               group-hover:border-3 sm:group-hover:border-4 transition-all`}
                  >
                    {React.isValidElement(principleIconMap[principle.id])
                      ? React.cloneElement(principleIconMap[principle.id] as React.ReactElement, {
                          className: 'w-6 h-6 sm:w-7 sm:h-7'
                        } as any)
                      : <span className="text-2xl">{principle.icon}</span>}
                  </div>
                  <div>
                    <h3 className="font-black text-base sm:text-lg mb-1.5 sm:mb-2">{principle.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-700">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Large Philosophy Statement */}
          <div className="border-3 sm:border-4 border-black bg-yellow-400 p-6 sm:p-8 md:p-10 lg:p-12 shadow-[8px_8px_0px_0px_#000] sm:shadow-[12px_12px_0px_0px_#000] rotate-2 mt-6 lg:mt-0">
            <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4">&quot;</div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-grotesk leading-tight mb-6 sm:mb-8">
              Reliable systems come from clear ownership, ruthless automation, fast feedback
              loops and empathetic collaboration. I focus on reducing toil, surfacing signal
              early and making shipping safer &amp; faster.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black border-2 border-black rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl shrink-0">
                HP
              </div>
              <div>
                <div className="font-black text-base sm:text-lg">Hasintha Pasindu</div>
                <div className="text-xs sm:text-sm font-semibold">Infrastructure &amp; Automation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
