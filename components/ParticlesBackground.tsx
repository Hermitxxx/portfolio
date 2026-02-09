'use client';

import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        class Particle {
            x: number;
            y: number;
            size: number;
            speedY: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * (canvas?.width || 0);
                this.y = (canvas?.height || 0) + Math.random() * 100;
                this.size = Math.random() * 15 + 5;
                this.speedY = Math.random() * 1 + 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.y -= this.speedY;
                if (this.y < -50) {
                    this.y = (canvas?.height || 0) + 50;
                    this.x = Math.random() * (canvas?.width || 0);
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(139, 0, 0, ${this.opacity})`;
                ctx.fill();

                // Add a slight glow
                ctx.shadowBlur = 15;
                ctx.shadowColor = 'rgba(220, 20, 60, 0.4)';
            }
        }

        const init = () => {
            particles = [];
            const particleCount = window.innerWidth < 768 ? 20 : 40;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ background: 'transparent' }}
        />
    );
}
