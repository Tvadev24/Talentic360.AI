import React from 'react';
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

export default function WhyChooseUs({ onGetStarted }) {
  const iconMap = {
    Trophy,
    Zap,
    CheckCircle2,
    GraduationCap,
    Compass,
    ShieldCheck
  };

  return (
    <section id="whyus" className="relative py-24 bg-slate-50/70 dark:bg-[#060815]/70 backdrop-blur-[2px] overflow-hidden transition-colors duration-200 border-b border-slate-200/60 dark:border-slate-800/60">
      {/* Anchor for 'Industries' and 'Insights' navigation tabs */}
      <div id="industries" className="absolute -top-24 pointer-events-none"></div>
      <div id="insights" className="absolute -top-24 pointer-events-none"></div>

      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/15 blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-purple-600/10 dark:bg-purple-600/15 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* 3 Prominent Verified Metrics (10,000+ / 500+ / 95% Matching talentic360ai.in) */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {siteData.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-slate-900/60 dark:to-slate-950/70 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-none hover:shadow-lg transition-all"
              >
                <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-slate-800 dark:text-slate-200 font-bold text-base sm:text-lg">
                  {metric.label}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
