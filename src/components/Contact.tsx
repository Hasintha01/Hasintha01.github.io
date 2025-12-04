/**
 * Contact Section Component
 * Call-to-action section with contact buttons and social links
 * Centered layout with prominent CTA buttons
 */

import React from 'react';
import Mail from 'lucide-react/dist/esm/icons/mail';
import Github from 'lucide-react/dist/esm/icons/github';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Twitter from 'lucide-react/dist/esm/icons/twitter';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import type { ContactLink } from '../types';

// Icon mapping for contact links
const contactIconMap: Record<string, React.ReactNode> = {
  'contact-1': <Mail size={20} strokeWidth={3} />,         // Email
  'contact-2': <Linkedin size={20} strokeWidth={3} />,     // LinkedIn
  'contact-3': <Twitter size={20} strokeWidth={3} />,      // Twitter
  'contact-4': <Github size={20} strokeWidth={3} />,       // GitHub
  'contact-5': <BookOpen size={20} strokeWidth={3} />,     // Medium
};

interface ContactProps {
  contactLinks: ContactLink[];
}

const Contact: React.FC<ContactProps> = ({ contactLinks }) => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Main headline */}
      <div className="flex justify-center mb-5 sm:mb-6 md:mb-8">
        <div className="border-3 sm:border-4 border-black bg-green-300 p-3 sm:p-4 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000]">
          <MessageSquare size={32} strokeWidth={3} className="sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </div>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-grotesk mb-4 sm:mb-5 md:mb-6 leading-tight px-2">
        LET&apos;S BUILD RELIABLE SYSTEMS TOGETHER
      </h2>

      {/* Subheadline */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-10 md:mb-12">Ready to automate, monitor, and scale?</p>

      {/* Primary CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center items-stretch sm:items-center">
        <button className="border-3 sm:border-4 border-black bg-yellow-400 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-black hover:shadow-[10px_10px_0px_0px_#000] sm:hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all active:shadow-none active:translate-x-0 active:translate-y-0">
          START A PROJECT →
        </button>
        <button className="border-3 sm:border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-black hover:shadow-[10px_10px_0px_0px_#000] sm:hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all active:shadow-none active:translate-x-0 active:translate-y-0">
          VIEW GITHUB
        </button>
      </div>

      {/* Contact Info Links */}
      <div className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
        {contactLinks.map((contact) => {
          const iconElement = contactIconMap[contact.id];
          if (contact.id === 'contact-1') {
            return (
              <a
                key={contact.id}
                href={contact.link}
                className={`border-3 sm:border-4 border-black ${contact.bgColor} px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 font-bold text-sm sm:text-base
                           shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 
                           transition-all flex items-center gap-1.5 sm:gap-2 group active:shadow-none active:translate-x-1 active:translate-y-1`}
              >
                <span className="group-hover:scale-110 transition-transform">
                  {React.isValidElement(iconElement) && React.cloneElement(iconElement, {
                    className: 'w-4 h-4 sm:w-5 sm:h-5'
                  } as any)}
                </span>
                {contact.label}
              </a>
            );
          } else {
            return (
              <a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`border-3 sm:border-4 border-black ${contact.bgColor} px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 font-bold text-sm sm:text-base
                           shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 
                           transition-all flex items-center gap-1.5 sm:gap-2 group active:shadow-none active:translate-x-1 active:translate-y-1`}
              >
                <span className="group-hover:scale-110 transition-transform">
                  {React.isValidElement(iconElement) && React.cloneElement(iconElement, {
                    className: 'w-4 h-4 sm:w-5 sm:h-5'
                  } as any)}
                </span>
                {contact.label}
              </a>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Contact;
