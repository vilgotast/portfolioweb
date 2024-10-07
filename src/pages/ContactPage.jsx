import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { MailIcon, LinkedinIcon, PhoneIcon, FileIcon } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header isStartPage={false} />
      <main className="container mx-auto px-4 py-32 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        <div className="mb-8 flex justify-center">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/path-to-your-image.jpg" alt="Profile Picture" />
            <AvatarFallback>VA</AvatarFallback>
          </Avatar>
        </div>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="space-y-4 pt-6">
            <div className="flex items-center space-x-4">
              <MailIcon className="text-blue-400" />
              <span>vilgot.ast@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <LinkedinIcon className="text-blue-400" />
              <a href="https://www.linkedin.com/in/vilgot-åström-1124401b5" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                Vilgot Åström
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <PhoneIcon className="text-blue-400" />
              <span>+46 70 123 45 67</span>
            </div>
            <div className="pt-4">
              <Button
                onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}
                className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
              >
                <FileIcon className="mr-2" /> Download CV
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;