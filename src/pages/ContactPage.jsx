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
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="space-y-4 pt-6">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-4 flex-grow">
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
                  <span>+46 70 790 65 38</span>
                </div>
                <div className="pt-4">
                  <Button
                    onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
                    size="sm"
                  >
                    <FileIcon className="mr-2 h-4 w-4" /> Download CV
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Avatar className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28">
                  <AvatarImage src={`${import.meta.env.BASE_URL}/images/contact/profile_pic.jpg`} alt="Profile Picture" className="object-cover" />
                  <AvatarFallback>VA</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;