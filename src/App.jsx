import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CyberGeometricBackground from './components/CyberGeometricBackground';
import AboutSection from './components/AboutSection';
import StaffingSection from './components/StaffingSection';
import ProgramsSection from './components/ProgramsSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import ProgramModal from './components/ProgramModal';

export default function App() {
  const [selectedModalProgram, setSelectedModalProgram] = useState(null);

  // Theme state: defaults to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('talentic_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    }
    return 'dark';
  });

  // Apply theme class to <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('talentic_theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenProgramModal = (program) => {
    setSelectedModalProgram(program);
  };

  const handleCloseModal = () => {
    setSelectedModalProgram(null);
  };

  const handleApplyFromModal = (programName) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative bg-transparent text-slate-800 dark:text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white transition-colors duration-200">
      
      {/* =========================================================================
          FUTURISTIC 3D CYBER GEOMETRIC INTERACTIVE BACKGROUND
          - Rotating & tumbling 3D wireframe pyramids / polyhedra
          - Dynamic 3D undulating particle dot wave terrain
          - Constellation mesh & floating geometric shapes
          - Moveable / interactive with mouse parallax and organic drift
          - Visible & lightfull in Light Mode, Cyberpunk Neon in Dark Mode
         ========================================================================= */}
      <CyberGeometricBackground theme={theme} />

      {/* Transparent Sticky Header with Logo, Navigation Tabs & Theme Switcher */}
      <Navbar 
        onOpenContact={handleScrollToContact} 
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Sections (Matching https://talentic360ai.in) */}
      <main className="flex-1">
        
        {/* 1. Hero Video Banner with pure fonts over full-bleed video */}
        <Hero 
          onGetStarted={handleScrollToContact} 
        />

        {/* 2. About TALENTIC 360.AI LLP & Unique Positioning with Neural Network Model */}
        <AboutSection 
          onExplorePrograms={handleScrollToContact} 
        />

        {/* 2.5 White Collar Staffing Solutions with Photo Collage & Know More Modal */}
        <StaffingSection 
          onKnowMore={handleScrollToContact} 
        />

        {/* 3. The 7 Core Programs (Academic, Vocational, Corporate, Government, Post-Graduate, Volunteering, Remote) */}
        <ProgramsSection 
          onOpenProgramModal={handleOpenProgramModal} 
        />

        {/* 4. Why Choose TALENTIC 360.AI LLP & 3 Verified Metrics (10k+ / 500+ / 95%) */}
        <WhyChooseUs 
          onGetStarted={handleScrollToContact} 
        />

        {/* 5. Get in Touch: Contact Information, Office Hours & Interactive Consultation Form */}
        <ContactSection />

        {/* 6. Strategic Partners & CSR Institutional Donors Video Showcase */}
        <PartnersSection />

      </main>

      {/* 6. Footer (with TALENTIC 360.AI LLP title and logo, Quick Links, Programs, Contact, Powered By, Compliance, Copyright) */}
      <Footer />

      {/* Program Details Modal */}
      <ProgramModal 
        program={selectedModalProgram} 
        onClose={handleCloseModal}
        onApply={handleApplyFromModal}
      />

    </div>
  );
}
