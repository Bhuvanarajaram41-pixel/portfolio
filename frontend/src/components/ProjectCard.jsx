import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Cpu, Layers, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, onSelect, isFeatured = false }) {
  if (isFeatured) {
    const isKinetic = project.id === 'kinetic-twin';
    const isRapidMed = project.id === 'rapidmed';

    return (
      <motion.article
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="group relative rounded-2xl bg-background-card border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between overflow-hidden"
      >
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-500" />
        
        <div className="relative z-10 space-y-6">
          {/* Top category & Status badges */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase bg-cyan-950/50 border border-cyan-500/30 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.badge || project.status}
            </span>
          </div>

          {/* Title and Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-mono mt-1.5 leading-snug">
              {project.subtitle}
            </p>
          </div>

          {/* Core Problem & Solution Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-background-subtle border border-white/5 space-y-1.5">
              <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider block">
                The Challenge
              </span>
              <p className="text-gray-300 leading-relaxed text-xs">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background-subtle border border-cyan-500/20 space-y-1.5">
              <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider block">
                Engineered Solution
              </span>
              <p className="text-gray-300 leading-relaxed text-xs">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Metric / Architecture Feature Highlight */}
          {isKinetic && (
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/25 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-300 font-medium block">
                    Core Algorithm: <strong className="text-white font-mono">Random Forest Regressor</strong>
                  </span>
                  <span className="text-[11px] text-gray-400">
                    Spatial-Temporal One-Hot Matrix Preprocessing
                  </span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-lg font-mono font-bold text-cyan-400 block">
                  90.87%
                </span>
                <span className="text-[10px] text-gray-400 uppercase font-mono block">
                  Prototype Validation
                </span>
              </div>
            </div>
          )}

          {isRapidMed && (
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/25 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-300 font-medium block">
                    ABDM-Oriented Architecture: <strong className="text-white font-mono">Smart Health Locker</strong>
                  </span>
                  <span className="text-[11px] text-gray-400">
                    Dual-Path Verification (Normal OTP + Break-Glass Emergency Audit)
                  </span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-sm font-mono font-bold text-blue-400 block">
                  OSRM + Mapbox
                </span>
                <span className="text-[10px] text-gray-400 uppercase font-mono block">
                  Geospatial Grid
                </span>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-gray-400 group-hover:border-cyan-500/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Action Footer */}
        <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 text-xs font-mono flex items-center gap-1.5 transition-colors focus:ring-2 focus:ring-cyan-500"
              >
                <Github className="w-4 h-4" />
                <span>Source</span>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="px-3.5 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-colors focus:ring-2 focus:ring-cyan-500"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onSelect(project)}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-teal-500/20 hover:from-cyan-500/30 hover:to-teal-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-semibold flex items-center gap-2 transition-all shadow-sm hover:shadow-cyan-500/20 focus:ring-2 focus:ring-cyan-400"
          >
            <span>System Deep-Dive</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </motion.article>
    );
  }

  // Other Projects Card
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4 }}
      className="group rounded-xl bg-background-card border border-white/10 hover:border-cyan-500/30 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
    >
      <div className="space-y-4">
        {/* Category & Best Model */}
        <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
          <span className="text-cyan-400 uppercase tracking-wider">{project.category}</span>
          {project.bestModel && (
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
              {project.bestModel}
            </span>
          )}
        </div>

        {/* Title */}
        <div>
          <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h4>
          {project.subtitle && (
            <p className="text-xs text-gray-400 font-mono mt-0.5">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Metric Badges */}
        {project.metrics && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="px-2.5 py-1 rounded bg-background-subtle border border-white/5 text-[11px] font-mono">
                <span className="text-gray-400 mr-1.5">{metric.label}:</span>
                <span className="text-cyan-300 font-semibold">{metric.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-500">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer Link & Modal Button */}
      <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} code`}
              className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="p-1.5 rounded-md text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <button
          onClick={() => onSelect(project)}
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
}
