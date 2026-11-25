import React, { useRef, useEffect } from 'react';

export default function PartnersSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.warn('Partners video autoplay check:', err);
      });
    }
  }, []);

  return (
    <section 
      id="partners"
      className="relative py-20 sm:py-24 bg-transparent transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Section Heading (Matching Image: Bold title with italic serif 'Partners') */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-3">
            Supported by Leading Global & Institutional{' '}
            <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400 tracking-normal">
              Partners
            </span>
          </h2>

          {/* Subtitle (Matching Image) */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 font-medium">
            Collaborating with national banks, corporate CSR foundations, and UN bodies to drive long-term grassroots impact.
          </p>

          {/* Partners Video Showcase Card (Matching Image: Clean elevated white card visible in both Light & Dark modes) */}
          <div className="relative max-w-6xl mx-auto rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 bg-white dark:bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_0_35px_rgba(255,255,255,0.08)] border border-slate-200/90 dark:border-slate-300/40 overflow-hidden transition-all duration-300 hover:shadow-xl">
            
            {/* Subtle edge fade gradient mask for smooth entrance/exit */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

            {/* Native HTML5 Continuous Video Element */}
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl bg-white">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-auto object-contain max-h-[120px] sm:max-h-[150px] md:max-h-[175px] pointer-events-none select-none block"
              >
                <source src="/assets/partners-banner.mp4" type="video/mp4" />
                <source src="/assets/partners-banner.mov" type="video/quicktime" />
              </video>
            </div>

          </div>

      </div>
    </section>
  );
}

