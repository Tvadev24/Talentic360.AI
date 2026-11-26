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

/* Custom Brand-Matched SVG Icons matching the 4 uploaded icon designs */
function MindfulStrategyIcon({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Circuit nodes above central gear */}
      <circle cx="19" cy="6" r="2" />
      <circle cx="24" cy="4.5" r="2" />
      <circle cx="29" cy="6" r="2" />
      <path d="M19 8v4l2 2M24 6.5V14M29 8v4l-2 2" />
      {/* Central gear */}
      <circle cx="24" cy="22" r="4.5" />
      <path d="M24 14.5v2M24 27.5v2M16.5 22h2M29.5 22h2M18.7 16.7l1.4 1.4M27.9 25.9l1.4 1.4M29.3 16.7l-1.4 1.4M20.1 25.9l-1.4 1.4" />
      {/* Small side gears */}
      <circle cx="11.5" cy="14" r="3" />
      <path d="M11.5 9.5v1.2M11.5 17.3v1.2M7 14h1.2M14.8 14H16" />
      <circle cx="36.5" cy="14" r="3" />
      <path d="M36.5 9.5v1.2M36.5 17.3v1.2M32 14h1.2M39.8 14H41" />
      {/* Cradling hands */}
      <path d="M6 34V23a2 2 0 0 1 4 0v7l4 4v5H6v-5z" />
      <path d="M10 30l4.5 2.5a2 2 0 0 1 1 1.7V41H6v-3" />
      <path d="M42 34V23a2 2 0 0 0-4 0v7l-4 4v5h8v-5z" />
      <path d="M38 30l-4.5 2.5a2 2 0 0 0-1 1.7V41h9.5v-3" />
    </svg>
  );
}

function MarketLeadershipIcon({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Presentation board */}
      <rect x="19" y="5" width="24" height="19" rx="2" />
      {/* Pie chart inside board */}
      <circle cx="31" cy="13" r="4.5" />
      <path d="M31 8.5V13l3.2 3.2" />
      <path d="M24 20h14" />
      {/* Presenter */}
      <circle cx="11.5" cy="10" r="4" />
      <path d="M5 24v-4.5a4.5 4.5 0 0 1 4.5-4.5h4l4 3.5 3-2.5" />
      {/* Audience (3 learners) */}
      <circle cx="10.5" cy="31" r="3.5" />
      <path d="M5 42.5v-3a5.5 5.5 0 0 1 11 0v3H5z" />
      <circle cx="24" cy="31" r="3.5" />
      <path d="M18.5 42.5v-3a5.5 5.5 0 0 1 11 0v3h-11z" />
      <circle cx="37.5" cy="31" r="3.5" />
      <path d="M32 42.5v-3a5.5 5.5 0 0 1 11 0v3H32z" />
    </svg>
  );
}

function ProvenResultsIcon({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Back document */}
      <path d="M16 9h17a3 3 0 0 1 3 3v12" />
      {/* Front document */}
      <path d="M24 41H11a3 3 0 0 1-3-3V12l7-7h12a3 3 0 0 1 3 3v14" />
      <path d="M8 12h7V5" />
      {/* Document text lines */}
      <path d="M14 20h10M14 26h10M14 32h7" />
      {/* Shield with checkmark */}
      <path d="M33 25c4.5 0 8 1.5 8 5.5 0 5.5-3.5 9.5-8 11.5-4.5-2-8-6-8-11.5 0-4 3.5-5.5 8-5.5z" />
      <path d="M29.5 33.5l2.5 2.5 4.5-4.5" />
    </svg>
  );
}

function ExpertTeamIcon({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Center leader */}
      <circle cx="24" cy="11" r="4.5" />
      <path d="M17.5 24v-2.5a6.5 6.5 0 0 1 13 0V24" />
      {/* Left team member */}
      <circle cx="11.5" cy="18" r="3.5" />
      <path d="M5.5 31v-2.5a5.5 5.5 0 0 1 10-3.2" />
      <path d="M5.5 31h7" />
      {/* Right team member */}
      <circle cx="36.5" cy="18" r="3.5" />
      <path d="M42.5 31v-2.5a5.5 5.5 0 0 0-10-3.2" />
      <path d="M35.5 31h7" />
      {/* Star in foreground */}
      <path d="M24 24l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6-4.3-4.2 6-.9L24 24z" />
    </svg>
  );
}

