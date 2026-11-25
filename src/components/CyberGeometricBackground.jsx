import React, { useRef, useEffect } from 'react';

/**
 * CyberGeometricBackground
 * -------------------------------------------------------------
 * Ultra-impressive interactive 3D digital background featuring:
 * 1. 3D rotating & tumbling wireframe geometric polyhedra / pyramids
 * 2. An undulating 3D sine/cosine particle dot wave terrain
 * 3. Dynamic polygonal constellation network mesh with glowing vertex joints
 * 4. Floating geometric shapes (triangles, diamond squares, plus crosshairs)
 * 5. Full mouse parallax and cursor interaction ("moveable objects")
 * 6. Dual-mode styling: Luminous and lightfull for Light Mode, Cyberpunk neon for Dark Mode.
 */
export default function CyberGeometricBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth lerp
    let mouse = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
      isMoving: false
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Detect dark mode either from prop or HTML class
    const isDark = () => {
      if (theme) return theme === 'dark';
      return document.documentElement.classList.contains('dark');
    };

    // =========================================================================
    // 1. 3D WIREFRAME PYRAMIDS / TETRAHEDRONS (TUMBLING & ROTATING IN 3D)
    // =========================================================================
    const createTetrahedron = (size) => {
      const s = size;
      const vertices = [
        { x: 0, y: -s * 1.25, z: 0 },             // Apex
        { x: -s * 0.95, y: s * 0.65, z: -s * 0.65 }, // Base Left
        { x: s * 0.95, y: s * 0.65, z: -s * 0.65 },  // Base Right
        { x: 0, y: s * 0.65, z: s * 0.95 }          // Base Front
      ];
      const edges = [
        [0, 1], [0, 2], [0, 3], // Slanted edges from apex
        [1, 2], [2, 3], [3, 1]  // Base perimeter edges
      ];
      const faces = [
        [0, 1, 2],
        [0, 2, 3],
        [0, 3, 1],
        [1, 3, 2]
      ];
      return { vertices, edges, faces };
    };

    let polyhedra = [];
    let waveParticles = [];
    let constellationNodes = [];
    let floatingShapes = [];
    let glowingBeacons = [];

    const initElements = () => {
      // 3D Polyhedra configuration matching the user image:
      // Left side: Cyan & electric blue pyramids
      // Right side: Magenta & vibrant pink/purple pyramids
      polyhedra = [
        // Upper-Left large cyan pyramid
        {
          model: createTetrahedron(width < 768 ? 55 : 85),
          x: width * 0.18,
          y: height * 0.22,
          z: 0,
          rx: 0.2, ry: 0.4, rz: 0.1,
          vrx: 0.005, vry: 0.008, vrz: 0.003,
          driftX: 0.15, driftY: 0.1,
          baseX: width * 0.18, baseY: height * 0.22,
          colorType: 'cyan',
          wireWidth: 2
        },
        // Mid-Left smaller cyan pyramid
        {
          model: createTetrahedron(width < 768 ? 35 : 50),
          x: width * 0.08,
          y: height * 0.38,
          z: 30,
          rx: 0.8, ry: 0.2, rz: 0.5,
          vrx: -0.006, vry: 0.007, vrz: 0.004,
          driftX: 0.1, driftY: 0.15,
          baseX: width * 0.08, baseY: height * 0.38,
          colorType: 'cyan',
          wireWidth: 1.8
        },
        // Lower-Left inverted/tilted cyan pyramid
        {
          model: createTetrahedron(width < 768 ? 40 : 65),
          x: width * 0.11,
          y: height * 0.78,
          z: -20,
          rx: 2.1, ry: 0.8, rz: 1.2,
          vrx: 0.007, vry: -0.005, vrz: 0.006,
          driftX: 0.12, driftY: -0.1,
          baseX: width * 0.11, baseY: height * 0.78,
          colorType: 'cyan',
          wireWidth: 2
        },
        // Upper-Right large magenta pyramid
        {
          model: createTetrahedron(width < 768 ? 60 : 95),
          x: width * 0.86,
          y: height * 0.26,
          z: 10,
          rx: 0.6, ry: 1.1, rz: 0.3,
          vrx: 0.006, vry: 0.009, vrz: -0.004,
          driftX: -0.15, driftY: 0.12,
          baseX: width * 0.86, baseY: height * 0.26,
          colorType: 'magenta',
          wireWidth: 2.2
        },
        // Mid-Right tilted pink pyramid
        {
          model: createTetrahedron(width < 768 ? 45 : 70),
          x: width * 0.83,
          y: height * 0.70,
          z: 25,
          rx: 1.4, ry: 0.5, rz: 0.8,
          vrx: -0.005, vry: 0.006, vrz: 0.007,
          driftX: -0.1, driftY: -0.12,
          baseX: width * 0.83, baseY: height * 0.70,
          colorType: 'magenta',
          wireWidth: 2
        },
        // Far-Right edge floating pyramid
        {
          model: createTetrahedron(width < 768 ? 35 : 55),
          x: width * 0.94,
          y: height * 0.65,
          z: -10,
          rx: 0.9, ry: 2.3, rz: 0.4,
          vrx: 0.008, vry: -0.004, vrz: 0.005,
          driftX: -0.08, driftY: 0.08,
          baseX: width * 0.94, baseY: height * 0.65,
          colorType: 'magenta',
          wireWidth: 1.8
        },
        // Center subtle floating pyramid
        {
          model: createTetrahedron(width < 768 ? 30 : 45),
          x: width * 0.52,
          y: height * 0.18,
          z: 60,
          rx: 0.3, ry: 0.8, rz: 0.6,
          vrx: 0.004, vry: 0.005, vrz: -0.003,
          driftX: 0.08, driftY: -0.08,
          baseX: width * 0.52, baseY: height * 0.18,
          colorType: 'purple',
          wireWidth: 1.5
        }
      ];

      // =========================================================================
      // 2. 3D UNDULATING PARTICLE DOT WAVE (DIGITAL TERRAIN / AI WAVE)
      // =========================================================================
      const cols = width < 768 ? 36 : 60;
      const rows = width < 768 ? 12 : 18;
      waveParticles = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const normX = c / (cols - 1);
          const normY = r / (rows - 1);
          waveParticles.push({
            c,
            r,
            normX,
            normY,
            seed: Math.random() * Math.PI * 2,
            baseElevation: 0
          });
        }
      }

      // Glowing beacon points on the wave
      glowingBeacons = [
        { c: Math.floor(cols * 0.22), r: Math.floor(rows * 0.4), color: 'cyan', pulse: 0 },
        { c: Math.floor(cols * 0.38), r: Math.floor(rows * 0.7), color: 'cyan', pulse: 1.5 },
        { c: Math.floor(cols * 0.55), r: Math.floor(rows * 0.3), color: 'purple', pulse: 2.8 },
        { c: Math.floor(cols * 0.72), r: Math.floor(rows * 0.6), color: 'magenta', pulse: 4.1 },
        { c: Math.floor(cols * 0.85), r: Math.floor(rows * 0.5), color: 'magenta', pulse: 5.2 }
      ];

      // =========================================================================
      // 3. CONSTELLATION NETWORK MESH (POLYGONAL GRID)
      // =========================================================================
      const nodeCount = width < 768 ? 12 : 22;
      constellationNodes = [];
      for (let i = 0; i < nodeCount; i++) {
        constellationNodes.push({
          x: width * 0.25 + Math.random() * (width * 0.55),
          y: height * 0.08 + Math.random() * (height * 0.60),
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1.5,
          color: Math.random() > 0.5 ? 'cyan' : 'magenta'
        });
      }

      // =========================================================================
      // 4. FLOATING 2D GEOMETRIC SHAPES (TRIANGLES, DIAMONDS, CROSSES)
      // =========================================================================
      floatingShapes = [
        // Wireframe Triangles
        { type: 'triangle', x: width * 0.22, y: height * 0.12, size: 22, rot: 0.2, vrot: 0.008, color: 'cyan', vx: 0.1, vy: -0.08 },
        { type: 'triangle', x: width * 0.32, y: height * 0.14, size: 16, rot: 1.2, vrot: -0.01, color: 'cyan', vx: -0.08, vy: 0.06 },
        { type: 'triangle', x: width * 0.10, y: height * 0.52, size: 28, rot: 0.8, vrot: 0.006, color: 'cyan', vx: 0.12, vy: 0.1 },
        { type: 'triangle', x: width * 0.20, y: height * 0.72, size: 24, rot: 2.1, vrot: -0.007, color: 'cyan', vx: -0.09, vy: -0.07 },
        { type: 'triangle', x: width * 0.29, y: height * 0.88, size: 30, rot: 0.5, vrot: 0.005, color: 'cyan', vx: 0.15, vy: -0.08 },
        { type: 'triangle', x: width * 0.68, y: height * 0.12, size: 18, rot: 0.9, vrot: 0.009, color: 'purple', vx: -0.08, vy: 0.07 },
        { type: 'triangle', x: width * 0.68, y: height * 0.31, size: 20, rot: 1.6, vrot: -0.008, color: 'purple', vx: 0.07, vy: -0.09 },
        { type: 'triangle', x: width * 0.86, y: height * 0.46, size: 26, rot: 0.4, vrot: 0.007, color: 'magenta', vx: -0.1, vy: 0.1 },
        { type: 'triangle', x: width * 0.69, y: height * 0.82, size: 22, rot: 2.4, vrot: -0.006, color: 'magenta', vx: 0.08, vy: -0.1 },

        // Wireframe Diamonds (◇)
        { type: 'diamond', x: width * 0.60, y: height * 0.08, size: 16, rot: 0.7, vrot: 0.006, color: 'cyan', vx: 0.09, vy: -0.05 },
        { type: 'diamond', x: width * 0.79, y: height * 0.58, size: 18, rot: 0.3, vrot: -0.007, color: 'magenta', vx: -0.08, vy: 0.08 },

        // Crosshairs (+)
        { type: 'cross', x: width * 0.28, y: height * 0.29, size: 13, rot: 0.1, vrot: 0.004, color: 'cyan', vx: 0.07, vy: -0.05 },
        { type: 'cross', x: width * 0.37, y: height * 0.85, size: 14, rot: 0.4, vrot: -0.005, color: 'purple', vx: -0.06, vy: 0.07 }
      ];
    };

    initElements();

    // =========================================================================
    // ANIMATION LOOP (60 FPS HARDWARE-ACCELERATED)
    // =========================================================================
    let time = 0;

    const render = () => {
      time += 0.016;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;
      const mouseParallaxX = (mouse.x - width * 0.5) / (width * 0.5);
      const mouseParallaxY = (mouse.y - height * 0.5) / (height * 0.5);

      const dark = isDark();

      // =======================================================================
      // BACKGROUND COLOR & RADIAL AMBIENT GLOWS
      // =======================================================================
      if (dark) {
        // Deep futuristic cyber gradient
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, '#040714');
        bgGrad.addColorStop(0.45, '#0b0a24');
        bgGrad.addColorStop(1, '#180720');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        // Ambient radial glows (Cyan on left, Purple center, Pink right)
        const leftGlow = ctx.createRadialGradient(width * 0.18, height * 0.35, 10, width * 0.18, height * 0.35, width * 0.38);
        leftGlow.addColorStop(0, 'rgba(0, 240, 255, 0.16)');
        leftGlow.addColorStop(0.6, 'rgba(0, 160, 255, 0.06)');
        leftGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = leftGlow;
        ctx.fillRect(0, 0, width, height);

        const rightGlow = ctx.createRadialGradient(width * 0.84, height * 0.45, 10, width * 0.84, height * 0.45, width * 0.42);
        rightGlow.addColorStop(0, 'rgba(236, 72, 153, 0.18)');
        rightGlow.addColorStop(0.5, 'rgba(168, 85, 247, 0.08)');
        rightGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = rightGlow;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Light Theme: Impressive, visible, and lightfull
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, '#edf5ff');   // Fresh radiant ice blue
        bgGrad.addColorStop(0.5, '#f4f0ff'); // Delicate ultraviolet mist
        bgGrad.addColorStop(1, '#fff0f6');   // Soft luminous rose
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        // Luminous daylight glows
        const leftGlow = ctx.createRadialGradient(width * 0.18, height * 0.35, 20, width * 0.18, height * 0.35, width * 0.42);
        leftGlow.addColorStop(0, 'rgba(14, 165, 233, 0.22)');
        leftGlow.addColorStop(0.7, 'rgba(56, 189, 248, 0.08)');
        leftGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = leftGlow;
        ctx.fillRect(0, 0, width, height);

        const rightGlow = ctx.createRadialGradient(width * 0.84, height * 0.45, 20, width * 0.84, height * 0.45, width * 0.45);
        rightGlow.addColorStop(0, 'rgba(236, 72, 153, 0.20)');
        rightGlow.addColorStop(0.6, 'rgba(168, 85, 247, 0.10)');
        rightGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = rightGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // Helper color fetcher based on theme
      const getColor = (type, alpha = 1) => {
        if (dark) {
          if (type === 'cyan') return `rgba(0, 240, 255, ${alpha})`;
          if (type === 'purple') return `rgba(168, 85, 247, ${alpha})`;
          if (type === 'magenta') return `rgba(244, 63, 94, ${alpha})`;
          return `rgba(255, 255, 255, ${alpha})`;
        } else {
          // Vibrant, crisp colors with high visibility for Light Mode
          if (type === 'cyan') return `rgba(2, 132, 199, ${alpha})`;    // Vivid cobalt cyan
          if (type === 'purple') return `rgba(124, 58, 237, ${alpha})`; // Electric deep violet
          if (type === 'magenta') return `rgba(219, 39, 119, ${alpha})`; // Vivid hot fuchsia
          return `rgba(15, 23, 42, ${alpha})`;
        }
      };

      // =======================================================================
      // RENDER: CONSTELLATION NETWORK MESH
      // =======================================================================
      ctx.save();
      constellationNodes.forEach((node, i) => {
        node.x += node.vx + mouseParallaxX * 0.15;
        node.y += node.vy + mouseParallaxY * 0.15;

        // Bounce within boundaries
        if (node.x < width * 0.15 || node.x > width * 0.85) node.vx *= -1;
        if (node.y < height * 0.05 || node.y > height * 0.75) node.vy *= -1;

        // Draw connections
        for (let j = i + 1; j < constellationNodes.length; j++) {
          const other = constellationNodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          const maxDist = width < 768 ? 110 : 160;

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * (dark ? 0.35 : 0.45);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = getColor(node.color, lineAlpha);
            ctx.lineWidth = dark ? 1 : 1.2;
            ctx.stroke();
          }
        }

        // Draw node vertex point
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = getColor(node.color, dark ? 0.8 : 0.9);
        ctx.fill();
      });
      ctx.restore();

      // =======================================================================
      // RENDER: 3D UNDULATING PARTICLE DOT WAVE
      // =======================================================================
      ctx.save();
      const waveCenterY = height * 0.58;
      const waveAmplitude = height * 0.18;

      waveParticles.forEach((p) => {
        // Continuous wave equation: 2 sine waves + 1 cosine + mouse ripple
        const wx = p.normX * Math.PI * 3.5;
        const wy = p.normY * Math.PI * 2.5;
        const elevation = 
          Math.sin(wx + time * 1.4 + wy * 0.8) * 0.55 + 
          Math.cos(wx * 1.5 - time * 0.9 + wy * 1.2) * 0.35 +
          Math.sin((p.normX + p.normY) * 6 + time * 1.8) * 0.15;

        // 3D perspective projection
        const fov = 420;
        const z = (p.normY - 0.5) * 320;
        const scale = fov / (fov + z);

        // Screen coordinates
        const x = (p.normX * width * 1.08 - width * 0.04) + mouseParallaxX * 30 * scale;
        const y = waveCenterY + (elevation * waveAmplitude) * scale + (p.normY - 0.5) * (height * 0.28) + mouseParallaxY * 25 * scale;

        // Color interpolation: Cyan on left -> Purple middle -> Magenta on right
        let colorKey = 'cyan';
        if (p.normX > 0.62) colorKey = 'magenta';
        else if (p.normX > 0.38) colorKey = 'purple';

        // Dot radius with perspective and wave crest highlight
        const dotRadius = Math.max(1.2, (2.0 + (elevation + 0.5) * 1.4) * scale);
        const dotAlpha = dark 
          ? Math.min(0.95, Math.max(0.25, (0.45 + elevation * 0.4) * scale))
          : Math.min(1.0, Math.max(0.40, (0.65 + elevation * 0.35) * scale));

        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = getColor(colorKey, dotAlpha);
        ctx.fill();
      });

      // Render glowing beacons on wave peaks
      glowingBeacons.forEach((beacon) => {
        beacon.pulse += 0.04;
        const normX = beacon.c / (width < 768 ? 35 : 59);
        const normY = beacon.r / (width < 768 ? 11 : 17);

        const wx = normX * Math.PI * 3.5;
        const wy = normY * Math.PI * 2.5;
        const elevation = 
          Math.sin(wx + time * 1.4 + wy * 0.8) * 0.55 + 
          Math.cos(wx * 1.5 - time * 0.9 + wy * 1.2) * 0.35;

        const fov = 420;
        const z = (normY - 0.5) * 320;
        const scale = fov / (fov + z);
        const x = (normX * width * 1.08 - width * 0.04) + mouseParallaxX * 30 * scale;
        const y = waveCenterY + (elevation * waveAmplitude) * scale + (normY - 0.5) * (height * 0.28) + mouseParallaxY * 25 * scale;

        const pulseScale = 1 + Math.sin(beacon.pulse) * 0.35;
        const auraRadius = (width < 768 ? 12 : 18) * pulseScale;

        // Radial glow aura
        const glow = ctx.createRadialGradient(x, y, 0, x, y, auraRadius);
        glow.addColorStop(0, getColor(beacon.color, dark ? 0.9 : 0.85));
        glow.addColorStop(0.4, getColor(beacon.color, dark ? 0.45 : 0.4));
        glow.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(x, y, auraRadius, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Bright white center core
        ctx.beginPath();
        ctx.arc(x, y, 2.5 * scale, 0, Math.PI * 2);
        ctx.fillStyle = dark ? '#ffffff' : '#ffffff';
        ctx.fill();
      });
      ctx.restore();

      // =======================================================================
      // RENDER: 3D ROTATING & TUMBLING WIREFRAME PYRAMIDS
      // =======================================================================
      ctx.save();
      polyhedra.forEach((poly) => {
        // Continuous rotation + mouse reaction
        poly.rx += poly.vrx + mouseParallaxY * 0.002;
        poly.ry += poly.vry + mouseParallaxX * 0.003;
        poly.rz += poly.vrz;

        // Gentle floating drift
        poly.x = poly.baseX + Math.sin(time * 0.8 + poly.rx) * 20 + mouseParallaxX * 45;
        poly.y = poly.baseY + Math.cos(time * 0.7 + poly.ry) * 18 + mouseParallaxY * 35;

        const cosX = Math.cos(poly.rx), sinX = Math.sin(poly.rx);
        const cosY = Math.cos(poly.ry), sinY = Math.sin(poly.ry);
        const cosZ = Math.cos(poly.rz), sinZ = Math.sin(poly.rz);

        // Project all 4 vertices into 2D screen space
        const fov = 450;
        const projected = poly.model.vertices.map((v) => {
          // Rotate around X
          const y1 = v.y * cosX - v.z * sinX;
          const z1 = v.y * sinX + v.z * cosX;
          // Rotate around Y
          const x2 = v.x * cosY + z1 * sinY;
          const z2 = -v.x * sinY + z1 * cosY;
          // Rotate around Z
          const x3 = x2 * cosZ - y1 * sinZ;
          const y3 = x2 * sinZ + y1 * cosZ;
          const z3 = z2 + poly.z;

          const scale = fov / (fov + z3);
          return {
            x: poly.x + x3 * scale,
            y: poly.y + y3 * scale,
            z: z3,
            scale
          };
        });

        // 1. Draw subtle holographic translucent face fills
        poly.model.faces.forEach((face) => {
          const p0 = projected[face[0]];
          const p1 = projected[face[1]];
          const p2 = projected[face[2]];

          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.closePath();
          ctx.fillStyle = getColor(poly.colorType, dark ? 0.07 : 0.09);
          ctx.fill();
        });

        // 2. Draw crisp wireframe edges with glow
        ctx.lineWidth = dark ? poly.wireWidth : poly.wireWidth + 0.3;
        ctx.strokeStyle = getColor(poly.colorType, dark ? 0.90 : 0.95);
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        if (dark) {
          ctx.shadowColor = getColor(poly.colorType, 0.6);
          ctx.shadowBlur = 12;
        } else {
          ctx.shadowColor = getColor(poly.colorType, 0.35);
          ctx.shadowBlur = 6;
        }

        poly.model.edges.forEach((edge) => {
          const p0 = projected[edge[0]];
          const p1 = projected[edge[1]];
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.stroke();
        });

        // Reset shadow
        ctx.shadowBlur = 0;

        // 3. Draw vertex glowing points
        projected.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, dark ? 2.5 : 2.8, 0, Math.PI * 2);
          ctx.fillStyle = dark ? '#ffffff' : getColor(poly.colorType, 1);
          ctx.fill();
        });
      });
      ctx.restore();

      // =======================================================================
      // RENDER: FLOATING GEOMETRIC SHAPES (TRIANGLES, DIAMONDS, CROSSES)
      // =======================================================================
      ctx.save();
      floatingShapes.forEach((shape) => {
        shape.rot += shape.vrot;
        shape.x += shape.vx + mouseParallaxX * 0.2;
        shape.y += shape.vy + mouseParallaxY * 0.2;

        // Screen wrap
        if (shape.x < -40) shape.x = width + 30;
        if (shape.x > width + 40) shape.x = -30;
        if (shape.y < -40) shape.y = height + 30;
        if (shape.y > height + 40) shape.y = -30;

        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rot);

        ctx.strokeStyle = getColor(shape.color, dark ? 0.75 : 0.85);
        ctx.lineWidth = dark ? 1.6 : 2.0;

        if (shape.type === 'triangle') {
          const h = shape.size * (Math.sqrt(3) / 2);
          ctx.beginPath();
          ctx.moveTo(0, -h * 0.65);
          ctx.lineTo(-shape.size * 0.5, h * 0.35);
          ctx.lineTo(shape.size * 0.5, h * 0.35);
          ctx.closePath();
          ctx.fillStyle = getColor(shape.color, dark ? 0.05 : 0.08);
          ctx.fill();
          ctx.stroke();
        } else if (shape.type === 'diamond') {
          const s = shape.size * 0.65;
          ctx.beginPath();
          ctx.moveTo(0, -s * 1.3);
          ctx.lineTo(s * 0.9, 0);
          ctx.lineTo(0, s * 1.3);
          ctx.lineTo(-s * 0.9, 0);
          ctx.closePath();
          ctx.fillStyle = getColor(shape.color, dark ? 0.05 : 0.08);
          ctx.fill();
          ctx.stroke();
        } else if (shape.type === 'cross') {
          const s = shape.size * 0.5;
          const thick = 3;
          ctx.fillStyle = getColor(shape.color, dark ? 0.7 : 0.85);
          // Horizontal bar
          ctx.fillRect(-s, -thick * 0.5, s * 2, thick);
          // Vertical bar
          ctx.fillRect(-thick * 0.5, -s, thick, s * 2);
        }

        ctx.restore();
      });
      ctx.restore();

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
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block blur-[3px] scale-[1.02]"
      />
      {/* Subtle soft-focus scrim so foreground text stays crisp in both Light and Dark modes */}
      <div className="absolute inset-0 bg-white/20 dark:bg-[#040714]/20"></div>
    </div>
  );
}

