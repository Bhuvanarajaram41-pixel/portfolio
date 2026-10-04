import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, Globe, Server, Network, ArrowRight } from 'lucide-react';

export default function SystemProgression() {
  const steps = [
    {
      stage: '01',
      title: 'Foundations & Mathematics',
      subtitle: 'Learning ML & Algorithms',
      detail: 'Core linear algebra, probability, data structures, and mathematical intuition.',
      icon: BookOpen,
      example: 'Titanic & Housing Regressions'
    },
    {
      stage: '02',
      title: 'Statistical Modeling',
      subtitle: 'Building ML Models',
      detail: 'Feature engineering, clustering, and ensemble learning on tabular datasets.',
      icon: Cpu,
      example: 'Amazon Clustering & AirAware AQI'
    },
    {
      stage: '03',
      title: 'Computer Vision & Inference',
      subtitle: 'Deploying Interactive Applications',
      detail: 'Deep CNN architectures, multi-class spatial classification, and real-time Streamlit HUDs.',
      icon: Globe,
      example: '62-Class Character Recognition'
    },
    {
      stage: '04',
      title: 'Enterprise Architecture',
      subtitle: 'Building Full-Stack Systems',
      detail: 'Multi-role authentication, geospatial routing, and role-segregated portals.',
      icon: Server,
      example: 'RapidMed Trauma Grid'
    },
    {
      stage: '05',
      title: 'Cyber-Physical Intelligence',
      subtitle: 'Intelligent Infrastructure & Digital Twins',
      detail: 'Edge microgrid orchestration, predictive energy harvesting, and tri-tier actuation.',
      icon: Network,
      example: 'KineticTwin (SmartFootAI)'
    }
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-background-subtle/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <span>Engineering Trajectory</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Evolution from Algorithmic Foundations to Intelligent Infrastructure
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            A continuous progression bridging statistical models into real-world, high-reliability software systems.
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`relative p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                  isLast
                    ? 'bg-cyan-950/20 border-cyan-500/40 shadow-lg shadow-cyan-500/5'
                    : 'bg-background-card/60 border-white/5 hover:border-white/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {step.stage}
                    </span>
                    <div className="p-1.5 rounded-lg bg-white/5 text-gray-300">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                    {step.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-white mt-0.5 mb-1.5">
                    {step.subtitle}
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono text-cyan-300/80 block">
                    Focus: {step.example}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
