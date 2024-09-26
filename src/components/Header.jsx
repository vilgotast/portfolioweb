import React from 'react';
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost">About</Button></li>
            <li><Button variant="ghost">Projects</Button></li>
            <li><Button variant="ghost">Contact</Button></li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <GithubIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <LinkedinIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <MailIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;