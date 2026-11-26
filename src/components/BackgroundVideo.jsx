import React, { useRef, useEffect } from 'react';

export default function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure native video autoplays and continuously loops without stopping
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultPlaybackRate = 0.65;
      videoRef.current.playbackRate = 0.65;
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.warn('AutoPlay check:', err);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 select-none pointer-events-none bg-black">
      {/* 
        Native HTML5 Background Video:
        - ZERO "Prateek Goyal" watermark/titles
        - ZERO Replay buttons (↺)
        - ZERO Pause / Play buttons (||)
        - Infinite, seamless native hardware-accelerated looping
        - ZERO white haze or overlays
      */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 0.65;
        }}
        className="w-full h-full object-cover scale-105 pointer-events-none select-none border-0"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
