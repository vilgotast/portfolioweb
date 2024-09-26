import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="mt-2">Exploring the frontiers of AI and machine learning</p>
      </div>
    </footer>
  );
};

export default Footer;