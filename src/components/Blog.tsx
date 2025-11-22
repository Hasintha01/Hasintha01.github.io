/**
 * Blog Section Component
 * Displays latest blog articles with previews and metadata
 * Grid layout with article cards featuring icons and category badges
 */

import React from 'react';
import { BookOpen, FileCode, Newspaper, PenTool } from 'lucide-react';
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
      <h2 className="text-5xl font-black font-grotesk mb-12 -rotate-1 flex items-center gap-4">
        <div className="border-4 border-black bg-blue-300 p-3 shadow-[4px_4px_0px_0px_#000]">
          <PenTool size={36} strokeWidth={3} />
        </div>
        LATEST ARTICLES
      </h2>

      {/* Articles grid */}
      <div className="grid md:grid-cols-3 gap-8">
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
              className={`inline-block border-2 border-black ${article.categoryBg} px-3 py-1 text-xs font-black mb-3`}
            >
              {article.category}
            </div>

            {/* Article title */}
            <h3 className="text-xl font-black mb-3">{article.title}</h3>

            {/* Article description */}
            <p className="text-sm text-gray-700 mb-4">{article.description}</p>

            {/* Article metadata */}
            <div className="text-xs text-gray-600 font-semibold">
              {article.readTime} • {article.date}
            </div>
            </a>
          );
        })}
      </div>

      {/* View all articles CTA */}
      <div className="text-center mt-12">
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
