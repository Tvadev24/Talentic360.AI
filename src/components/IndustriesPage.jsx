import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Code2,
  Megaphone,
  Coins,
  HeartPulse,
  Cpu,
  Radio,
  Wrench,
  Users,
  Scale,
  TrendingUp,
  Laptop,
  GraduationCap,
  ShieldCheck,
  Car,
  PhoneCall,
  Truck,
  Server,
  Smartphone,
  Headphones,
  Landmark,
  Crown,
  Target,
  UserCog,
  Layers,
  Factory,
  Zap,
  Cog,
  FileText,
  Package,
  Building2,
  Hammer,
  Globe,
  BarChart3,
  Utensils,
  Wifi,
  Search,
  CheckCircle2,
  Sparkles,
  Mail
} from 'lucide-react';
import CvUploadModal from './CvUploadModal';

const INDUSTRY_CARDS = [
  { name: 'Consulting', icon: Briefcase, color: 'from-blue-500 to-indigo-600' },
  { name: 'Development', icon: Code2, color: 'from-purple-500 to-indigo-600' },
  { name: 'Branding', icon: Megaphone, color: 'from-pink-500 to-rose-600' },
  { name: 'Capital', icon: Coins, color: 'from-amber-500 to-orange-600' },
  { name: 'Health Care', icon: HeartPulse, color: 'from-rose-500 to-red-600' },
  { name: 'IT', icon: Cpu, color: 'from-cyan-500 to-blue-600' },
  { name: 'Tele-Communication', icon: Radio, color: 'from-indigo-500 to-violet-600' },
  { name: 'Engineering / Manufacturing', icon: Wrench, color: 'from-slate-600 to-slate-800' },
  { name: 'Human Resource', icon: Users, color: 'from-emerald-500 to-teal-600' },
  { name: 'Legal', icon: Scale, color: 'from-amber-600 to-yellow-700' },
  { name: 'Marketing and Advertisement', icon: TrendingUp, color: 'from-fuchsia-500 to-purple-600' },
  { name: 'Technology', icon: Laptop, color: 'from-sky-500 to-blue-600' },
  { name: 'Education and E-Learning', icon: GraduationCap, color: 'from-indigo-500 to-blue-600' },
  { name: 'Insurance', icon: ShieldCheck, color: 'from-teal-500 to-emerald-600' },
  { name: 'Automotive', icon: Car, color: 'from-red-500 to-orange-600' },
  { name: 'Telecommunication', icon: PhoneCall, color: 'from-violet-500 to-purple-600' },
  { name: 'Procurement and Supply Chain', icon: Truck, color: 'from-blue-600 to-cyan-600' },
  { name: 'IT Infrastructure', icon: Server, color: 'from-slate-700 to-indigo-700' },
  { name: 'Mobile Tech', icon: Smartphone, color: 'from-cyan-500 to-teal-600' },
  { name: 'ITeS', icon: Headphones, color: 'from-purple-500 to-pink-600' },
  { name: 'Fintech', icon: Landmark, color: 'from-emerald-600 to-cyan-600' },
  { name: 'Top Management', icon: Crown, color: 'from-amber-500 to-rose-500' },
  { name: 'Strategic Management', icon: Target, color: 'from-indigo-600 to-purple-700' },
  { name: 'Executive Management', icon: UserCog, color: 'from-blue-600 to-indigo-700' },
  { name: 'Supportive Management', icon: Layers, color: 'from-teal-500 to-blue-600' },
  { name: 'Textile Industries', icon: Factory, color: 'from-rose-500 to-pink-600' },
  { name: 'Electric & Power Industries', icon: Zap, color: 'from-yellow-500 to-amber-600' },
  { name: 'Auto-Mobile Industries', icon: Cog, color: 'from-blue-500 to-slate-700' },
  { name: 'Paper Industries', icon: FileText, color: 'from-emerald-500 to-green-600' },
  { name: 'Plastic Industries', icon: Package, color: 'from-sky-500 to-indigo-600' },
  { name: 'Real Estate / Construction', icon: Building2, color: 'from-orange-500 to-red-600' },
  { name: 'Manufacturing', icon: Factory, color: 'from-indigo-500 to-slate-700' },
  { name: 'Heavy Equipment / Engineering', icon: Hammer, color: 'from-amber-600 to-stone-700' },
  { name: 'BPO / ITES', icon: Globe, color: 'from-cyan-600 to-blue-700' },
  { name: 'KPO Industry', icon: BarChart3, color: 'from-violet-600 to-indigo-600' },
  { name: 'Legal Industry', icon: Scale, color: 'from-slate-600 to-amber-700' },
  { name: 'Food and Beverage Industry', icon: Utensils, color: 'from-emerald-500 to-lime-600' },
  { name: 'Telecom Industry', icon: Wifi, color: 'from-blue-500 to-purple-600' },
  { name: 'LPO Recruitment Services', icon: Users, color: 'from-pink-500 to-indigo-600' },
  { name: 'Information Technology (I.T.)', icon: Cpu, color: 'from-blue-600 to-cyan-500' },
  { name: 'Finance', icon: Coins, color: 'from-emerald-600 to-teal-700' }
];

