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

export default function ProgramsSection({ onOpenProgramModal }) {
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
            className={`relative py-20 sm:py-24 transition-colors duration-200 overflow-hidden ${
              isEven 
                ? 'bg-slate-50/70 dark:bg-[#080d1e]/70' 
                : 'bg-white/70 dark:bg-[#050712]/70'
            } border-b border-slate-200/60 dark:border-slate-800/60 backdrop-blur-[2px]`}
          >
            {/* Subtle background ambient mesh */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/5 dark:bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 dark:bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-14">
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
                  const ItemIcon = iconMap[item.icon] || BookOpen;

                  return (
                    <div
                      key={itemIdx}
                      className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0c1226]/85 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-cyan-400/60 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Icon Header */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-indigo-600 dark:text-cyan-400 group-hover:scale-110 transition-transform mb-5 shadow-sm">
                          <ItemIcon className="w-6 h-6" />
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
