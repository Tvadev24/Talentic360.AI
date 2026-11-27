import React, { useState } from 'react';
import {
  MapPin,
  Building2,
  Navigation,
  Phone,
  ChevronRight,
  Lock,
  Heart,
  Building
} from 'lucide-react';

// Custom clean SVG Social Icons matching reference image
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.333 1.369-.053.224-.174.271-.401.165-1.495-.695-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const SnapchatIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12.006 1.5c-3.743 0-6.19 2.658-6.19 6.22 0 .895.19 1.78.36 2.253-.13.06-.38.16-.62.24-.49.16-.92.31-1.03.77-.07.28-.01.55.17.79.23.31.62.45 1.16.45.1 0 .21-.01.32-.02-.12.44-.33 1.1-.33 1.83 0 .86.32 1.65.92 2.27.02.02.04.05.07.07-.11.19-.24.37-.39.54-.7.8-1.63 1.15-2.58 1.42-.42.12-.64.33-.67.64-.04.38.25.68.79.82.72.19 1.54.27 2.37.27.42 0 .84-.02 1.25-.07.41.67 1.05 1.25 1.87 1.67.66.34 1.45.54 2.34.6.09.01.19.01.28.01.41 0 .81-.04 1.2-.12.87-.18 1.72-.54 2.45-1.04.4.1.81.16 1.23.16.83 0 1.65-.08 2.37-.27.54-.14.83-.44.79-.82-.03-.31-.25-.52-.67-.64-.95-.27-1.88-.62-2.58-1.42-.15-.17-.28-.35-.39-.54.03-.02.05-.05.07-.07.6-.62.92-1.41.92-2.27 0-.73-.21-1.39-.33-1.83.11.01.22.02.32.02.54 0 .93-.14 1.16-.45.18-.24.24-.51.17-.79-.11-.46-.54-.61-1.03-.77-.24-.08-.49-.18-.62-.24.17-.47.36-1.36.36-2.253 0-3.562-2.447-6.22-6.19-6.22z" />
  </svg>
);

