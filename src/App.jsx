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
import StaffingPage from './components/StaffingPage';

export default function App() {
  const [selectedModalProgram, setSelectedModalProgram] = useState(null);
  const [activePage, setActivePage] = useState('home'); // 'home' | 'staffing'

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

  const handleOpenStaffing = () => {
    setActivePage('staffing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = (targetId) => {
    setActivePage('home');
    if (targetId && targetId !== 'hero') {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    if (activePage !== 'home') {
      handleNavigateHome('contact');
      return;
    }
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
        activePage={activePage}
        onOpenStaffing={handleOpenStaffing}
        onNavigateHome={handleNavigateHome}
      />

      {/* Main Content Sections or Dedicated Staffing Page */}
      <main className="flex-1">
        {activePage === 'staffing' ? (
          <StaffingPage 
            onBackHome={() => handleNavigateHome('hero')}
            onApplyCareer={() => handleNavigateHome('contact')}
          />
        ) : (
          <>
            {/* 1. Hero Video Banner with pure fonts over full-bleed video */}
            <Hero 
              onGetStarted={handleScrollToContact} 
            />

            {/* 2. About TALENTIC 360.AI LLP & Unique Positioning with Neural Network Model */}
            <AboutSection 
              onExplorePrograms={handleScrollToContact} 
            />

            {/* 2.5 White Collar Staffing Solutions with Photo & Know More redirecting to Staffing Tab */}
            <StaffingSection 
              onKnowMore={handleOpenStaffing} 
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
          </>
        )}
      </main>

      {/* 6. Footer (with TALENTIC 360.AI LLP title and logo, Quick Links, Programs, Contact, Powered By, Compliance, Copyright) */}
      <Footer 
        activePage={activePage}
        onOpenStaffing={handleOpenStaffing}
        onNavigateHome={handleNavigateHome}
      />

      {/* Program Details Modal */}
      <ProgramModal 
        program={selectedModalProgram} 
        onClose={handleCloseModal}
        onApply={handleApplyFromModal}
      />

    </div>
  );
}
