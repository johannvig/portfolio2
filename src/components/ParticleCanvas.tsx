import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouse);

    const PARTICLE_COUNT = 120;
    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      size: number; alpha: number; color: string;
      angle: number; speed: number; radius: number;
    };

    const colors = ['#ffffff', '#a0a0a0', '#606060', '#e0e0e0'];

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
      const radius = 80 + Math.random() * 220;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      return {
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius,
        vx: 0, vy: 0,
        size: 0.5 + Math.random() * 2,
        alpha: 0.2 + Math.random() * 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: angle + Math.random() * 0.5,
        speed: 0.0002 + Math.random() * 0.0006,
        radius,
      };
    });

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 1;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.strokeStyle = 'rgba(255,255,255,0.025)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      particles.forEach((p) => {
        p.angle += p.speed;
        const targetX = cx + Math.cos(p.angle) * p.radius;
        const targetY = cy + Math.sin(p.angle) * p.radius;

        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 120;

        if (dist < repelRadius) {
          const force = (repelRadius - dist) / repelRadius;
          p.vx += (dx / dist) * force * 3;
          p.vy += (dy / dist) * force * 3;
        }

        p.vx += (targetX - p.x) * 0.05;
        p.vy += (targetY - p.y) * 0.05;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.6 + 0.4 * Math.sin(t * 0.02 + p.angle));
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 70) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - d / 70)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
