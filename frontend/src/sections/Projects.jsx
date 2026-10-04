import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { featuredProjects as defaultFeatured, otherProjects as defaultOther, filterCategories as defaultFilters } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { Sparkles, Filter, Layers, Code } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const { config } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featured = config?.featuredProjects || defaultFeatured;
  const other = config?.otherProjects || defaultOther;
  const filterCategories = config?.filterCategories || defaultFilters;

  // Filter logic
  const filteredFeatured = useMemo(() => {
    if (selectedCategory === 'All') return featured;
    return featured.filter(p => p.categories && p.categories.includes(selectedCategory));
  }, [selectedCategory, featured]);

  const filteredOther = useMemo(() => {
    if (selectedCategory === 'All') return other;
    return other.filter(p => p.categories && p.categories.includes(selectedCategory));
  }, [selectedCategory, other]);

  return (
    <section id="projects" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineered Systems &amp; Software</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Technically ambitious, real-world systems spanning predictive edge microgrids, emergency trauma grids, and applied computer vision.
            </p>
          </div>

          {/* Filter Categories Bar */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filter by Technical Domain:</span>
            </div>
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Project category filters">
              {filterCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      isActive
                        ? 'bg-cyan-500 text-gray-950 font-bold shadow-md shadow-cyan-500/20'
                        : 'bg-background-card hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 1. VISUALLY DOMINANT FEATURED PROJECTS */}
        {filteredFeatured.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Primary Architecture Showcases</span>
              </div>
              <span className="text-xs font-mono text-gray-500">
                {filteredFeatured.length} Flagship System{filteredFeatured.length > 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {filteredFeatured.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={onSelectProject}
                  isFeatured={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* 2. OTHER PROJECTS */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-t border-white/10 pt-10">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-300 uppercase tracking-wider">
              <Code className="w-4 h-4 text-cyan-400" />
              <span>Other Applied AI/ML &amp; Data Science Projects</span>
            </div>
            <span className="text-xs font-mono text-gray-500">
              {filteredOther.length} Project{filteredOther.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filteredOther.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOther.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={onSelectProject}
                  isFeatured={false}
                />
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-xl bg-background-card border border-white/5 text-center text-gray-400 text-xs font-mono">
              No additional projects found for category "{selectedCategory}". Switch filter to view more.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
