import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Exploring the Frontiers of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
              Artificial Intelligence
            </span>
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            Pushing boundaries and creating innovative AI solutions through cutting-edge projects and research
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-white text-purple-800 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
              Discover My Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;