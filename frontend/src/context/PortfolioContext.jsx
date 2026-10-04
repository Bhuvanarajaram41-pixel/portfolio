import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioConfig as initialConfig } from '../portfolio.config';

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [config, setConfig] = useState(() => {
    // Check if author made in-browser edits saved in localStorage
    try {
      const saved = localStorage.getItem('bhuvaneshwari_portfolio_config');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Error reading saved portfolio config:', e);
    }
    return initialConfig;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Save to localStorage on change
  const saveConfig = (newConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('bhuvaneshwari_portfolio_config', JSON.stringify(newConfig));
    } catch (e) {
      console.warn('Error saving portfolio config:', e);
    }
  };

  // Add a new project
  const addProject = (projectData, isFeatured = false) => {
    const updated = { ...config };
    if (isFeatured) {
      updated.featuredProjects = [projectData, ...updated.featuredProjects];
    } else {
      updated.otherProjects = [projectData, ...updated.otherProjects];
    }
    saveConfig(updated);
  };

  // Add a new achievement / certificate
  const addAchievement = (achievementData) => {
    const updated = {
      ...config,
      achievements: [achievementData, ...config.achievements]
    };
    saveConfig(updated);
  };

  // Add a new skill
  const addSkill = (categoryName, skillData) => {
    const updated = { ...config };
    const catIndex = updated.skills.findIndex(c => c.category.toLowerCase() === categoryName.toLowerCase());
    if (catIndex >= 0) {
      updated.skills[catIndex].skills.push(skillData);
    } else {
      updated.skills.push({
        category: categoryName,
        description: `Skills and tooling for ${categoryName}`,
        skills: [skillData]
      });
    }
    saveConfig(updated);
  };

  // Add a new experience
  const addExperience = (experienceData) => {
    const updated = {
      ...config,
      experience: [experienceData, ...config.experience]
    };
    saveConfig(updated);
  };

  // Add a custom section
  const addCustomSection = (sectionData) => {
    const updated = {
      ...config,
      customSections: [...(config.customSections || []), sectionData]
    };
    saveConfig(updated);
  };

  // Reset back to code default
  const resetToDefault = () => {
    localStorage.removeItem('bhuvaneshwari_portfolio_config');
    setConfig(initialConfig);
  };

  // Check URL query param ?author=true or ?admin=true
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('author') === 'true' || params.get('admin') === 'true') {
        setIsEditorOpen(true);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Keyboard shortcut Alt+E or Ctrl+Shift+A to open/close Author Editor
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.altKey && (e.key === 'e' || e.key === 'E')) ||
          (e.ctrlKey && e.shiftKey && (e.key === 'a' || e.key === 'A'))) {
        e.preventDefault();
        setIsEditorOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        config,
        saveConfig,
        addProject,
        addAchievement,
        addSkill,
        addExperience,
        addCustomSection,
        resetToDefault,
        isEditorOpen,
        setIsEditorOpen,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
