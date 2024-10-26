import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useScroll, useTransform, animate } from "framer-motion";
import { Rocket, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NUM_PARTICLES = 20;

const Hero = () => {
  const navigate = useNavigate();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();
  const particles = useRef(Array.from({ length: NUM_PARTICLES }).map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
  }))).current;
  
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300], [0.3, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX / innerWidth - 0.5;
      const y = clientY / innerHeight - 0.5;
      mouseX.set(x * 100);
      mouseY.set(y * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let animationFrameId;
    
    const updateParticles = () => {
      particles.forEach(particle => {
        // Add some fluid-like motion
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off walls with damping
        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
        }
        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));
        }
        
        // Add slight random movement
        particle.vx += (Math.random() - 0.5) * 0.2;
        particle.vy += (Math.random() - 0.5) * 0.2;
        
        // Apply drag
        particle.vx *= 0.99;
        particle.vy *= 0.99;
      });
      
      animationFrameId = requestAnimationFrame(updateParticles);
    };
    
    updateParticles();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 10 }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-32 relative overflow-hidden">
      {/* Animated particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          animate={{
            x: particle.x,
            y: particle.y,
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              index % 2 === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(147, 51, 234, 0.1)'
            } 0%, transparent 70%)`,
            filter: 'blur(8px)',
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-6">
            <motion.div whileHover="hover" variants={iconVariants}>
              <Rocket className="w-8 h-8 text-blue-400" />
            </motion.div>
            <motion.div whileHover="hover" variants={iconVariants}>
              <Star className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <motion.div whileHover="hover" variants={iconVariants}>
              <Zap className="w-8 h-8 text-purple-400" />
            </motion.div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl font-extrabold mb-6 leading-tight"
          >
            Discovering methods and applications for
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Artificial Intelligence
            </motion.span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl mb-8 leading-relaxed text-gray-300"
          >
            Trying new projects and ideas to learn more about the methods used in AI.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                onClick={() => navigate('/projects')}
              >
                Discover My Work
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
                onClick={() => navigate('/contact')}
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;