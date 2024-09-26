import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">AI Solutions Explorer</h1>
        <p className="text-xl mb-8">Pushing the boundaries of artificial intelligence through innovative projects and research</p>
        <Button variant="secondary" size="lg">Explore My Work</Button>
      </div>
    </section>
  );
};

export default Hero;