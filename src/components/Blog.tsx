/**
 * Blog Section Component
 * Displays latest blog articles with previews and metadata
 * Grid layout with article cards featuring icons and category badges
 */

import React from 'react';
import { BookOpen, FileCode, Newspaper, PenTool, Settings, BarChart3, Rocket, Package } from 'lucide-react';
import type { Article } from '../types';

// Icon mapping for blog articles
const blogIconMap: Record<string, React.ReactNode> = {
  'article-1': <BookOpen size={64} strokeWidth={3} />,    // Article
  'article-2': <FileCode size={64} strokeWidth={3} />,    // Tutorial
  'article-3': <Newspaper size={64} strokeWidth={3} />,   // Blog post
};

interface BlogProps {
  articles: Article[];
}

const Blog: React.FC<BlogProps> = ({ articles }) => {
  return (
    <section id="blog" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section title */}
      <h2 className="text-3xl sm:text-5xl font-black font-grotesk mb-8 sm:mb-12 -rotate-1 flex items-center gap-4">
        <div className="border-4 border-black bg-blue-300 p-3 shadow-[4px_4px_0px_0px_#000]">
          <PenTool size={36} strokeWidth={3} />
        </div>
        LATEST ARTICLES
      </h2>

      {/* What I Write About card */}
      <div className="mb-10 sm:mb-16">
        <div className="border-4 border-black bg-yellow-100 p-4 sm:p-8 shadow-[8px_8px_0px_0px_#000] rotate-2 w-full">
          <h3 className="text-xl sm:text-3xl font-black mb-2 sm:mb-4 text-center">WHAT I WRITE ABOUT</h3>
          <p className="text-gray-700 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
            Sharing real-world DevOps experiences, infrastructure automation tips, and practical tutorials. 
            I write about the tools and techniques that actually work in production environments.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="border-3 border-black bg-white px-3 sm:px-4 py-1 sm:py-2 font-bold text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
              <Settings size={16} strokeWidth={3} />
              DevOps Tools
            </span>
            <span className="border-3 border-black bg-white px-4 py-2 font-bold text-sm flex items-center gap-2">
              <BarChart3 size={16} strokeWidth={3} />
              Infrastructure
            </span>
            <span className="border-3 border-black bg-white px-4 py-2 font-bold text-sm flex items-center gap-2">
              <Rocket size={16} strokeWidth={3} />
              CI/CD Pipelines
            </span>
            <span className="border-3 border-black bg-white px-4 py-2 font-bold text-sm flex items-center gap-2">
              <Package size={16} strokeWidth={3} />
              Containerization
            </span>
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {articles.map((article) => {
          // Decide how to render the icon: mapped React icon, SVG/image path, or fallback text
          const mapped = blogIconMap[article.id];
          const isImagePath = /\.(svg|png|jpg|jpeg|gif)$/i.test(article.icon);
          const iconContent = mapped
            ? mapped
            : isImagePath
              ? (
                <img
                  src={article.icon}
                  alt={article.title}
                  className="w-16 h-16 object-contain"
                  loading="lazy"
                />
              )
              : <span className="text-5xl font-black" aria-hidden="true">{article.icon}</span>;

          return (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] p-6 hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all block"
            >
              {/* Article icon/visual */}
              <div
                className={`w-full h-48 bg-linear-to-br ${article.bgGradient} border-4 border-black mb-4 flex items-center justify-center`}
              >
                <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_#000]">
                  {iconContent}
                </div>
              </div>

            {/* Category badge */}
            <div
              className={`inline-block border-2 border-black ${article.categoryBg} px-2 sm:px-3 py-1 text-xs font-black mb-2 sm:mb-3`}
            >
              {article.category}
            </div>

            {/* Article title */}
            <h3 className="text-base sm:text-xl font-black mb-2 sm:mb-3">{article.title}</h3>

            {/* Article description */}
            <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">{article.description}</p>

            {/* Article metadata */}
            <div className="text-xs text-gray-600 font-semibold">
              {article.readTime} • {article.date}
            </div>
            </a>
          );
        })}
      </div>

      {/* View all articles CTA */}
      <div className="text-center mt-8 sm:mt-12">
        <a
          href="https://medium.com/@hasinthapasindu"
          target="_blank"
          rel="noopener noreferrer"
          className="border-4 border-black bg-purple-100 shadow-[8px_8px_0px_0px_#000] px-10 py-4 text-lg font-black inline-block hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
        >
          VIEW ALL ARTICLES ON MEDIUM →
        </a>
      </div>
    </section>
  );
};

export default Blog;
