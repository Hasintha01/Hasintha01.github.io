/**
 * Blog Section Component
 * Displays latest blog articles with previews and metadata
 * Grid layout with article cards featuring icons and category badges
 */

import React from 'react';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import FileCode from 'lucide-react/dist/esm/icons/file-code';
import Newspaper from 'lucide-react/dist/esm/icons/newspaper';
import PenTool from 'lucide-react/dist/esm/icons/pen-tool';
import Settings from 'lucide-react/dist/esm/icons/settings';
import BarChart3 from 'lucide-react/dist/esm/icons/bar-chart-3';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import Package from 'lucide-react/dist/esm/icons/package';
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
    <section id="blog" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-grotesk mb-6 sm:mb-8 md:mb-12 -rotate-1 flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="border-3 sm:border-4 border-black bg-blue-300 p-2 sm:p-3 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]">
          <PenTool size={24} strokeWidth={3} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
        </div>
        <span className="leading-tight">LATEST ARTICLES</span>
      </h2>

      {/* What I Write About card */}
      <div className="mb-8 sm:mb-12 md:mb-16">
        <div className="border-3 sm:border-4 border-black bg-yellow-100 p-4 sm:p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] rotate-2 w-full">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-black mb-2 sm:mb-3 md:mb-4 text-center">WHAT I WRITE ABOUT</h3>
          <p className="text-gray-700 mb-4 sm:mb-5 md:mb-6 text-center leading-relaxed text-xs sm:text-sm md:text-base">
            Sharing real-world DevOps experiences, infrastructure automation tips, and practical tutorials. 
            I write about the tools and techniques that actually work in production environments.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <span className="border-2 sm:border-3 border-black bg-white px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 font-bold text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
              <Settings size={14} strokeWidth={3} className="sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">DevOps Tools</span>
              <span className="xs:hidden">DevOps</span>
            </span>
            <span className="border-2 sm:border-3 border-black bg-white px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 font-bold text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
              <BarChart3 size={14} strokeWidth={3} className="sm:w-4 sm:h-4" />
              Infrastructure
            </span>
            <span className="border-2 sm:border-3 border-black bg-white px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 font-bold text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
              <Rocket size={14} strokeWidth={3} className="sm:w-4 sm:h-4" />
              CI/CD
            </span>
            <span className="border-2 sm:border-3 border-black bg-white px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 font-bold text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
              <Package size={14} strokeWidth={3} className="sm:w-4 sm:h-4" />
              Containers
            </span>
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  loading="lazy"
                />
              )
              : <span className="text-3xl sm:text-4xl md:text-5xl font-black" aria-hidden="true">{article.icon}</span>;

          return (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-3 sm:border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] p-4 sm:p-5 md:p-6 hover:shadow-[10px_10px_0px_0px_#000] sm:hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all block active:shadow-none active:translate-x-0 active:translate-y-0"
            >
              {/* Article icon/visual */}
              <div
                className={`w-full h-36 sm:h-40 md:h-48 bg-linear-to-br ${article.bgGradient} border-3 sm:border-4 border-black mb-3 sm:mb-4 flex items-center justify-center`}
              >
                <div className="border-3 sm:border-4 border-black bg-white p-4 sm:p-5 md:p-6 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000]">
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
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black mb-2 sm:mb-3 leading-tight">{article.title}</h3>

            {/* Article description */}
            <p className="text-xs sm:text-sm text-gray-700 mb-2.5 sm:mb-3 md:mb-4 line-clamp-3">{article.description}</p>

            {/* Article metadata */}
            <div className="text-[10px] sm:text-xs text-gray-600 font-semibold">
              {article.readTime} • {article.date}
            </div>
            </a>
          );
        })}
      </div>

      {/* View all articles CTA */}
      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <a
          href="https://medium.com/@hasinthapasindu"
          target="_blank"
          rel="noopener noreferrer"
          className="border-3 sm:border-4 border-black bg-purple-100 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-black inline-block hover:shadow-[10px_10px_0px_0px_#000] sm:hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all active:shadow-none active:translate-x-0 active:translate-y-0"
        >
          VIEW ALL ARTICLES →
        </a>
      </div>
    </section>
  );
};

export default Blog;
