/**
 * Contact Section Component
 * Call-to-action section with contact buttons and social links
 * Centered layout with prominent CTA buttons
 */

import React from 'react';
import type { ContactLink } from '../types';

interface ContactProps {
  contactLinks: ContactLink[];
}

const Contact: React.FC<ContactProps> = ({ contactLinks }) => {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
      {/* Main headline */}
      <h2 className="text-6xl font-black font-grotesk mb-6">
        LET&apos;S BUILD RELIABLE SYSTEMS TOGETHER
      </h2>

      {/* Subheadline */}
      <p className="text-xl text-gray-700 mb-12">Ready to automate, monitor, and scale?</p>

      {/* Primary CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button className="border-4 border-black bg-yellow-400 shadow-[8px_8px_0px_0px_#000] px-12 py-5 text-xl font-black hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
          START A PROJECT →
        </button>
        <button className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] px-12 py-5 text-xl font-black hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
          VIEW GITHUB
        </button>
      </div>

      {/* Contact Info Links */}
      <div className="mt-16 flex flex-wrap justify-center gap-6">
        {contactLinks.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            className={`border-4 border-black ${contact.bgColor} px-6 py-3 font-bold hover:bg-opacity-80 transition-colors`}
          >
            {contact.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
