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
  const timelineRef = useRef(null);
  const [rayProgress, setRayProgress] = useState(0);

  useEffect(() => {
    let targetProgress = 0;
    let currentProgress = 0;
    let rafId;

    const updateTarget = () => {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const total = Math.max(rect.height + vh * 0.15, 1);
      const raw = (start - rect.top) / total;
      targetProgress = Math.max(0, Math.min(1, raw)) * 100;
    };

    const tick = () => {
      // Smooth slow lerp so the ray moves gently with user scrolling
      currentProgress += (targetProgress - currentProgress) * 0.06;
      if (Math.abs(targetProgress - currentProgress) < 0.05) {
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
      threshold: 10
    },
    {
      num: '02',
      title: 'Software Architecture',
      subtitle: 'Full Stack, Cloud & Enterprise Systems',
      threshold: 35
    },
    {
      num: '03',
      title: 'Digital Marketing',
      subtitle: 'Brand Strategy, SEO & Performance Growth',
      threshold: 60
    },
    {
      num: '04',
      title: 'Accountant / CA',
      subtitle: 'Financial Audit, Taxation & Compliance',
      threshold: 85
    }
  ];

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
      className="relative py-10 sm:py-14 bg-transparent border-b border-indigo-200/80 dark:border-purple-500/30 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enclosing Illuminated Section Box */}
        <div className="section-box section-box-purple p-6 sm:p-10 lg:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
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
                RIGHT SIDE: SCROLL-DRIVEN RAY TIMELINE WITH SERIAL NUMBERS (01 - 04)
               ========================================================================= */}
            <div ref={timelineRef} className="lg:col-span-5 xl:col-span-5 relative pl-2 sm:pl-4 py-2">
              <div className="relative space-y-5">
                {/* Vertical Background Track Line */}
                <div
                  aria-hidden="true"
                  className="absolute left-[19px] top-5 bottom-6 w-[2px] bg-slate-300/80 dark:bg-slate-700/80 rounded-full"
                />

                {/* Animated Glowing Scroll Ray */}
                <div
                  aria-hidden="true"
                  className="absolute left-[18px] top-5 w-[4px] rounded-full bg-gradient-to-b from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-[0_0_14px_rgba(120,60,236,0.75)] dark:shadow-[0_0_18px_rgba(168,85,247,0.9)] transition-[height] duration-75"
                  style={{
                    height: `calc((100% - 2.75rem) * ${Math.min(100, Math.max(0, rayProgress)) / 100})`
                  }}
                >
                  {/* Glowing Ray Tip */}
                  {rayProgress > 1 && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-300 dark:bg-cyan-300 shadow-[0_0_12px_rgba(251,191,36,0.95)] dark:shadow-[0_0_14px_rgba(34,211,238,0.95)]" />
                  )}
                </div>

                {/* Serial Numbered Topics (01 - 04) */}
                {whiteCollarTopics.map((topic) => {
                  const isActive = rayProgress >= topic.threshold;
                  return (
                    <div
                      key={topic.num}
                      onClick={() => (onKnowMore ? onKnowMore() : handleOpenModal())}
                      className="relative flex items-center gap-4 group cursor-pointer"
                    >
                      {/* Serial Number Node */}
                      <div
                        className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-display font-black text-xs tracking-wider shrink-0 transition-all duration-500 border ${
                          isActive
                            ? 'bg-gradient-to-br from-[#2c60ea] via-[#783cec] to-[#ef4444] text-white border-transparent shadow-[0_0_18px_rgba(120,60,236,0.65)] scale-110'
                            : 'bg-white dark:bg-[#0d142c] text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                        }`}
                      >
                        {topic.num}
                      </div>

                      {/* Topic Card */}
                      <div
                        className={`flex-1 p-4 rounded-2xl border backdrop-blur-md transition-all duration-500 flex items-center justify-between gap-3 ${
                          isActive
                            ? 'bg-white dark:bg-[#0e1530] border-purple-400/80 dark:border-purple-400/70 shadow-lg dark:shadow-[0_0_24px_rgba(120,60,236,0.28)] translate-x-1'
                            : 'bg-white/75 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-500/50'
                        }`}
                      >
                        <div>
                          <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                            {topic.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {topic.subtitle}
                          </p>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                            isActive
                              ? 'text-purple-600 dark:text-cyan-300 translate-x-0.5'
                              : 'text-slate-400 dark:text-slate-500 group-hover:translate-x-1'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Ray Ends with "Explore White Rule" Button */}
                <div className="relative flex items-center gap-4 pt-1">
                  {/* End Terminal Dot */}
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 border ${
                      rayProgress >= 92
                        ? 'bg-gradient-to-br from-[#783cec] to-[#ef4444] text-white border-transparent shadow-[0_0_18px_rgba(239,68,68,0.65)] scale-105'
                        : 'bg-white dark:bg-[#0d142c] text-slate-400 dark:text-slate-500 border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  <button
                    type="button"
                    onClick={() => (onKnowMore ? onKnowMore() : handleOpenModal())}
                    className={`flex-1 group px-6 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] transition-all duration-500 flex items-center justify-between cursor-pointer ${
                      rayProgress >= 92
                        ? 'shadow-[0_0_26px_rgba(120,60,236,0.55)] scale-[1.02]'
                        : 'shadow-md hover:shadow-xl hover:scale-[1.02]'
                    }`}
                  >
                    <span>Explore White Rule</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

