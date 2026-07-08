import React from 'react';
import BriefcaseBusiness from 'lucide-react/dist/esm/icons/briefcase-business';
import Cloud from 'lucide-react/dist/esm/icons/cloud';

const responsibilities = [
  'Support production and non-production cloud operations, including monitoring, alert triage, incident investigation, deployment validation, and operational handovers.',
  'Analyse Amazon CloudWatch logs, metrics, and AWS Lambda executions to investigate issues and contribute to technical findings and root-cause documentation.',
  'Work with AWS services including EC2, IAM, S3, CloudWatch, Lambda, EKS, and serverless services such as API Gateway, DynamoDB, EventBridge, and SQS.',
  'Perform Linux operational tasks including log analysis, disk-usage monitoring, service troubleshooting, and deployment support.',
  'Supported an Amazon EKS implementation and migration through documentation, deployment validation, operational checks, and post-deployment testing.',
  'Contribute to internal cloud-native engineering tools and CI/CD initiatives through development, testing, debugging, workflow automation, and continuous improvement.',
  'Use Jira, Confluence, Git, Microsoft Teams, and Agile sprint practices for task tracking, documentation, collaboration, and knowledge sharing.',
];

const Experience: React.FC = () => (
  <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-grotesk mb-8 sm:mb-10 md:mb-12 -rotate-1 flex items-center gap-2 sm:gap-3 md:gap-4">
      <span className="border-3 sm:border-4 border-black bg-purple-300 p-2 sm:p-3 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]" aria-hidden="true">
        <BriefcaseBusiness size={24} strokeWidth={3} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
      </span>
      PROFESSIONAL EXPERIENCE
    </h2>

    <article className="border-3 sm:border-4 border-black bg-purple-100 p-5 sm:p-7 md:p-9 shadow-[7px_7px_0px_0px_#000] sm:shadow-[10px_10px_0px_0px_#000]">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
        <div>
          <p className="text-xs sm:text-sm font-black tracking-widest text-purple-900 mb-2">MILLENNIUMIT ESP</p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-grotesk">DEVOPS INTERN</h3>
          <p className="font-bold mt-1">Managed Infrastructure Services · DevOps Cluster</p>
        </div>
        <p className="border-2 sm:border-3 border-black bg-white px-4 py-2 font-black text-sm whitespace-nowrap shadow-[3px_3px_0px_0px_#000]">
          DEC 2025 — PRESENT
        </p>
      </div>

      <ul className="grid lg:grid-cols-2 gap-3 sm:gap-4" aria-label="DevOps internship responsibilities">
        {responsibilities.map((responsibility) => (
          <li key={responsibility} className="flex gap-3 border-2 border-black bg-white p-4 text-sm sm:text-base leading-relaxed">
            <Cloud className="w-5 h-5 shrink-0 mt-0.5 text-purple-800" strokeWidth={3} aria-hidden="true" />
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </article>
  </section>
);

export default Experience;
