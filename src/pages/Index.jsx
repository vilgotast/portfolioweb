import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100">
      <Header isStartPage={true} />
      <main className="pt-32"> {/* Increased padding-top */}
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;