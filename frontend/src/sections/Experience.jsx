import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { experienceData as defaultExperience } from '../data/experienceData';
import { Briefcase, ArrowRight, CheckCircle2, Users, Cpu, FileCheck } from 'lucide-react';

export default function Experience() {
  const { config } = usePortfolio();
  const experienceData = config?.experience || defaultExperience;

  return (
    <section id="experience" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience &amp; Community
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Real-world machine learning internships and active collaborative contributions within academic AI communities.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-background-card border border-white/10 hover:border-cyan-500/30 transition-all space-y-6"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-bold text-white">
                      {exp.organization}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                      {exp.role}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    {exp.type} • {exp.period}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Specific Workflow if present (CodeAlpha) */}
              {exp.workflow && (
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block">
                    Practical Development Lifecycle
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                    {exp.workflow.map((w, wIdx) => (
                      <div key={wIdx} className="p-3 rounded-xl bg-background-subtle border border-white/5 space-y-1">
                        <span className="text-[10px] font-mono text-cyan-400 font-bold block">
                          Step {w.step}
                        </span>
                        <span className="text-xs font-semibold text-white block">
                          {w.name}
                        </span>
                        <p className="text-[11px] text-gray-400 leading-tight">
                          {w.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Completed Projects during Internship */}
              {exp.projectsCompleted && (
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                    Shipped Internship Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.projectsCompleted.map((p, pIdx) => (
                      <div key={pIdx} className="p-4 rounded-xl bg-background-subtle border border-white/5 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-white">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span>{p.title}</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Activities if present */}
              {exp.activities && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                    Community Contributions &amp; Engagements
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    {exp.activities.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold mt-0.5">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
