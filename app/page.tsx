'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Components/portifolio/Navbar';
import HeroSection from './Components/portifolio/HeroSection';
import AboutSection from './Components/portifolio/AboutSection';
import SkillsSection from './Components/portifolio/SkillsSection';
import ProjectsSection from './Components/portifolio/ProjectsSection';
import ServicesSection from './Components/portifolio/ServicesSection';
import ExperienceSection from './Components/portifolio/ExperienceSection';
import ContactSection from './Components/portifolio/ContactSection';
import Footer from './Components/portifolio/Footer';
// import ProjectsSection from '@/components/portfolio/ProjectsSection';
// import ServicesSection from '@/components/portfolio/ServicesSection';
// import ExperienceSection from '@/components/portfolio/ExperienceSection';
// import ContactSection from '@/components/portfolio/ContactSection';
// import Footer from '@/components/portfolio/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <HeroSection darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        <SkillsSection darkMode={darkMode} />
        <ProjectsSection darkMode={darkMode} />
        <ServicesSection darkMode={darkMode} />
        <ExperienceSection darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}