import React from 'react';
import FileText from 'lucide-react/dist/esm/icons/file-text';

const Resume: React.FC = () => (
  <section id="resume" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
    <div className="border-3 sm:border-4 border-black bg-yellow-300 p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#000] text-center rotate-1">
      <FileText size={42} strokeWidth={3} className="mx-auto mb-4" aria-hidden="true" />
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-grotesk mb-4">RESUME</h2>
      <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-7">
        View a concise overview of my experience in AWS cloud operations, Linux troubleshooting,
        monitoring, automation, CI/CD, and internal engineering tools.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="mailto:Hasinthapasindu20@gmail.com?subject=Resume%20Request" className="border-3 border-black bg-white px-6 py-3 font-black shadow-[5px_5px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          EMAIL FOR RESUME →
        </a>
        <a href="https://www.linkedin.com/in/hasintha-pasindu/" target="_blank" rel="noopener noreferrer" className="border-3 border-black bg-pink-200 px-6 py-3 font-black shadow-[5px_5px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          VIEW LINKEDIN →
        </a>
      </div>
    </div>
  </section>
);

export default Resume;
