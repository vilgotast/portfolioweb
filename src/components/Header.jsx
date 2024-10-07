import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ isStartPage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerClass = isStartPage ? "container mx-auto px-4" : "container mx-auto px-4 max-w-5xl";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className={`${containerClass} py-4 flex justify-between items-center`}>
        <Link to="/" className="text-2xl md:text-3xl font-bold text-blue-300 hover:text-blue-200 transition-colors">
          Vilgot Åström
        </Link>
        <div className="flex items-center">
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Button variant="ghost" className="text-gray-300 hover:text-blue-300" asChild><Link to="/">Home</Link></Button></li>
              <li><Button variant="ghost" className="text-gray-300 hover:text-blue-300" asChild><Link to="/projects">Projects</Link></Button></li>
              <li><Button variant="ghost" className="text-gray-300 hover:text-blue-300" asChild><Link to="/contact">Contact</Link></Button></li>
            </ul>
          </nav>
          <div className="hidden md:flex space-x-2 ml-4">
            <Button variant="outline" size="icon" className="text-gray-300 hover:text-blue-300 hover:border-blue-300" asChild>
              <a href="https://github.com/vilgotast" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="text-gray-300 hover:text-blue-300 hover:border-blue-300" asChild>
              <a href="https://www.linkedin.com/in/vilgot-åström-1124401b5" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="text-gray-300 hover:text-blue-300 hover:border-blue-300" asChild>
              <a href="mailto:vilgot.ast@gmail.com">
                <MailIcon className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <nav className="container mx-auto px-4">
            <ul className="space-y-2">
              <li><Button variant="ghost" className="w-full text-left text-gray-300 hover:text-blue-300" asChild><Link to="/" onClick={toggleMenu}>Home</Link></Button></li>
              <li><Button variant="ghost" className="w-full text-left text-gray-300 hover:text-blue-300" asChild><Link to="/projects" onClick={toggleMenu}>Projects</Link></Button></li>
              <li><Button variant="ghost" className="w-full text-left text-gray-300 hover:text-blue-300" asChild><Link to="/contact" onClick={toggleMenu}>Contact</Link></Button></li>
            </ul>
          </nav>
          <div className="flex justify-center space-x-4 mt-4">
            <Button variant="outline" size="icon" className="text-gray-300 hover:text-blue-300 hover:border-blue-300" asChild>
              <a href="https://github.com/vilgotast" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="text-gray-300 hover:text-blue-300 hover:border-blue-300" asChild>
              <a href="https://www.linkedin.com/in/vilgot-åström-1124401b5" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="text-gray-300 hover:text-blue-300 hover:border-blue-300" asChild>
              <a href="mailto:vilgot.ast@gmail.com">
                <MailIcon className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
