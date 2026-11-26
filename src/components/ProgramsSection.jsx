import React from 'react';
import { 
  GraduationCap, 
  Wrench, 
  Building2, 
  Landmark, 
  Award, 
  HeartHandshake, 
  Laptop,
  ArrowRight,
  BookOpen,
  Users,
  Zap,
  Briefcase,
  TrendingUp,
  Compass,
  Lightbulb,
  ShieldCheck,
  BrainCircuit,
  Cpu,
  Heart,
  Globe,
  Video,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { siteData } from '../data/content';

/* Custom Brand-Matched SVG Icons for Academic Programs */
function HigherEdIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Graduation cap on left */}
      <path d="M4 17l8.5-4 8.5 4-8.5 4L4 17z" />
      <path d="M7.5 19v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" />
      <path d="M4 17v6.5" />
      {/* Verified seal badge at top right */}
      <circle cx="36" cy="11" r="6.5" fill="currentColor" fillOpacity="0.12" />
      <path d="M33.2 11l2 2 3.8-3.8" />
      <path d="M33 17v4.5l3-1.7 3 1.7V17" />
      {/* Upward curve arrow */}
      <path d="M11 30c6-1.5 11-4.5 16-9" />
      <path d="M23.5 20.5H27V24" />
      {/* 4 ascending bars + baseline */}
      <path d="M4 43h40" />
      <rect x="8" y="36" width="5.5" height="7" rx="1" />
      <rect x="17" y="31" width="5.5" height="12" rx="1" />
      <rect x="26" y="25.5" width="5.5" height="17.5" rx="1" />
      <rect x="35" y="21" width="5.5" height="22" rx="1" />
    </svg>
  );
}

function SkillCoursesIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Glowing lightbulb top right */}
      <path d="M35 4v2.2M26.5 8l1.6 1.6M43.5 8l-1.6 1.6M24 15.5h2.2M43.8 15.5H46" />
      <path d="M35 9.5a6.2 6.2 0 0 0-4.2 10.8c1 .9 1.7 2 1.9 3.2h4.6c.2-1.2.9-2.3 1.9-3.2A6.2 6.2 0 0 0 35 9.5z" fill="currentColor" fillOpacity="0.14" />
      <path d="M33 26h4" />
      {/* Student reading open book */}
      <circle cx="15.5" cy="17" r="5" fill="currentColor" fillOpacity="0.14" />
      <path d="M7 29.5c2.2-2.2 5.2-3.5 8.5-3.5s6.3 1.3 8.5 3.5" />
      {/* Open book */}
      <path d="M5 29.5l10.5 3.5 10.5-3.5V43l-10.5 2.5L5 43V29.5z" fill="currentColor" fillOpacity="0.12" />
      <path d="M15.5 33v12.5" />
    </svg>
  );
}

function StudentApprenticeshipIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Graduation cap */}
      <path d="M6 10l18-6 18 6-18 6L6 10z" fill="currentColor" fillOpacity="0.12" />
      <path d="M13 12.5v5c0 2 5 3.5 11 3.5s11-1.5 11-3.5v-5" />
      <path d="M40 11v8" />
      <circle cx="40" cy="20.5" r="1.5" />
      {/* Face */}
      <path d="M15 21v3.5a9 9 0 0 0 18 0V21" />
      <path d="M20.5 23v1M27.5 23v1M22 27.5a2.5 2.5 0 0 0 4 0" />
      {/* Gown shoulders */}
      <path d="M8 44c0-6.5 6.5-11 16-11 3.5 0 6.8.6 9.5 1.8" fill="currentColor" fillOpacity="0.1" />
      {/* Rolled diploma scroll */}
      <path d="M23 39.5l17-7a3 3 0 0 1 2.4 5.5l-17 7a3 3 0 0 1-2.4-5.5z" fill="currentColor" fillOpacity="0.18" />
      <path d="M31 36l2.5 5.5" />
    </svg>
  );
}

function CertificationIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Outer rounded certificate frame (interrupted at bottom-right for the seal) */}
      <path d="M26 36H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v17" />
      {/* Inner decorative notched-corner border */}
      <path d="M26 32.5H11a3.5 3.5 0 0 0-3.5-3.5V14A3.5 3.5 0 0 0 11 10.5h26a3.5 3.5 0 0 0 3.5 3.5v10" />
      {/* Certificate text lines matching reference */}
      <path d="M12.5 15.5h23" />
      <path d="M12.5 19.5h3.5M19.5 19.5h16" />
      <path d="M12.5 23.5h23" />
      <path d="M19 28h7.5" />
      {/* Scalloped rosette seal */}
      <path
        d="M35.5 25c1 0 1.4.8 2.3 1.1.9.3 1.7-.2 2.4.5.7.7.2 1.5.5 2.4.3.9 1.1 1.3 1.1 2.3s-.8 1.4-1.1 2.3c-.3.9.2 1.7-.5 2.4-.7.7-1.5.2-2.4.5-.9.3-1.3 1.1-2.3 1.1s-1.4-.8-2.3-1.1c-.9-.3-1.7.2-2.4-.5-.7-.7-.2-1.5-.5-2.4-.3-.9-1.1-1.3-1.1-2.3s.8-1.4 1.1-2.3c.3-.9-.2-1.7.5-2.4.7-.7 1.5-.2 2.4-.5.9-.3 1.3-1.1 2.3-1.1z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <circle cx="35.5" cy="31.3" r="3" />
      {/* Dual notched ribbon tails */}
      <path d="M32.2 37l-1.7 6.5 3-1.8 2 1.8V38" />
      <path d="M38.8 37l1.7 6.5-3-1.8-2 1.8V38" />
    </svg>
  );
}

