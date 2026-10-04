import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const { config } = usePortfolio();
  const author = config?.author || {};
  const email = author.email || 'rbhuvaneshwarirajaraman41@gmail.com';
  const github = author.github || 'https://github.com/Bhuvanarajaram41-pixel';
  const linkedin = author.linkedin || 'https://www.linkedin.com/in/bhuvaneshwari-rajaram-918991290';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    message: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null, message: null });

    // Client-side quick validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Validation failed',
        message: 'Please fill out all required fields (Name, Email, and Message).'
      });
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          error: null,
          message: data.message || 'Message received successfully. Thank you for reaching out!',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: data.error || 'Submission error',
          message: data.message || 'Unable to submit your message. Please reach out directly via email.',
        });
      }
    } catch (err) {
      console.warn('API connection failed; falling back to mail client recommendation:', err);
      setStatus({
        submitting: false,
        success: false,
        error: 'Network connection notice',
        message: 'Could not connect to the local API server. You can also email directly at rbhuvaneshwarirajaraman41@gmail.com.',
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative and Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let's Build Something Intelligent.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Interested in AI, machine learning, healthcare technology, smart infrastructure, or building something meaningful together? Let's connect.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${email}`}
                className="p-4 rounded-xl bg-background-card border border-white/10 hover:border-cyan-500/30 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {email}
                  </span>
                </div>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-background-card border border-white/10 hover:border-cyan-500/30 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-white/5 text-gray-300 group-hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                    GitHub Profile &amp; Repositories
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {github.replace('https://', '')}
                  </span>
                </div>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-background-card border border-white/10 hover:border-cyan-500/30 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                    Professional Network
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {linkedin.replace('https://www.', '').replace('https://', '')}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-background-card border border-white/10 relative overflow-hidden"
            >
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-gray-400 font-mono">
                  Messages are securely dispatched and logged by the Express backend.
                </p>
              </div>

              {/* Status Alert */}
              {status.message && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs flex items-start gap-3 border ${
                    status.success
                      ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                      : 'bg-amber-950/30 border-amber-500/30 text-amber-300'
                  }`}
                >
                  {status.success ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  )}
                  <span className="leading-relaxed">{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-gray-300 block">
                      Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-background-subtle border border-white/10 text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-gray-300 block">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@organization.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-background-subtle border border-white/10 text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-gray-300 block">
                    Subject / Topic (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Technical Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-background-subtle border border-white/10 text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-gray-300 block">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Bhuvaneshwari, I'm reaching out regarding your work on KineticTwin / RapidMed..."
                    className="w-full px-4 py-2.5 rounded-xl bg-background-subtle border border-white/10 text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-gray-950 font-bold text-xs rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
