import React, { useState, useEffect, useRef } from 'react';
import { 
  Trophy, 
  Zap, 
  CheckCircle2, 
  GraduationCap, 
  Compass, 
  ShieldCheck,
  Users,
  Building2,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { siteData } from '../data/content';

/**
 * Animated Counter Component
 * Smoothly counts up from 0 to targetValue using easeOutExpo easing
 */
function AnimatedMetricCounter({ targetValue, suffix = '', isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTime = null;
    let animationFrameId;
    const duration = 2200; // 2.2s smooth animation

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easeOutExpo formula
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * targetValue);
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetValue, isVisible]);

  return (
    <span>
      {count.toLocaleString('en-US')}{suffix}
    </span>
  );
}

/* Custom Brand-Matched SVG Icons for Why Choose Us */
function MarketLeadershipSvg({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6l3.2 2.4 3.9-.6 1.5 3.6 3.7 1.4-.5 3.9 2.4 3.1-2.4 3.1.5 3.9-3.7 1.4-1.5 3.6-3.9-.6L24 33.6l-3.2-2.4-3.9.6-1.5-3.6-3.7-1.4.5-3.9L9.8 19.8l2.4-3.1-.5-3.9 3.7-1.4 1.5-3.6 3.9.6L24 6z" fill="currentColor" fillOpacity="0.2" />
      <path d="M22 16l2.5-2v11M21.5 25h6" />
      <path d="M17.5 31.5L15 42l9-3.8 9 3.8-2.5-10.5" fill="currentColor" fillOpacity="0.14" />
    </svg>
  );
}

function InnovativeApproachSvg({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 5v3M10.5 10.5l2.2 2.2M37.5 10.5l-2.2 2.2M6 22h3M39 22h3" />
      <path d="M24 12a10 10 0 0 0-6.5 17.6c1.4 1.3 2.2 2.9 2.5 4.9h8c.3-2 1.1-3.6 2.5-4.9A10 10 0 0 0 24 12z" fill="currentColor" fillOpacity="0.2" />
      <path d="M21 22l2.5-3.5L26 22l-2.5 3.5L21 22z" fill="currentColor" fillOpacity="0.35" />
      <path d="M20 38.5h8M21.5 42h5" />
    </svg>
  );
}

function ProvenTrackRecordSvg({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 40h34" />
      <rect x="10" y="29" width="5.5" height="11" rx="1" fill="currentColor" fillOpacity="0.18" />
      <rect x="19" y="23" width="5.5" height="17" rx="1" fill="currentColor" fillOpacity="0.22" />
      <rect x="28" y="16" width="5.5" height="24" rx="1" fill="currentColor" fillOpacity="0.28" />
      <path d="M10 21l9-6 7 3.5L38 8" />
      <path d="M32 8h6v6" />
    </svg>
  );
}

