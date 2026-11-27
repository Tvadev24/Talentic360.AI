import React from 'react';
import { 
  ArrowRight, 
  ChevronRight
} from 'lucide-react';
import BackgroundVideo from './BackgroundVideo';

export default function Hero({ onGetStarted }) {
  return (
    <section id="hero" className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between overflow-hidden bg-transparent">
      
      {/* =========================================================================
          IMPRESSIVE FULL-BLEED NATIVE BACKGROUND VIDEO (CONTINUOUS AUTO-LOOP)
         ========================================================================= */}
      <BackgroundVideo />

      {/* Seamless Left-Side Directional Veil for Razor-Sharp Text Contrast Over Any Video Frame */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-full md:w-[72%] bg-gradient-to-r from-white/90 via-white/65 to-transparent dark:from-[#050814]/90 dark:via-[#050814]/65 dark:to-transparent pointer-events-none z-[1]"
      />

      {/* Hero Banner Content Container - Anchored in Upper-Left Corner */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 md:pt-32 pb-8 flex-1 flex flex-col justify-start items-start">
        
        <div className="max-w-xl space-y-3 sm:space-y-3.5 text-left">
          
          {/* Brand Name Title (Pure font with brand gradient, NO background, cloud, or shadow) */}
          <div>
            <span className="font-display font-black tracking-tight text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#2c60ea] via-[#5945e7] to-[#783cec]">
              TALENTIC 360.AI
            </span>
          </div>

          {/* Compact Headline with Attractive Outline (Clear Video Background, Impressive in Light & Dark Modes) */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight leading-snug hero-headline-outline">
            Comprehensive Training & Apprenticeship Programs
          </h1>

          {/* Subtitle with Crisp Contour (Pure font directly over the video, NO background or cloud) */}
          <p className="text-xs sm:text-sm md:text-base text-slate-800 dark:text-slate-100 max-w-lg leading-relaxed font-semibold hero-subtitle-outline">
            Transforming talent through innovative programs across academic, vocational, corporate, and government sectors. Your trusted partner for workforce excellence.
          </p>

          {/* CTAs */}
          <div className="pt-1 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              onClick={onGetStarted}
              className="relative group px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-white overflow-hidden shadow-md transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#about"
              className="px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white bg-white/90 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-300 transition-all duration-300 shadow-md flex items-center gap-1.5"
            >
              <span>Learn More</span>
              <ChevronRight className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            </a>
          </div>

          {/* Neural Model Tagline (Clean original font, NO background, cloud, or shadow) */}
          <div className="pt-1 flex items-center gap-2 text-[11px] font-semibold text-purple-700 dark:text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse"></span>
            <span>Neural Network Processing AI Model</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-700 dark:text-slate-200 font-medium">Mindful Strategy for MNCs & Corporates</span>
          </div>

        </div>

      </div>

      {/* =========================================================================
          SMOOTH CURVED WAVE DIVIDER (TRANSITION TO NEXT SECTION)
         ========================================================================= */}
      <div className="relative w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-12 sm:h-16 text-slate-50 dark:text-[#05070e] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
}