const ROLE_CARDS = [
  { title: 'Director', icon: Crown, tag: 'Executive Leadership' },
  { title: 'Executive Director', icon: Building2, tag: 'Board & Strategy' },
  { title: 'Associate Director', icon: Target, tag: 'Practice Head' },
  { title: 'President Engg.', icon: Cpu, tag: 'Engineering Head' },
  { title: 'Vice President', icon: TrendingUp, tag: 'Business Unit Lead' },
  { title: 'Associate Vice President', icon: Briefcase, tag: 'Operations & Growth' },
  { title: 'Website Development', icon: Code2, tag: 'Full Stack & UI' },
  { title: 'Consultancy Services', icon: Users, tag: 'Advisory & Talent' },
  { title: 'Associate General Manager / Project Leader', icon: Layers, tag: 'Program Delivery' },
  { title: 'Senior Manager / Senior Team Leader', icon: UserCog, tag: 'Team Operations' },
  { title: 'Manager / Team Leader', icon: ShieldCheck, tag: 'Mid-Senior Lead' },
  { title: 'Dy. Manager / Senior Developer', icon: Laptop, tag: 'Tech & Delivery' },
  { title: 'Associate Manager / Developer', icon: Wrench, tag: 'Core Engineering' },
  { title: 'Senior Executive or Engineer / Analyst', icon: BarChart3, tag: 'Specialist' },
  { title: 'Executive or Engineer / Analyst', icon: Zap, tag: 'Associate' },
  { title: 'Junior Executive Engineer / Analyst', icon: GraduationCap, tag: 'Early Career' }
];

