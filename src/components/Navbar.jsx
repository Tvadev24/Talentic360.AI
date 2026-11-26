import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  Globe, 
  ChevronDown, 
  ArrowRight,
  Sun,
  Moon,
  Home,
  Users,
  Lightbulb,
  UserCheck,
  Building2,
  Briefcase,
  TrendingUp,
  Mail,
  ChevronRight
} from 'lucide-react';

export default function Navbar({ onOpenContact, theme, onToggleTheme, activePage = 'home', onOpenStaffing, onNavigateHome }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const [activeTab, setActiveTab] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  const languages = ['English', 'हिन्दी (Hindi)', 'Español', 'Français', 'Deutsch', '日本語'];

  // Navigation tabs requested by user
  const navTabs = [
    { label: 'Home', href: '#hero', icon: Home },
    { label: 'Who we are', href: '#who-we-are', icon: Users },
    { label: 'Solutions', href: '#solutions', icon: Lightbulb },
    { label: 'Staffing', href: '#staffing', icon: UserCheck },
    { label: 'Industries', href: '#industries', icon: Building2 },
    { label: 'Career', href: '#career', icon: Briefcase },
    { label: 'Insights', href: '#insights', icon: TrendingUp },
    { label: 'Contact us', href: '#contact', icon: Mail },
  ];

  // Smooth scroll / page navigation handler
  const handleTabClick = (e, href, label) => {
    e.preventDefault();
    setActiveTab(label);
    setMobileMenuOpen(false);

    if (label === 'Staffing' && onOpenStaffing) {
      onOpenStaffing();
      return;
    }

    if (activePage !== 'home' && onNavigateHome) {
      const targetId = label === 'Contact us' ? 'contact' : href.replace('#', '');
      onNavigateHome(targetId);
      return;
    }

    if (label === 'Contact us' && onOpenContact) {
      onOpenContact();
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Detect scroll to handle transparency over video vs blurred glass when scrolled
  useEffect(() => {
    if (activePage === 'staffing') {
      setActiveTab('Staffing');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      if (activePage === 'staffing') {
        setActiveTab('Staffing');
        return;
      }

      const scrollPosition = window.scrollY + 200;
      const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'who-we-are', label: 'Who we are' },
        { id: 'about', label: 'Who we are' },
        { id: 'staffing', label: 'Staffing' },
        { id: 'solutions', label: 'Solutions' },
        { id: 'programs', label: 'Solutions' },
        { id: 'industries', label: 'Industries' },
        { id: 'whyus', label: 'Industries' },
        { id: 'why-us', label: 'Industries' },
        { id: 'insights', label: 'Insights' },
        { id: 'contact', label: 'Contact us' }
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(sections[i].label);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || activePage === 'staffing'
          ? 'bg-white/90 dark:bg-[#04060d]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-purple-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 gap-2">
          
          {/* Left Brand Area: Logo + Title + Small Controlled Distance + Desktop Navigation Tabs */}
          <div className="flex items-center min-w-0">
            
            {/* Brand Logo & Website Title */}
            <a 
              href="#hero" 
              onClick={(e) => handleTabClick(e, '#hero', 'Home')}
              className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0">
                <img 
                  src="/assets/talentic-logo.png" 
                  alt="TALENTIC 360.AI Logo" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <span className="font-display font-black tracking-tight text-base sm:text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#2c60ea] via-[#5945e7] to-[#783cec] shrink-0 whitespace-nowrap">
                TALENTIC 360.AI
              </span>
            </a>

            {/* Controlled Distance (Ek Dum Thoda Sa Distance) between Title & Navigation Tabs */}
            <div 
              className={`hidden lg:flex items-center ml-3 sm:ml-4 xl:ml-6 gap-0.5 xl:gap-1 transition-all duration-300 ${
                isScrolled || activePage === 'staffing'
                  ? 'bg-slate-100/90 dark:bg-[#090e21]/80 border border-slate-200/90 dark:border-slate-800 px-2.5 xl:px-3 py-1 rounded-full shadow-inner backdrop-blur-md'
                  : 'bg-slate-950/60 border border-white/25 px-2.5 xl:px-3 py-1 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md'
              }`}
            >
              {navTabs.map((tab) => {
                const isActive = activeTab === tab.label;
                const solidNav = isScrolled || activePage === 'staffing';
                return (
                  <a
                    key={tab.label}
                    href={tab.href}
                    onClick={(e) => handleTabClick(e, tab.href, tab.label)}
                    className={`relative px-2 xl:px-2.5 py-1 rounded-full text-xs xl:text-[13px] font-semibold tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer select-none ${
                      isActive
                        ? solidNav
                          ? 'bg-white dark:bg-gradient-to-r dark:from-purple-900/70 dark:to-blue-900/70 text-[#2c60ea] dark:text-purple-200 shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.3)] dark:border dark:border-purple-500/40 font-bold'
                          : 'bg-white/20 text-white border border-white/30 shadow-sm font-bold'
                        : solidNav
                          ? 'text-slate-600 hover:text-slate-900 hover:bg-white/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                          : 'text-white/95 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-[#2c60ea] to-[#ef4444] rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </div>

          </div>

          {/* =========================================================================
              RIGHT ACTIONS: THEME TOGGLE, LANGUAGE & GET STARTED CTA
             ========================================================================= */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            
            {/* Dark / Light Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all duration-300 ${
                isScrolled || activePage === 'staffing'
                  ? 'bg-slate-100 hover:bg-slate-200 border border-slate-300 text-amber-600 shadow-sm dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:border-slate-700/60 dark:text-amber-400 dark:shadow-[0_0_15px_rgba(251,191,36,0.25)]'
                  : 'bg-slate-950/60 hover:bg-slate-900/80 text-amber-300 border border-white/25 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.35)]'
              }`}
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 hover:rotate-45 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              ) : (
                <Moon className={`w-4 h-4 sm:w-5 sm:h-5 hover:-rotate-12 transition-transform duration-300 filter ${
                  isScrolled ? 'text-indigo-600 drop-shadow-[0_0_6px_rgba(79,70,229,0.5)]' : 'text-purple-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]'
                }`} />
              )}
            </button>

            {/* Language Selector */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl text-xs font-medium transition-all shadow-sm ${
                  isScrolled || activePage === 'staffing'
                    ? 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/60 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-300'
                    : 'text-white bg-slate-950/60 hover:bg-slate-900/80 border border-white/25 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.35)] hover:text-purple-200'
                }`}
                title="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                <span className="hidden md:inline">{selectedLang}</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white dark:bg-[#0b0f1d] border border-slate-200 dark:border-purple-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-1.5 z-50 backdrop-blur-xl">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang.split(' ')[0]);
                        setLangDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-500/20 hover:text-purple-700 dark:hover:text-purple-200 transition-colors"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Impressive Animated Get Started Button with Pointer Hand & Shimmer */}
            <a
              href="#contact"
              onClick={onOpenContact}
              className="relative group rounded-xl p-[1.5px] font-semibold text-xs transition-all duration-300 hover:scale-105 active:scale-95 animate-cta-glow hidden sm:inline-block"
            >
              <div className="relative overflow-hidden rounded-[11px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444]"></div>
                <div className="relative m-[1.5px] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[10px] bg-[#070b16] transition-colors group-hover:bg-[#0b1124] flex items-center gap-1.5 sm:gap-2 overflow-hidden">
                  {/* Smooth diagonal shimmer sweep */}
                  <span className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-btn-shimmer"></span>
                  <span className="relative z-10 text-white tracking-wide font-bold">Get Started</span>
                  <ArrowRight className="relative z-10 w-3.5 h-3.5 text-purple-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Animated Pointer Hand Icon (Matching Reference Style) */}
              <span
                className="pointer-events-none absolute -bottom-2.5 -right-2 z-20 animate-pointer-tap drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]"
                aria-hidden="true"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9.5 3.5C9.5 2.67 10.17 2 11 2C11.83 2 12.5 2.67 12.5 3.5V10.2C12.88 9.95 13.34 9.8 13.85 9.8C14.72 9.8 15.46 10.32 15.8 11.07C16.16 10.87 16.57 10.75 17.02 10.75C18.02 10.75 18.88 11.38 19.2 12.27C19.53 12.1 19.9 12 20.3 12C21.52 12 22.5 12.98 22.5 14.2V16.6C22.5 19.86 19.86 22.5 16.6 22.5H13.4C11.2 22.5 9.15 21.45 7.86 19.67L4.7 15.32C4.16 14.57 4.35 13.52 5.12 13.02C5.83 12.56 6.78 12.72 7.3 13.39L9.5 16.1V3.5Z"
                    fill="#f59e0b"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            {/* Mobile / Tablet Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all focus:outline-none ${
                isScrolled || activePage === 'staffing'
                  ? 'bg-slate-100 hover:bg-slate-200 border border-slate-300 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                  : 'bg-slate-950/60 hover:bg-slate-900/80 border border-white/25 backdrop-blur-md text-white shadow-[0_4px_15px_rgba(0,0,0,0.35)]'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-red-500" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

          </div>

        </div>
      </div>

      {/* =========================================================================
          RESPONSIVE MOBILE & TABLET DRAWER MENU (8 TABS + CONTROLS)
         ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#060814]/98 border-b border-slate-200 dark:border-purple-500/30 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 animate-fadeIn">
          
          {/* Navigation Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.label;
              return (
                <a
                  key={tab.label}
                  href={tab.href}
                  onClick={(e) => handleTabClick(e, tab.href, tab.label)}
                  className={`flex items-center justify-between p-3 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/40 shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900/80 hover:text-purple-600'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isActive 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span>{tab.label}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              );
            })}
          </div>

          {/* Mobile Bottom Actions (Language + Get Started) */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-col gap-3">
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Select Language:</span>
              <div className="flex flex-wrap gap-1">
                {['English', 'हिन्दी', 'Español'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setSelectedLang(l)}
                    className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors ${
                      selectedLang.includes(l)
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white text-center bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md shadow-purple-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Get Started Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}
