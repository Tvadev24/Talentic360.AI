import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  Target, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  X,
  Briefcase,
  ShieldCheck,
  Building2,
  ChevronRight
} from 'lucide-react';

export default function StaffingSection({ onKnowMore }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConnectWithTeam = () => {
    setModalOpen(false);
    if (onKnowMore) {
      onKnowMore();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="staffing" 
      className="relative py-12 sm:py-16 bg-transparent transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enclosing Illuminated Section Box (Matching Reference Image 5) */}
        <div className="section-box section-box-purple p-6 sm:p-10 lg:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* =========================================================================
                LEFT SIDE: THE PICTURE (Conference Room & White Collar Staffing Team)
               ========================================================================= */}
            <div className="lg:col-span-5 xl:col-span-5 h-full flex flex-col justify-center">
              <div className="group relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/20 dark:shadow-[0_0_40px_rgba(168,85,247,0.25)] border border-slate-200 dark:border-purple-500/40 bg-slate-100 dark:bg-slate-900 transition-all duration-500 hover:scale-[1.01]">
                
                {/* Main Picture */}
                <img 
                  src="/assets/white-collar-1.jpg" 
                  alt="White Collar Staffing Solutions - Building Stronger Teams with the Right Talent" 
                  className="w-full h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                
                {/* Subtle glass gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none"></div>

                {/* Top Badge: Pre-vetted Talent */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Active Corporate Placements</span>
                </div>

                {/* Bottom Floating Glass Card on Picture */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/15 text-white shadow-xl flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 font-bold block">
                      Talentic 360.AI Staffing
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">
                      Executive & Professional Recruitment
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-gradient-to-br from-[#2c60ea] to-[#783cec] text-white shrink-0 shadow-md">
                    <UserCheck className="w-4 h-4" />
                  </div>
                </div>

              </div>

              {/* Supporting Verified Thumbnails Strip */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
                  <img 
                    src="/assets/white-collar-2.jpg" 
                    alt="Trusted Executive Partnership Handshake" 
                    className="w-10 h-10 rounded-lg object-cover shrink-0 border border-slate-200 dark:border-purple-500/30"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block truncate">
                      Executive Hiring
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                      Vetted Specialists
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
                  <img 
                    src="/assets/white-collar-3.jpg" 
                    alt="Boardroom Strategy Meeting" 
                    className="w-10 h-10 rounded-lg object-cover shrink-0 border border-slate-200 dark:border-purple-500/30"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block truncate">
                      Leadership Teams
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                      Enterprise Fit
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* =========================================================================
                RIGHT SIDE: THE CONTENT (Title, Text, Motto, Pillars & Know More Button)
               ========================================================================= */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-5 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Specialized Recruitment & Talent Acquisition</span>
              </div>

              {/* Main Heading: White Collar Staffing Solutions */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-tight">
                White Collar{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444]">
                  Staffing Solutions
                </span>
              </h2>

              {/* Subheading: Building Stronger Teams with the Right Talent */}
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-800 dark:text-slate-200">
                Building Stronger Teams with the Right Talent
              </h3>

              {/* Paragraph 1 */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                At <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2c60ea] via-[#5945e7] to-[#783cec]">TALENTIC 360.AI</strong>, we provide comprehensive White Collar Staffing Solutions designed to help businesses find, recruit, and retain skilled professionals. We connect organizations with talented individuals who bring the right expertise, experience, and potential to drive business growth.
              </p>

              {/* Paragraph 2 */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                From entry-level professionals to experienced specialists and senior executives, our recruitment solutions cover diverse industries and functional domains. We focus on understanding your business needs and delivering the right talent to build efficient, productive, and high-performing teams.
              </p>

              {/* Punchline Motto Banner */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-red-500/10 dark:from-blue-950/40 dark:via-purple-950/40 dark:to-red-950/30 border border-purple-500/30 dark:border-purple-500/40 shadow-sm">
                <span className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight block">
                  The Right Talent. The Right Fit. The Right Future.
                </span>
              </div>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">The Right Talent</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Pre-vetted specialists & senior domain executives</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">The Right Fit</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Cultural, technical & enterprise alignment</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">The Right Future</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Sustainable retention & strategic workforce growth</p>
                  </div>
                </div>
              </div>

              {/* Button of 'Know More' under the content */}
              <div className="pt-2 flex sm:justify-start justify-center">
                <button
                  onClick={handleOpenModal}
                  className="group px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        {/* End of section-box */}
        </div>

      </div>

      {/* =========================================================================
          DETAILED 'KNOW MORE' STAFFING MODAL
         ========================================================================= */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={handleCloseModal}></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#090e24] border border-slate-200 dark:border-purple-500/40 shadow-2xl dark:shadow-[0_0_50px_rgba(120,60,236,0.3)] p-6 sm:p-8 overflow-hidden z-10 max-h-[90vh] overflow-y-auto">
            
            {/* Top Brand Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444]"></div>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-10 mb-6 text-left">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 inline-block mb-2">
                Executive & Professional Recruitment
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                White Collar Staffing Solutions
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1.5">
                Strategic workforce acquisition engineered for MNCs, Corporates, and fast-growing organizations.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-left">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>Executive & Leadership Hiring</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Targeted headhunting for C-suite, directors, and critical strategic leaders who drive immediate organizational growth.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-1.5 text-purple-600 dark:text-purple-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Domain Specialists & Lateral Hiring</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Sourcing niche talent across AI engineering, data telemetry, finance, healthcare, and advanced manufacturing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-1.5 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>End-to-End RPO & Pipeline</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Full lifecycle recruitment process management from initial screening to onboarding and culture adaptation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-1.5 text-rose-600 dark:text-rose-400 font-bold text-sm">
                  <Users className="w-4 h-4" />
                  <span>Retention & Performance Alignment</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Mindful evaluation methodology ensuring 95%+ first-year retention and cultural synergy.
                </p>
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="mb-6 p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-500/30 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-2">
                Industries We Cover
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'IT & Software Engineering',
                  'Banking & Financial Services',
                  'Advanced Manufacturing',
                  'Healthcare & Biotechnology',
                  'Supply Chain & Operations',
                  'Corporate Governance & Legal'
                ].map((ind, i) => (
                  <span key={i} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-indigo-500" />
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={handleCloseModal}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleConnectWithTeam}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect with Staffing Team</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}

