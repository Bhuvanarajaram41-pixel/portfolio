import React, { useState } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import NeuralBackground from './components/NeuralBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumePlaceholderModal from './components/ResumePlaceholderModal';
import AuthorEditorModal from './components/AuthorEditorModal';
import SystemProgression from './components/SystemProgression';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import CustomSections from './sections/CustomSections';
import Contact from './sections/Contact';

function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-gray-100 selection:bg-cyan-500/25 selection:text-cyan-300">
      {/* Background Neural Canvas Stream */}
      <NeuralBackground />

      {/* Sticky Floating Dock Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Layout */}
      <main id="main-content" className="relative z-10">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <SystemProgression />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <Experience />
        <Achievements />
        <CustomSections />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* Configurable Resume Modal / Downloader */}
      <ResumePlaceholderModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Author Control Center Modal (Alt+E or via Footer/Navbar) */}
      <AuthorEditorModal />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}
