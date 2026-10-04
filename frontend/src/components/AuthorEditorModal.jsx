import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  X, PlusCircle, Download, Copy, Check, RotateCcw, 
  FolderPlus, Award, Cpu, Briefcase, FileCode, Layers, Save,
  Lock, Key, ShieldCheck, AlertTriangle
} from 'lucide-react';

export default function AuthorEditorModal() {
  const { 
    config, 
    isEditorOpen, 
    setIsEditorOpen, 
    addProject, 
    addAchievement, 
    addSkill, 
    addExperience, 
    addCustomSection,
    resetToDefault 
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState('project');
  const [copied, setCopied] = useState(false);

  // Author Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('bhuvaneshwari_author_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  const authorPin = config?.author?.authorPin || '4141';

  const handleVerifyPin = (e) => {
    e.preventDefault();
    if (pinInput.trim() === authorPin) {
      setIsAuthenticated(true);
      sessionStorage.setItem('bhuvaneshwari_author_auth', 'true');
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  // Form states
  const [projectForm, setProjectForm] = useState({
    title: '',
    subtitle: '',
    category: 'AI/ML • Machine Learning',
    categories: 'AI/ML',
    description: '',
    problem: '',
    solution: '',
    bestModel: 'Custom Model',
    tags: 'Python, Machine Learning',
    github: '',
    liveDemo: '',
    metricLabel: 'Accuracy',
    metricValue: '92.5%',
    isFeatured: false
  });

  const [certForm, setCertForm] = useState({
    title: '',
    issuer: '',
    category: 'Technical Certification',
    date: '2026',
    description: '',
    image: '',
    badge: 'Verified Credential',
    highlights: 'Hands-on coursework, Verified capstone'
  });

  const [skillForm, setSkillForm] = useState({
    category: 'Machine Learning',
    name: '',
    level: 'Core Skill',
    type: 'Framework'
  });

  const [expForm, setExpForm] = useState({
    role: '',
    organization: '',
    period: '2026',
    type: 'Internship / Leadership',
    summary: '',
    activities: 'Developed system architectures, Led team meetings'
  });

  const [customSecForm, setCustomSecForm] = useState({
    id: '',
    title: '',
    subtitle: '',
    itemTitle: '',
    itemDesc: '',
    itemLink: ''
  });

  if (!isEditorOpen) return null;

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!projectForm.title) return;

    const newProject = {
      id: projectForm.title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      title: projectForm.title,
      subtitle: projectForm.subtitle || projectForm.title,
      category: projectForm.category,
      categories: projectForm.categories.split(',').map(s => s.trim()),
      description: projectForm.description || projectForm.problem,
      problem: projectForm.problem,
      solution: projectForm.solution,
      bestModel: projectForm.bestModel,
      tags: projectForm.tags.split(',').map(s => s.trim()),
      github: projectForm.github || null,
      liveDemo: projectForm.liveDemo || null,
      metrics: [
        { label: projectForm.metricLabel, value: projectForm.metricValue }
      ],
      highlights: [
        projectForm.problem || 'Engineered automated pipeline and model architecture.',
        projectForm.solution || 'Integrated model inference with interactive dashboard.'
      ]
    };

    addProject(newProject, projectForm.isFeatured);
    alert(`Project "${newProject.title}" has been successfully added to your live portfolio!`);
    setProjectForm({
      title: '', subtitle: '', category: 'AI/ML • Machine Learning', categories: 'AI/ML',
      description: '', problem: '', solution: '', bestModel: 'Custom Model',
      tags: 'Python, Machine Learning', github: '', liveDemo: '', metricLabel: 'Accuracy',
      metricValue: '92.5%', isFeatured: false
    });
  };

  const handleAddCert = (e) => {
    e.preventDefault();
    if (!certForm.title) return;

    const newCert = {
      id: certForm.title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      title: certForm.title,
      issuer: certForm.issuer,
      category: certForm.category,
      date: certForm.date,
      description: certForm.description,
      image: certForm.image ? (certForm.image.startsWith('/') ? certForm.image : `/assets/${certForm.image}`) : null,
      badge: certForm.badge,
      highlights: certForm.highlights.split(',').map(s => s.trim())
    };

    addAchievement(newCert);
    alert(`Achievement "${newCert.title}" added to your live achievements section!`);
    setCertForm({
      title: '', issuer: '', category: 'Technical Certification', date: '2026',
      description: '', image: '', badge: 'Verified Credential', highlights: ''
    });
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!skillForm.name) return;

    addSkill(skillForm.category, {
      name: skillForm.name,
      level: skillForm.level,
      type: skillForm.type
    });

    alert(`Skill "${skillForm.name}" added under "${skillForm.category}"!`);
    setSkillForm({ ...skillForm, name: '' });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (!expForm.role) return;

    addExperience({
      role: expForm.role,
      organization: expForm.organization,
      period: expForm.period,
      type: expForm.type,
      summary: expForm.summary,
      activities: expForm.activities.split(',').map(s => s.trim())
    });

    alert(`Experience at "${expForm.organization}" added!`);
    setExpForm({
      role: '', organization: '', period: '2026', type: 'Internship / Leadership',
      summary: '', activities: ''
    });
  };

  const handleAddCustomSection = (e) => {
    e.preventDefault();
    if (!customSecForm.title) return;

    addCustomSection({
      id: customSecForm.id || customSecForm.title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      title: customSecForm.title,
      subtitle: customSecForm.subtitle,
      items: [
        {
          title: customSecForm.itemTitle || customSecForm.title,
          description: customSecForm.itemDesc,
          link: customSecForm.itemLink || null
        }
      ]
    });

    alert(`New custom section "${customSecForm.title}" added!`);
    setCustomSecForm({ id: '', title: '', subtitle: '', itemTitle: '', itemDesc: '', itemLink: '' });
  };

  const exportConfigJson = () => {
    const jsonStr = `export const portfolioConfig = ${JSON.stringify(config, null, 2)};\n\nexport default portfolioConfig;\n`;
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadConfigFile = () => {
    const jsonStr = `export const portfolioConfig = ${JSON.stringify(config, null, 2)};\n\nexport default portfolioConfig;\n`;
    const blob = new Blob([jsonStr], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio.config.js';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEditorOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-md bg-background-card border-2 border-cyan-500/50 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 space-y-6 text-center"
          >
            <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-950/80 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.4)]">
              <Lock className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-mono">
                Author Verification Required
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                This control center is restricted to <strong className="text-cyan-300 font-mono">BHUVANESHWARI.R</strong>. Please enter your Author PIN to unlock and edit content.
              </p>
            </div>

            <form onSubmit={handleVerifyPin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    if (pinError) setPinError(false);
                  }}
                  placeholder="Enter 4-digit Author PIN..."
                  autoFocus
                  className="w-full text-center tracking-widest text-lg font-mono px-4 py-3 rounded-xl bg-background-subtle border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40"
                />
                {pinError && (
                  <p className="text-xs text-rose-400 font-mono mt-2 flex items-center justify-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Incorrect PIN. Access denied.</span>
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditorOpen(false)}
                  className="w-1/2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-xs font-mono transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-gray-950 font-bold text-xs font-mono transition-all shadow-md shadow-cyan-500/20"
                >
                  Unlock Editor
                </button>
              </div>
            </form>

            <div className="pt-2 border-t border-white/5 text-[11px] text-gray-500 font-mono">
              Secured Author Access • PIN is stored safely
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsEditorOpen(false)}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-background-card border-2 border-cyan-500/40 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="p-5 border-b border-white/10 bg-background-subtle/90 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-400 text-cyan-300">
                <FileCode className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                  <span>Author Control Center</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    Live Editable
                  </span>
                </h2>
                <p className="text-xs text-gray-400">
                  Easily add any future achievements, projects, skills, or sections. Changes update your live portfolio instantly!
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsEditorOpen(false)}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap border-b border-white/10 bg-black/40 px-5 pt-3 gap-2 text-xs font-mono">
            {[
              { id: 'project', label: '+ Add Project', icon: FolderPlus },
              { id: 'achievement', label: '+ Add Achievement', icon: Award },
              { id: 'skill', label: '+ Add Skill', icon: Cpu },
              { id: 'experience', label: '+ Add Experience', icon: Briefcase },
              { id: 'section', label: '+ Add Custom Section', icon: Layers },
              { id: 'export', label: 'Export / Backup', icon: Download },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-2.5 px-3 flex items-center gap-1.5 transition-all border-b-2 ${
                    activeTab === tab.id
                      ? 'border-cyan-400 text-cyan-300 font-bold'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6 text-xs text-gray-200">
            {/* 1. ADD PROJECT TAB */}
            {activeTab === 'project' && (
              <form onSubmit={handleAddProject} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Project Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. NeuroVision AQI"
                      value={projectForm.title}
                      onChange={e => setProjectForm({ ...projectForm, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Subtitle / One-liner</label>
                    <input
                      type="text"
                      placeholder="e.g. Deep Learning Satellite Pollution Forecaster"
                      value={projectForm.subtitle}
                      onChange={e => setProjectForm({ ...projectForm, subtitle: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Domain Category</label>
                    <input
                      type="text"
                      placeholder="e.g. Computer Vision • Deep Learning"
                      value={projectForm.category}
                      onChange={e => setProjectForm({ ...projectForm, category: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Filter Tags (comma-separated)</label>
                    <input
                      type="text"
                      placeholder="AI/ML, Computer Vision"
                      value={projectForm.categories}
                      onChange={e => setProjectForm({ ...projectForm, categories: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Best Model / Tech Stack</label>
                    <input
                      type="text"
                      placeholder="e.g. YOLOv8 / CNN / Random Forest"
                      value={projectForm.bestModel}
                      onChange={e => setProjectForm({ ...projectForm, bestModel: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Challenge / Problem</label>
                    <textarea
                      rows={2}
                      placeholder="What limitation or challenge was addressed?"
                      value={projectForm.problem}
                      onChange={e => setProjectForm({ ...projectForm, problem: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Engineered Solution</label>
                    <textarea
                      rows={2}
                      placeholder="How does your model or architecture solve it?"
                      value={projectForm.solution}
                      onChange={e => setProjectForm({ ...projectForm, solution: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">GitHub URL</label>
                    <input
                      type="url"
                      placeholder="https://github.com/..."
                      value={projectForm.github}
                      onChange={e => setProjectForm({ ...projectForm, github: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Live Demo URL</label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={projectForm.liveDemo}
                      onChange={e => setProjectForm({ ...projectForm, liveDemo: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Key Metric Label</label>
                    <input
                      type="text"
                      placeholder="e.g. Accuracy / R²"
                      value={projectForm.metricLabel}
                      onChange={e => setProjectForm({ ...projectForm, metricLabel: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Metric Value</label>
                    <input
                      type="text"
                      placeholder="e.g. 94.2%"
                      value={projectForm.metricValue}
                      onChange={e => setProjectForm({ ...projectForm, metricValue: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="isFeatured"
                    checked={projectForm.isFeatured}
                    onChange={e => setProjectForm({ ...projectForm, isFeatured: e.target.checked })}
                    className="w-4 h-4 rounded text-cyan-500 bg-background-subtle"
                  />
                  <label htmlFor="isFeatured" className="text-gray-300 font-mono">
                    Make this a Large Featured Project (Appears in Primary Showcase)
                  </label>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-950 font-bold rounded-lg shadow-md hover:from-cyan-300 flex items-center gap-2"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Add Project to Portfolio</span>
                </button>
              </form>
            )}

            {/* 2. ADD ACHIEVEMENT TAB */}
            {activeTab === 'achievement' && (
              <form onSubmit={handleAddCert} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Achievement / Certificate Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1st Place National AI Hackathon"
                      value={certForm.title}
                      onChange={e => setCertForm({ ...certForm, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Issuing Authority / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. IIT Madras / IEEE / Google"
                      value={certForm.issuer}
                      onChange={e => setCertForm({ ...certForm, issuer: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Category</label>
                    <input
                      type="text"
                      placeholder="e.g. Merit Award / Hackathon Honor"
                      value={certForm.category}
                      onChange={e => setCertForm({ ...certForm, category: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Badge Tag</label>
                    <input
                      type="text"
                      placeholder="e.g. 1st Prize • National Winner"
                      value={certForm.badge}
                      onChange={e => setCertForm({ ...certForm, badge: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Image Path (in /public/assets/)</label>
                    <input
                      type="text"
                      placeholder="e.g. /assets/hackathon_win.jpeg"
                      value={certForm.image}
                      onChange={e => setCertForm({ ...certForm, image: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 font-mono block mb-1">Description</label>
                  <textarea
                    rows={2}
                    placeholder="Brief description of the achievement or certification..."
                    value={certForm.description}
                    onChange={e => setCertForm({ ...certForm, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                  />
                </div>

                <div>
                  <label className="text-gray-300 font-mono block mb-1">Highlights (comma-separated bullet points)</label>
                  <input
                    type="text"
                    placeholder="Awarded top honors among 200+ teams, Built edge computer vision model"
                    value={certForm.highlights}
                    onChange={e => setCertForm({ ...certForm, highlights: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-950 font-bold rounded-lg shadow-md hover:from-cyan-300 flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Add Achievement Card</span>
                </button>
              </form>
            )}

            {/* 3. ADD SKILL TAB */}
            {activeTab === 'skill' && (
              <form onSubmit={handleAddSkill} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Skill Category</label>
                    <select
                      value={skillForm.category}
                      onChange={e => setSkillForm({ ...skillForm, category: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    >
                      {config.skills.map(c => (
                        <option key={c.category} value={c.category}>{c.category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Skill / Tool Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. LangChain / Docker / OpenCV"
                      value={skillForm.name}
                      onChange={e => setSkillForm({ ...skillForm, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Tag / Type Badge</label>
                    <input
                      type="text"
                      placeholder="e.g. LLMs / Vision / DevOps"
                      value={skillForm.type}
                      onChange={e => setSkillForm({ ...skillForm, type: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-950 font-bold rounded-lg shadow-md hover:from-cyan-300 flex items-center gap-2"
                >
                  <Cpu className="w-4 h-4" />
                  <span>Add Skill</span>
                </button>
              </form>
            )}

            {/* 4. ADD EXPERIENCE TAB */}
            {activeTab === 'experience' && (
              <form onSubmit={handleAddExperience} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Role Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Research Fellow / Technical Lead"
                      value={expForm.role}
                      onChange={e => setExpForm({ ...expForm, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Organization / Lab *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Innovation Hub / AI Research Lab"
                      value={expForm.organization}
                      onChange={e => setExpForm({ ...expForm, organization: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Period</label>
                    <input
                      type="text"
                      placeholder="e.g. Oct 2026 - Present"
                      value={expForm.period}
                      onChange={e => setExpForm({ ...expForm, period: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Type Tag</label>
                    <input
                      type="text"
                      placeholder="e.g. Student Leadership / Research Internship"
                      value={expForm.type}
                      onChange={e => setExpForm({ ...expForm, type: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 font-mono block mb-1">Summary</label>
                  <textarea
                    rows={2}
                    placeholder="Key focus and contributions..."
                    value={expForm.summary}
                    onChange={e => setExpForm({ ...expForm, summary: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-950 font-bold rounded-lg shadow-md hover:from-cyan-300 flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Add Experience</span>
                </button>
              </form>
            )}

            {/* 5. ADD CUSTOM SECTION TAB */}
            {activeTab === 'section' && (
              <form onSubmit={handleAddCustomSection} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Section Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Publications / Technical Talks"
                      value={customSecForm.title}
                      onChange={e => setCustomSecForm({ ...customSecForm, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-mono block mb-1">Subtitle</label>
                    <input
                      type="text"
                      placeholder="e.g. Conference presentations &amp; published papers"
                      value={customSecForm.subtitle}
                      onChange={e => setCustomSecForm({ ...customSecForm, subtitle: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-background-subtle border border-white/10 text-white"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-background-subtle border border-white/5 space-y-3">
                  <span className="font-mono text-cyan-300 font-semibold block">First Item in this Section</span>
                  <input
                    type="text"
                    placeholder="Item Title (e.g. Paper: Predictive Edge Microgrids in IEEE 2026)"
                    value={customSecForm.itemTitle}
                    onChange={e => setCustomSecForm({ ...customSecForm, itemTitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white"
                  />
                  <textarea
                    rows={2}
                    placeholder="Item description or abstract..."
                    value={customSecForm.itemDesc}
                    onChange={e => setCustomSecForm({ ...customSecForm, itemDesc: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white"
                  />
                  <input
                    type="url"
                    placeholder="Link URL (e.g. https://arxiv.org/...)"
                    value={customSecForm.itemLink}
                    onChange={e => setCustomSecForm({ ...customSecForm, itemLink: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-950 font-bold rounded-lg shadow-md hover:from-cyan-300 flex items-center gap-2"
                >
                  <Layers className="w-4 h-4" />
                  <span>Create Custom Section</span>
                </button>
              </form>
            )}

            {/* 6. EXPORT / BACKUP TAB */}
            {activeTab === 'export' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-2">
                  <span className="font-mono text-cyan-300 font-bold text-sm block">
                    Permanent File Backup
                  </span>
                  <p className="text-gray-300 leading-relaxed">
                    You can download your updated configuration file and place it at <code className="text-cyan-300 font-mono bg-black/40 px-1 py-0.5 rounded">src/portfolio.config.js</code> so your additions become permanent in your git repository.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={downloadConfigFile}
                    className="px-5 py-2.5 bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-950 font-bold rounded-xl shadow-md flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Updated portfolio.config.js</span>
                  </button>

                  <button
                    onClick={exportConfigJson}
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl flex items-center gap-2 border border-white/10"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Config to Clipboard'}</span>
                  </button>

                  <button
                    onClick={() => {
                      if (confirm('Reset your portfolio back to initial code defaults?')) {
                        resetToDefault();
                      }
                    }}
                    className="px-5 py-2.5 bg-red-950/40 hover:bg-red-900/50 text-red-300 font-medium rounded-xl flex items-center gap-2 border border-red-500/30"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset All Changes</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 bg-background-subtle/80 flex items-center justify-between">
            <span className="text-[11px] font-mono text-gray-400">
              Shortcut: Press <kbd className="px-1.5 py-0.5 rounded bg-black/60 border border-white/10 text-cyan-300">Alt + E</kbd> anytime to toggle this editor.
            </span>
            <button
              onClick={() => setIsEditorOpen(false)}
              className="px-4 py-1.5 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-medium"
            >
              Close Editor
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
