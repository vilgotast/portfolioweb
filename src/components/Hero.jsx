import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NUM_CIRCLES = 9;

const Hero = () => {
  const navigate = useNavigate();

  const circles = Array.from({ length: NUM_CIRCLES });

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-32 relative overflow-hidden">
      {/* Animated circles */}
      {circles.map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{
            scale: [0, 1, 1.5, 0],
            opacity: [0, 1, 0.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: index * 0.5 // Staggered start for each circle
          }}
          className="absolute rounded-full"
          style={{
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${
              index % 2 === 0 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(51, 147, 234, 0.3)'
            } 0%, transparent 70%)`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            filter: 'blur(20px)',
            pointerEvents: 'none', // Ensure circles don't block other interactions
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div className="flex justify-center gap-4 mb-6">
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
              <Rocket className="w-8 h-8 text-blue-400" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
              <Star className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
              <Zap className="w-8 h-8 text-purple-400" />
            </motion.div>
          </motion.div>

          <motion.h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Hi, I'm
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Vilgot Åström
            </motion.span>
          </motion.h1>

          <motion.p className="text-xl mb-8 leading-relaxed text-gray-300">
            Exploring the frontiers of AI through innovative research and development
          </motion.p>

          <motion.div className="flex gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                onClick={() => navigate('/projects')}
              >
                Discover My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
