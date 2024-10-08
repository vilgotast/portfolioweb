import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()}</p>
        <p className="mt-2 text-blue-300">Vilgot Åström</p>
      </div>
    </footer>
  );
};

export default Footer;