export default function IndustriesPage({ onBackHome }) {
  const [filterText, setFilterText] = useState('');
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [cvModalPreset, setCvModalPreset] = useState({ industry: '', role: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const openModal = (industry = '', role = '') => {
    setCvModalPreset({ industry, role });
    setCvModalOpen(true);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 4500);
  };

  const filteredIndustries = INDUSTRY_CARDS.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase().trim())
  );

  return (
    <div className="pt-20 sm:pt-24 pb-16 relative z-10">
      {/* =========================================================================
          1. HERO BANNER ("Industries | Home | Industries")
         ========================================================================= */}
      <section className="relative overflow-hidden border-b border-indigo-200/70 dark:border-purple-500/30">
        {/* Clear Overhead Office Photo */}
        <img
          src="/assets/industries-hero-bg.jpg"
          alt="Industries Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Balanced Dark Overlay so Photo & Centered Title Stay Crystal Clear */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/55 to-slate-950/70"
        />

        {/* Subtle Floating Glow Orbs */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#2c60ea]/20 blur-3xl animate-pulse pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#783cec]/20 blur-3xl animate-pulse pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-950/50 hover:bg-slate-950/75 text-white border border-white/25 backdrop-blur-md transition-all cursor-pointer mb-6 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] mb-3">
              Industries
            </h1>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950/45 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold text-white shadow-sm">
              <button
                type="button"
                onClick={onBackHome}
                className="hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="text-slate-300">|</span>
              <span className="text-cyan-300">Industries</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SEARCH AND CONNECT WITH THE RIGHT CANDIDATES (41 INDUSTRY CARDS)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-3">
              Search and{' '}
              <span className="bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] bg-clip-text text-transparent">
                connect
              </span>{' '}
              with the right candidates
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore specialized white-collar talent across 41+ industry verticals. Click any sector below to connect with vetted professionals or submit your profile directly.
            </p>
          </div>

          {/* Interactive Filter Search Box */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 dark:text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Filter industries..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/90 dark:bg-[#0b1126]/90 border border-slate-300 dark:border-purple-500/40 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 shadow-sm"
            />
          </div>
        </div>

        {/* 5-Column Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredIndustries.map((ind) => {
            const Icon = ind.icon;
            return (
              <button
                key={ind.name}
                type="button"
                onClick={() => openModal(ind.name, '')}
                className="group relative overflow-hidden rounded-2xl p-5 bg-white/95 dark:bg-[#0b1126]/90 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-cyan-400/70 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_26px_rgba(34,211,238,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[132px] cursor-pointer"
              >
                {/* Top animated accent line */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />

                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${ind.color} text-white flex items-center justify-center shadow-md mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <span className="font-display font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                  {ind.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. FIND THE ONE THAT'S RIGHT FOR YOU (16 ROLE CARDS)
         ========================================================================= */}
      <section className="border-t border-indigo-200/70 dark:border-purple-500/25 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-slate-900 dark:text-white">
              Find The{' '}
              <span className="bg-gradient-to-r from-[#2c60ea] to-[#783cec] bg-clip-text text-transparent">
                One
              </span>{' '}
              That&apos;s Right For{' '}
              <span className="bg-gradient-to-r from-[#783cec] to-[#ef4444] bg-clip-text text-transparent">
                You
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROLE_CARDS.map((item) => {
              const RoleIcon = item.icon;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => openModal('', item.title)}
                  className="group relative rounded-2xl p-5 bg-white/95 dark:bg-[#0b1126]/90 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-cyan-400/70 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_24px_rgba(120,60,236,0.22)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4 text-left cursor-pointer min-h-[112px]"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 border border-indigo-100 dark:border-slate-700/80 flex items-center justify-center text-indigo-600 dark:text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                      <RoleIcon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-500 dark:text-cyan-400 block mb-0.5">
                        {item.tag}
                      </span>
                      <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2c60ea] to-[#783cec] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SUBSCRIBE OUR NEWSLETTER BANNER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0d1b3e] via-[#172554] to-[#1e1b4b] p-8 sm:p-12 shadow-xl border border-indigo-500/30">
          {/* Decorative Wave Curve on Right (Matching Reference) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 400 160"
            className="absolute right-0 bottom-0 w-72 sm:w-96 h-auto text-white/10 fill-current pointer-events-none"
          >
            <path d="M400,160 L0,160 C80,140 140,40 230,75 C310,105 350,30 400,10 Z" />
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Talent Network Updates</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white mb-2">
                Subscribe Our Newsletter
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Advertise your roles to top-tier professionals and stay connected with our curated white-collar talent database.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto"
            >
              <div className="relative flex-1 sm:w-72">
                <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email...."
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-md"
                />
              </div>
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0 flex items-center justify-center gap-2"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <span>Subscribe Now</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CV Upload / Connect Modal */}
      <CvUploadModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        initialIndustry={cvModalPreset.industry}
        initialRole={cvModalPreset.role}
      />
    </div>
  );
}