export default function AboutSection({ onExplorePrograms }) {
  const pillarIconMap = {
    'mindful-strategy': MindfulStrategyIcon,
    'market-leadership': MarketLeadershipIcon,
    'proven-results': ProvenResultsIcon,
    'expert-team': ExpertTeamIcon,
    BrainCircuit: MindfulStrategyIcon,
    Award: MarketLeadershipIcon,
    Target: ProvenResultsIcon,
    UserCheck: ExpertTeamIcon
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

          {/* Unique Positioning Box fitted to 1024x424 panoramic image with crystal-clear presenter & right side */}
          <div className="relative rounded-3xl p-6 sm:p-8 lg:pl-9 lg:pr-6 lg:py-8 mb-14 overflow-hidden bg-white dark:bg-[#070b1a] border border-slate-200/90 dark:border-cyan-500/30 shadow-lg dark:shadow-[0_0_40px_rgba(0,0,0,0.7)] lg:aspect-[1024/424] flex items-center">
            {/* Full-box background training image */}
            <img
              src="/assets/unique-positioning-bg.png"
              alt="TALENTIC 360.AI Corporate Training & Workforce Transformation"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            />

            {/* Mobile Full Scrim (< lg) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-white/88 dark:bg-[#070b1a]/88 lg:hidden"
            />

            {/* Desktop Light Mode Directional Fade (Ends at 47% so presenter & right side are 100% clear) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden lg:block dark:lg:hidden"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 36%, rgba(255,255,255,0) 47%)'
              }}
            />

            {/* Desktop Dark Mode Directional Fade (Ends at 47% so presenter & right side are 100% clear) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden dark:lg:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,11,26,0.97) 0%, rgba(7,11,26,0.92) 36%, rgba(7,11,26,0) 47%)'
              }}
            />
            
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Unique Positioning Text (Compact left 5/12 portion, clear of the presenter) */}
              <div className="lg:col-span-5 space-y-3.5 text-left">
                <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-extrabold font-display text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-cyan-100 dark:to-purple-200 leading-tight">
                  {siteData.about.positioning.headline}
                </h3>
                
                <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-[15px] leading-relaxed font-medium">
                  {siteData.about.positioning.paragraph1}
                </p>

                <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-[15px] leading-relaxed font-medium">
                  {siteData.about.positioning.paragraph2}
                </p>

                <div className="pt-1 flex flex-wrap gap-2">
                  {['MNCs & Corporates', 'Mindful Strategy', 'Large Manufacturers', 'Proven Impact'].map((tag, idx) => (
                    <span key={idx} className="group relative inline-flex cursor-pointer select-none">
                      <span className="relative overflow-hidden px-3 py-1.5 rounded-xl text-[11px] font-semibold bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/35 text-slate-800 dark:text-slate-200 flex items-center gap-1.5 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-purple-400/80 group-hover:shadow-[0_6px_18px_rgba(120,60,236,0.28)] dark:group-hover:border-cyan-400/80 dark:group-hover:shadow-[0_0_18px_rgba(0,240,255,0.32)]">
                        {/* Smooth opacity cross-fade gradient layer */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] dark:from-cyan-500/30 dark:via-purple-600/35 dark:to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
                        />
                        {/* Gentle shimmer sweep */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-y-0 left-0 w-10 -translate-x-14 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-[240%] transition-transform duration-700 ease-out"
                        />
                        <CheckCircle className="relative z-10 w-3 h-3 text-cyan-600 dark:text-cyan-400 group-hover:text-white dark:group-hover:text-cyan-300 group-hover:rotate-12 transition-all duration-300 ease-out" />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">{tag}</span>
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Open space so presenter & screen stay 100% unobstructed */}
              <div className="hidden lg:block lg:col-span-7 min-h-[280px]" aria-hidden="true"></div>

            </div>
          </div>

          {/* 4 Pillars Grid (Mindful Strategy, Market Leadership, Proven Results, Expert Team) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.about.pillars.map((pillar, idx) => {
              const Icon = pillarIconMap[pillar.id] || pillarIconMap[pillar.icon] || Cpu;

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
                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${iconColors[pillar.color] || iconColors.cyan}`}>
                      <Icon className="w-8 h-8" />
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
