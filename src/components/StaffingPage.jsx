import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  Building2,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Upload,
  Sparkles,
  X,
  Database,
  Download,
  FileText
} from 'lucide-react';
import { INDUSTRIES_DATA, FUNCTIONS_DATA } from '../data/staffingData';
import CvUploadModal from './CvUploadModal';

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export default function StaffingPage({ onBackHome }) {
  const [view, setView] = useState('industry'); // 'industry' | 'function'
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [openCards, setOpenCards] = useState({});
  const [highlightedRole, setHighlightedRole] = useState(null); // { cardKey, role }

  // CV Upload Modal & Database Viewer state
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [cvModalPreset, setCvModalPreset] = useState({ industry: '', role: '' });
  const [dbModalOpen, setDbModalOpen] = useState(false);
  const [cvRecords, setCvRecords] = useState([]);

  const searchWrapRef = useRef(null);

  const fetchCvRecords = async () => {
    try {
      const res = await fetch('/api/cv-list');
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.records)) {
          setCvRecords(data.records);
          return;
        }
      }
    } catch {
      // fallback to localStorage
    }
    try {
      const local = JSON.parse(localStorage.getItem('talentic_cv_submissions') || '[]');
      setCvRecords(Array.isArray(local) ? local : []);
    } catch {
      setCvRecords([]);
    }
  };

  useEffect(() => {
    fetchCvRecords();
  }, []);

  const openUploadModal = (industry = '', role = '') => {
    setCvModalPreset({ industry, role });
    setCvModalOpen(true);
  };

  const sortedIndustries = useMemo(() => Object.keys(INDUSTRIES_DATA).sort(), []);
  const sortedFunctions = useMemo(() => Object.keys(FUNCTIONS_DATA).sort(), []);

  // Build search index across all industries, functions, and roles
  const searchIndex = useMemo(() => {
    const items = [];
    Object.entries(INDUSTRIES_DATA).forEach(([cat, roles]) => {
      items.push({ label: cat, type: 'Industry', view: 'industry', cat });
      roles.forEach((role) =>
        items.push({ label: role, type: 'Role', view: 'industry', cat, role })
      );
    });
    Object.entries(FUNCTIONS_DATA).forEach(([cat, roles]) => {
      items.push({ label: cat, type: 'Function', view: 'function', cat });
      roles.forEach((role) =>
        items.push({ label: role, type: 'Role', view: 'function', cat, role })
      );
    });
    return items;
  }, []);

  // Unique top 12 suggestions for search query
  const suggestions = useMemo(() => {
    const term = searchQuery.toLowerCase().trim();
    if (!term) return [];
    const seen = new Set();
    const out = [];
    for (const item of searchIndex) {
      const hay = `${item.label} ${item.cat}`.toLowerCase();
      if (hay.includes(term)) {
        const key = `${item.view}|${item.cat}|${item.role || ''}`;
        if (!seen.has(key)) {
          seen.add(key);
          out.push(item);
        }
        if (out.length >= 12) break;
      }
    }
    return out;
  }, [searchQuery, searchIndex]);

  // Close suggestions dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const revealCard = (targetView, catName, roleName = null) => {
    setView(targetView);
    const cardKey = `${targetView}-${slugify(catName)}`;
    setOpenCards((prev) => ({ ...prev, [cardKey]: true }));
    if (roleName) {
      setHighlightedRole({ cardKey, role: roleName });
    } else {
      setHighlightedRole(null);
    }

    setTimeout(() => {
      const el = document.getElementById(cardKey);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleSuggestionClick = (item) => {
    setSearchQuery(item.label);
    setShowSuggestions(false);
    revealCard(item.view, item.cat, item.role || null);
  };

  const toggleCard = (cardKey) => {
    setOpenCards((prev) => ({ ...prev, [cardKey]: !prev[cardKey] }));
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const activeData = view === 'industry' ? INDUSTRIES_DATA : FUNCTIONS_DATA;
  const activeKeys = view === 'industry' ? sortedIndustries : sortedFunctions;

  const filteredKeys = useMemo(() => {
    const term = searchQuery.toLowerCase().trim();
    if (!term) return activeKeys;
    return activeKeys.filter((name) => {
      const roles = activeData[name] || [];
      const searchable = `${name} ${roles.join(' ')}`.toLowerCase();
      return searchable.includes(term);
    });
  }, [activeKeys, activeData, searchQuery]);

  return (
    <div className="pt-24 sm:pt-28 pb-16 relative z-10">
      {/* =========================================================================
          1. HERO BANNER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          {/* Top Bar: Back to Home + CV Database Viewer */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onBackHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-purple-500/30 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>

            <button
              onClick={() => {
                fetchCvRecords();
                setDbModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 dark:bg-purple-950/60 dark:hover:bg-purple-900/60 dark:text-cyan-300 dark:border-cyan-500/30 transition-all cursor-pointer"
            >
              <Database className="w-3.5 h-3.5" />
              <span>CV Database ({cvRecords.length})</span>
            </button>
          </div>

          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-purple-100 text-purple-700 border border-purple-200 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-500/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TALENTIC 360.AI / WHITE COLLAR STAFFING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-[1.02]">
              Find where your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444]">
                experience belongs.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
              Explore professional opportunities across industries and functions. Search your role, discover adjacent career paths and join our talent network for relevant current and future openings.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => openUploadModal('', '')}
                className="group px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Your CV</span>
              </button>

              <button
                onClick={() => scrollToId('directory')}
                className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-sm dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-white dark:border-cyan-500/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Roles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
      </section>

      {/* =========================================================================
          2. STICKY SEARCH & FILTER TOOLBAR
         ========================================================================= */}
      <div className="sticky top-20 z-30 bg-white/90 dark:bg-[#050814]/90 backdrop-blur-xl border-y border-slate-200/80 dark:border-purple-500/25 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-4 mb-8 sm:mb-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="w-full">
            {/* Full-Width Search Box with Autocomplete Suggestions */}
            <div ref={searchWrapRef} className="relative w-full">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 dark:text-cyan-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => {
                    if (searchQuery.trim()) setShowSuggestions(true);
                  }}
                  placeholder="Search any role, function or industry — e.g. HR, Accountant, Laravel"
                  className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-50 dark:bg-[#0c1228] border border-slate-300 dark:border-purple-500/40 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setShowSuggestions(false);
                      setHighlightedRole(null);
                    }}
                    aria-label="Clear search"
                    className="absolute right-3 p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Autocomplete Suggestions Dropdown */}
              {showSuggestions && searchQuery.trim() !== '' && (
                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white dark:bg-[#0b1024] border border-slate-200 dark:border-purple-500/40 rounded-2xl shadow-2xl max-h-80 overflow-y-auto z-40">
                  {suggestions.length > 0 ? (
                    suggestions.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSuggestionClick(item)}
                        className="w-full text-left px-4 py-3 border-b border-slate-100 dark:border-slate-800/80 last:border-0 hover:bg-purple-50 dark:hover:bg-purple-950/40 flex items-center justify-between gap-3 transition-colors cursor-pointer"
                      >
                        <div>
                          <span className="text-sm font-semibold text-slate-900 dark:text-white block">
                            {item.label}
                          </span>
                          {item.role && (
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                              {item.cat}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 shrink-0">
                          {item.type}
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3.5 flex items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <span>No exact match. You can still upload your CV.</span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-cyan-400">
                        Talent Network
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* View Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={() => setView('industry')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                view === 'industry'
                  ? 'text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Browse by Industry ({sortedIndustries.length})</span>
            </button>

            <button
              onClick={() => setView('function')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                view === 'function'
                  ? 'text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Browse by Function ({sortedFunctions.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. DIRECTORY SECTION
         ========================================================================= */}
      <main id="directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <section className="py-4">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-2">
              {view === 'industry' ? 'Browse by Industry' : 'Browse by Function'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
              {view === 'industry'
                ? 'Select a sector to explore its white-collar job families and common professional titles.'
                : 'Your function can travel across industries. Explore roles by professional discipline.'}
            </p>
          </div>

          {filteredKeys.length === 0 ? (
            <div className="text-center py-12 px-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-3">
                No categories matched "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] to-[#783cec] cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          ) : (
            (() => {
              const renderDirectoryCard = (name, instanceKey, isMarquee = false) => {
                const roles = activeData[name] || [];
                const cardKey = `${view}-${slugify(name)}`;
                const isOpen = !!openCards[cardKey];

                return (
                  <article
                    key={instanceKey}
                    id={!isMarquee ? cardKey : undefined}
                    onClick={(e) => {
                      if (!e.target.closest('button.apply-btn')) {
                        toggleCard(cardKey);
                      }
                    }}
                    className={`group rounded-2xl p-6 transition-all duration-300 cursor-pointer border backdrop-blur-md flex flex-col justify-between ${
                      isOpen
                        ? 'bg-white dark:bg-[#0d142e] border-purple-400 dark:border-cyan-400/70 shadow-xl dark:shadow-[0_0_30px_rgba(0,240,255,0.2)]'
                        : 'bg-white/95 dark:bg-[#0a0f24]/90 border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-500/60 shadow-sm hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-cyan-400">
                          {roles.length} professional titles
                        </span>
                        <span className="text-slate-400 dark:text-slate-500 group-hover:text-purple-600 dark:group-hover:text-cyan-300 transition-colors">
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                        {name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {roles.slice(0, 4).join(' · ')}
                        {roles.length > 4 ? '…' : ''}
                      </p>
                    </div>

                    {/* Expanded Roles List */}
                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex flex-wrap gap-1.5">
                          {roles.map((role) => {
                            const isHighlighted =
                              highlightedRole &&
                              highlightedRole.cardKey === cardKey &&
                              highlightedRole.role === role;

                            return (
                              <span
                                key={role}
                                className={`inline-block text-xs font-medium px-2.5 py-1 rounded-lg border transition-colors ${
                                  isHighlighted
                                    ? 'bg-red-500/15 border-red-500 text-red-700 dark:bg-red-500/25 dark:border-red-400 dark:text-white font-bold'
                                    : 'bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-900/90 dark:border-slate-700 dark:text-slate-200'
                                }`}
                              >
                                {role}
                              </span>
                            );
                          })}
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              const preselectedRole =
                                highlightedRole && highlightedRole.cardKey === cardKey
                                  ? highlightedRole.role
                                  : '';
                              openUploadModal(name, preselectedRole);
                            }}
                            className="apply-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
                          >
                            <span>Apply / Upload CV</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </article>
                );
              };

              const isSearching = searchQuery.trim() !== '';
              const hasAnyOpenCard = Object.values(openCards).some(Boolean);
              const columns = [0, 1, 2].map((colIdx) =>
                filteredKeys.filter((_, idx) => idx % 3 === colIdx)
              );

              return (
                <>
                  {/* Desktop 3-Column Opposite-Direction Infinite Marquee (Browse Mode) */}
                  {!isSearching && (
                    <div className="hidden lg:grid lg:grid-cols-3 gap-5 h-[720px] overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_7%,black_93%,transparent)]">
                      {columns.map((colItems, colIdx) => {
                        const isMiddle = colIdx === 1;
                        const durationSec = Math.max(20, colItems.length * 3.4);
                        const loopItems = [...colItems, ...colItems];
                        const colHasOpen =
                          hasAnyOpenCard &&
                          colItems.some((n) => !!openCards[`${view}-${slugify(n)}`]);

                        return (
                          <div key={colIdx} className="marquee-column overflow-hidden h-full">
                            <div
                              style={{ '--marquee-duration': `${durationSec}s` }}
                              className={`flex flex-col gap-5 ${
                                isMiddle ? 'marquee-track-down' : 'marquee-track-up'
                              } ${colHasOpen ? 'marquee-paused' : ''}`}
                            >
                              {loopItems.map((name, itemIdx) =>
                                renderDirectoryCard(
                                  name,
                                  `col-${colIdx}-${itemIdx}-${slugify(name)}`,
                                  itemIdx >= colItems.length
                                )
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Static Grid Fallback (Active Search or Mobile/Tablet) */}
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ${
                      !isSearching ? 'lg:hidden' : ''
                    }`}
                  >
                    {filteredKeys.map((name) =>
                      renderDirectoryCard(name, `${view}-${slugify(name)}`, false)
                    )}
                  </div>
                </>
              );
            })()
          )}
        </section>

        {/* =========================================================================
            4. BOTTOM CTA SECTION
           ========================================================================= */}
        <section id="career-form" className="pt-12 border-t border-slate-200/70 dark:border-slate-800/70">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-2">
                Don’t see your exact title?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Job titles evolve. Submit your CV and choose the closest industry/function; equivalent and emerging titles are welcome.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openUploadModal('', '')}
              className="shrink-0 group px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Join Talent Network</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      {/* CV Upload Modal */}
      <CvUploadModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        initialIndustry={cvModalPreset.industry}
        initialRole={cvModalPreset.role}
        onUploadSuccess={() => fetchCvRecords()}
      />

      {/* Collected CVs Database Viewer Modal */}
      {dbModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setDbModalOpen(false)}></div>

          <div className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-[#090e24] border border-slate-200 dark:border-cyan-500/40 shadow-2xl p-6 sm:p-8 z-10 max-h-[88vh] flex flex-col">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-purple-600 dark:text-cyan-400 block">
                  COLLECTED CANDIDATE RECORDS
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white">
                  CV Database ({cvRecords.length})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setDbModalOpen(false)}
                aria-label="Close database modal"
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pt-4 space-y-3">
              {cvRecords.length === 0 ? (
                <div className="text-center py-12 text-slate-500 dark:text-slate-400 text-sm">
                  No CVs uploaded yet. Click "Upload Your CV" to submit a resume.
                </div>
              ) : (
                cvRecords.map((rec) => (
                  <div
                    key={rec.id}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white text-base">
                          {rec.name}
                        </span>
                        {rec.role && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 font-semibold">
                            {rec.role}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 flex flex-wrap gap-x-4 gap-y-1">
                        <span>{rec.email}</span>
                        <span>{rec.phone}</span>
                        {rec.industry && <span>{rec.industry}</span>}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>{rec.originalFileName}</span>
                        <span>·</span>
                        <span>{new Date(rec.submittedAt).toLocaleString()}</span>
                      </div>
                    </div>

                    {rec.storedFileName && (
                      <a
                        href={`/api/cv-download?file=${encodeURIComponent(rec.storedFileName)}`}
                        className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#2c60ea] to-[#783cec] shadow hover:shadow-md transition-all"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download CV</span>
                      </a>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

