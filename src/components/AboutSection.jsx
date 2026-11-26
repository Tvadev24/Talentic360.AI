import React from 'react';
import { 
  BrainCircuit, 
  Award, 
  Target, 
  UserCheck, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { siteData } from '../data/content';

// Interactive Animated Neural Network Canvas matching talentic360ai.in
function NeuralNetworkCanvas() {
  const nodes = [
    { id: 0, x: 20, y: 30 },
    { id: 1, x: 35, y: 18 },
    { id: 2, x: 65, y: 22 },
    { id: 3, x: 80, y: 35 },
    { id: 4, x: 25, y: 65 },
    { id: 5, x: 50, y: 50 },
    { id: 6, x: 75, y: 68 },
    { id: 7, x: 40, y: 82 },
    { id: 8, x: 60, y: 85 },
    { id: 9, x: 15, y: 50 },
    { id: 10, x: 85, y: 55 },
    { id: 11, x: 50, y: 20 },
    { id: 12, x: 30, y: 45 },
    { id: 13, x: 70, y: 48 },
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [0, 4], [4, 7], [7, 8], [8, 6], [6, 3],
    [1, 5], [2, 5], [5, 7], [5, 8], [4, 5], [6, 5], [0, 9], [9, 4],
    [3, 10], [10, 6], [1, 11], [11, 2], [12, 5], [13, 5], [12, 0], [13, 3]
  ];

  return (
    <div className="relative w-full h-[320px] sm:h-[360px] bg-slate-900/80 dark:bg-slate-950/90 rounded-2xl overflow-hidden border border-slate-700/60 dark:border-cyan-500/30 flex items-center justify-center shadow-inner">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-slate-900/60 to-purple-950/40 pointer-events-none"></div>

      <svg className="w-full h-full absolute inset-0 pointer-events-none">
        <defs>
          <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {connections.map(([fromIdx, toIdx], i) => (
          <line
            key={`conn-${i}`}
            x1={`${nodes[fromIdx].x}%`}
            y1={`${nodes[fromIdx].y}%`}
            x2={`${nodes[toIdx].x}%`}
            y2={`${nodes[toIdx].y}%`}
            stroke="url(#neuralGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            className="opacity-70 animate-pulse"
            style={{ animationDuration: `${2.5 + (i % 3)}s`, animationDelay: `${(i * 0.15) % 2}s` }}
          />
        ))}

        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="6"
              className="fill-cyan-400/20 stroke-cyan-400"
              strokeWidth="1.5"
            />
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="2.5"
              className="fill-cyan-300 animate-ping"
              style={{ animationDuration: '3s', animationDelay: `${node.id * 0.2}s` }}
            />
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="3"
              className="fill-white"
            />
          </g>
        ))}
      </svg>

      {/* Center glowing core and rotating dashed boundary */}
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-cyan-400/40 border-dashed animate-spin [animation-duration:18s] flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-lg opacity-60 animate-pulse"></div>
        </div>
        <div className="absolute flex flex-col items-center justify-center">
          <Sparkles className="w-6 h-6 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="text-[10px] font-mono font-bold text-white tracking-widest mt-1">AI 360°</span>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection({ onExplorePrograms }) {
  const iconMap = {
    BrainCircuit,
    Award,
    Target,
    UserCheck,
    Cpu
  };

  return (
    <section id="about" className="relative py-10 sm:py-14 bg-transparent border-b border-indigo-200/80 dark:border-purple-500/30 transition-colors duration-200">
      {/* Navigation Anchor for 'Who we are' */}
      <div id="who-we-are" className="absolute -top-24 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] bg-clip-text text-transparent">TALENTIC 360.AI LLP</span>
            </h2>
            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {siteData.about.summary}
            </p>
          </div>

          {/* Unique Positioning Box (Matching screenshot media_1795520732716_deae6744.jpg) */}
          <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 mb-14 overflow-hidden bg-white/90 dark:bg-gradient-to-br dark:from-[#0d1326]/95 dark:via-[#090d1c]/95 dark:to-[#050711]/98 border border-slate-200/90 dark:border-cyan-500/30 shadow-lg dark:shadow-[0_0_40px_rgba(0,0,0,0.7)] backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Unique Positioning Text */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-cyan-100 dark:to-purple-200">
                  {siteData.about.positioning.headline}
                </h3>
                
                <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  {siteData.about.positioning.paragraph1}
                </p>

                <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  {siteData.about.positioning.paragraph2}
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  {['MNCs & Corporates', 'Mindful Strategy', 'Large Manufacturers', 'Proven Impact'].map((tag, idx) => (
                    <span
                      key={idx}
                      className="group relative overflow-hidden px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/30 text-slate-800 dark:text-slate-200 flex items-center gap-2 shadow-sm cursor-pointer select-none transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:bg-gradient-to-r hover:from-[#2c60ea] hover:via-[#783cec] hover:to-[#ef4444] hover:text-white hover:border-transparent hover:shadow-[0_8px_22px_rgba(120,60,236,0.38)] dark:hover:from-cyan-500/25 dark:hover:via-purple-600/30 dark:hover:to-pink-500/25 dark:hover:border-cyan-400 dark:hover:text-white dark:hover:shadow-[0_0_22px_rgba(0,240,255,0.42)]"
                    >
                      {/* Shimmer sweep on hover */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 w-8 -translate-x-12 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[240%] transition-transform duration-700 ease-out"
                      />
                      <CheckCircle className="relative z-10 w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 group-hover:text-white dark:group-hover:text-cyan-300 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                      <span className="relative z-10">{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Neural Network Processing AI Model Canvas */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <NeuralNetworkCanvas />
                <div className="text-center mt-3">
                  <p className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-mono font-bold tracking-wider">
                    Neural Network Processing AI Model
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* 4 Pillars Grid (Mindful Strategy, Market Leadership, Proven Results, Expert Team) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.about.pillars.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon] || Cpu;

              const iconColors = {
                cyan: 'text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/70 border-cyan-300 dark:border-cyan-500/40',
                purple: 'text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/70 border-purple-300 dark:border-purple-500/40',
                pink: 'text-pink-700 dark:text-pink-300 bg-pink-100 dark:bg-pink-950/70 border-pink-300 dark:border-pink-500/40',
                blue: 'text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-950/70 border-blue-300 dark:border-blue-500/40',
              };

              const borderHovers = {
                cyan: 'hover:border-cyan-400 dark:hover:border-cyan-400 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]',
                purple: 'hover:border-purple-400 dark:hover:border-purple-400 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]',
                pink: 'hover:border-pink-400 dark:hover:border-pink-400 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]',
                blue: 'hover:border-blue-400 dark:hover:border-blue-400 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]',
              };

              return (
                <div
                  key={pillar.id || idx}
                  className={`group relative rounded-2xl p-7 bg-white dark:bg-[#0a0e20]/80 border border-slate-200 dark:border-slate-800 transition-all duration-300 ${borderHovers[pillar.color] || borderHovers.cyan} backdrop-blur-md flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${iconColors[pillar.color] || iconColors.cyan}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

      </div>
    </section>
  );
}
