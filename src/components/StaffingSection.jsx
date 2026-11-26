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
      title: 'HR Solution',
      subtitle: 'Talent Acquisition, HRBP & People Operations',
      description: 'End-to-end human capital leadership to scale high-performing teams, streamline compliance, and build resilient workplace cultures.',
      features: [
        'Executive & Leadership Search',
        'HRBP & Workforce Planning',
        'Payroll, Policy & Compliance',
        'L&D & Performance Systems'
      ]
    },
    {
      num: '02',
      title: 'Software Architecture',
      subtitle: 'Full Stack, Cloud & Enterprise Systems',
      description: 'Principal engineers and solution architects who design scalable cloud infrastructure, resilient APIs, and mission-critical platforms.',
      features: [
        'Cloud-Native & Microservices',
        'Enterprise System Design',
        'AI / Data Platform Engineering',
        'DevSecOps & Reliability'
      ]
    },
    {
      num: '03',
      title: 'Digital Marketing',
      subtitle: 'Brand Strategy, SEO & Performance Growth',
      description: 'Data-driven growth strategists and demand-generation specialists focused on measurable pipeline, brand authority, and ROI.',
      features: [
        'Performance & Paid Media',
        'Technical SEO & Organic Growth',
        'B2B Demand Generation',
        'Marketing Analytics & CRO'
      ]
    },
    {
      num: '04',
      title: 'Accountant / CA',
      subtitle: 'Financial Audit, Taxation & Compliance',
      description: 'Chartered Accountants and finance controllers delivering precision reporting, statutory audits, tax structuring, and FP&A.',
      features: [
        'Statutory Audit & Assurance',
        'GST, Direct & Corporate Tax',
        'FP&A & Treasury Management',
        'Regulatory & ROC Compliance'
      ]
    }
  ];

  // Determine which single topic is expanded based on scroll ray progress (or tap on mobile)
  const scrollActiveIndex =
    rayProgress < 25 ? 0 : rayProgress < 50 ? 1 : rayProgress < 75 ? 2 : 3;
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
    const targetFraction = idx === 0 ? 0.08 : idx === 1 ? 0.37 : idx === 2 ? 0.62 : 0.92;
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

              {/* Button of 'Know More' under the content */}
              <div className="pt-2 flex sm:justify-start justify-center">
                <button
                  onClick={() => (onKnowMore ? onKnowMore() : handleOpenModal())}
                  className="group px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* =========================================================================
                RIGHT SIDE: SCROLL-PINNED HALO-STYLE ACCORDION RAY TIMELINE (01 - 04)
               ========================================================================= */}
            <div className="lg:col-span-5 xl:col-span-5 relative pl-1 sm:pl-2 py-1">
              {/* Top Scroll Hint */}
              <div className="flex items-center justify-between mb-4 px-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Core Verticals
                </span>
                <span className="text-[11px] font-mono font-semibold text-indigo-600 dark:text-cyan-300">
                  {whiteCollarTopics[activeIndex].num} / 04
                </span>
              </div>

              <div className="relative pl-10 sm:pl-12">
                {/* Vertical Background Track Line */}
                <div
                  aria-hidden="true"
                  className="absolute left-[23px] sm:left-[27px] top-3 bottom-5 w-[2px] bg-slate-200 dark:bg-slate-800 rounded-full"
                />

                {/* Animated Glowing Scroll Ray (moves forward & backward with scroll) */}
                <div
                  aria-hidden="true"
                  className="absolute left-[22px] sm:left-[26px] top-3 w-[4px] rounded-full bg-gradient-to-b from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-[0_0_14px_rgba(120,60,236,0.7)] dark:shadow-[0_0_18px_rgba(168,85,247,0.9)]"
                  style={{
                    height: `calc((100% - 2rem) * ${Math.min(100, Math.max(0, rayProgress)) / 100})`
                  }}
                >
                  {/* Glowing Ray Tip */}
                  {rayProgress > 0.5 && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-300 dark:bg-cyan-300 shadow-[0_0_12px_rgba(251,191,36,0.95)] dark:shadow-[0_0_14px_rgba(34,211,238,0.95)]" />
                  )}
                </div>

                {/* Accordion Topic List (Only 1 expanded at a time) */}
                <div className="space-y-2.5">
                  {whiteCollarTopics.map((topic, idx) => {
                    const isActive = idx === activeIndex;
                    const isPassed = idx < activeIndex;

                    return (
                      <div key={topic.num} className="relative">
                        {/* Serial Number + Rail Ring Node */}
                        <button
                          type="button"
                          onClick={() => handleSelectTopic(idx)}
                          aria-label={`Select ${topic.num} ${topic.title}`}
                          className="absolute -left-10 sm:-left-12 top-3 flex items-center gap-1.5 cursor-pointer group focus:outline-none"
                        >
                          <span
                            className={`text-[11px] font-mono font-bold w-4 text-right transition-colors duration-300 ${
                              isActive
                                ? 'text-indigo-600 dark:text-cyan-300'
                                : isPassed
                                  ? 'text-slate-600 dark:text-slate-300'
                                  : 'text-slate-400 dark:text-slate-500'
                            }`}
                          >
                            {topic.num}
                          </span>
                          <span
                            className={`relative z-10 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isActive
                                ? 'bg-white dark:bg-[#0d142c] border-[3px] border-[#783cec] dark:border-cyan-300 ring-4 ring-purple-500/20 dark:ring-cyan-400/20 scale-110 shadow-[0_0_12px_rgba(120,60,236,0.6)]'
                                : isPassed
                                  ? 'bg-[#2c60ea] dark:bg-purple-500 border-2 border-white dark:border-[#0d142c]'
                                  : 'bg-white dark:bg-[#0d142c] border-2 border-slate-300 dark:border-slate-600 group-hover:border-purple-400'
                            }`}
                          />
                        </button>

                        {/* Expanded Card vs Collapsed Row */}
                        {isActive ? (
                          <div className="rounded-2xl bg-white/95 dark:bg-[#0d142c]/95 border border-indigo-200/90 dark:border-purple-500/45 p-4 sm:p-5 shadow-[0_12px_32px_rgba(120,60,236,0.12)] dark:shadow-[0_12px_32px_rgba(120,60,236,0.28)] transition-all duration-300">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h4 className="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                                  {topic.title}
                                </h4>
                                <p className="text-xs font-semibold text-indigo-600 dark:text-cyan-300 mt-0.5">
                                  {topic.subtitle}
                                </p>
                              </div>
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-purple-500/20 text-indigo-700 dark:text-purple-200 border border-indigo-200/70 dark:border-purple-400/30 shrink-0">
                                Active
                              </span>
                            </div>

                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
                              {topic.description}
                            </p>

                            {/* 4 Sub-Feature Rows (HALO-style) */}
                            <div className="mt-3.5 pt-3 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {topic.features.map((feat) => (
                                <div
                                  key={feat}
                                  className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-900/70 px-2.5 py-2 rounded-lg border border-slate-200/60 dark:border-slate-800"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2c60ea] to-[#783cec] shrink-0" />
                                  <span className="truncate">{feat}</span>
                                </div>
                              ))}
                            </div>

                            {/* Explore White Rule Button */}
                            <button
                              type="button"
                              onClick={() => (onKnowMore ? onKnowMore() : handleOpenModal())}
                              className="mt-4 w-full group px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center justify-between cursor-pointer"
                            >
                              <span>Explore White Rule</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleSelectTopic(idx)}
                            className="w-full text-left px-4 py-2.5 rounded-xl bg-white/60 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900/90 border border-slate-200/70 dark:border-slate-800/80 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer group"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="font-display font-semibold text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white truncate">
                                {topic.title}
                              </span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Ray Terminal End Pill: Explore White Rule */}
                <div className="relative mt-3 pt-1">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[22px] sm:-left-[22px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      rayProgress >= 92
                        ? 'bg-[#ef4444] shadow-[0_0_12px_rgba(239,68,68,0.85)] scale-125'
                        : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => (onKnowMore ? onKnowMore() : handleOpenModal())}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all duration-300 cursor-pointer border ${
                      rayProgress >= 92
                        ? 'bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] text-white border-transparent shadow-[0_0_20px_rgba(120,60,236,0.45)]'
                        : 'bg-white/70 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-purple-400'
                    }`}
                  >
                    <span>Explore White Rule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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

