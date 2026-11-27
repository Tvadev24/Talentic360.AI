import React, { useState, useEffect, useRef } from 'react';
import {
  Users,
  UserCheck,
  Target,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  X,
  Briefcase,
  ShieldCheck,
  Building2,
  ChevronRight
} from 'lucide-react';

/* Custom Brand-Matched SVG Icons matching the 3 uploaded Staffing icon designs */
function RightTalentIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Star above center */}
      <path d="M24 3l1.7 3.5 3.8.5-2.7 2.7.6 3.8L24 11.7l-3.4 1.8.6-3.8-2.7-2.7 3.8-.5L24 3z" />
      {/* Left & Right people */}
      <circle cx="9.5" cy="14" r="3" />
      <path d="M4.5 24v-2a5 5 0 0 1 10 0v2H4.5z" />
      <circle cx="38.5" cy="14" r="3" />
      <path d="M33.5 24v-2a5 5 0 0 1 10 0v2h-10z" />
      {/* Magnifying glass circle + candidate inside */}
      <circle cx="24" cy="25" r="9.5" />
      <circle cx="24" cy="22.5" r="3" />
      <path d="M18.5 31.5a5.5 5.5 0 0 1 11 0" />
      {/* Magnifying glass handle */}
      <path d="M31 32l3 3" />
      <rect x="33.5" y="34" width="6" height="9" rx="2" transform="rotate(-45 36.5 38.5)" />
    </svg>
  );
}

function RightFitIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Outer circle */}
      <circle cx="22" cy="24" r="17" />
      {/* Person silhouette inside */}
      <circle cx="22" cy="19" r="5" />
      <path d="M12.5 35.5v-3a8 8 0 0 1 14-5.2" />
      {/* Verified checkmark badge & ribbon */}
      <circle cx="35.5" cy="31" r="7.5" fill="currentColor" fillOpacity="0.12" />
      <path d="M32.5 31l2 2 4-4" />
      <path d="M31.5 37.5V44l4-2.2 4 2.2v-6.5" />
    </svg>
  );
}

function RightFutureIcon({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Upward zigzag growth arrow */}
      <path d="M7 24l9-9 7 6 13-13" />
      <path d="M27 8h9v9" />
      {/* 4 ascending bars */}
      <rect x="6" y="34" width="6.5" height="8" rx="1.2" />
      <rect x="16" y="29" width="6.5" height="13" rx="1.2" />
      <rect x="26" y="23" width="6.5" height="19" rx="1.2" />
      <rect x="36" y="17" width="6.5" height="25" rx="1.2" />
    </svg>
  );
}

