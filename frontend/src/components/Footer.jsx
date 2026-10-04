import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Lock } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Footer() {
  const { config, setIsEditorOpen } = usePortfolio();
  const author = config?.author || {};
  const authorName = author.name || 'BHUVANESHWARI.R';
  const authorEmail = author.email || 'rbhuvaneshwarirajaraman41@gmail.com';
  const authorGithub = author.github || 'https://github.com/Bhuvanarajaram41-pixel';
  const authorLinkedin = author.linkedin || 'https://www.linkedin.com/in/bhuvaneshwari-rajaram-918991290';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-background-card/50 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-teal-300 text-base tracking-wider font-mono">
                {authorName}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                CSE (AI & ML)
              </span>
            </div>
            <p className="text-xs text-gray-400 font-mono">
              "Building intelligent systems, one project at a time."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={authorGithub}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-cyan-500/30 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={authorLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-cyan-500/30 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${authorEmail}`}
              aria-label="Send Direct Email"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-cyan-500/30 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-300 border border-white/5 transition-all ml-1"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and subtle author key */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2 font-mono">
          <div className="flex items-center gap-2">
            <p>© 2026 {authorName}. All rights reserved.</p>
            {/* Discreet Author Access Key for owner */}
            <button
              onClick={() => setIsEditorOpen(true)}
              className="text-gray-600 hover:text-cyan-400/80 transition-colors p-1"
              title="Author Authentication (Alt+E)"
              aria-label="Author Access"
            >
              <Lock className="w-3 h-3" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-gray-400">
              Engineered with React, Vite, Tailwind CSS &amp; Node.js Express.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