function ExpertFacultySvg({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 15l18-7 18 7-18 7L6 15z" fill="currentColor" fillOpacity="0.22" />
      <path d="M13 18v6.5c0 2.5 5 4.5 11 4.5s11-2 11-4.5V18" />
      <path d="M40 16v9" />
      <circle cx="40" cy="26.5" r="1.5" fill="currentColor" />
      <path d="M11 35.5c3.5-2.5 8-3.8 13-3.8s9.5 1.3 13 3.8l-13 5.5-13-5.5z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

function CareerGrowthSvg({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 38h8v-7h8v-7h8v-7h8" />
      <path d="M10 25l10-8 6 4 12-11" />
      <path d="M32 10h6v6" />
      <circle cx="14" cy="14" r="3" fill="currentColor" fillOpacity="0.25" />
    </svg>
  );
}

function QualityAssuranceSvg({ className = 'w-full h-full' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6l14 6v10.5c0 9.8-6 16.8-14 19.5-8-2.7-14-9.7-14-19.5V12l14-6z" fill="currentColor" fillOpacity="0.2" />
      <circle cx="24" cy="23" r="8" fill="currentColor" fillOpacity="0.15" />
      <path d="M20 23l2.8 2.8 5.7-5.7" />
    </svg>
  );
}

const whyChooseIconMap = {
  'Market Leadership': MarketLeadershipSvg,
  'Innovative Approach': InnovativeApproachSvg,
  'Proven Track Record': ProvenTrackRecordSvg,
  'Expert Faculty': ExpertFacultySvg,
  'Career Growth': CareerGrowthSvg,
  'Quality Assurance': QualityAssuranceSvg
};

export default function WhyChooseUs({ onGetStarted }) {
  const metricsRef = useRef(null);
  const [isMetricsVisible, setIsMetricsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMetricsVisible(true);
        } else {
          setIsMetricsVisible(false); // Reset to re-animate when scrolled back
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = metricsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const iconMap = {
    Trophy,
    Zap,
    CheckCircle2,
    GraduationCap,
    Compass,
    ShieldCheck
  };

  const metricsConfig = [
    {
      target: 10000,
      suffix: '+',
      label: 'Trained Professionals',
      desc: 'Equipped with cutting-edge industry skills',
      tag: 'VERIFIED TALENT',
      icon: Users,
      gradient: 'from-cyan-600 via-blue-600 to-indigo-700 dark:from-cyan-300 dark:via-sky-200 dark:to-blue-300',
      glow: 'dark:drop-shadow-[0_0_25px_rgba(34,211,238,0.65)]',
      cardBorder: 'border-cyan-200/90 dark:border-cyan-500/40 hover:border-cyan-400',
      cardShadow: 'shadow-lg shadow-cyan-500/5 dark:shadow-[0_0_35px_rgba(6,182,212,0.22)]',
      iconStyle: 'text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/80 border-cyan-300 dark:border-cyan-500/50'
    },
    {
      target: 500,
      suffix: '+',
      label: 'Corporate Partners',
      desc: 'Top MNCs & leading manufacturing hubs',
      tag: 'GLOBAL TIE-UPS',
      icon: Building2,
      gradient: 'from-purple-600 via-fuchsia-600 to-pink-700 dark:from-purple-300 dark:via-fuchsia-200 dark:to-pink-300',
      glow: 'dark:drop-shadow-[0_0_25px_rgba(192,132,252,0.65)]',
      cardBorder: 'border-purple-200/90 dark:border-purple-500/40 hover:border-purple-400',
      cardShadow: 'shadow-lg shadow-purple-500/5 dark:shadow-[0_0_35px_rgba(168,85,247,0.22)]',
      iconStyle: 'text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/80 border-purple-300 dark:border-purple-500/50'
    },
    {
      target: 95,
      suffix: '%',
      label: 'Placement Rate',
      desc: 'Track record of career and talent transformations',
      tag: 'PROVEN SUCCESS',
      icon: TrendingUp,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-700 dark:from-emerald-300 dark:via-teal-200 dark:to-cyan-300',
      glow: 'dark:drop-shadow-[0_0_25px_rgba(52,211,153,0.65)]',
      cardBorder: 'border-emerald-200/90 dark:border-emerald-500/40 hover:border-emerald-400',
      cardShadow: 'shadow-lg shadow-emerald-500/5 dark:shadow-[0_0_35px_rgba(16,185,129,0.22)]',
      iconStyle: 'text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-500/50'
    }
  ];

  return (
    <section id="whyus" className="relative py-10 sm:py-14 bg-transparent border-b border-indigo-200/80 dark:border-purple-500/30 transition-colors duration-200">
      {/* Anchor for 'Industries' and 'Insights' navigation tabs */}
      <div id="industries" className="absolute -top-24 pointer-events-none"></div>
      <div id="insights" className="absolute -top-24 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] bg-clip-text text-transparent">TALENTIC 360.AI LLP</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Experience the difference with a training partner committed to excellence, innovation, and your success.
            </p>
          </div>

        {/* 6 Layered Offset Cards (Matching Reference Format) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-14 pt-10 mb-20">
          {siteData.whyChooseUs.map((card, idx) => {
            const Icon = whyChooseIconMap[card.title] || iconMap[card.icon] || ShieldCheck;

            const cardThemes = [
              {
                backing: 'bg-gradient-to-br from-[#2c60ea] to-[#1e40af]',
                badge: 'bg-gradient-to-br from-[#2c60ea] to-[#1e40af] shadow-blue-500/30',
                titleHover: 'group-hover:text-[#2c60ea] dark:group-hover:text-cyan-300'
              },
              {
                backing: 'bg-gradient-to-br from-[#783cec] to-[#5b21b6]',
                badge: 'bg-gradient-to-br from-[#783cec] to-[#5b21b6] shadow-purple-500/30',
                titleHover: 'group-hover:text-[#783cec] dark:group-hover:text-purple-300'
              },
              {
                backing: 'bg-gradient-to-br from-[#0ea5e9] to-[#0284c7]',
                badge: 'bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] shadow-sky-500/30',
                titleHover: 'group-hover:text-sky-600 dark:group-hover:text-cyan-300'
              },
              {
                backing: 'bg-gradient-to-br from-[#ef4444] to-[#dc2626]',
                badge: 'bg-gradient-to-br from-[#ef4444] to-[#dc2626] shadow-red-500/30',
                titleHover: 'group-hover:text-[#ef4444] dark:group-hover:text-rose-300'
              },
              {
                backing: 'bg-gradient-to-br from-[#ec4899] to-[#be185d]',
                badge: 'bg-gradient-to-br from-[#ec4899] to-[#be185d] shadow-pink-500/30',
                titleHover: 'group-hover:text-pink-600 dark:group-hover:text-pink-300'
              },
              {
                backing: 'bg-gradient-to-br from-[#10b981] to-[#059669]',
                badge: 'bg-gradient-to-br from-[#10b981] to-[#059669] shadow-emerald-500/30',
                titleHover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-300'
              }
            ];
            const theme = cardThemes[idx % cardThemes.length];

            return (
              <div key={idx} className="group relative pl-3 pb-3">
                {/* Offset Bottom-Left Colored Backing Layer */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 top-3 right-3 rounded-2xl ${theme.backing} opacity-90 dark:opacity-85 transition-transform duration-300`}
                />

                {/* Foreground Card (sits lower at rest, lifts noticeably on hover) */}
                <div className="relative z-10 h-full rounded-2xl pt-11 pb-7 px-7 bg-white dark:bg-[#0b1126] border border-slate-200/90 dark:border-slate-700/80 shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:shadow-[0_14px_34px_rgba(0,0,0,0.45)] translate-y-1.5 group-hover:-translate-y-3 group-hover:translate-x-1.5 group-hover:shadow-[0_22px_45px_rgba(15,23,42,0.16)] dark:group-hover:shadow-[0_22px_45px_rgba(0,0,0,0.65)] transition-all duration-300 ease-out">
                  {/* Top-Centered Floating Circular Icon Badge */}
                  <div
                    className={`absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 p-2.5 rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-white dark:ring-[#0b1126] group-hover:scale-110 transition-transform duration-300 ${theme.badge}`}
                  >
                    <Icon className="w-full h-full" />
                  </div>

                  {/* Centered Title */}
                  <h3
                    className={`text-center font-display font-bold text-xl text-slate-900 dark:text-white mb-3 transition-colors ${theme.titleHover}`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-center text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            3 PROMINENT VERIFIED METRICS WITH ANIMATED COUNT-UP (0 TO VALUE)
            Ultra-Visible & Luminous in Both Light and Dark Themes
           ========================================================================= */}
        <div ref={metricsRef} className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {metricsConfig.map((metric, idx) => {
              const MetricIcon = metric.icon;

              return (
                <div
                  key={idx}
                  className={`group relative text-center p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-[#090e22] dark:bg-gradient-to-b dark:from-[#0e1530] dark:via-[#090e22] dark:to-[#060916] border ${metric.cardBorder} ${metric.cardShadow} backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1`}
                >
                  {/* Top Badge with Icon */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border ${metric.iconStyle}`}>
                      <MetricIcon className="w-3.5 h-3.5" />
                      <span>{metric.tag}</span>
                    </span>
                  </div>

                  {/* High-Visibility Animated Counter Number */}
                  <div className={`font-display font-black text-4xl sm:text-5xl lg:text-[2.85rem] xl:text-[3.4rem] px-1 bg-gradient-to-r ${metric.gradient} ${metric.glow} bg-clip-text text-transparent my-3 tracking-tight whitespace-nowrap`}>
                    <AnimatedMetricCounter 
                      targetValue={metric.target} 
                      suffix={metric.suffix} 
                      isVisible={isMetricsVisible} 
                    />
                  </div>

                  {/* Primary Label */}
                  <div className="text-slate-900 dark:text-white font-extrabold text-lg sm:text-xl font-display tracking-tight">
                    {metric.label}
                  </div>

                  {/* Description */}
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-medium">
                    {metric.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
