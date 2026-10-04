import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { achievementsData as defaultAchievements } from '../data/achievementsData';
import { educationData as defaultEducation } from '../data/experienceData';
import { Award, GraduationCap, CheckCircle, ExternalLink, X, MapPin, ZoomIn, ShieldCheck } from 'lucide-react';

export default function Achievements() {
  const { config } = usePortfolio();
  const [selectedCert, setSelectedCert] = useState(null);

  const educationData = config?.education || defaultEducation;
  const achievementsData = config?.achievements || defaultAchievements;

  return (
    <section id="achievements" className="py-24 bg-background-subtle/40 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Academic Rigor &amp; Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; Achievements
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Formally recognized academic accomplishments, government-accredited skill certifications, and technical honors.
          </p>
        </div>

        {/* Education Highlight Card */}
        {educationData && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-background-card border border-cyan-500/30 shadow-xl shadow-cyan-500/5 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                    Undergraduate Degree Program
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {educationData.institution}
                  </h3>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-semibold inline-block">
                  {educationData.currentStatus}
                </span>
                <span className="text-[11px] text-gray-400 flex items-center gap-1 sm:justify-end mt-1 font-mono">
                  <MapPin className="w-3 h-3" /> {educationData.location}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="text-base font-semibold text-white">
                {educationData.degree}
              </h4>
              <p className="text-xs font-mono text-cyan-400">
                Specialization: {educationData.specialization}
              </p>
            </div>

            {educationData.highlights && educationData.highlights.length > 0 && (
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2">
                  Academic Highlights &amp; Foundations
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {educationData.highlights.map((h, idx) => (
                    <li key={idx} className="p-3 rounded-xl bg-background-subtle border border-white/5 text-xs text-gray-300 leading-relaxed flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}

        {/* Certifications and Achievements Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400 uppercase tracking-wider">
            <span>Verified Credentials &amp; Certifications</span>
            <span>{achievementsData.length} Recognized Milestones</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievementsData.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="group p-5 rounded-2xl bg-background-card border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="space-y-3">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
                      {item.date || item.issuer}
                    </span>
                  </div>

                  {/* Certificate Thumbnail Preview if image exists */}
                  {item.image && (
                    <div 
                      onClick={() => setSelectedCert(item)}
                      className="relative overflow-hidden rounded-xl border border-white/10 cursor-pointer bg-black/40 aspect-[16/10] group/img"
                    >
                      <img
                        src={item.image}
                        alt={`${item.title} certificate preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />
                      <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[10px] font-mono flex items-center gap-1 shadow-md">
                        <ZoomIn className="w-3 h-3" />
                        <span>Enlarge Certificate</span>
                      </div>
                      {item.badge && (
                        <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-[10px] font-mono font-semibold">
                          {item.badge}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Title & Description */}
                  <h4 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-1 pt-1 text-[11px] text-gray-400">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </span>
                  <button
                    onClick={() => setSelectedCert(item)}
                    className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] flex items-center gap-1.5 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 px-3 py-1 rounded-lg transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Enlarged Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-3xl max-h-[90vh] bg-background-card border border-white/15 rounded-2xl shadow-2xl p-5 sm:p-7 z-10 space-y-4 overflow-y-auto"
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                      {selectedCert.category}
                    </span>
                    {selectedCert.badge && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
                        {selectedCert.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-400">
                    {selectedCert.issuer} • {selectedCert.date}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image View */}
              {selectedCert.image && (
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-lg">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                  />
                </div>
              )}

              <div className="p-4 rounded-xl bg-background-subtle border border-white/5 space-y-2 text-xs text-gray-300">
                <p className="leading-relaxed">{selectedCert.description}</p>
                {selectedCert.highlights && (
                  <ul className="space-y-1 text-gray-400 list-disc list-inside">
                    {selectedCert.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                {selectedCert.image ? (
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                  >
                    <span>Open Full-Resolution Image</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : <div />}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-medium rounded-lg transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