export default function ProgramsSection({ onOpenProgramModal }) {
  const academicIconMap = {
    'Higher Education Partnerships': HigherEdIcon,
    'Skill Enhancement Courses': SkillCoursesIcon,
    'Student Apprenticeships': StudentApprenticeshipIcon,
    'Certification Programs': CertificationIcon
  };
  const academicFlipImages = {
    'Higher Education Partnerships': {
      src: '/assets/higher-ed-hover.jpg',
      position: 'object-center'
    },
    'Skill Enhancement Courses': {
      src: '/assets/skill-enhancement-hover.jpg',
      position: 'object-[62%_100%]'
    },
    'Student Apprenticeships': {
      src: '/assets/student-apprenticeship-hover.jpg',
      position: 'object-center'
    },
    'Certification Programs': {
      src: '/assets/certification-hover.jpg',
      position: 'object-[78%_100%]'
    }
  };
  const iconMap = {
    GraduationCap,
    BookOpen,
    Users,
    Award,
    Wrench,
    Zap,
    Briefcase,
    TrendingUp,
    Building2,
    Compass,
    Lightbulb,
    Landmark,
    ShieldCheck,
    HeartHandshake,
    BrainCircuit,
    Cpu,
    Heart,
    Globe,
    Laptop,
    Video,
    Clock,
    Layers
  };

  const backgroundPhotoCards = {
    'Technical Skills Training': {
      src: '/assets/technical-skills-bg.jpg',
      position: 'object-[75%_25%]'
    }
  };

  const programGradients = {
    academic: 'from-blue-600 to-cyan-500',
    vocational: 'from-purple-600 to-pink-500',
    corporate: 'from-indigo-600 to-blue-500',
    government: 'from-emerald-600 to-teal-500',
    postgraduate: 'from-blue-600 to-purple-600',
    volunteering: 'from-pink-600 to-rose-500',
    remote: 'from-teal-600 to-cyan-500',
  };

  const handleProgramClick = (program) => {
    if (onOpenProgramModal) {
      onOpenProgramModal(program);
    }
  };

  return (
    <div id="solutions" className="relative">
      {/* Anchor for career tab */}
      <div id="career" className="absolute -top-24 pointer-events-none"></div>

      {/* Render Each of the 7 Programs as Full Dedicated Sections (Matching talentic360ai.in) */}
      {siteData.programs.map((program, programIdx) => {
        const isEven = programIdx % 2 === 0;
        const gradientClass = programGradients[program.id] || 'from-cyan-500 to-blue-600';

        return (
          <section
            key={program.id}
            id={program.id}
            className="relative py-10 sm:py-14 bg-transparent border-b border-indigo-200/80 dark:border-purple-500/30 transition-colors duration-200"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
                  <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-4">
                    {program.prefix}
                    <span className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
                      {program.suffix}
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {program.description}
                  </p>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {program.items.map((item, itemIdx) => {
                    const CustomAcademicIcon = program.id === 'academic' ? academicIconMap[item.title] : null;
                    const ItemIcon = CustomAcademicIcon || iconMap[item.icon] || BookOpen;
                    const flipImage =
                      program.id === 'academic' ? academicFlipImages[item.title] : null;
                    const bgCard = backgroundPhotoCards[item.title];

                    if (bgCard) {
                      return (
                        <div
                          key={itemIdx}
                          className="group relative min-h-[300px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-cyan-400/60 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
                        >
                          {/* Clear, Unobstructed Background Photo */}
                          <img
                            src={bgCard.src}
                            alt={item.title}
                            className={`absolute inset-0 w-full h-full object-cover ${bgCard.position} group-hover:scale-105 transition-transform duration-700`}
                          />

                          {/* Bottom-only Gradient Scrim so top & technicians stay crystal clear */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-[56%] bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-transparent"
                          />

                          {/* Top-left compact glass icon badge */}
                          <div className="relative z-10 p-5">
                            <div className="w-10 h-10 rounded-xl bg-white/85 dark:bg-slate-900/80 backdrop-blur-md border border-white/60 dark:border-slate-700/80 flex items-center justify-center text-purple-600 dark:text-cyan-400 shadow-sm">
                              <ItemIcon className="w-5 h-5" />
                            </div>
                          </div>

                          {/* Bottom Title & Description */}
                          <div className="relative z-10 p-5 sm:p-6 pt-12">
                            <h3 className="font-display font-bold text-lg text-white mb-1.5 group-hover:text-cyan-300 transition-colors drop-shadow-sm">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed line-clamp-3">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    }

                    if (flipImage) {
                      return (
                        <div
                          key={itemIdx}
                          className="group [perspective:1200px] min-h-[260px]"
                        >
                          <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[transform:rotateY(180deg)] will-change-transform">
                            {/* Front Face */}
                            <div className="w-full h-full p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#0c1226]/85 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between [backface-visibility:hidden]">
                              <div>
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-indigo-600 dark:text-cyan-400 mb-5 shadow-sm p-1.5">
                                  <ItemIcon className="w-full h-full" />
                                </div>
                                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2.5">
                                  {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>

                              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                                <span>Curriculum Module</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </div>
                            </div>

                            {/* Back Face: Clean Hover Image (revealed after 180 flip) */}
                            <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-indigo-400/70 dark:border-cyan-400/70 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] bg-slate-950">
                              <img
                                src={flipImage.src}
                                alt={item.title}
                                className={`w-full h-full object-cover ${flipImage.position}`}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={itemIdx}
                        className="group p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#0c1226]/85 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-cyan-400/60 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          {/* Icon Header */}
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-indigo-600 dark:text-cyan-400 group-hover:scale-110 transition-transform mb-5 shadow-sm ${CustomAcademicIcon ? 'p-1.5' : ''}`}>
                            <ItemIcon className={CustomAcademicIcon ? 'w-full h-full' : 'w-6 h-6'} />
                          </div>

                          {/* Title */}
                          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                          <span>Curriculum Module</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-all" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Centered Explore Button */}
                <div className="text-center">
                  <button
                    onClick={() => handleProgramClick(program)}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
                  >
                    <span>{program.buttonText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

            </div>
          </section>
        );
      })}
    </div>
  );
}
