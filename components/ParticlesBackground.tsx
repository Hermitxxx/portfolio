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
            baseSize: number;
            speedX: number;
            speedY: number;
            opacity: number;
            twinkleSpeed: number;

            constructor() {
                this.x = Math.random() * (canvas?.width || 0);
                this.y = Math.random() * (canvas?.height || 0);
                this.baseSize = Math.random() * 2 + 0.5;
                this.size = this.baseSize;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.7 + 0.3;
                this.twinkleSpeed = Math.random() * 0.02 + 0.01;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around
                if (this.x < 0) this.x = canvas?.width || 0;
                if (this.x > (canvas?.width || 0)) this.x = 0;
                if (this.y < 0) this.y = canvas?.height || 0;
                if (this.y > (canvas?.height || 0)) this.y = 0;

                // Subtle twinkle
                this.opacity += Math.sin(Date.now() * this.twinkleSpeed) * 0.01;
                if (this.opacity < 0.2) this.opacity = 0.2;
                if (this.opacity > 1) this.opacity = 1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            const particleCount = window.innerWidth < 768 ? 60 : 120;
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
            // Draw blood red background gradient
            const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width
            );
            gradient.addColorStop(0, '#2b0000'); // Blood red center
            gradient.addColorStop(1, '#050505'); // Fades to black

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

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
        />
    );
}
