import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

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
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

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