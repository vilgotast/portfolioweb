import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NUM_CIRCLES = 20 * Math.ceil(100 / (window.innerWidth ^ 2));
const CIRCLE_SIZE = 6;
const GLOW_RADIUS = 200;

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const [heroDimensions, setHeroDimensions] = useState({ width: window.innerWidth, height: 0 });
  const circles = useRef([]);
  const previousWidth = useRef(window.innerWidth);

  const initializeCircles = (width, height) => {
    circles.current = Array.from({ length: NUM_CIRCLES }).map(() => ({
      x: Math.random() * (width - CIRCLE_SIZE),
      y: Math.random() * (height - CIRCLE_SIZE),
      vx: (Math.random() - 0.5) * 2.5,
      vy: (Math.random() - 0.5) * 2.5,
    }));
  };

  const updateHeroDimensions = () => {
    if (heroRef.current) {
      const { clientWidth, clientHeight } = heroRef.current;
      setHeroDimensions({ width: clientWidth, height: clientHeight });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateHeroDimensions();
      if (window.innerWidth !== previousWidth.current) {
        previousWidth.current = window.innerWidth;
        if (heroRef.current) {
          initializeCircles(heroRef.current.clientWidth, heroRef.current.clientHeight || 500);
        }
      }
    };

    if (heroRef.current) {
      const { clientWidth, clientHeight } = heroRef.current;
      setHeroDimensions({ width: clientWidth, height: clientHeight });
      initializeCircles(clientWidth, clientHeight);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const updateCircles = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);

      circles.current.forEach((circle) => {
        circle.x += circle.vx;
        circle.y += circle.vy;

        if (circle.x < 0 || circle.x > heroDimensions.width - CIRCLE_SIZE) {
          circle.vx *= -1;
          circle.x = Math.max(0, Math.min(heroDimensions.width - CIRCLE_SIZE, circle.x));
        }
        if (circle.y < 0 || circle.y > heroDimensions.height - CIRCLE_SIZE) {
          circle.vy *= -1;
          circle.y = Math.max(0, Math.min(heroDimensions.height - CIRCLE_SIZE, circle.y));
        }
      });

      const nodeConnections = Array(circles.current.length).fill(0);

      // Draw connecting lines between nearby nodes
      circles.current.forEach((circle, index) => {
        circles.current.forEach((otherCircle, j) => {
          if (j > index) {
            const dx = circle.x - otherCircle.x;
            const dy = circle.y - otherCircle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < GLOW_RADIUS) {
              const strength = 1 - distance / GLOW_RADIUS;
              context.strokeStyle = `rgba(106, 88, 63, ${strength * 0.45})`;
              context.lineWidth = strength * 2.5;
              context.beginPath();
              context.moveTo(circle.x + CIRCLE_SIZE / 2, circle.y + CIRCLE_SIZE / 2);
              context.lineTo(otherCircle.x + CIRCLE_SIZE / 2, otherCircle.y + CIRCLE_SIZE / 2);
              context.stroke();

              nodeConnections[index] += strength;
              nodeConnections[j] += strength;
            }
          }
        });
      });

      // Draw square pixel nodes that appear as they connect
      const pinColors = ['#b62f28', '#20684b', '#5d43b5', '#2b2118', '#f2c14e'];
      circles.current.forEach((circle, i) => {
        const opacity = Math.min(1, nodeConnections[i]);
        if (opacity > 0.05) {
          context.save();
          context.globalAlpha = opacity * 0.85;
          context.fillStyle = pinColors[i % pinColors.length];
          context.fillRect(circle.x, circle.y, CIRCLE_SIZE, CIRCLE_SIZE);
          context.strokeStyle = '#2b2118';
          context.lineWidth = 1;
          context.strokeRect(circle.x, circle.y, CIRCLE_SIZE, CIRCLE_SIZE);
          context.restore();
        }
      });

      animationFrameId = requestAnimationFrame(updateCircles);
    };

    if (heroDimensions.height > 0) {
      updateCircles();
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [heroDimensions]);

  return (
    <section
      ref={heroRef}
      className="py-28 sm:py-32 relative overflow-hidden border-b border-dashed border-[#b9a67e]"
    >
      <canvas
        ref={canvasRef}
        width={heroDimensions.width}
        height={heroDimensions.height}
        className="absolute top-0 left-0 pointer-events-none"
      />

      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="ff-eyebrow mb-2">Hi, I’m</p>
          <h1 className="ff-title text-[64px] sm:text-[84px] mb-5">
            Vilgot Åström
          </h1>

          <p className="text-[20px] sm:text-[23px] mb-9 leading-relaxed text-[#2b2118] max-w-xl mx-auto">
            Exploring new methods in AI through practical projects
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => navigate('/projects')} className="ff-go">
              Discover My Work
            </button>
            <button onClick={() => navigate('/contact')} className="ff-go-secondary">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
