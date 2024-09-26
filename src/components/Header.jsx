import React from 'react';
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Vilgot Åström</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" className="text-gray-300 hover:text-blue-300">About</Button></li>
            <li><Button variant="ghost" className="text-gray-300 hover:text-blue-300">Projects</Button></li>
            <li><Button variant="ghost" className="text-gray-300 hover:text-blue-300">Contact</Button></li>
          </ul>
        </nav>
        <div className="flex space-x-2">
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
    </header>
  );
};

export default Header;