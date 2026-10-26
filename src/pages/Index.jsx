import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f4e9cd] text-[#2b2118]">
      <Header isStartPage={true} />
      <main className="pt-20">
        <Hero />
        <AboutMe />
        <Projects showPreview={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;