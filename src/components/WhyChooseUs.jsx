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
    <section id="whyus" className="relative py-12 sm:py-16 bg-transparent transition-colors duration-200">
      {/* Anchor for 'Industries' and 'Insights' navigation tabs */}
      <div id="industries" className="absolute -top-24 pointer-events-none"></div>
      <div id="insights" className="absolute -top-24 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enclosing Illuminated Section Box (Matching Reference Image 5) */}
        <div className="section-box section-box-cyber p-6 sm:p-10 lg:p-12">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] bg-clip-text text-transparent">TALENTIC 360.AI LLP</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Experience the difference with a training partner committed to excellence, innovation, and your success.
            </p>
          </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {siteData.whyChooseUs.map((card, idx) => {
            const Icon = iconMap[card.icon] || ShieldCheck;
            
            const borderColors = {
              cyan: 'hover:border-cyan-400 dark:hover:border-cyan-400 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]',
              pink: 'hover:border-pink-400 dark:hover:border-pink-400 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]',
              purple: 'hover:border-purple-400 dark:hover:border-purple-400 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]',
            };

            const iconColors = {
              cyan: 'text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/70 border-cyan-300 dark:border-cyan-500/40',
              pink: 'text-pink-700 dark:text-pink-300 bg-pink-100 dark:bg-pink-950/70 border-pink-300 dark:border-pink-500/40',
              purple: 'text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/70 border-purple-300 dark:border-purple-500/40',
            };

            return (
              <div
                key={idx}
                className={`group relative rounded-2xl p-8 bg-white dark:bg-[#0a0e20]/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-300 ${borderColors[card.accent] || borderColors.cyan} backdrop-blur-md flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${iconColors[card.accent] || iconColors.cyan}`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
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
                  className={`group relative text-center p-8 sm:p-10 rounded-3xl bg-white/95 dark:bg-gradient-to-b dark:from-[#0c1228]/95 dark:via-[#090d20]/95 dark:to-[#060814]/98 border ${metric.cardBorder} ${metric.cardShadow} backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1`}
                >
                  {/* Top Badge with Icon */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border ${metric.iconStyle}`}>
                      <MetricIcon className="w-3.5 h-3.5" />
                      <span>{metric.tag}</span>
                    </span>
                  </div>

                  {/* High-Visibility Animated Counter Number */}
                  <div className={`font-display font-black text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r ${metric.gradient} ${metric.glow} bg-clip-text text-transparent my-3 tracking-tight`}>
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
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                    {metric.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* End of section-box */}
        </div>

      </div>
    </section>
  );
}
