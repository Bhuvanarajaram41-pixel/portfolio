import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { Sparkles, ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

export default function CustomSections() {
  const { config } = usePortfolio();
  const customSections = config?.customSections || [];

  if (!customSections || customSections.length === 0) {
    return null;
  }

  return (
    <div className="space-y-24">
      {customSections.map((section, secIdx) => (
        <section
          key={section.id || `custom-sec-${secIdx}`}
          id={section.id || `custom-sec-${secIdx}`}
          className="py-20 bg-background relative z-10 border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Author Added Section</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {section.title}
              </h2>
              {section.subtitle && (
                <p className="text-sm sm:text-base text-gray-400">
                  {section.subtitle}
                </p>
              )}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items && section.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: itemIdx * 0.08 }}
                  className="rounded-2xl bg-background-card border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/5 group"
                >
                  <div className="space-y-3">
                    {item.badge && (
                      <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                        {item.badge}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                    {item.tags && Array.isArray(item.tags) && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tags.map((t, tidx) => (
                          <span
                            key={tidx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {item.link && (
                    <div className="pt-4 border-t border-white/5 mt-4">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 group-hover:underline"
                      >
                        <span>View Resource</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