export default function Footer({ activePage = 'home', onOpenStaffing, onOpenIndustries, onNavigateHome }) {
  const [cookieDismissed, setCookieDismissed] = useState(false);

  const handleNavClick = (e, href, label) => {
    e.preventDefault();
    if (label === 'Staffing' && onOpenStaffing) {
      onOpenStaffing();
      return;
    }
    if (label === 'Industries' && onOpenIndustries) {
      onOpenIndustries();
      return;
    }

    const targetId = href.replace('#', '');
    if (activePage !== 'home' && onNavigateHome) {
      onNavigateHome(targetId);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white dark:bg-[#04060d] border-t border-slate-200 dark:border-purple-500/20 text-slate-700 dark:text-slate-300 text-sm overflow-hidden transition-colors duration-200">

      {/* Background ambient lighting in brand blue and purple */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      {/* =========================================================================
          MAIN FOOTER 4-COLUMN CONTENT AREA (MATCHING REFERENCE FOOTER MOCKUP)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* COLUMN 1: Organization & Foundation Info (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-5">

            {/* Logo & Website Title (Identical to Website Header) */}
            <a href="#hero" className="flex items-center gap-3 group inline-flex">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2c60ea] via-[#5945e7] to-[#783cec] p-[1.5px] shadow-[0_0_15px_rgba(44,96,234,0.4)] shrink-0 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-50 dark:bg-[#080d1d] rounded-[10px] flex items-center justify-center p-1 overflow-hidden transition-colors">
                  <img
                    src="/assets/talentic-logo.png"
                    alt="TALENTIC 360.AI Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(44,96,234,0.7)]"
                  />
                </div>
              </div>

              <span className="font-display font-black tracking-tight text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#2c60ea] via-[#5945e7] to-[#783cec] drop-shadow-[0_0_15px_rgba(71,78,231,0.5)]">
                TALENTIC 360.AI
              </span>
            </a>

            {/* Mission Statement Quote */}
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Talentic360.ai, Our Mission, Their Future, Dedicated to empowering individuals through education, skill development, healthcare, and crisis aid across generations.
            </p>

            {/* Registration & Credentials Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#090e21]/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2.5 text-xs">

              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800/80">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Reg No:</span>
                <span className="px-2.5 py-0.5 rounded-md font-mono font-bold text-xs bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-300 border border-red-200 dark:border-red-500/30 tracking-wider shadow-sm dark:shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                  AAETG6500DE20231
                </span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800/80">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Parent Group:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  Girish Group of Companies
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Founder:</span>
                <div className="text-right">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    Mr. Girish Dattatray Sodmise
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* COLUMN 2: Our Offices (lg:col-span-4) - Red, Blue & Lavender Theme */}
          <div className="lg:col-span-4 space-y-4">

            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5" />
              </span>
              <h4 className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
                OUR OFFICES
              </h4>
            </div>

            {/* Inquiry Office Card (Red & Lavender Theme) */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#090e21]/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 hover:border-red-300 dark:hover:border-red-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-red-600 dark:text-red-400">
                    <Building className="w-4 h-4" />
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    Inquiry Office
                  </span>
                </div>

              </div>

              <div className="pt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <span>Office No. 303, Pride Purple Square, Kalewadi Phata, Wakad, Pune 411057</span>
              </div>

              <div className="pt-0.5 text-[11px] text-slate-500 font-medium">
                <span>Wakad, Pune, Maharashtra 411057</span>
              </div>
            </div>

            {/* Corporate Office Card (Royal Blue & Lavender Theme) */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#090e21]/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 hover:border-blue-300 dark:hover:border-blue-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">
                    <Building2 className="w-4 h-4" />
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    Corporate Office
                  </span>
                </div>

              </div>

              <div className="pt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <span>Office No. 314, Pride Purple Square, Kalewadi Phata, Wakad, Pune 411057</span>
              </div>

              <div className="pt-0.5 text-[11px] text-slate-500 font-medium">
                <span>Wakad, Pune, Maharashtra 411057</span>
              </div>
            </div>

          </div>

          {/* COLUMN 3: Quick Links (lg:col-span-2) - Purple & Lavender Theme */}
          <div className="lg:col-span-2 space-y-4">

            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Navigation className="w-3.5 h-3.5" />
              </span>
              <h4 className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                QUICK LINKS
              </h4>
            </div>

            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Who we are', href: '#who-we-are' },
                { label: 'Solutions', href: '#solutions' },
                { label: 'Staffing', href: '#staffing' },
                { label: 'Industries', href: '#industries' },
                { label: 'Career', href: '#career' },
                { label: 'Insights', href: '#insights' },
                { label: 'Contact us', href: '#contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.label)}
                    className="text-xs text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-purple-500 dark:text-purple-400 group-hover:translate-x-0.5 group-hover:text-red-500 transition-all shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* COLUMN 4: Get in Touch & Support (lg:col-span-3) - Blue, Red & Lavender Theme */}
          <div className="lg:col-span-3 space-y-5">

            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                GET IN TOUCH
              </h4>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect with us on WhatsApp, Instagram, or our official communication channels:
            </p>

            {/* Social Media Circular Buttons Grid */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://www.instagram.com/talentic360.ai?knvt=MXYybXo2cXZzMDlpZw=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-purple-600 hover:border-purple-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-purple-300 shadow-sm flex items-center justify-center transition-all hover:scale-110"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://wa.me/917083509072"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-emerald-400 shadow-sm flex items-center justify-center transition-all hover:scale-110"
              >
                <WhatsAppIcon />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-red-400 shadow-sm flex items-center justify-center transition-all hover:scale-110"
              >
                <YouTubeIcon />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-blue-400 shadow-sm flex items-center justify-center transition-all hover:scale-110 font-bold text-xs"
              >
                𝕏
              </a>

              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-rose-400 shadow-sm flex items-center justify-center transition-all hover:scale-110"
              >
                <PinterestIcon />
              </a>

              <a
                href="https://snapchat.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Snapchat"
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-purple-500 hover:border-purple-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-purple-300 shadow-sm flex items-center justify-center transition-all hover:scale-110"
              >
                <SnapchatIcon />
              </a>
            </div>

            {/* Impressive Support Talentic 360.AI Button in Red, Blue, Purple & Lavender */}
            <a
              href="https://wa.me/917083509072"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2c60ea] via-[#783cec] to-[#ef4444] hover:from-[#1d4ed8] hover:via-[#6d28d9] hover:to-[#dc2626] shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              <span className="text-base group-hover:scale-110 transition-transform">🎧</span>
              <span>Support Talentic 360.AI</span>
            </a>

          </div>

        </div>

      </div>

      {/* =========================================================================
          DARK NAVY COPYRIGHT BAR WITH PADLOCK (PURPLE & LAVENDER ACCENTS)
         ========================================================================= */}
      <div className="bg-[#03081a] border-t border-slate-800 py-6 px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo & Brand text on bottom left */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-[#070b18] border border-purple-500/40 p-1 flex items-center justify-center">
              <img
                src="/assets/talentic-logo.png"
                alt="TALENTIC 360.AI"
                className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(44,96,234,0.6)]"
              />
            </div>
            <span className="font-display font-black text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2c60ea] via-[#5945e7] to-[#783cec]">
              TALENTIC 360.AI
            </span>
          </div>

          {/* Legal / Privacy policy disclaimer text in the center */}
          <div className="text-center md:text-left flex-1 max-w-3xl space-y-1">
            <p className="text-[11px] text-slate-400 leading-relaxed">
              By submitting your details or personal data to us in connection with your registration of interest in this, you are deemed to have read and agreed to the terms of our Privacy Policy and consented to the collection, use, and disclosure of your data by us and our affiliates, following our Privacy Policy. Please visit <a href="https://talentic360ai.in/privacy-policy" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 hover:underline">https://talentic360ai.in/privacy-policy</a> for a copy of our Privacy Policy. If you wish to withdraw your consent in the future, contact us at dataprotection <a href="mailto:dataprotection@talentic360ai.in" className="text-purple-400 hover:text-purple-300 hover:underline">dataprotection@talentic360ai.in</a> to let us know.
            </p>
            <div className="text-xs text-slate-300 font-semibold pt-1">
              © 2026 Copyright <span className="text-purple-400 font-bold">Talentic360.AI LLP</span>
            </div>
          </div>

          {/* Secure Padlock Circle Icon on Right (Purple & Lavender Glow) */}
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full border-2 border-purple-400 dark:border-purple-400/80 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.35)] bg-purple-950/30">
              <Lock className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          COOKIE CONSENT BANNER AT BOTTOM (DISMISSIBLE)
         ========================================================================= */}
      {!cookieDismissed && (
        <div className="bg-[#020510] border-t border-slate-800/80 px-4 py-3 relative z-20 text-slate-400 text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-base shrink-0">🍪</span>
              <p className="text-[11px] leading-tight">
                When you visit or interact with our sites, services or tools, we or our authorized service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.
              </p>
            </div>
            <button
              onClick={() => setCookieDismissed(true)}
              className="text-xs text-purple-400 hover:text-purple-300 font-bold shrink-0 underline decoration-purple-400/50 hover:decoration-purple-400"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

    </footer>
  );
}
