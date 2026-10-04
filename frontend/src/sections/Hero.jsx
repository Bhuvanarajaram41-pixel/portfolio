import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles, Terminal, Cpu, Activity, ShieldCheck, ArrowDown } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import FlipWords from '../components/FlipWords';

export default function Hero({ onOpenResume }) {
  const { config } = usePortfolio();
  const author = config?.author || {};

  const dynamicRoles = author.rotatingRoles || [
    'CSE (AI & ML) Student',
    'Intelligent Systems Builder',
    'Creative & Design Head'
  ];

  const authorName = author.name || 'BHUVANESHWARI.R';
  const authorEmail = author.email || 'rbhuvaneshwarirajaraman41@gmail.com';
  const authorGithub = author.github || 'https://github.com/Bhuvanarajaram41-pixel';
  const authorLinkedin = author.linkedin || 'https://www.linkedin.com/in/bhuvaneshwari-rajaram-918991290';
  const availabilityBadge = author.availabilityBadge || 'Open to internships & technical opportunities';
  const profilePhoto = author.profilePhoto || '/assets/profile.jpg';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial-gradient"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Greeting, Rotating FlipWords, Floating Headlines, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center"
            >
              <div className="px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/50 text-cyan-300 text-xs font-mono tracking-wide flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{availabilityBadge}</span>
              </div>
            </motion.div>

            {/* Standout Name Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2.5 text-gray-200 text-base sm:text-lg font-mono">
                <span>{author.heroGreeting || 'Hello 👋 I am'}</span>
                <span className="inline-flex items-center px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-950 via-slate-900 to-cyan-950 border-2 border-cyan-400 font-extrabold tracking-widest text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.5)] text-lg sm:text-2xl drop-shadow-[0_2px_10px_rgba(0,242,254,0.4)]">
                  {authorName}
                </span>
              </div>

              {/* Aceternity-style Dynamic FlipWords */}
              <div className="text-xl sm:text-2xl md:text-3xl font-mono text-gray-300 font-medium h-10 flex items-center justify-center lg:justify-start">
                <span className="text-gray-400 mr-2 text-sm sm:text-base font-normal">A passionate</span>
                <FlipWords words={dynamicRoles} className="text-cyan-300 font-bold" />
              </div>
            </motion.div>

            {/* User Requested Moving Animation: Sentence 1 from LEFT, Sentence 2 from RIGHT */}
            <div className="space-y-2 py-1 overflow-visible">
              {/* Sentence 1 coming from the left */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.25,
                }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]"
              >
                Building{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-cyan-200 animate-gradient-flow font-black drop-shadow-[0_0_30px_rgba(6,182,212,0.45)]">
                  Intelligent Systems
                </span>
              </motion.div>

              {/* Sentence 2 coming from the right */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.45,
                }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]"
              >
                for Real-World Problems.
              </motion.div>
            </div>

            {/* Sub-headline description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              {author.heroDescription || 'Turning intelligent algorithms into practical systems across smart infrastructure, emergency pre-hospital trauma coordination, computer vision, and data-driven applications.'}
            </motion.p>

            {/* Engineering Trajectory Pipeline Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono text-gray-400"
            >
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-gray-300">
                AI / ML
              </span>
              <span className="text-cyan-400 font-bold">→</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-gray-300">
                Engineering
              </span>
              <span className="text-cyan-400 font-bold">→</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-gray-300">
                Real-World Problems
              </span>
              <span className="text-cyan-400 font-bold">→</span>
              <span className="px-2.5 py-1 rounded bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-semibold">
                Intelligent Systems
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-gray-950 font-bold text-xs sm:text-sm rounded-full shadow-lg shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-cyan-500/30 hover:border-cyan-400 text-white font-semibold text-xs sm:text-sm rounded-full transition-all flex items-center justify-center gap-2 group"
              >
                <FileText className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex items-center justify-center lg:justify-start gap-3 pt-2 text-gray-400"
            >
              <a
                href={authorGithub}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 hover:border-cyan-500/40 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={authorLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 hover:border-cyan-500/40 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${authorEmail}`}
                aria-label="Direct Email"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-mono"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">{authorEmail}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Futuristic Cyber-Physical Digital Twin Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center"
            >
              {/* Pulsing ambient rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-4 rounded-full border border-dashed border-teal-500/25 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '24s' }} />
              <div className="absolute inset-12 rounded-full border border-cyan-400/30 animate-pulse" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-cyan-950/40 to-slate-900/60 backdrop-blur-md border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.2)]" />

              {/* Core Center Circular Framed Profile Photo */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-teal-300 to-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.45)] ring-4 ring-cyan-500/20 group">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-950 bg-slate-900">
                    <img
                      src={profilePhoto}
                      alt={authorName}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                  </div>
                  {/* Glowing online status beacon */}
                  <div className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg" title="Active">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                {/* Identity Tag beneath portrait */}
                <div className="mt-3 px-3 py-1 rounded-full bg-slate-950/90 border border-cyan-500/40 text-cyan-300 text-[11px] font-mono tracking-wider shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>{authorName}</span>
                </div>
              </div>

              {/* Orbiting Telemetry Feature Chips */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-2 left-4 px-3 py-1.5 rounded-xl bg-background-card/90 backdrop-blur-md border border-cyan-500/40 shadow-lg text-[11px] font-mono text-cyan-300 flex items-center gap-1.5"
              >
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>KineticTwin: 90.87%</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-2 right-4 px-3 py-1.5 rounded-xl bg-background-card/90 backdrop-blur-md border border-teal-500/40 shadow-lg text-[11px] font-mono text-teal-300 flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>RapidMed: Municipal Grid</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -left-6 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-background-card/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-gray-300 hidden sm:flex items-center gap-1"
              >
                <span>OSRM Routing</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1.5 }}
                className="absolute top-1/2 -right-6 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-background-card/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-gray-300 hidden sm:flex items-center gap-1"
              >
                <span>62-Class CNN</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[11px] font-mono text-gray-500">
        <span>Scroll to inspect systems</span>
        <ArrowDown className="w-3.5 h-3.5 text-cyan-400/60 animate-bounce" />
      </div>
    </section>
  );
}
