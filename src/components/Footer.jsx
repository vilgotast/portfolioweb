import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-14 pb-12">
      <div className="container mx-auto px-5 max-w-5xl pt-4 border-t border-dashed border-[#b9a67e] font-pixel tracking-[0.06em] text-[19px] text-[#6a583f]">
        <p className="space-x-2">
          <Link to="/" className="hover:text-[#2b2118] underline underline-offset-4">Home</Link>
          <span>·</span>
          <Link to="/projects" className="hover:text-[#2b2118] underline underline-offset-4">Projects</Link>
          <span>·</span>
          <Link to="/contact" className="hover:text-[#2b2118] underline underline-offset-4">Contact</Link>
          <span>·</span>
          <a href="mailto:vilgot.ast@gmail.com" className="hover:text-[#2b2118] underline underline-offset-4">
            vilgot.ast@gmail.com
          </a>
        </p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Vilgot Åström</p>
      </div>
    </footer>
  );
};

export default Footer;