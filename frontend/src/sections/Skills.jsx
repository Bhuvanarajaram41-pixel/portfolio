import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { skillsData as defaultSkills } from '../data/skillsData';
import { Wrench, Terminal, Database, Code, Globe, Cpu } from 'lucide-react';

export default function Skills() {
  const { config } = usePortfolio();
  const skillsData = config?.skills || defaultSkills;

  const categoryIcons = {
    'Machine Learning': Cpu,
    'Deep Learning & Vision': Globe,
    'Programming Languages': Terminal,
    'Web & Systems Engineering': Code,
    'Databases & Storage': Database,
    'Geospatial & Developer Tools': Wrench,
  };

  return (
    <section id="skills" className="py-24 bg-background-subtle/30 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Organized by domain expertise and system architectural role — grounded in actual usage across projects and research experiments.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryGroup, idx) => {
            const IconComponent = categoryIcons[categoryGroup.category] || Code;

            return (
              <motion.div
                key={categoryGroup.category || idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="rounded-2xl bg-background-card border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/5 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {categoryGroup.category}
                      </h3>
                      <span className="text-[10px] font-mono text-gray-400">
                        {categoryGroup.skills ? categoryGroup.skills.length : 0} Core Tools
                      </span>
                    </div>
                  </div>

                  {categoryGroup.description && (
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      {categoryGroup.description}
                    </p>
                  )}

                  {/* Skill Items - Honest Badges, NO fake percentage bars */}
                  <div className="flex flex-wrap gap-2">
                    {categoryGroup.skills && categoryGroup.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-background-subtle border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-between gap-2"
                      >
                        <span className="text-xs font-medium text-gray-200">
                          {skill.name}
                        </span>
                        {skill.type && (
                          <span className="text-[9px] font-mono text-cyan-400/80 bg-black/40 px-1.5 py-0.5 rounded">
                            {skill.type}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-gray-500 flex items-center justify-between">
                  <span>No synthetic bars</span>
                  <span className="text-emerald-400/80">● Actively Used</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
