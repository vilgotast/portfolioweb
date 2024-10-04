import React from 'react';
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-blue-300 hover:text-blue-200 transition-colors">
          Vilgot Åström
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Button variant="ghost" className="text-gray-300 hover:text-blue-300 text-lg" asChild><Link to="/">Home</Link></Button></li>
            <li><Button variant="ghost" className="text-gray-300 hover:text-blue-300 text-lg" asChild><Link to="/projects">Projects</Link></Button></li>
            <li><Button variant="ghost" className="text-gray-300 hover:text-blue-300 text-lg">Contact</Button></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Button variant="outline" size="icon" className="text-gray-300 hover:text-blue-300 hover:border-blue-300" asChild>
            <a href="https://github.com/vilgotast" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="text-gray-300 hover:text-blue-300 hover:border-blue-300" asChild>
            <a href="https://www.linkedin.com/in/vilgot-åström-1124401b5" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="text-gray-300 hover:text-blue-300 hover:border-blue-300" asChild>
            <a href="mailto:vilgot.ast@gmail.com">
              <MailIcon className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;