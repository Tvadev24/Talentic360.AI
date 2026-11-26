import React, { useRef, useEffect } from 'react';

/**
 * HalftoneWaveBackground
 * -------------------------------------------------------------
 * Smooth, luminous 3D halftone dot-matrix wave background:
 * - Light Mode: Soft coral-peach -> lavender -> sky-cyan gradient with
 *   sweeping 3D white halftone dot-matrix wave ribbons (bottom-left & top-right).
 * - Dark Mode: Deep cyber space navy/violet gradient with luminous cyan,
 *   purple, and soft rose halftone dot-matrix wave ribbons.
 * - Gentle 60fps wave motion + subtle mouse parallax for depth without
 *   interfering with foreground text readability.
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
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
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

    /**
     * Renders a sweeping 3D halftone dot-matrix wave surface.
     * Each dot's radius & opacity scales smoothly with its 3D wave height
     * and distance from the corner, matching the reference halftone aesthetic.
     */
    const drawHalftoneRibbon = (options) => {
      const {
        originX,
        originY,
        dirX,
        dirY,
        rows,
        cols,
        spacingX,
        spacingY,
        phaseOffset,
        dark,
        cornerSide // 'bottom-left' | 'top-right'
      } = options;

      for (let r = 0; r < rows; r++) {
        const rowNorm = r / (rows - 1); // 0 near outer edge, 1 toward center
        for (let c = 0; c < cols; c++) {
          const colNorm = c / (cols - 1);

          // Base grid coordinates rotated/skewed along the ribbon
          const u = (colNorm - 0.5) * cols * spacingX;
          const v = rowNorm * rows * spacingY;

          // Undulating 3D wave displacement
          const wave1 = Math.sin(colNorm * 4.5 + rowNorm * 2.2 + time * 0.75 + phaseOffset);
          const wave2 = Math.cos(colNorm * 2.8 - rowNorm * 3.1 + time * 0.55 + phaseOffset);
          const elevation = (wave1 * 0.65 + wave2 * 0.35);

          // Taper wave amplitude as dots approach the center of screen
          const amplitude = (1 - rowNorm * 0.65) * Math.min(width, height) * 0.08;

          const px = originX + dirX * v + u * 0.85 + dirY * elevation * amplitude * 0.35;
          const py = originY + dirY * v - u * 0.28 + elevation * amplitude;

          // Skip off-screen dots for performance
          if (px < -20 || px > width + 20 || py < -20 || py > height + 20) continue;

          // Dot radius: large & bold near the corner, tapering to tiny pinpoints toward center
          const taper = Math.pow(1 - rowNorm, 1.45);
          const crestBoost = 0.75 + 0.4 * ((elevation + 1) * 0.5);
          const baseMaxRadius = Math.max(4.5, Math.min(width, height) * 0.0085);
          const radius = Math.max(0.55, baseMaxRadius * taper * crestBoost);

          // Opacity fades gracefully toward center so foreground text stays crystal clear
          const alpha = dark
            ? (0.12 + 0.42 * taper) * (0.75 + 0.25 * crestBoost)
            : (0.18 + 0.62 * taper) * (0.8 + 0.2 * crestBoost);

          if (dark) {
            if (cornerSide === 'bottom-left') {
              ctx.fillStyle = `rgba(196, 181, 253, ${alpha.toFixed(3)})`; // soft violet-white
            } else {
              ctx.fillStyle = `rgba(103, 232, 249, ${alpha.toFixed(3)})`; // soft cyan-white
            }
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
          }

          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const render = () => {
      time += 0.014;

      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;
      const parallaxX = ((mouse.x - width * 0.5) / (width * 0.5)) * 18;
      const parallaxY = ((mouse.y - height * 0.5) / (height * 0.5)) * 14;

      const dark = isDark();

      if (dark) {
        // Dark Mode: Deep Talentic360 Cyber Space Gradient
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, '#070617');
        bgGrad.addColorStop(0.5, '#090b22');
        bgGrad.addColorStop(1, '#040a1a');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        // Subtle brand ambient glows (Bottom-left purple/rose, Top-right cyan/blue)
        const blGlow = ctx.createRadialGradient(
          width * 0.12,
          height * 0.88,
          20,
          width * 0.12,
          height * 0.88,
          width * 0.55
        );
        blGlow.addColorStop(0, 'rgba(168, 85, 247, 0.22)');
        blGlow.addColorStop(0.5, 'rgba(239, 68, 68, 0.08)');
        blGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = blGlow;
        ctx.fillRect(0, 0, width, height);

        const trGlow = ctx.createRadialGradient(
          width * 0.88,
          height * 0.12,
          20,
          width * 0.88,
          height * 0.12,
          width * 0.55
        );
        trGlow.addColorStop(0, 'rgba(0, 240, 255, 0.18)');
        trGlow.addColorStop(0.5, 'rgba(44, 96, 234, 0.10)');
        trGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = trGlow;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Light Mode: Exact Pastel Coral-Pink -> Lavender -> Sky Cyan Gradient
        const bgGrad = ctx.createLinearGradient(0, height * 0.2, width, height * 0.8);
        bgGrad.addColorStop(0, '#ffd4d8');    // Soft coral peach-pink
        bgGrad.addColorStop(0.28, '#e3d5fb'); // Soft pastel lavender
        bgGrad.addColorStop(0.62, '#c8dfff'); // Periwinkle sky mist
        bgGrad.addColorStop(1, '#a9e2ff');    // Luminous airy sky cyan
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);
      }

      const isMobile = width < 768;
      const cols = isMobile ? 28 : 44;
      const rows = isMobile ? 22 : 30;
      const spacingX = width / (cols * 0.65);
      const spacingY = height / (rows * 1.45);

      // 1. Bottom-Left Sweeping Halftone Wave Ribbon
      drawHalftoneRibbon({
        originX: width * 0.18 + parallaxX * 0.8,
        originY: height * 1.02 + parallaxY * 0.8,
        dirX: 0.42,
        dirY: -0.92,
        rows,
        cols,
        spacingX,
        spacingY,
        phaseOffset: 0,
        dark,
        cornerSide: 'bottom-left'
      });

      // 2. Top-Right Sweeping Halftone Wave Ribbon
      drawHalftoneRibbon({
        originX: width * 0.84 - parallaxX * 0.8,
        originY: -height * 0.04 - parallaxY * 0.8,
        dirX: -0.45,
        dirY: 0.9,
        rows,
        cols,
        spacingX,
        spacingY,
        phaseOffset: Math.PI * 0.85,
        dark,
        cornerSide: 'top-right'
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