export default function StaffingSection({ onKnowMore }) {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const [rayProgress, setRayProgress] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    let targetProgress = 0;
    let currentProgress = 0;
    let rafId;

    const updateTarget = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);

      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      if (desktop) {
        // Sticky pinned at top-24 (96px): progress 0 -> 100 while scrolling through the 250vh section
        const stickyTop = 96;
        const scrollable = Math.max(rect.height - vh, 1);
        const raw = (stickyTop - rect.top) / scrollable;
        targetProgress = Math.max(0, Math.min(1, raw)) * 100;
      } else {
        const start = vh * 0.8;
        const total = Math.max(rect.height - vh * 0.25, 1);
        const raw = (start - rect.top) / total;
        targetProgress = Math.max(0, Math.min(1, raw)) * 100;
      }
    };

    const tick = () => {
      // Smooth lerp so the ray glides forward & backward naturally with scrolling
      currentProgress += (targetProgress - currentProgress) * 0.085;
      if (Math.abs(targetProgress - currentProgress) < 0.04) {
        currentProgress = targetProgress;
      }
      setRayProgress(currentProgress);
      rafId = requestAnimationFrame(tick);
    };

    updateTarget();
    window.addEventListener('scroll', updateTarget, { passive: true });
    window.addEventListener('resize', updateTarget, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', updateTarget);
      window.removeEventListener('resize', updateTarget);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const whiteCollarTopics = [
    {
      num: '01',
      title: 'Software Architecture',
      subtitle: 'Enterprise Systems, Cloud & Engineering Leadership',
      description: 'Senior architects and principal engineers who design dependable cloud foundations, clean APIs, and scalable core platforms.',
      features: [
        'Cloud & Distributed Systems',
        'Enterprise Application Design',
        'Data & AI Platform Engineering',
        'Security, DevOps & Reliability'
      ]
    },
    {
      num: '02',
      title: 'Tax Auditor',
      subtitle: 'Statutory Audit, Direct/Indirect Tax & Compliance',
      description: 'Qualified tax auditors and chartered specialists who keep statutory filings, GST reconciliations, and corporate audits airtight.',
      features: [
        'Statutory & Internal Audits',
        'GST & Corporate Tax Filings',
        'Financial Controls & Reporting',
        'Regulatory & ROC Compliance'
      ]
    },
    {
      num: '03',
      title: 'HR BP',
      subtitle: 'Workforce Strategy, Talent Partnering & Culture',
      description: 'Experienced HR Business Partners who align hiring plans with business goals, strengthen retention, and guide leadership teams.',
      features: [
        'Strategic Workforce Planning',
        'Leadership & Functional Hiring',
        'Performance & Retention Programs',
        'Policy, Payroll & Compliance'
      ]
    }
  ];

  // Determine which single topic is expanded based on scroll ray progress (or tap on mobile)
  const scrollActiveIndex = rayProgress < 34 ? 0 : rayProgress < 68 ? 1 : 2;
  const activeIndex = isDesktop ? scrollActiveIndex : mobileActiveIndex;

  const handleSelectTopic = (idx) => {
    if (!isDesktop) {
      setMobileActiveIndex(idx);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const scrollable = Math.max(rect.height - window.innerHeight, 1);
    const targetFraction = idx === 0 ? 0.14 : idx === 1 ? 0.5 : 0.88;
    const destination = sectionTop - 96 + scrollable * targetFraction;
    window.scrollTo({ top: destination, behavior: 'smooth' });
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConnectWithTeam = () => {
    setModalOpen(false);
    if (onKnowMore) {
      onKnowMore();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="staffing"
      ref={sectionRef}
      className="relative py-10 sm:py-14 lg:py-16 lg:min-h-[250vh] bg-transparent border-b border-indigo-200/80 dark:border-purple-500/30 transition-colors duration-200"
    >
      <div className="lg:sticky lg:top-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Enclosing Illuminated Section Box */}
        <div className="section-box section-box-purple p-6 sm:p-10 lg:p-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* =========================================================================
                LEFT SIDE: THE CONTENT (Title, Text, Pillars & Know More Button)
               ========================================================================= */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-6 text-left">

              {/* Main Heading: White Collar Staffing Solutions */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-tight">
                  White Collar{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444]">
                    Staffing Solutions
                  </span>
                </h2>

                {/* Subheading: Building Stronger Teams with the Right Talent */}
                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-800 dark:text-slate-200 mt-2">
                  Building Stronger Teams with the Right Talent
                </h3>
              </div>

              {/* Paragraph 1 */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                At <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2c60ea] via-[#5945e7] to-[#783cec]">TALENTIC 360.AI</strong>, we provide comprehensive White Collar Staffing Solutions designed to help businesses find, recruit, and retain skilled professionals. We connect organizations with talented individuals who bring the right expertise, experience, and potential to drive business growth.
              </p>

              {/* Paragraph 2 */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                From entry-level professionals to experienced specialists and senior executives, our recruitment solutions cover diverse industries and functional domains. We focus on understanding your business needs and delivering the right talent to build efficient, productive, and high-performing teams.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                <div className="group p-4 rounded-xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 p-1.5 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <RightTalentIcon className="w-full h-full" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">The Right Talent</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Pre-vetted specialists & senior domain executives</p>
                  </div>
                </div>

                <div className="group p-4 rounded-xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 p-1.5 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <RightFitIcon className="w-full h-full" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">The Right Fit</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Cultural, technical & enterprise alignment</p>
                  </div>
                </div>

                <div className="group p-4 rounded-xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 p-1.5 rounded-xl bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <RightFutureIcon className="w-full h-full" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">The Right Future</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Sustainable retention & strategic workforce growth</p>
                  </div>
                </div>
              </div>

              {/* For Business: Editorial Client Hiring Callout + 'Connect With Us' CTA */}
              <div className="pt-2">
                <div className="relative p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-[#0b1126]/95 border border-slate-200/90 dark:border-slate-700/80 border-l-4 border-l-[#2c60ea] dark:border-l-cyan-400 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="h-[2.5px] w-7 rounded-full bg-gradient-to-r from-[#2c60ea] to-[#783cec]" />
                      <span className="text-xs sm:text-sm font-display font-black uppercase tracking-[0.2em] bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] bg-clip-text text-transparent">
                        For Business
                      </span>
                    </div>
                    <h4 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight leading-tight">
                      Find Your Next Candidate
                    </h4>
                    <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
                      Hire pre-vetted architects, tax auditors &amp; HR leaders ready to deliver from day one.
                    </p>
                  </div>

                  <button
                    onClick={() => (onKnowMore ? onKnowMore() : handleOpenModal())}
                    className="group shrink-0 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <span>Connect With Us</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>

            {/* =========================================================================
                RIGHT SIDE: EDITORIAL SCROLL-PINNED ACCORDION TIMELINE (01 - 03)
               ========================================================================= */}
            <div className="lg:col-span-5 xl:col-span-5 relative pl-1 sm:pl-2 py-1">
              <div className="flex items-center justify-between mb-5 px-1">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Core Verticals
                </span>
                <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                  {whiteCollarTopics[activeIndex].num} / 03
                </span>
              </div>

              <div className="relative pl-11 sm:pl-12">
                {/* Vertical Background Track Line */}
                <div
                  aria-hidden="true"
                  className="absolute left-[26px] sm:left-[28px] top-3.5 bottom-6 w-[2px] bg-slate-200/90 dark:bg-slate-800 rounded-full"
                />

                {/* Animated Scroll Ray (moves forward & backward with scroll) */}
                <div
                  aria-hidden="true"
                  className="absolute left-[25.5px] sm:left-[27.5px] top-3.5 w-[3px] rounded-full bg-gradient-to-b from-[#2c60ea] via-[#783cec] to-[#ef4444]"
                  style={{
                    height: `calc((100% - 2.4rem) * ${Math.min(100, Math.max(0, rayProgress)) / 100})`
                  }}
                >
                  {rayProgress > 0.5 && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#783cec] dark:bg-cyan-300 ring-4 ring-purple-500/20 dark:ring-cyan-400/20" />
                  )}
                </div>

                {/* Accordion Topic List (Only 1 expanded at a time) */}
                <div className="divide-y divide-slate-200/75 dark:divide-slate-800/80">
                  {whiteCollarTopics.map((topic, idx) => {
                    const isActive = idx === activeIndex;
                    const isPassed = idx < activeIndex;

                    return (
                      <div key={topic.num} className="relative py-2 first:pt-0">
                        {/* Serial Number + Rail Ring Node */}
                        <button
                          type="button"
                          onClick={() => handleSelectTopic(idx)}
                          aria-label={`Select ${topic.num} ${topic.title}`}
                          className="absolute -left-11 sm:-left-12 top-3.5 flex items-center gap-2 cursor-pointer group focus:outline-none"
                        >
                          <span
                            className={`text-xs font-mono w-4 text-right transition-colors duration-300 ${isActive
                              ? 'font-bold text-slate-900 dark:text-white'
                              : isPassed
                                ? 'font-medium text-slate-600 dark:text-slate-300'
                                : 'font-normal text-slate-400 dark:text-slate-500'
                              }`}
                          >
                            {topic.num}
                          </span>
                          <span
                            className={`relative z-10 w-3.5 h-3.5 rounded-full transition-all duration-300 ${isActive
                              ? 'bg-white dark:bg-[#0d142c] border-[3px] border-[#2c60ea] dark:border-cyan-300 ring-4 ring-indigo-500/15 dark:ring-cyan-400/15 scale-110'
                              : isPassed
                                ? 'bg-[#2c60ea] dark:bg-purple-400 border-2 border-white dark:border-[#0d142c]'
                                : 'bg-white dark:bg-[#0d142c] border-2 border-slate-300 dark:border-slate-600 group-hover:border-slate-400'
                              }`}
                          />
                        </button>

                        {/* Expanded Editorial Panel vs Clean Collapsed Row */}
                        {isActive ? (
                          <div className="rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-700/80 p-4 sm:p-5 shadow-sm transition-all duration-300">
                            <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                              {topic.title}
                            </h4>
                            <p className="text-xs font-medium text-indigo-600 dark:text-cyan-300 mt-0.5">
                              {topic.subtitle}
                            </p>

                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
                              {topic.description}
                            </p>

                            {/* Clean Full-Text List (No truncated pills) */}
                            <ul className="mt-3.5 pt-3 border-t border-slate-200/75 dark:border-slate-800 space-y-2">
                              {topic.features.map((feat) => (
                                <li
                                  key={feat}
                                  className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-cyan-400 shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleSelectTopic(idx)}
                            className="w-full text-left py-2 px-1 flex items-center justify-between gap-3 cursor-pointer group"
                          >
                            <span className="font-display font-medium text-sm sm:text-[15px] text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                              {topic.title}
                            </span>
                            <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-200 group-hover:translate-x-0.5 transition-all shrink-0" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* For Candidates: Editorial Career Callout at End of Ray + Apply For Hiring */}
                <div className="relative mt-4 pt-1">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[22.5px] sm:-left-[24.5px] top-8 w-3 h-3 rounded-full transition-all duration-300 ${rayProgress >= 90
                      ? 'bg-[#ef4444] ring-4 ring-red-500/20 scale-110'
                      : 'bg-slate-300 dark:bg-slate-700'
                      }`}
                  />
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-[#0b1126]/95 border border-slate-200/90 dark:border-slate-700/80 border-l-4 border-l-[#783cec] dark:border-l-cyan-400 shadow-md space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="h-[2.5px] w-7 rounded-full bg-gradient-to-r from-[#783cec] to-[#ef4444]" />
                        <span className="text-xs sm:text-sm font-display font-black uppercase tracking-[0.2em] bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] bg-clip-text text-transparent">
                          For Candidates
                        </span>
                      </div>
                      <h4 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight leading-tight">
                        Find Your Next Job
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Step into high-impact roles in Software Architecture, Tax Audit &amp; HR Leadership.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => (onKnowMore ? onKnowMore() : handleOpenModal())}
                      className={`w-full group px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all duration-300 cursor-pointer ${rayProgress >= 90
                        ? 'bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] text-white shadow-md hover:shadow-xl hover:scale-[1.01]'
                        : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-95 shadow-sm'
                        }`}
                    >
                      <span>Apply For Hiring</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          DETAILED 'KNOW MORE' STAFFING MODAL
         ========================================================================= */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">

          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={handleCloseModal}></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#090e24] border border-slate-200 dark:border-purple-500/40 shadow-2xl dark:shadow-[0_0_50px_rgba(120,60,236,0.3)] p-6 sm:p-8 overflow-hidden z-10 max-h-[90vh] overflow-y-auto">

            {/* Top Brand Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444]"></div>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-10 mb-6 text-left">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 inline-block mb-2">
                Executive & Professional Recruitment
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                White Collar Staffing Solutions
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1.5">
                Strategic workforce acquisition engineered for MNCs, Corporates, and fast-growing organizations.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-left">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>Executive & Leadership Hiring</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Targeted headhunting for C-suite, directors, and critical strategic leaders who drive immediate organizational growth.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-1.5 text-purple-600 dark:text-purple-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Domain Specialists & Lateral Hiring</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Sourcing niche talent across AI engineering, data telemetry, finance, healthcare, and advanced manufacturing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-1.5 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>End-to-End RPO & Pipeline</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Full lifecycle recruitment process management from initial screening to onboarding and culture adaptation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-1.5 text-rose-600 dark:text-rose-400 font-bold text-sm">
                  <Users className="w-4 h-4" />
                  <span>Retention & Performance Alignment</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Mindful evaluation methodology ensuring 95%+ first-year retention and cultural synergy.
                </p>
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="mb-6 p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-500/30 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-2">
                Industries We Cover
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'IT & Software Engineering',
                  'Banking & Financial Services',
                  'Advanced Manufacturing',
                  'Healthcare & Biotechnology',
                  'Supply Chain & Operations',
                  'Corporate Governance & Legal'
                ].map((ind, i) => (
                  <span key={i} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-indigo-500" />
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={handleCloseModal}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleConnectWithTeam}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect with Staffing Team</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}

