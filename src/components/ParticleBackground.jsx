import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let isDarkMode = document.documentElement.classList.contains('dark');

        // Config
        const config = {
            particleColor: isDarkMode ? 'rgba(57, 255, 20, 0.5)' : 'rgba(59, 130, 246, 0.5)',
            lineColor: isDarkMode ? 'rgba(57, 255, 20, 0.15)' : 'rgba(59, 130, 246, 0.15)',
            particleCount: 100, // Balanced for performance and visuals
            defaultRadius: 2,
            variantRadius: 2,
            linkRadius: 150,
            repelRadius: 150, // How close mouse needs to be to repel
            repelStrength: 5, // Speed at which they repel
            returnSpeed: 0.05 // Speed they return to base/original velocity
        };

        let w, h;
        let particles = [];
        let animationFrameId;

        const mouse = {
            x: null,
            y: null,
            radius: config.repelRadius
        };

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.baseX = this.x;
                this.baseY = this.y;
                this.vx = (Math.random() - 0.5) * 1;
                this.vy = (Math.random() - 0.5) * 1;
                this.radius = config.defaultRadius + Math.random() * config.variantRadius;
                this.color = config.particleColor;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
            }

            update() {
                // Continuous movement
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > w) this.vx = -this.vx;
                if (this.y < 0 || this.y > h) this.vy = -this.vy;

                // Keep bounds
                if (this.x < 0) this.x = 0;
                if (this.x > w) this.x = w;
                if (this.y < 0) this.y = 0;
                if (this.y > h) this.y = h;

                // Mouse repulsion
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;

                        // Map distance to a 0-1 value where 0 is far, 1 is close
                        const force = (mouse.radius - distance) / mouse.radius;

                        const pushX = forceDirectionX * force * config.repelStrength;
                        const pushY = forceDirectionY * force * config.repelStrength;

                        this.x -= pushX;
                        this.y -= pushY;
                    }
                }
            }
        }

        const init = () => {
            resize();
            particles = [];
            for (let i = 0; i < config.particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawLines = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < config.linkRadius) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${isDarkMode ? '57, 255, 20' : '59, 130, 246'}, ${0.15 - distance / config.linkRadius * 0.15
                            })`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }

            drawLines();
            animationFrameId = requestAnimationFrame(animate);
        };

        // Event Listeners
        window.addEventListener('resize', resize);

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Handle dark mode changes via observer to update particle colors
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    isDarkMode = document.documentElement.classList.contains('dark');
                    const newParticleColor = isDarkMode ? 'rgba(57, 255, 20, 0.5)' : 'rgba(59, 130, 246, 0.5)';
                    particles.forEach(p => p.color = newParticleColor);
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
                background: 'transparent',
            }}
        />
    );
};

export default ParticleBackground;
