import React, { useState } from 'react';
import { 
  Layers, 
  ShoppingBag, 
  Smartphone, 
  Bot, 
  BarChart3, 
  Cpu, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';

export default function ShowcaseSection() {
  const [activeCard, setActiveCard] = useState('ai-interfaces');

  return (
    <section id="staffing" className="relative py-20 bg-slate-50 dark:bg-[#05070e] circuit-bg border-b border-slate-200 dark:border-cyan-500/20 overflow-hidden transition-colors duration-200">
      
      {/* Background glow streak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/10 to-pink-500/10 dark:from-cyan-500/20 dark:via-purple-600/25 dark:to-pink-500/20 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-4">
            AI-Powered Career & Enterprise Toolkits
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Interactive multi-discipline modules engineered for enterprise readiness and deep technological mastery.
          </p>
        </div>

        {/* =========================================================================
            THE 5 FLOATING 3D GLOWING CARDS (FROM REFERENCE DESIGN)
           ========================================================================= */}
        <div className="relative">
          
          {/* Cards Grid Container (2 cards top row, 3 cards bottom row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">

            {/* CARD 1 (Top Left): SaaS & Enterprise Platforms */}
            <div 
              onClick={() => setActiveCard('saas')}
              className={`lg:col-span-3 rounded-2xl p-5 md:p-6 transition-all duration-300 cursor-pointer backdrop-blur-xl bg-white dark:bg-gradient-to-br dark:from-[#111733]/95 dark:via-[#0c1024]/95 dark:to-[#070916]/98 ${
                activeCard === 'saas' 
                  ? 'border-2 border-indigo-500 dark:border-cyan-400 shadow-xl shadow-indigo-100/70 dark:shadow-[0_0_35px_rgba(0,240,255,0.45)] ring-1 ring-indigo-400 dark:ring-cyan-400' 
                  : 'border border-slate-200 dark:border-cyan-500/30 hover:border-indigo-400 dark:hover:border-cyan-400/60 shadow-md hover:shadow-xl dark:shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-500/50 flex items-center justify-center text-purple-700 dark:text-purple-300 shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">SaaS Landing Pages</h3>
                    <p className="text-xs text-purple-700 dark:text-purple-300 font-semibold">Clean landing page mockup</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-400/40">
                  High-Converting
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
                Tailored solutions for MNCs, Corporates, and large manufacturers with high-converting templates.
              </p>

              {/* Mockup Inside Card */}
              <div className="bg-slate-100/90 dark:bg-[#070b18] rounded-xl border border-slate-200 dark:border-slate-800 p-3 shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="font-mono text-indigo-600 dark:text-cyan-400 font-bold">talentic360://enterprise-saas</span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
                  </div>
                </div>
                <div className="mt-3 flex gap-3">
                  <div className="w-1/3 bg-white dark:bg-slate-900/90 rounded-lg p-2 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="h-2 w-12 bg-indigo-500/60 dark:bg-cyan-400/60 rounded mb-2"></div>
                    <div className="h-1.5 w-16 bg-slate-300 dark:bg-slate-700 rounded mb-1"></div>
                    <div className="h-1.5 w-10 bg-slate-300 dark:bg-slate-700 rounded"></div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/40 rounded-lg p-2.5 border border-indigo-200 dark:border-purple-500/40 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-slate-900 dark:text-white">Corporate Dashboard</span>
                      <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">Live Sync</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-1.5">
                      <div className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 w-[84%]"></div>
                    </div>
                    <span className="text-[9px] text-slate-600 dark:text-slate-400 font-medium">84% Talent Deployment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 (Top Right): E-Commerce Master */}
            <div 
              onClick={() => setActiveCard('ecommerce')}
              className={`lg:col-span-3 rounded-2xl p-5 md:p-6 transition-all duration-300 cursor-pointer backdrop-blur-xl bg-white dark:bg-gradient-to-br dark:from-[#0e1635]/95 dark:via-[#0a1026]/95 dark:to-[#070916]/98 ${
                activeCard === 'ecommerce' 
                  ? 'border-2 border-blue-500 dark:border-blue-400 shadow-xl shadow-blue-100/70 dark:shadow-[0_0_35px_rgba(59,130,246,0.45)] ring-1 ring-blue-400 dark:ring-blue-400' 
                  : 'border border-slate-200 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-400/60 shadow-md hover:shadow-xl dark:shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-500/50 flex items-center justify-center text-blue-700 dark:text-blue-300 shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">E-Commerce Master</h3>
                    <p className="text-xs text-blue-700 dark:text-blue-300 font-semibold">Online store product grid</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-400/40">
                  Shopify & Custom
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
                Enterprise vocational systems with modular catalog grids and scalable multi-channel architecture.
              </p>

              {/* Store Mockup */}
              <div className="bg-slate-100/90 dark:bg-[#070b18] rounded-xl border border-slate-200 dark:border-slate-800 p-3 shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">store.talentic360.ai</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-semibold">Active Node</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[
                    { label: 'Technical Kit', tag: 'Certified', bgLight: 'from-blue-50 to-slate-50', bgDark: 'from-blue-950/60 to-slate-900' },
                    { label: 'Apprentice Suite', tag: 'Hands-on', bgLight: 'from-purple-50 to-slate-50', bgDark: 'from-purple-950/60 to-slate-900' },
                    { label: 'Enterprise AI', tag: 'MNC Level', bgLight: 'from-cyan-50 to-slate-50', bgDark: 'from-cyan-950/60 to-slate-900' },
                  ].map((item, idx) => (
                    <div key={idx} className={`p-2 rounded-lg bg-gradient-to-b ${item.bgLight} dark:${item.bgDark} border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm`}>
                      <div className="w-full h-8 bg-slate-200/80 dark:bg-slate-800/80 rounded mb-1.5 flex items-center justify-center">
                        <span className="text-[9px] font-mono text-blue-700 dark:text-cyan-300 font-bold">#{idx + 1}</span>
                      </div>
                      <span className="text-[9px] font-bold text-slate-800 dark:text-slate-200 truncate">{item.label}</span>
                      <span className="text-[8px] text-slate-500 dark:text-slate-400">{item.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 3 (Bottom Left): Mobile App UI */}
            <div 
              onClick={() => setActiveCard('mobile')}
              className={`lg:col-span-2 rounded-2xl p-5 transition-all duration-300 cursor-pointer backdrop-blur-xl bg-white dark:bg-gradient-to-br dark:from-[#17102e]/95 dark:via-[#100b24]/95 dark:to-[#070916]/98 ${
                activeCard === 'mobile' 
                  ? 'border-2 border-pink-500 dark:border-pink-400 shadow-xl shadow-pink-100/70 dark:shadow-[0_0_35px_rgba(236,72,153,0.45)] ring-1 ring-pink-400 dark:ring-pink-400' 
                  : 'border border-slate-200 dark:border-pink-500/30 hover:border-pink-400 dark:hover:border-pink-400/60 shadow-md hover:shadow-xl dark:shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-pink-100 dark:bg-pink-950/80 border border-pink-200 dark:border-pink-500/50 flex items-center justify-center text-pink-700 dark:text-pink-300 shadow-sm dark:shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Mobile App UI</h3>
                  <p className="text-[11px] text-pink-700 dark:text-pink-300 font-semibold">iOS / Android</p>
                </div>
              </div>

              <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-3">
                Seamless user experience and responsive mobile training interface.
              </p>

              {/* Dual Mobile Mockup */}
              <div className="flex items-center justify-center gap-2 bg-slate-100/90 dark:bg-[#070b18] p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="w-1/2 bg-white dark:bg-slate-900/90 rounded-lg p-1.5 border border-purple-200 dark:border-purple-500/40 shadow-sm">
                  <div className="h-1 w-6 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-1.5"></div>
                  <div className="h-6 w-full bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/70 dark:to-indigo-900/70 rounded mb-1 flex items-center justify-center">
                    <span className="text-[7px] text-purple-800 dark:text-purple-200 font-bold">Talentic App</span>
                  </div>
                  <div className="h-1.5 w-10 bg-slate-200 dark:bg-slate-700 rounded mb-1"></div>
                  <div className="h-1.5 w-7 bg-slate-200 dark:bg-slate-800 rounded"></div>
                </div>

                <div className="w-1/2 bg-white dark:bg-slate-900/90 rounded-lg p-1.5 border border-cyan-200 dark:border-cyan-500/40 shadow-sm">
                  <div className="h-1 w-6 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-1.5"></div>
                  <div className="h-6 w-full bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/70 dark:to-blue-900/70 rounded mb-1 flex items-center justify-center">
                    <span className="text-[7px] text-cyan-800 dark:text-cyan-200 font-bold">Apprentice</span>
                  </div>
                  <div className="h-1.5 w-10 bg-slate-200 dark:bg-slate-700 rounded mb-1"></div>
                  <div className="h-1.5 w-7 bg-slate-200 dark:bg-slate-800 rounded"></div>
                </div>
              </div>
            </div>

            {/* CARD 4 (Bottom Center): AI Interfaces */}
            <div 
              onClick={() => setActiveCard('ai-interfaces')}
              className={`lg:col-span-2 rounded-2xl p-5 transition-all duration-300 cursor-pointer backdrop-blur-xl bg-white dark:bg-gradient-to-br dark:from-[#0d1a33]/95 dark:via-[#091326]/95 dark:to-[#070916]/98 ${
                activeCard === 'ai-interfaces' 
                  ? 'border-2 border-cyan-500 dark:border-cyan-400 shadow-xl shadow-cyan-100/70 dark:shadow-[0_0_35px_rgba(0,240,255,0.5)] ring-1 ring-cyan-400 dark:ring-cyan-400' 
                  : 'border border-slate-200 dark:border-cyan-500/30 hover:border-cyan-400 dark:hover:border-cyan-400/60 shadow-md hover:shadow-xl dark:shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/50 flex items-center justify-center text-cyan-700 dark:text-cyan-300 shadow-sm dark:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">AI Interfaces</h3>
                  <p className="text-[11px] text-cyan-700 dark:text-cyan-300 font-semibold">AI-Powered UI/UX</p>
                </div>
              </div>

              <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-3">
                Neural network processing models for personalized training pathways.
              </p>

              {/* Chat Interface Mockup */}
              <div className="bg-slate-100/90 dark:bg-[#070b18] rounded-xl border border-cyan-200 dark:border-cyan-500/40 p-2.5 shadow-sm dark:shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 text-[9px]">
                  <span className="text-cyan-800 dark:text-cyan-300 font-bold">Talentic Chat Interface</span>
                  <span className="text-slate-500 dark:text-slate-400 font-mono">v3.8 Flash</span>
                </div>
                
                <div className="mt-2 space-y-1.5">
                  <div className="flex justify-end">
                    <div className="bg-purple-100 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-500/40 px-2 py-1 rounded-lg text-[9px] text-purple-900 dark:text-purple-200 font-medium">
                      Recommend top corporate training tracks
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-cyan-100 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/40 px-2 py-1 rounded-lg text-[9px] text-cyan-900 dark:text-cyan-200 flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 animate-pulse"></span>
                      Matched: MNC Leadership & Deep AI Model
                    </div>
                  </div>
                </div>

                <div className="mt-2 bg-white dark:bg-slate-900 rounded-md px-2 py-1 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-inner">
                  <span className="text-[8px] text-slate-500 dark:text-slate-400">Prompt box: ask anything...</span>
                  <span className="w-3.5 h-3.5 rounded bg-cyan-500 text-black flex items-center justify-center text-[8px] font-black">↑</span>
                </div>
              </div>
            </div>

            {/* CARD 5 (Bottom Right): Data Visualization */}
            <div 
              onClick={() => setActiveCard('data-viz')}
              className={`lg:col-span-2 rounded-2xl p-5 transition-all duration-300 cursor-pointer backdrop-blur-xl bg-white dark:bg-gradient-to-br dark:from-[#150f2e]/95 dark:via-[#0e0a22]/95 dark:to-[#070916]/98 ${
                activeCard === 'data-viz' 
                  ? 'border-2 border-purple-500 dark:border-purple-400 shadow-xl shadow-purple-100/70 dark:shadow-[0_0_35px_rgba(168,85,247,0.45)] ring-1 ring-purple-400 dark:ring-purple-400' 
                  : 'border border-slate-200 dark:border-purple-500/30 hover:border-purple-400 dark:hover:border-purple-400/60 shadow-md hover:shadow-xl dark:shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-500/50 flex items-center justify-center text-purple-700 dark:text-purple-300 shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Data Visualization</h3>
                  <p className="text-[11px] text-purple-700 dark:text-purple-300 font-semibold">Dashboards & Analytics</p>
                </div>
              </div>

              <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-3">
                Measurable workforce metrics and comprehensive placement telemetry.
              </p>

              {/* Data Dashboard Mockup */}
              <div className="bg-slate-100/90 dark:bg-[#070b18] rounded-xl border border-purple-200 dark:border-purple-500/40 p-2.5 shadow-inner">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 text-[9px]">
                  <span className="text-purple-800 dark:text-purple-300 font-bold">Placement Telemetry</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-mono font-bold">95% Success</span>
                </div>
                
                <div className="mt-2 flex items-end justify-between gap-1 h-12 pt-2 px-1">
                  {[35, 55, 45, 75, 60, 92, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div 
                        style={{ height: `${h}%` }} 
                        className="w-full bg-gradient-to-t from-purple-500 via-indigo-500 to-cyan-400 rounded-t"
                      ></div>
                      <span className="text-[7px] text-slate-500">Q{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Ticker */}
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-center">
            <span className="font-display text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-purple-300 dark:to-pink-400 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
              TRUSTED WORKFORCE EXCELLENCE • MINDFUL AI STRATEGY FOR ENTERPRISES
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
