import React from 'react';
import { X, CheckCircle2, ArrowRight, BookOpen, Clock, Award, Shield } from 'lucide-react';

export default function ProgramModal({ program, onClose, onApply }) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#090d20] border border-slate-200 dark:border-cyan-400/50 shadow-2xl dark:shadow-[0_0_50px_rgba(0,240,255,0.3)] p-6 sm:p-8 overflow-hidden z-10 max-h-[90vh] overflow-y-auto transition-colors duration-200">
        
        {/* Top glow streak */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-cyan-400 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-400/40 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span>{program.badge}</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
            {program.name}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-relaxed">
            {program.description}
          </p>
        </div>

        {/* Fast Specs Row */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center mb-6">
          <div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono block">Format</span>
            <span className="text-xs font-bold text-indigo-700 dark:text-cyan-300">Cohort & Hands-On</span>
          </div>
          <div className="border-x border-slate-200 dark:border-slate-800">
            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono block">Placement Track</span>
            <span className="text-xs font-bold text-pink-700 dark:text-pink-300">95% Targeted</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono block">Certification</span>
            <span className="text-xs font-bold text-purple-700 dark:text-purple-300">Industry Standard</span>
          </div>
        </div>

        {/* Detailed Modules */}
        <div className="mb-6">
          <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            Curriculum Pillars & Apprenticeship Modules
          </h4>

          <div className="space-y-3">
            {program.items.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0e1328] border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm"
              >
                <div className="w-6 h-6 rounded-md bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-400/30 text-cyan-800 dark:text-cyan-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h5>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-900 text-purple-800 dark:text-purple-300 border border-slate-300 dark:border-purple-500/30 font-medium">
                      {item.badge || 'Core Module'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {item.description || item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Close Overview
          </button>
          <button
            onClick={() => {
              onApply(program.name);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md dark:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2"
          >
            <span>Apply for Program</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
