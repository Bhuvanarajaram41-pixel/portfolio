import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, Github, Cpu, Activity, ShieldCheck, Zap, 
  MapPin, Layers, CheckCircle2, AlertCircle, ArrowRight, Gauge, Database
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isKinetic = project.id === 'kinetic-twin';
  const isRapidMed = project.id === 'rapidmed';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="relative w-full max-w-4xl max-h-[90vh] bg-background-card border border-white/15 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-start justify-between bg-background-subtle/80 relative">
            <div className="space-y-1.5 pr-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                  {project.category}
                </span>
                {project.status && (
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {project.status}
                  </span>
                )}
              </div>
              <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-xs sm:text-sm text-gray-300 font-mono">
                  {project.subtitle}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              aria-label="Close project modal"
              className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-gray-200">
            {/* Overview / Key Proposition */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                Project Overview
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                {project.overview || project.description}
              </p>
            </div>

            {/* Problem & Solution Grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-red-950/15 border border-red-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-red-400 uppercase tracking-wide">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Core Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.problem || 'Addressing performance constraints, accuracy trade-offs, and computational efficiencies in unstructured environments.'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Engineered Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.solution || 'Developed tailored algorithms, engineered pipelines, and interactive dashboards to address the specific problem requirements.'}
                </p>
              </div>
            </div>

            {/* KineticTwin Custom Deep-Dive Section */}
            {isKinetic && (
              <div className="space-y-6">
                {/* Core ML & Performance Banner */}
                <div className="p-4 rounded-xl bg-background-subtle border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                      Machine Learning Engine
                    </span>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      {project.coreML.model}
                    </h4>
                    <p className="text-xs text-gray-400">
                      Preprocessing: {project.coreML.preprocessing}
                    </p>
                  </div>
                  <div className="bg-black/60 border border-cyan-500/30 rounded-lg p-3 sm:text-right">
                    <span className="text-xs font-mono text-cyan-400 block font-semibold">
                      {project.coreML.metricValue}
                    </span>
                    <span className="text-[10px] text-gray-400 block">
                      {project.coreML.metricLabel}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200 leading-relaxed flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Scientific Grounding:</strong> {project.coreML.metricClarification}
                  </span>
                </div>

                {/* SVG/CSS Flow Architecture Diagram */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>System Pipeline Architecture</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                    {project.architecture.map((item, idx) => (
                      <div key={idx} className="relative p-3 rounded-xl bg-background-subtle border border-white/10 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-cyan-400 block font-bold mb-1">
                            Phase {item.step}
                          </span>
                          <span className="text-xs font-semibold text-white block mb-1">
                            {item.title}
                          </span>
                          <p className="text-[11px] text-gray-400 leading-tight">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Modules Breakdown */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                    Technical Modules Breakdown
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.modules.map((mod, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-background-subtle border border-white/5 space-y-1">
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {mod.name}
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {mod.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actuation Logic */}
                <div className="p-4 rounded-xl bg-background-subtle border border-white/5 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Gauge className="w-4 h-4" />
                    <span>Tri-Tier Actuation Logic Specification</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20">
                      <div className="font-bold text-red-400">Critical Power Injection</div>
                      <div className="font-mono text-gray-400 text-[11px]">&gt; 500 Visitors</div>
                      <p className="text-gray-400 mt-1 text-[11px]">Maximum piezoelectric capture & grid feed-in routing.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/20">
                      <div className="font-bold text-cyan-400">Optimal Load Balancing</div>
                      <div className="font-mono text-gray-400 text-[11px]">250 – 500 Visitors</div>
                      <p className="text-gray-400 mt-1 text-[11px]">Dynamic capacitor charging and continuous grid balancing.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                      <div className="font-bold text-slate-300">Low-Signal Standby</div>
                      <div className="font-mono text-gray-400 text-[11px]">&lt; 250 Visitors</div>
                      <p className="text-gray-400 mt-1 text-[11px]">Reduced hardware cycles to minimize mechanical tile wear.</p>
                    </div>
                  </div>
                </div>

                {/* Truthfulness & Future Scope */}
                <div className="p-4 rounded-xl bg-background-subtle border border-white/5 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-300">
                    System Implementation Status & Future Scope
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-semibold text-emerald-400 block mb-1.5 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Implemented Software Layer
                      </span>
                      <ul className="space-y-1 text-gray-400 text-[11px] list-disc list-inside">
                        {project.truthfulness.implemented.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-semibold text-cyan-400 block mb-1.5 flex items-center gap-1">
                        <ArrowRight className="w-3.5 h-3.5" /> Proposed Future Expansion
                      </span>
                      <ul className="space-y-1 text-gray-400 text-[11px] list-disc list-inside">
                        {project.truthfulness.futureScope.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 font-mono italic pt-2 border-t border-white/5">
                    {project.truthfulness.hardwareDisclaimer}
                  </p>
                </div>
              </div>
            )}

            {/* RapidMed Custom Deep-Dive Section */}
            {isRapidMed && (
              <div className="space-y-6">
                {/* Multi-Portal Grid Breakdown */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                    <Activity className="w-4 h-4" />
                    <span>Synchronized Municipal Emergency Grid</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {project.coreSystem.map((sys, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-background-subtle border border-white/5 space-y-1">
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {sys.name}
                        </div>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                          {sys.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Smart Health Locker & Dual-Path Verification */}
                <div className="p-5 rounded-xl bg-background-subtle border border-cyan-500/20 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      {project.smartHealthLocker.title}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 bg-black/40 px-2 py-0.5 rounded border border-white/10">
                      High-Security Protocol
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    Integrates dynamic QR tokenization with pre-hospital trauma identification to deliver immediate medical history access without compromising privacy:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-black/40 border border-white/10">
                      <div className="font-semibold text-emerald-400 mb-1">Normal Conscious Pathway</div>
                      <p className="text-gray-400 text-[11px]">{project.smartHealthLocker.authModes.normal}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/40 border border-amber-500/20">
                      <div className="font-semibold text-amber-400 mb-1">Emergency Break-Glass Pathway</div>
                      <p className="text-gray-400 text-[11px]">{project.smartHealthLocker.authModes.emergency}</p>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-500 font-mono italic">
                    {project.smartHealthLocker.abdmDisclaimer}
                  </p>
                </div>

                {/* Emergency Routing & Green Corridor */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-background-subtle border border-white/5 space-y-2">
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Geospatial Routing Engine</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Powered by <strong>OSRM (Open Source Routing Machine)</strong> alongside Leaflet and Mapbox layers for accurate turn-by-turn emergency dispatch and trauma center routing.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background-subtle border border-white/5 space-y-2">
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Green Corridor Concept</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {project.routingAndCorridor.greenCorridor}
                    </p>
                    <p className="text-[10px] text-gray-500 font-mono italic">
                      {project.routingAndCorridor.trafficDisclaimer}
                    </p>
                  </div>
                </div>

                {/* Truthful Future AI Scope (ACO) */}
                <div className="p-4 rounded-xl bg-background-subtle border border-white/5 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-300">
                    Implementation vs Future Roadmap
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-semibold text-emerald-400 block mb-1.5 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Implemented System Architecture
                      </span>
                      <ul className="space-y-1 text-gray-400 text-[11px] list-disc list-inside">
                        {project.truthfulness.implemented.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-semibold text-cyan-400 block mb-1.5 flex items-center gap-1">
                        <ArrowRight className="w-3.5 h-3.5" /> Future AI & Infrastructure Scope
                      </span>
                      <ul className="space-y-1 text-gray-400 text-[11px] list-disc list-inside">
                        <li><strong>Ant Colony Optimization (ACO):</strong> Future planned enhancement for multi-objective emergency pathfinding.</li>
                        <li>Autonomous municipal traffic signal preemption telemetry.</li>
                        <li>Automated cold-chain blood courier dispatching.</li>
                        <li>Inter-district mass casualty trauma capacity balancing.</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 font-mono italic pt-2 border-t border-white/5">
                    {project.truthfulness.statusNote}
                  </p>
                </div>
              </div>
            )}

            {/* Other Projects Details (if modal opened for them) */}
            {!isKinetic && !isRapidMed && (
              <div className="space-y-4">
                {project.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-background-subtle border border-white/10 text-center">
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                          {metric.label}
                        </span>
                        <span className="text-base sm:text-lg font-bold text-cyan-400 font-mono block mt-0.5">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {project.highlights && (
                  <div className="p-4 rounded-xl bg-background-subtle border border-white/5 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block">
                      Key Technical Highlights
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-300 list-disc list-inside">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Technology Stack Pills */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2.5">
                Technology Stack & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-background-subtle border border-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 border-t border-white/10 bg-background-subtle/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 rounded-lg text-xs font-medium transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Interactive Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-medium transition-colors"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
