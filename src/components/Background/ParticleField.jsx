import React, { useEffect, useRef } from 'react';
import './ParticleField.css';

// Constellation-style particle network rendered on a fixed canvas behind the page.
const ParticleField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let raf;
        const mouse = { x: null, y: null };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 22000));
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 1.6 + 0.4,
            }));
        };

        const onMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const onLeave = () => { mouse.x = null; mouse.y = null; };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const linkDist = 130;

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Gentle pull toward the cursor
                if (mouse.x !== null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const d = Math.hypot(dx, dy);
                    if (d < 180 && d > 0.001) {
                        p.x += (dx / d) * 0.25;
                        p.y += (dy / d) * 0.25;
                    }
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(103, 232, 249, 0.55)';
                ctx.fill();
            }

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const d = Math.hypot(a.x - b.x, a.y - b.y);
                    if (d < linkDist) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(96, 165, 250, ${0.14 * (1 - d / linkDist)})`;
                        ctx.lineWidth = 0.7;
                        ctx.stroke();
                    }
                }
            }

            raf = requestAnimationFrame(draw);
        };

        resize();
        draw();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseleave', onLeave);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    return (
        <div className="particle-field" aria-hidden="true">
            <canvas ref={canvasRef} />
            <div className="bg-grid" />
            <div className="bg-orb bg-orb-1" />
            <div className="bg-orb bg-orb-2" />
            <div className="bg-orb bg-orb-3" />
        </div>
    );
};

export default ParticleField;
