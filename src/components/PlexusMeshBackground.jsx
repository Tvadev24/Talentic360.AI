import React, { useRef, useEffect } from 'react';

/**
 * PlexusMeshBackground
 * -------------------------------------------------------------
 * Interactive, continuously moving low-poly plexus network mesh
 * over a soft rose-lavender-cyan (Light) / plum-indigo-teal (Dark)
 * gradient backdrop. Nodes drift smoothly, respond subtly to cursor
 * movement, and form delicate luminous triangles & connecting lines.
 */
export default function PlexusMeshBackground({ theme }) {
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
      targetY: height * 0.5,
      active: false
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    // Create evenly distributed nodes biased slightly toward upper-right & outer edges
    const createNodes = () => {
      const count = width < 768 ? 36 : 64;
      const nodes = [];
      for (let i = 0; i < count; i++) {
        // Subtle cluster bias toward right/top-right like the reference while keeping full-screen motion
        const rx = Math.random();
        const x = (rx * 0.85 + Math.pow(rx, 0.7) * 0.15) * width;
        const y = Math.random() * height;
        const speed = 0.22 + Math.random() * 0.34;
        const angle = Math.random() * Math.PI * 2;
        nodes.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.4 + Math.random() * 1.8,
          depth: 0.45 + Math.random() * 0.55,
          phase: Math.random() * Math.PI * 2
        });
      }
      return nodes;
    };

    let nodes = createNodes();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      nodes = createNodes();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    const isDark = () => {
      if (theme) return theme === 'dark';
      return document.documentElement.classList.contains('dark');
    };

    let time = 0;

    const render = () => {
      time += 0.008;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const dark = isDark();

      // 1. Soft Luminous Gradient Backdrop (matching reference palette + Dark Mode counterpart)
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      if (dark) {
        bgGrad.addColorStop(0, '#140c29');
        bgGrad.addColorStop(0.45, '#0b102b');
        bgGrad.addColorStop(0.78, '#0a1636');
        bgGrad.addColorStop(1, '#071b2d');
      } else {
        bgGrad.addColorStop(0, '#f8d7e5');
        bgGrad.addColorStop(0.38, '#d4c3f4');
        bgGrad.addColorStop(0.72, '#b3c4f5');
        bgGrad.addColorStop(1, '#92d5ec');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Soft ambient glow orbs that drift slowly
      const orb1X = width * (0.16 + Math.sin(time * 0.5) * 0.03);
      const orb1Y = height * (0.22 + Math.cos(time * 0.4) * 0.03);
      const orb1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, width * 0.45);
      orb1.addColorStop(0, dark ? 'rgba(168, 85, 247, 0.14)' : 'rgba(255, 228, 240, 0.65)');
      orb1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = orb1;
      ctx.fillRect(0, 0, width, height);

      const orb2X = width * (0.84 + Math.cos(time * 0.45) * 0.03);
      const orb2Y = height * (0.76 + Math.sin(time * 0.35) * 0.03);
      const orb2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, width * 0.48);
      orb2.addColorStop(0, dark ? 'rgba(34, 211, 238, 0.12)' : 'rgba(147, 224, 247, 0.55)');
      orb2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = orb2;
      ctx.fillRect(0, 0, width, height);

      // 2. Update Node Positions with Smooth Drift & Subtle Mouse Interaction
      const maxDist = width < 768 ? 145 : 195;
      const mouseDist = 170;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx + Math.sin(time + n.phase) * 0.08;
        n.y += n.vy + Math.cos(time + n.phase) * 0.08;

        // Gentle mouse repulsion for interactive responsiveness
        if (mouse.active) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d > 0 && d < mouseDist) {
            const force = ((mouseDist - d) / mouseDist) * 0.45;
            n.x += (dx / d) * force;
            n.y += (dy / d) * force;
          }
        }

        // Seamless wrap-around at viewport edges with margin
        const pad = 40;
        if (n.x < -pad) n.x = width + pad;
        if (n.x > width + pad) n.x = -pad;
        if (n.y < -pad) n.y = height + pad;
        if (n.y > height + pad) n.y = -pad;
      }

      // 3. Draw Translucent Faceted Low-Poly Triangles
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dab = Math.hypot(a.x - b.x, a.y - b.y);
          if (dab > maxDist) continue;

          for (let k = j + 1; k < nodes.length; k++) {
            const c = nodes[k];
            const dac = Math.hypot(a.x - c.x, a.y - c.y);
            if (dac > maxDist) continue;
            const dbc = Math.hypot(b.x - c.x, b.y - c.y);
            if (dbc > maxDist) continue;

            const avgRatio = 1 - (dab + dac + dbc) / (3 * maxDist);
            const triAlpha = avgRatio * (dark ? 0.065 : 0.14);
            if (triAlpha <= 0.005) continue;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.lineTo(c.x, c.y);
            ctx.closePath();
            ctx.fillStyle = dark
              ? `rgba(165, 210, 255, ${triAlpha})`
              : `rgba(255, 255, 255, ${triAlpha})`;
            ctx.fill();
          }
        }
      }

      // 4. Draw Crisp Connecting Mesh Lines
      ctx.lineWidth = 0.9;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (dark ? 0.24 : 0.46);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = dark
              ? `rgba(148, 210, 255, ${alpha})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.stroke();
          }
        }

        // Connect nearby nodes lightly to cursor
        if (mouse.active) {
          const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (md < mouseDist) {
            const alpha = (1 - md / mouseDist) * (dark ? 0.28 : 0.42);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = dark
              ? `rgba(103, 232, 249, ${alpha})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // 5. Draw Luminous Vertex Dots
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = 0.8 + Math.sin(time * 2 + n.phase) * 0.2;
        const alpha = (dark ? 0.55 : 0.85) * n.depth * pulse;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `rgba(103, 232, 249, ${alpha * 0.22})`
          : `rgba(255, 255, 255, ${alpha * 0.35})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `rgba(224, 242, 254, ${alpha})`
          : `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
