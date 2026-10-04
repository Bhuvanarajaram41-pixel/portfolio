import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, CheckCircle, ExternalLink, Mail, GraduationCap } from 'lucide-react';

export default function ResumePlaceholderModal({ isOpen, onClose }) {
  const [fileExists, setFileExists] = useState(false);
  const [checking, setChecking] = useState(true);
  const resumeUrl = '/assets/Bhuvaneshwari_Resume.pdf';

  useEffect(() => {
    if (!isOpen) return;

    // Check if real resume PDF exists
    setChecking(true);
    fetch(resumeUrl, { method: 'HEAD' })
      .then((res) => {
        if (res.ok && res.headers.get('content-type')?.includes('pdf')) {
          setFileExists(true);
        } else {
          setFileExists(false);
        }
      })
      .catch(() => setFileExists(false))
      .finally(() => setChecking(false));

    // Handle ESC key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="relative w-full max-w-2xl bg-background-card border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 id="resume-modal-title" className="text-xl font-bold text-white tracking-tight">
                  Curriculum Vitae / Resume
                </h2>
                <p className="text-xs text-cyan-300 font-mono font-semibold">
                  BHUVANESHWARI.R • 2nd Year CSE (AI & ML)
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="py-6 space-y-6">
            {fileExists ? (
              <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Official resume PDF is ready for download.</span>
                </div>
                <a
                  href={resumeUrl}
                  download="Bhuvaneshwari_Resume.pdf"
                  className="px-4 py-2 bg-cyan-500 text-black font-semibold text-xs rounded-lg hover:bg-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Download Now
                </a>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-gray-300 text-sm space-y-2">
                <div className="flex items-center justify-between font-semibold text-cyan-400 text-xs font-mono tracking-wider uppercase">
                  <span>Digital Profile Summary</span>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">Verified Credentials</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  The compiled PDF file is located at <code className="text-cyan-300 bg-black/40 px-1 py-0.5 rounded">/assets/Bhuvaneshwari_Resume.pdf</code>. In the meantime, here is my complete technical background summary:
                </p>
              </div>
            )}

            {/* Quick Profile Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <div className="p-3.5 rounded-xl bg-background-subtle border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Education</span>
                </div>
                <p className="text-sm font-medium text-white">B.E. Computer Science & Eng.</p>
                <p className="text-xs text-gray-400">Specialization: AI & Machine Learning</p>
                <p className="text-xs text-gray-500">Sathyabama Inst. of Science & Tech</p>
              </div>

              <div className="p-3.5 rounded-xl bg-background-subtle border border-white/5 space-y-1">
                <div className="text-xs font-mono text-cyan-400">Core Technical Focus</div>
                <p className="text-sm font-medium text-white">Intelligent Systems & Applied ML</p>
                <p className="text-xs text-gray-400">Random Forest, CNNs, Scikit-learn, PyTorch</p>
                <p className="text-xs text-gray-500">React, Next.js, Node.js, PostgreSQL</p>
              </div>
            </div>

            {/* Flagship Projects Highlights */}
            <div className="border border-white/5 rounded-xl p-4 bg-background-subtle/50 space-y-3">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                Flagship Systems
              </div>
              <div className="space-y-2">
                <div className="flex items-start justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white">KineticTwin (SmartFootAI)</span>
                    <p className="text-gray-400">Predictive crowd-density microgrid engine (90.87% prototype validation).</p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-900/40 text-cyan-300 border border-cyan-500/20">Industry 5.0</span>
                </div>
                <div className="flex items-start justify-between text-xs pt-2 border-t border-white/5">
                  <div>
                    <span className="font-semibold text-white">RapidMed</span>
                    <p className="text-gray-400">Municipal trauma coordination grid with ABDM-oriented Smart Health Locker.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-500/20">Ongoing</span>
                </div>
              </div>
            </div>

            {/* Note on uploading custom PDF */}
            <div className="text-[11px] text-gray-500 font-mono border-t border-white/5 pt-3 flex items-center justify-between">
              <span>Path: /public/assets/Bhuvaneshwari_Resume.pdf</span>
              <a
                href="mailto:rbhuvaneshwarirajaraman41@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <Mail className="w-3 h-3" /> Request Latest PDF via Email
              </a>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Close
            </button>
            <a
              href={resumeUrl}
              download="Bhuvaneshwari_Resume.pdf"
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-gray-950 font-semibold text-xs rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              Download Resume PDF
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
