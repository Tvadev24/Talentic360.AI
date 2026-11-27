import React, { useEffect, useRef, useState } from 'react';
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

/* Custom Brand-Matched SVG Icons for Corporate Training */
function EnterpriseTrainingIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Main corporate tower */}
      <rect x="8" y="10" width="18" height="32" rx="2" fill="currentColor" fillOpacity="0.12" />
      <path d="M13 17h3M13 23h3M13 29h3M19 17h2M19 23h2M19 29h2" />
      <path d="M15 42v-6h4v6" />
      {/* Connected enterprise wing */}
      <path d="M26 20h12a2 2 0 0 1 2 2v20H26" fill="currentColor" fillOpacity="0.08" />
      <path d="M31 26h4M31 32h4" />
      {/* Network node above */}
      <circle cx="33" cy="11" r="3.5" fill="currentColor" fillOpacity="0.18" />
      <path d="M26 14l4-2M4 42h40" />
    </svg>
  );
}

function LeadershipDevIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Executive compass / strategic vision */}
      <circle cx="24" cy="24" r="17" fill="currentColor" fillOpacity="0.1" />
      <circle cx="24" cy="24" r="11.5" strokeDasharray="3 3" />
      {/* Needle pointing northeast */}
      <path d="M18 30l4-10 10-4-4 10-10 4z" fill="currentColor" fillOpacity="0.22" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      {/* Cardinal ticks */}
      <path d="M24 4v3M24 41v3M4 24h3M41 24h3" />
    </svg>
  );
}

function InnovationWorkshopsIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Radiant lightbulb with spark */}
      <path d="M24 5v3M10.5 10.5l2.2 2.2M37.5 10.5l-2.2 2.2M6 23h3M39 23h3" />
      <path d="M24 12a10.5 10.5 0 0 0-7 18.3c1.6 1.5 2.5 3.3 2.8 5.2h8.4c.3-1.9 1.2-3.7 2.8-5.2A10.5 10.5 0 0 0 24 12z" fill="currentColor" fillOpacity="0.14" />
      {/* Inner spark / gear */}
      <path d="M24 18v6M21 21h6" />
      <path d="M20 39.5h8M21.5 43h5" />
    </svg>
  );
}

function PerformanceOptIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Ascending performance bars */}
      <path d="M6 41h36" />
      <rect x="9" y="29" width="6" height="12" rx="1.2" fill="currentColor" fillOpacity="0.12" />
      <rect x="19" y="22" width="6" height="19" rx="1.2" fill="currentColor" fillOpacity="0.16" />
      <rect x="29" y="14" width="6" height="27" rx="1.2" fill="currentColor" fillOpacity="0.22" />
      {/* Upward growth trajectory */}
      <path d="M9 21l10-6 7 3.5L39 8" />
      <path d="M33 8h6v6" />
    </svg>
  );
}

const corporateIconMap = {
  'Enterprise Training Solutions': EnterpriseTrainingIcon,
  'Leadership Development': LeadershipDevIcon,
  'Innovation Workshops': InnovationWorkshopsIcon,
  'Performance Optimization': PerformanceOptIcon
};

/* Custom Brand-Matched SVG Icons for Government Programs */
function PublicSectorIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Classical government pediment & dome */}
      <path d="M6 18L24 7l18 11H6z" fill="currentColor" fillOpacity="0.14" />
      <path d="M24 4v3" />
      {/* 4 Classical pillars */}
      <path d="M11 18v17M19 18v17M29 18v17M37 18v17" />
      {/* Base steps */}
      <rect x="7" y="35" width="34" height="4" rx="1" fill="currentColor" fillOpacity="0.12" />
      <path d="M4 42h40" />
    </svg>
  );
}

function PolicySupportIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Governance shield */}
      <path d="M24 5l15 6.5v11c0 10.5-6.4 17.8-15 20.5-8.6-2.7-15-10-15-20.5v-11L24 5z" fill="currentColor" fillOpacity="0.12" />
      {/* Verified checkmark */}
      <path d="M17.5 24l4.5 4.5 9-9" />
    </svg>
  );
}

function SkillIndiaIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* National skill rosette / medal */}
      <circle cx="24" cy="18" r="11" fill="currentColor" fillOpacity="0.14" />
      <circle cx="24" cy="18" r="5.5" />
      {/* Ribbon tails */}
      <path d="M17 27.5L13.5 43l10.5-5.5L34.5 43 31 27.5" fill="currentColor" fillOpacity="0.08" />
    </svg>
  );
}

function CommunityDevIcon({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Community figures */}
      <circle cx="24" cy="13" r="4" fill="currentColor" fillOpacity="0.16" />
      <circle cx="12" cy="17" r="3.2" fill="currentColor" fillOpacity="0.12" />
      <circle cx="36" cy="17" r="3.2" fill="currentColor" fillOpacity="0.12" />
      {/* Supportive arc / joined hands */}
      <path d="M16 26c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5" />
      <path d="M6.5 29c0-3 2.5-5 5.5-5 1.8 0 3.3.7 4.3 1.8" />
      <path d="M41.5 29c0-3-2.5-5-5.5-5-1.8 0-3.3.7-4.3 1.8" />
      {/* Caring hands cradle at bottom */}
      <path d="M8 34c4 5.5 9.5 8 16 8s12-2.5 16-8" />
    </svg>
  );
}

const governmentIconMap = {
  'Public Sector Training': PublicSectorIcon,
  'Policy Implementation Support': PolicySupportIcon,
  'Skill India Programs': SkillIndiaIcon,
  'Community Development': CommunityDevIcon
};

