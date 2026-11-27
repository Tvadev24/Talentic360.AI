import React, { useRef, useEffect } from 'react';

/**
 * GeometricCircuitBackground
 * -------------------------------------------------------------
 * Clean architectural backdrop with 45°-rotated rounded-square
 * geometric circuit traces (solid & dashed), diamond/circle nodes,
 * and smoothly moving signal pulses in the Top-Left and Bottom-Right
 * corners, leaving the center clear for content.
 * Tailored for both Light Mode (silver-ice to warm rose-champagne)
 * and Dark Mode (deep midnight-navy to plum-slate).
 */
export default function GeometricCircuitBackground({ theme }) {
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

    // Pre-generate deterministic architectural rounded-square traces for a corner cluster
    const buildTraces = (seedOffset) => {
      const items = [];
      for (let i = 0; i < 16; i++) {
        const s = (i * 37 + seedOffset * 13) % 100;
        const size = 70 + (s % 5) * 38;
        const x = ((i * 53 + seedOffset * 19) % 340) - 90;
        const y = ((i * 41 + seedOffset * 23) % 320) - 90;
        const dashed = i % 3 === 0;
        const speed = 0.25 + (i % 4) * 0.12;
        const phase = (i * 0.65) % (Math.PI * 2);
        const radius = 16 + (i % 3) * 6;
        const openRatio = i % 2 === 0 ? 0.68 : 0.82;
        items.push({ x, y, size, radius, dashed, speed, phase, openRatio });
      }
      return items;
    };

    const topLeftTraces = buildTraces(1);
    const bottomRightTraces = buildTraces(7);

    // Helper: draw a rounded rectangle path and optionally a moving pulse dot on its perimeter
    const drawRoundedTrace = (tr, dark, time, pulseColor, lineColor, nodeColor) => {
      const { x, y, size, radius, dashed, speed, phase } = tr;
      const r = Math.min(radius, size / 2);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + size - r, y);
      ctx.quadraticCurveTo(x + size, y, x + size, y + r);
      ctx.lineTo(x + size, y + size - r);
      ctx.quadraticCurveTo(x + size, y + size, x + size - r, y + size);
      ctx.lineTo(x + r, y + size);
      ctx.quadraticCurveTo(x, y + size, x, y + size - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = dashed ? 0.85 : 1.05;
      if (dashed) {
        ctx.setLineDash([4, 4]);
        ctx.lineDashOffset = -time * 18 * speed;
      } else {
        ctx.setLineDash([]);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw static anchor diamond & circle nodes at corners/midpoints
      const drawDiamond = (dx, dy, dSize) => {
        ctx.save();
        ctx.translate(dx, dy);
        ctx.fillStyle = nodeColor;
        ctx.fillRect(-dSize / 2, -dSize / 2, dSize, dSize);
        ctx.restore();
      };

      const drawDot = (dx, dy, dr) => {
        ctx.beginPath();
        ctx.arc(dx, dy, dr, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      };

      drawDiamond(x + size / 2, y, 4.5);
      drawDot(x + size, y + size / 2, 2.3);
      if (!dashed) {
        drawDiamond(x, y + size * 0.72, 3.8);
      }

      // Moving signal pulse gliding around the rounded-square perimeter
      const t = ((time * speed * 0.28 + phase / (Math.PI * 2)) % 1 + 1) % 1;
      const edge = Math.floor(t * 4);
      const frac = t * 4 - edge;
      let px = x;
      let py = y;
      if (edge === 0) {
        px = x + frac * size;
        py = y;
      } else if (edge === 1) {
        px = x + size;
        py = y + frac * size;
      } else if (edge === 2) {
        px = x + (1 - frac) * size;
        py = y + size;
      } else {
        px = x;
        py = y + (1 - frac) * size;
      }

      ctx.beginPath();
      ctx.arc(px, py, 3.8, 0, Math.PI * 2);
      ctx.fillStyle = dark ? 'rgba(103, 232, 249, 0.28)' : 'rgba(99, 102, 241, 0.22)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(px, py, 1.9, 0, Math.PI * 2);
      ctx.fillStyle = pulseColor;
      ctx.fill();

      ctx.restore();
    };

    let time = 0;

    const render = () => {
      time += 0.012;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const dark = isDark();

      // 1. Clean Architectural Gradient Backdrop
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      if (dark) {
        bgGrad.addColorStop(0, '#070b18');
        bgGrad.addColorStop(0.5, '#0b1126');
        bgGrad.addColorStop(1, '#140e28');
      } else {
        bgGrad.addColorStop(0, '#dde4ee');
        bgGrad.addColorStop(0.55, '#d5dde9');
        bgGrad.addColorStop(1, '#e7d5d8');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle corner ambient glow
      const brGlow = ctx.createRadialGradient(
        width * 0.92,
        height * 0.68,
        0,
        width * 0.92,
        height * 0.68,
        width * 0.45
      );
      brGlow.addColorStop(0, dark ? 'rgba(120, 60, 236, 0.14)' : 'rgba(244, 214, 208, 0.55)');
      brGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = brGlow;
      ctx.fillRect(0, 0, width, height);

      const lineColor = dark ? 'rgba(148, 185, 255, 0.19)' : 'rgba(71, 85, 105, 0.24)';
      const nodeColor = dark ? 'rgba(165, 200, 255, 0.48)' : 'rgba(71, 85, 105, 0.52)';
      const pulseColor = dark ? 'rgba(103, 232, 249, 0.9)' : 'rgba(79, 70, 229, 0.78)';

      const parallaxX = (mouse.x - 0.5) * 26;
      const parallaxY = (mouse.y - 0.5) * 26;
      const driftX = Math.sin(time * 0.45) * 8;
      const driftY = Math.cos(time * 0.4) * 8;
      const scale = width < 768 ? 0.72 : 1;

      // 2. Top-Left 45°-Rotated Circuit Cluster
      ctx.save();
      ctx.translate(width * 0.12 + parallaxX + driftX, height * 0.08 + parallaxY + driftY);
      ctx.rotate(Math.PI / 4);
      ctx.scale(scale, scale);
      topLeftTraces.forEach((tr) =>
        drawRoundedTrace(tr, dark, time, pulseColor, lineColor, nodeColor)
      );
      ctx.restore();

      // 3. Bottom-Right 45°-Rotated Circuit Cluster
      ctx.save();
      ctx.translate(width * 0.88 - parallaxX - driftX, height * 0.84 - parallaxY - driftY);
      ctx.rotate(Math.PI / 4);
      ctx.scale(scale, scale);
      ctx.translate(-220, -220);
      bottomRightTraces.forEach((tr) =>
        drawRoundedTrace(tr, dark, time, pulseColor, lineColor, nodeColor)
      );
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
