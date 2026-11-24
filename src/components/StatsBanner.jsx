import React from 'react';
import { Users, Building2, TrendingUp, Cpu, Award, Zap } from 'lucide-react';
import { siteData } from '../data/content';

export default function StatsBanner() {
  const iconMap = {
    Users: Users,
    Building2: Building2,
    TrendingUp: TrendingUp,
    Cpu: Cpu
  };

  return (
    <section id="insights" className="relative py-12 bg-white dark:bg-[#060914] border-y border-slate-200 dark:border-cyan-500/20 overflow-hidden transition-colors duration-200">
      {/* Background glow streak */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/10 to-pink-500/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.metrics.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || Award;
            return (
              <div 
                key={idx}
                className="relative group p-6 rounded-2xl bg-slate-50 dark:bg-gradient-to-b dark:from-slate-900/80 dark:to-[#0a0e1e] border border-slate-200 dark:border-cyan-500/20 hover:border-cyan-500/60 dark:hover:border-cyan-400/60 shadow-md dark:shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-400/40 flex items-center justify-center text-cyan-700 dark:text-cyan-300 group-hover:scale-110 transition-transform shadow-sm dark:shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400/70 uppercase tracking-widest font-semibold">
                    VERIFIED
                  </span>
                </div>

                <div className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-cyan-200 dark:to-pink-200 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  {stat.value}
                </div>

                <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {stat.label}
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
