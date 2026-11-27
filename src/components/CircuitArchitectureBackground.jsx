import React, { useRef, useEffect } from 'react';

/**
 * CircuitArchitectureBackground
 * -------------------------------------------------------------
 * Moveable, interactive diagonal rounded-corner circuit & node
 * architecture matching the uploaded reference and HTML circuit
 * signal pulses. Covers Top-Left, Center, and Bottom-Right with
 * Light Mode (silver-ice + warm blush) and Dark Mode (midnight navy).
 */
export default function CircuitArchitectureBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let traces = [];

    const mouse = {
      x: 0.5,
      y: 0.5,
      targetX: 0.5,
      targetY: 0.5
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX / (window.innerWidth || 1);
      mouse.targetY = e.clientY / (window.innerHeight || 1);
    };

    // Build diagonal (45-deg) multi-segment rounded-corner circuit traces
    const buildTraces = (w, h) => {
      const items = [];
      const diag = Math.hypot(w, h);
      const count = w < 768 ? 22 : 38;

      // Distribute across Top-Left, Center, and Bottom-Right zones
      for (let i = 0; i < count; i++) {
        const zone = i % 3; // 0: top-left, 1: center, 2: bottom-right
        let originX, originY, dir;

        if (zone === 0) {
          originX = (Math.random() * 0.45 - 0.05) * w;
          originY = (Math.random() * 0.45 - 0.05) * h;
          dir = 1;
        } else if (zone === 2) {
          originX = (0.55 + Math.random() * 0.5) * w;
          originY = (0.55 + Math.random() * 0.5) * h;
          dir = -1;
        } else {
          // Center zone: lighter opacity so foreground content remains crisp
          originX = (0.25 + Math.random() * 0.5) * w;
          originY = (0.2 + Math.random() * 0.6) * h;
          dir = i % 2 === 0 ? 1 : -1;
        }

        const len1 = (0.06 + Math.random() * 0.09) * diag;
        const len2 = (0.05 + Math.random() * 0.09) * diag;
        const len3 = (0.04 + Math.random() * 0.08) * diag;

        // 45-degree orthogonal directions: (+1,+1), (+1,-1), (-1,+1), (-1,-1)
        const baseAngle = dir === 1 ? Math.PI / 4 : -3 * (Math.PI / 4);
        const turnSign = i % 2 === 0 ? 1 : -1;
        const a1 = baseAngle;
        const a2 = baseAngle + turnSign * (Math.PI / 2);
        const a3 = baseAngle;

        const p0 = { x: originX, y: originY };
        const p1 = { x: p0.x + Math.cos(a1) * len1, y: p0.y + Math.sin(a1) * len1 };
        const p2 = { x: p1.x + Math.cos(a2) * len2, y: p1.y + Math.sin(a2) * len2 };
        const p3 = { x: p2.x + Math.cos(a3) * len3, y: p2.y + Math.sin(a3) * len3 };

        items.push({
          pts: [p0, p1, p2, p3],
          dashed: i % 4 === 1,
          isCenter: zone === 1,
          isRedPulse: i % 5 === 0,
          isDiamondEnd: i % 2 === 0,
          speed: 0.12 + Math.random() * 0.16,
          offset: Math.random(),
          depth: 0.4 + Math.random() * 0.6,
          driftPhase: Math.random() * Math.PI * 2,
          hasLoop: i % 6 === 0
        });
      }
      return items;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      traces = buildTraces(width, height);
    };

    resize();
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', resize, { passive: true });

    const isDark = () => {
      if (theme) return theme === 'dark';
      return document.documentElement.classList.contains('dark');
    };

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let time = 0;

    // Helper: draw rounded-corner polyline using arcTo
    const drawRoundedPath = (pts, radius) => {
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length - 1; i++) {
        ctx.arcTo(pts[i].x, pts[i].y, pts[i + 1].x, pts[i + 1].y, radius);
      }
      ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
    };

    // Helper: sample position along 3-segment polyline
    const samplePath = (pts, u) => {
      const segs = pts.length - 1;
      const scaled = u * segs;
      const idx = Math.min(segs - 1, Math.floor(scaled));
      const f = scaled - idx;
      const a = pts[idx];
      const b = pts[idx + 1];
      return {
        x: a.x + (b.x - a.x) * f,
        y: a.y + (b.y - a.y) * f
      };
    };

    const render = () => {
      if (!reducedMotion) {
        time += 0.012;
      }

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const dark = isDark();

      // 1. Clean Architectural Gradient Backdrop (Light: Silver-Ice + Warm Blush | Dark: Midnight Navy)
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      if (dark) {
        bgGrad.addColorStop(0, '#050a18');
        bgGrad.addColorStop(0.5, '#091229');
        bgGrad.addColorStop(1, '#10142e');
      } else {
        bgGrad.addColorStop(0, '#ffffff');
        bgGrad.addColorStop(0.5, '#f6f9fd');
        bgGrad.addColorStop(1, '#fbf7f6');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle atmospheric corner glows matching the reference image
      const tlGlow = ctx.createRadialGradient(width * 0.12, height * 0.1, 0, width * 0.12, height * 0.1, width * 0.45);
      tlGlow.addColorStop(0, dark ? 'rgba(44, 96, 234, 0.12)' : 'rgba(255, 255, 255, 0.72)');
      tlGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = tlGlow;
      ctx.fillRect(0, 0, width, height);

      const brGlow = ctx.createRadialGradient(width * 0.9, height * 0.75, 0, width * 0.9, height * 0.75, width * 0.45);
      brGlow.addColorStop(0, dark ? 'rgba(223, 41, 57, 0.08)' : 'rgba(244, 212, 200, 0.52)');
      brGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = brGlow;
      ctx.fillRect(0, 0, width, height);

      const pxBase = (mouse.x - 0.5) * 28;
      const pyBase = (mouse.y - 0.5) * 28;

      // 2. Draw Moveable Diagonal Rounded-Corner Circuit Traces + Pulses
      for (let i = 0; i < traces.length; i++) {
        const tr = traces[i];
        const driftX = Math.sin(time * 0.55 + tr.driftPhase) * 10 * tr.depth;
        const driftY = Math.cos(time * 0.45 + tr.driftPhase) * 10 * tr.depth;
        const ox = pxBase * tr.depth + driftX;
        const oy = pyBase * tr.depth + driftY;

        const shiftedPts = tr.pts.map((p) => ({ x: p.x + ox, y: p.y + oy }));

        // Center traces are softer so content stays effortless to read
        const zoneAlpha = tr.isCenter ? 0.55 : 1;
        const lineAlpha = (dark ? 0.24 : 0.28) * zoneAlpha;

        ctx.save();
        if (tr.dashed) {
          ctx.setLineDash([3, 4]);
        }
        ctx.lineWidth = tr.isCenter ? 0.85 : 1.05;
        ctx.strokeStyle = dark
          ? `rgba(148, 185, 235, ${lineAlpha})`
          : `rgba(55, 75, 102, ${lineAlpha})`;

        drawRoundedPath(shiftedPts, 18);
        ctx.stroke();

        // Optional rotated rounded-square circuit loop node (like the reference image)
        if (tr.hasLoop) {
          const mid = shiftedPts[1];
          ctx.save();
          ctx.translate(mid.x, mid.y);
          ctx.rotate(Math.PI / 4);
          ctx.beginPath();
          const s = 34;
          ctx.roundRect(-s / 2, -s / 2, s, s, 9);
          ctx.strokeStyle = dark
            ? `rgba(120, 170, 235, ${lineAlpha * 0.85})`
            : `rgba(55, 75, 102, ${lineAlpha * 0.85})`;
          ctx.stroke();
          ctx.restore();
        }
        ctx.restore();

        // Terminal endpoint node (diamond or circle)
        const endPt = shiftedPts[shiftedPts.length - 1];
        const nodeAlpha = (dark ? 0.55 : 0.58) * zoneAlpha;
        ctx.fillStyle = tr.isRedPulse
          ? `rgba(223, 41, 57, ${nodeAlpha})`
          : dark
            ? `rgba(125, 185, 255, ${nodeAlpha})`
            : `rgba(45, 72, 108, ${nodeAlpha})`;

        if (tr.isDiamondEnd) {
          ctx.save();
          ctx.translate(endPt.x, endPt.y);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-2.6, -2.6, 5.2, 5.2);
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(endPt.x, endPt.y, 2.7, 0, Math.PI * 2);
          ctx.fill();
        }

        // Junction dot at bend 1
        const bendPt = shiftedPts[1];
        ctx.beginPath();
        ctx.arc(bendPt.x, bendPt.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `rgba(148, 185, 235, ${nodeAlpha * 0.7})`
          : `rgba(55, 75, 102, ${nodeAlpha * 0.7})`;
        ctx.fill();

        // Moving signal pulse traveling along the trace (from HTML reference)
        const u = (time * tr.speed + tr.offset) % 1;
        const pulsePt = samplePath(shiftedPts, u);
        const pulseColor = tr.isRedPulse
          ? dark
            ? 'rgba(248, 113, 113, 0.95)'
            : 'rgba(223, 41, 57, 0.85)'
          : dark
            ? 'rgba(56, 189, 248, 0.95)'
            : 'rgba(44, 96, 234, 0.8)';

        // Soft pulse halo
        ctx.beginPath();
        ctx.arc(pulsePt.x, pulsePt.y, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = tr.isRedPulse
          ? `rgba(223, 41, 57, ${0.18 * zoneAlpha})`
          : `rgba(44, 96, 234, ${0.18 * zoneAlpha})`;
        ctx.fill();

        // Crisp pulse core
        ctx.beginPath();
        ctx.arc(pulsePt.x, pulsePt.y, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = pulseColor;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
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

