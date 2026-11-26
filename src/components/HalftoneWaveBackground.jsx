import React, { useRef, useEffect } from 'react';

/**
 * HalftoneWaveBackground
 * -------------------------------------------------------------
 * Smooth gradient backdrop with flowing 3D halftone dot waves
 * positioned in the Bottom-Left and Top-Right corners, leaving
 * a clean, plain/blank space in the center for content clarity.
 * Styled for both Light Mode (soft rose-lavender-cyan) and
 * Dark Mode (deep plum-indigo-navy).
 */
export default function HalftoneWaveBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: 0.5,
      y: 0.5,
      targetX: 0.5,
      targetY: 0.5
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX / (width || 1);
      mouse.targetY = e.clientY / (height || 1);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    const isDark = () => {
      if (theme) return theme === 'dark';
      return document.documentElement.classList.contains('dark');
    };

    let time = 0;

    const drawCornerWave = ({
      cols,
      rows,
      corner,
      dark,
      parallaxX,
      parallaxY
    }) => {
      const maxRadius = width < 768 ? 5.6 : 8.4;

      for (let i = 0; i <= cols; i++) {
        const u = i / cols;
        for (let j = 0; j <= rows; j++) {
          const v = j / rows;

          let baseX;
          let baseY;
          let waveX;
          let waveY;
          let intensity;

          if (corner === 'bottom-left') {
            // Sweeps from bottom-left outward toward middle-left & bottom-center
            baseX = (-0.06 + u * 0.68) * width;
            baseY = (0.44 + v * 0.66) * height;

            // Bigger, clearly visible undulating wave motion
            const phase = u * 4.2 + v * 2.8 + time * 1.15;
            waveX = Math.sin(phase) * (width * 0.038) + Math.cos(v * 3.5 + time * 0.75) * (width * 0.020);
            waveY =
              Math.sin(u * 4.8 + time * 0.95) * (height * 0.072) +
              Math.cos(v * 3.2 - time * 0.8) * (height * 0.040);

            // Distance from bottom-left corner (0, 1) -> tapers cleanly to 0 before center
            const distFromCorner = Math.hypot(u * 1.15, (1 - v) * 1.15);
            const waveRidge = 0.80 + 0.20 * Math.sin(u * 5.0 + v * 4.0 + time * 0.9);
            intensity = Math.max(0, 1 - distFromCorner * 0.92) * waveRidge;
          } else {
            // Top-right corner: sweeps from top-right outward toward top-center & middle-right
            baseX = (0.38 + u * 0.68) * width;
            baseY = (-0.08 + v * 0.64) * height;

            const phase = u * 4.0 - v * 2.9 + time * 1.1;
            waveX = Math.sin(phase) * (width * 0.036) + Math.cos(v * 3.4 - time * 0.75) * (width * 0.020);
            waveY =
              Math.cos(u * 4.6 + time * 0.95) * (height * 0.070) +
              Math.sin(v * 3.1 + time * 0.8) * (height * 0.038);

            // Distance from top-right corner (1, 0) -> tapers cleanly to 0 before center
            const distFromCorner = Math.hypot((1 - u) * 1.15, v * 1.15);
            const waveRidge = 0.80 + 0.20 * Math.cos(u * 5.0 - v * 4.0 + time * 0.9);
            intensity = Math.max(0, 1 - distFromCorner * 0.92) * waveRidge;
          }

          if (intensity <= 0.03) continue;

          const x = baseX + waveX + parallaxX * (corner === 'bottom-left' ? 16 : -16);
          const y = baseY + waveY + parallaxY * (corner === 'bottom-left' ? 16 : -16);

          const radius = Math.pow(intensity, 1.25) * maxRadius;
          if (radius < 0.45) continue;

          const alpha = dark
            ? Math.min(0.68, intensity * 0.72)
            : Math.min(0.86, intensity * 0.90);

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          if (dark) {
            ctx.fillStyle =
              corner === 'bottom-left'
                ? `rgba(244, 180, 225, ${alpha})`
                : `rgba(165, 243, 252, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          }
          ctx.fill();
        }
      }
    };

    const render = () => {
      time += 0.006;

      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;
      const parallaxX = mouse.x - 0.5;
      const parallaxY = mouse.y - 0.5;

      const dark = isDark();

      // Smooth full-screen gradient matching reference palette & site theme
      const bgGrad = ctx.createLinearGradient(0, 0, width, height * 0.85);
      if (dark) {
        bgGrad.addColorStop(0, '#1d0b1a');   // Deep crimson-rose plum (left)
        bgGrad.addColorStop(0.45, '#0d102a'); // Deep royal indigo (center)
        bgGrad.addColorStop(1, '#061a2e');    // Deep cyber cyan-navy (right)
      } else {
        bgGrad.addColorStop(0, '#ffd4da');    // Soft luminous coral-pink (left)
        bgGrad.addColorStop(0.35, '#dfd4fe'); // Soft lavender mist (left-center)
        bgGrad.addColorStop(0.68, '#cbe2ff'); // Soft periwinkle sky (center-right)
        bgGrad.addColorStop(1, '#a8e6ff');    // Radiant ice-cyan (right)
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const cols = width < 768 ? 26 : 38;
      const rows = width < 768 ? 18 : 26;

      // Bottom-left halftone dot wave
      drawCornerWave({
        cols,
        rows,
        corner: 'bottom-left',
        dark,
        parallaxX,
        parallaxY
      });

      // Top-right halftone dot wave
      drawCornerWave({
        cols,
        rows,
        corner: 'top-right',
        dark,
        parallaxX,
        parallaxY
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-opacity duration-500"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

