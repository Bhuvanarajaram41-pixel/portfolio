import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, FileText, ArrowRight, Home, User, Briefcase, 
  Cpu, Award, Mail, Sparkles, Milestone, Sliders 
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Navbar({ onOpenResume }) {
  const { config, setIsEditorOpen } = usePortfolio();
  const authorName = config?.author?.name || 'BHUVANESHWARI.R';

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Experience', href: '#experience', icon: Milestone },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Capsule Dock Bar */}
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 border ${
            scrolled
              ? 'bg-background-card/90 backdrop-blur-xl border-cyan-500/25 shadow-2xl shadow-cyan-950/40'
              : 'bg-background-subtle/80 backdrop-blur-md border-white/10 shadow-lg'
          }`}
        >
          {/* Logo with High-Contrast Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-full"
            aria-label={`${authorName} Home`}
          >
            <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 to-teal-300 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform overflow-hidden flex-shrink-0">
              <img
                src="/assets/profile.jpg"
                alt="BR"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-extrabold tracking-wider text-cyan-200 group-hover:text-white transition-colors flex items-center gap-1.5 font-mono">
                {authorName}
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </span>
              <span className="text-[9px] font-mono text-gray-400 tracking-wider hidden sm:block">
                CSE (AI &amp; ML)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Icons */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs font-mono transition-all rounded-full flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                    isActive
                      ? 'text-cyan-300 font-bold bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Actions: Download Resume Button */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="group relative px-4 py-2 text-xs font-semibold text-gray-950 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full hover:from-cyan-300 hover:to-teal-300 transition-all shadow-md shadow-cyan-500/25 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <FileText className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="bg-background-card/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-5 shadow-2xl space-y-2">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2 text-xs font-mono rounded-xl transition-colors flex items-center justify-between ${
                        activeSection === link.href.substring(1)
                          ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-cyan-400" />
                        <span>{link.name}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
                    </a>
                  );
                })}

                <div className="pt-3 border-t border-white/10">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-950 font-bold text-xs rounded-xl hover:from-cyan-300 hover:to-teal-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