function CorporateMagnifierSection({ program, gradientClass, iconMap, onExplore }) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let target = 0;
    let current = 0;
    let rafId;

    const updateTarget = () => {
      const el = sectionRef.current;
      if (!el || window.innerWidth < 1024) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const stickyTop = 80; // lg:top-20
      const scrollable = Math.max(rect.height - vh, 1);
      const raw = (stickyTop - rect.top) / scrollable;
      target = Math.max(0, Math.min(1, raw));
    };

    const tick = () => {
      current += (target - current) * 0.055;
      if (Math.abs(target - current) < 0.0005) {
        current = target;
      }
      setProgress(current);
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

  const CARD_W = 256;
  const CARD_H = 264;
  const STRIDE = 286;
  const count = program.items.length;
  const LOOP = count * STRIDE;
  const WRAP_MAX = 310;
  const WRAP_MIN = WRAP_MAX - LOOP;

  // Pause each card briefly centered inside the square magnifying glass before gliding to the next
  const getDwellStepProgress = (p) => {
    const clamped = Math.max(0, Math.min(1, p));
    if (clamped >= 1) return count;
    const scaled = clamped * count;
    const segment = Math.floor(scaled);
    const localT = scaled - segment;
    const dwellFraction = 0.38; // 38% calm dwell centered in lens, 62% liquid quintic glide
    if (localT <= dwellFraction) {
      return segment;
    }
    const u = (localT - dwellFraction) / (1 - dwellFraction);
    const smootherU = u * u * u * (u * (u * 6 - 15) + 10);
    return segment + smootherU;
  };

  const stepProgress = getDwellStepProgress(progress);

  const getWrappedX = (idx) => {
    const raw = -(idx * STRIDE) + stepProgress * STRIDE;
    return ((((raw - WRAP_MIN) % LOOP) + LOOP) % LOOP) + WRAP_MIN;
  };

  const renderConveyorCard = (item, idx, magnified = false) => {
    const ItemIcon = corporateIconMap[item.title] || iconMap[item.icon] || BookOpen;
    const x = getWrappedX(idx);
    const leftFade = Math.min(1, Math.max(0, (x - (WRAP_MIN + 20)) / 90));
    const rightFade = Math.min(1, Math.max(0, (WRAP_MAX - 20 - x) / 70));
    const edgeFade = leftFade * rightFade;
    const focus = Math.max(0, 1 - Math.abs(x) / 170);
    const cardScale = magnified ? 0.96 + focus * 0.05 : 1;

    return (
      <div
        key={`${magnified ? 'mag' : 'base'}-${idx}`}
        style={{
          width: `${CARD_W}px`,
          height: `${CARD_H}px`,
          left: `${x - CARD_W / 2}px`,
          top: '50%',
          transform: `translateY(-50%) scale(${cardScale})`,
          opacity: edgeFade * (magnified ? 1 : 0.8)
        }}
        className={`absolute overflow-hidden rounded-2xl border flex flex-col justify-start will-change-transform ${
          magnified
            ? 'bg-white dark:bg-[#0d1530] border-indigo-400/90 dark:border-cyan-400/80 shadow-[0_18px_40px_rgba(44,96,234,0.22)] dark:shadow-[0_18px_40px_rgba(34,211,238,0.16)]'
            : 'bg-white/80 dark:bg-[#0c1226]/80 border-slate-200/80 dark:border-slate-800/80'
        }`}
      >
        {/* Top Brand Accent Bar */}
        <div
          className={`h-1 w-full shrink-0 ${
            magnified
              ? 'bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444]'
              : 'bg-gradient-to-r from-indigo-300/70 to-purple-300/70 dark:from-slate-700 dark:to-slate-700'
          }`}
        />

        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="w-11 h-11 p-1.5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-indigo-600 dark:text-cyan-400 mb-4 shadow-sm">
              <ItemIcon className="w-full h-full" />
            </div>

            <h3 className="font-display font-bold text-[15.5px] leading-snug text-slate-900 dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id={program.id}
      ref={sectionRef}
      className="relative py-10 sm:py-14 lg:py-16 lg:min-h-[280vh] bg-transparent border-b border-indigo-200/80 dark:border-purple-500/30 transition-colors duration-200"
    >
      <div className="lg:sticky lg:top-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-3">
            {program.prefix}
            <span className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
              {program.suffix}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {program.description}
          </p>
        </div>

        {/* Desktop: Scroll-Pinned Right-Side Magnifying Glass Conveyor */}
        <div className="hidden lg:block mb-8">
          <div className="relative h-[370px] rounded-3xl border border-indigo-200/75 dark:border-purple-500/30 bg-white/45 dark:bg-[#080d1e]/65 backdrop-blur-md overflow-hidden shadow-lg">
            {/* Subtle horizontal conveyor rail line */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-indigo-300/60 dark:via-purple-500/40 to-transparent"
            />

            {/* Base Conveyor Strip (glides left -> right toward the square magnifying glass) */}
            <div
              className="absolute inset-y-0"
              style={{
                left: 'calc(100% - 205px)'
              }}
            >
              {program.items.map((item, idx) => renderConveyorCard(item, idx, false))}
            </div>

            {/* Soft Left Edge Fade */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/95 dark:from-[#070b19]/95 to-transparent pointer-events-none z-10"
            />

            {/* Right-Side Square Optical Magnifying Glass */}
            <div
              className="absolute top-1/2 -translate-y-1/2 z-20"
              style={{ right: '45px', width: '320px', height: '320px' }}
            >
              {/* Square Magnified Lens */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-50/95 dark:bg-[#070b1a]/95 border-[5px] border-indigo-500/85 dark:border-cyan-400/85 ring-4 ring-indigo-500/15 dark:ring-cyan-400/15 shadow-[0_20px_60px_rgba(44,96,234,0.28),inset_0_0_28px_rgba(120,60,236,0.18)]">
                {/* Synchronized Magnified (1.22x) Conveyor Layer */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    transform: 'scale(1.22)',
                    transformOrigin: '160px center'
                  }}
                >
                  <div
                    className="absolute inset-y-0"
                    style={{
                      left: '160px'
                    }}
                  >
                    {program.items.map((item, idx) => renderConveyorCard(item, idx, true))}
                  </div>
                </div>

                {/* Specular Glass Reflection & Optical Sheen */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-indigo-500/10 pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute top-3 left-5 w-24 h-8 rounded-full bg-white/30 dark:bg-white/15 blur-md -rotate-12 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Fallback Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 lg:hidden">
          {program.items.map((item, itemIdx) => {
            const ItemIcon = corporateIconMap[item.title] || iconMap[item.icon] || BookOpen;
            return (
              <div
                key={itemIdx}
                className="overflow-hidden rounded-2xl bg-white/85 dark:bg-[#0c1226]/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-start"
              >
                <div className="h-1 w-full bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444]" />
                <div className="p-6">
                  <div className="w-12 h-12 p-1.5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-indigo-600 dark:text-cyan-400 mb-5 shadow-sm">
                    <ItemIcon className="w-full h-full" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Explore Button */}
        <div className="text-center">
          <button
            onClick={onExplore}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <span>{program.buttonText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
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
    },
    'Trade Apprenticeships': {
      src: '/assets/trade-apprenticeships-bg.jpg',
      position: 'object-[35%_20%]'
    },
    'Fast-Track Certifications': {
      src: '/assets/fast-track-certifications-bg.jpg',
      position: 'object-bottom'
    },
    'Career Advancement Programs': {
      src: '/assets/career-advancement-bg.jpg',
      position: 'object-[50%_28%]'
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

        if (program.id === 'corporate') {
          return (
            <CorporateMagnifierSection
              key={program.id}
              program={program}
              gradientClass={gradientClass}
              iconMap={iconMap}
              onExplore={() => handleProgramClick(program)}
            />
          );
        }

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
                    const CustomProgramIcon =
                      program.id === 'academic'
                        ? academicIconMap[item.title]
                        : program.id === 'government'
                          ? governmentIconMap[item.title]
                          : null;
                    const ItemIcon = CustomProgramIcon || iconMap[item.icon] || BookOpen;
                    const flipImage =
                      program.id === 'academic' ? academicFlipImages[item.title] : null;
                    const bgCard = backgroundPhotoCards[item.title];

                    if (bgCard) {
                      return (
                        <div
                          key={itemIdx}
                          className="group relative min-h-[340px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-cyan-400/60 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-end"
                        >
                          {/* Clear, Unobstructed Background Photo */}
                          <img
                            src={bgCard.src}
                            alt={item.title}
                            className={`absolute inset-0 w-full h-full object-cover ${bgCard.position} group-hover:scale-105 transition-transform duration-700`}
                          />

                          {/* Bottom-only Gradient Scrim so upper photo stays crystal clear */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent"
                          />

                          {/* Bottom Title & Description anchored tight to bottom */}
                          <div className="relative z-10 px-4 sm:px-5 pb-3.5 pt-16">
                            <h3 className="font-display font-bold text-base sm:text-[17px] text-white mb-1 group-hover:text-cyan-300 transition-colors drop-shadow-sm leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-[11px] sm:text-xs text-slate-200 leading-snug line-clamp-3">
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
                        className="group relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#0c1226]/85 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-cyan-400/60 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
                      >
                        {program.id === 'government' && (
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
                          >
                            <img
                              src="/assets/govt-emblem.png"
                              alt=""
                              className="h-[78%] w-auto object-contain opacity-[0.09] dark:opacity-[0.14] dark:invert"
                            />
                          </div>
                        )}

                        <div className="relative z-10">
                          {/* Icon Header */}
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-indigo-600 dark:text-cyan-400 group-hover:scale-110 transition-transform mb-5 shadow-sm ${CustomProgramIcon ? 'p-1.5' : ''}`}>
                            <ItemIcon className={CustomProgramIcon ? 'w-full h-full' : 'w-6 h-6'} />
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

                        <div className="relative z-10 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-500">
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
