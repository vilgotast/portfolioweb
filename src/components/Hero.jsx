import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const NUM_CIRCLES = 20*Math.ceil(100/(window.innerWidth^(2)));
const CIRCLE_SIZE = 5; // Define circle size here
const GLOW_RADIUS = 200; // Distance to trigger glow effect

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const [heroDimensions, setHeroDimensions] = useState({ width: window.innerWidth, height: 0 });

  const circles = useRef([]);
  const [circleGlows, setCircleGlows] = useState(Array(NUM_CIRCLES).fill('rgba(0, 0, 0, 0)'));
  const [circleOpacities, setCircleOpacities] = useState(Array(NUM_CIRCLES).fill(0)); // Array to hold opacities


  const previousWidth = useRef(window.innerWidth);

  const initializeCircles = (width, height) => {
    circles.current = Array.from({ length: NUM_CIRCLES }).map(() => ({
      x: Math.random() * (width - CIRCLE_SIZE),
      y: Math.random() * (height - CIRCLE_SIZE),
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
    }));
    setCircleGlows(Array(NUM_CIRCLES).fill('rgba(0, 0, 0, 0)'));
    setCircleOpacities(Array(NUM_CIRCLES).fill(0)); // Reset opacities
  };

  const updateHeroDimensions = () => {
    if (heroRef.current) {
      const { clientWidth, clientHeight } = heroRef.current;
      setHeroDimensions({ width: clientWidth, height: clientHeight });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateHeroDimensions(); // Always update dimensions

      if (window.innerWidth !== previousWidth.current) {
        previousWidth.current = window.innerWidth; // Update the previous width
        console.log(heroDimensions.height)
        initializeCircles(heroDimensions.width, 656); // Initialize circles if width changed
      }
    };

    updateHeroDimensions(); // Initial setup
    initializeCircles(heroDimensions.width, heroDimensions.height);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [positions, setPositions] = useState(() => circles.current.map(circle => ({ x: circle.x, y: circle.y })));

  useEffect(() => {
    let animationFrameId;

    const updateCircles = () => {
      const newGlows = Array(NUM_CIRCLES).fill('rgba(0, 0, 0, 0)');
      const newOpacities = Array(NUM_CIRCLES).fill(0); // Array to hold updated opacities

      circles.current.forEach((circle, index) => {
        circle.x += circle.vx;
        circle.y += circle.vy;

        // Bounce off walls
        if (circle.x < 0 || circle.x > heroDimensions.width - CIRCLE_SIZE) {
          circle.vx *= -1;
          circle.x = Math.max(0, Math.min(heroDimensions.width - CIRCLE_SIZE, circle.x));
        }
        if (circle.y < 0 || circle.y > heroDimensions.height - CIRCLE_SIZE) {
          circle.vy *= -1;
          circle.y = Math.max(0, Math.min(heroDimensions.height - CIRCLE_SIZE, circle.y));
        }
      });

      // Update positions for rendering
      setPositions(circles.current.map(circle => ({ x: circle.x, y: circle.y })));

      // Draw on canvas and calculate opacities
      drawLinesBetweenCircles(newOpacities);

      // Update the opacities state
      setCircleOpacities(newOpacities);

      animationFrameId = requestAnimationFrame(updateCircles);
    };

    if (heroDimensions.height > 0) {
      updateCircles();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [heroDimensions]);

  const drawLinesBetweenCircles = (newOpacities) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear previous lines

    circles.current.forEach((circle, index) => {
      circles.current.forEach((otherCircle, j) => {
        if (j !== index) {
          const distanceX = circle.x - otherCircle.x;
          const distanceY = circle.y - otherCircle.y;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          // Draw a line if circles are within GLOW_RADIUS
          if (distance < GLOW_RADIUS) {
            const glowStrength = Math.max(0, 1 - distance / GLOW_RADIUS);
            context.strokeStyle = `rgba(93, 126, 163, ${glowStrength})`; // White glowing line
            context.lineWidth = glowStrength * 5; // Adjust line width based on glow strength

            context.beginPath();
            context.moveTo(circle.x + CIRCLE_SIZE / 2, circle.y + CIRCLE_SIZE / 2); // Center of circle
            context.lineTo(otherCircle.x + CIRCLE_SIZE / 2, otherCircle.y + CIRCLE_SIZE / 2); // Center of other circle
            context.stroke();

            // Increment opacity based on connections
            newOpacities[index] += glowStrength;
            newOpacities[j] += glowStrength;
          }
        }
      });
    });

    // Normalize opacities to the range [0, 1]
    newOpacities.forEach((opacity, i) => {
      newOpacities[i] = Math.min(1, opacity); // Clamp opacity to 1
    });
  };

  return (
    <section 
      ref={heroRef}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-32 relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        width={heroDimensions.width}
        height={heroDimensions.height}
        className="absolute top-0 left-0 pointer-events-none" // Make sure the canvas doesn't block clicks
      />
      {positions.map((position, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            top: position.y,
            left: position.x,
            width: `${CIRCLE_SIZE}px`,
            height: `${CIRCLE_SIZE}px`,
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0)', // Original circle color
            backgroundColor: 'rgba(255, 255, 255, 0)', // Slightly transparent background
            pointerEvents: 'none',
            opacity: circleOpacities[index], // Set opacity based on connections
            transition: 'opacity 0.3s ease-in-out',
            boxShadow: `0 0 20px ${circleGlows[index]}, 0 0 40px ${circleGlows[index]}`, // Glow effect for circles
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <div>
              <Rocket className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Hi, I'm
            <span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500"
            >
              Vilgot Åström
            </span>
          </h1>

          <p className="text-xl mb-8 leading-relaxed text-gray-300">
            Exploring the frontiers of AI through practical projects
          </p>

          <div className="flex gap-4 justify-center">
            <div>
              <Button 
                size="lg" 
                className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                onClick={() => navigate('/projects')}
              >
                Discover My Work
              </Button>
            </div>
            <div>
              <Button 
                size="lg" 
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
                onClick={() => navigate('/contact')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
