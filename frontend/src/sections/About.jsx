import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { Brain, Cpu, Code2, Users, Compass, Award } from 'lucide-react';

export default function About() {
  const { config } = usePortfolio();
  const author = config?.author || {};

  const defaultNarrative = [
    "I’m a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I enjoy taking complex real-world problems and turning them into practical software systems using machine learning, data-driven approaches, and modern web technologies.",
    "My projects span multiple domains including smart infrastructure, emergency healthcare systems, computer vision, environmental intelligence, recommendation systems, and predictive analytics.",
    "Rather than treating machine learning as purely abstract notebooks or theoretical math, my focus is on practical development: sourcing datasets, structuring preprocessing pipelines, tuning statistical models, engineering full-stack user interfaces, and ensuring reliable system execution."
  ];

  const narrative = author.aboutNarrative || defaultNarrative;

  const pillars = [
    {
      title: 'Project-Driven Learning',
      desc: 'Building concrete end-to-end architectures to stress-test theoretical machine learning concepts against real edge cases.',
      icon: Cpu
    },
    {
      title: 'Hackathons & Fast Iteration',
      desc: 'Prototyping dynamic solutions under time constraints, combining rapid frontend dashboards with robust statistical backends.',
      icon: Code2
    },
    {
      title: 'IYRA Innovators Community',
      desc: 'Creative & Design Head in our community formed with 5 peers, designing brochures, frontend UI, and organizing developer events.',
      icon: Users
    },
    {
      title: 'Emerging Technology',
      desc: 'Continuously experimenting with digital-twin paradigms, edge microgrids, computer vision models, and healthcare data security.',
      icon: Compass
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Brain className="w-3.5 h-3.5" />
              <span>Identity &amp; Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About Me
            </h2>

            {/* Profile Avatar Card */}
            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/25 shadow-lg shadow-cyan-950/20">
              <div className="relative w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 to-teal-300 flex-shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden border border-slate-950 bg-slate-900">
                  <img
                    src={author.profilePhoto || '/assets/profile.jpg'}
                    alt={author.name || 'BHUVANESHWARI.R'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-0.5">
                <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                  <span>{author.name || 'BHUVANESHWARI.R'}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                    2nd Year
                  </span>
                </h3>
                <p className="text-xs text-cyan-300 font-mono">
                  {author.role} • {author.specialization}
                </p>
                <p className="text-[11px] text-gray-400 font-mono">
                  {author.institution}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              {narrative.map((p, idx) => (
                <p key={idx} className={idx === narrative.length - 1 ? "text-gray-400 text-xs sm:text-sm" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-background-card border border-white/5 space-y-2">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Current Status & Academic Grounding
              </div>
              <p className="text-xs text-gray-300 leading-normal">
                Currently in my <strong>2nd Year of Undergraduate Studies</strong> at {author.institution || 'Sathyabama Institute of Science and Technology'}, maintaining strong academic rigor as a Chancellor Scholarship recipient while actively collaborating through internships, technical forums, and open-source explorations.
              </p>
            </div>
          </div>

          {/* Right Column: Key Pillars Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-background-card border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-background-hover/70 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
