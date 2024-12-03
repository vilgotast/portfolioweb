import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { MailIcon, LinkedinIcon } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header isStartPage={false} />
      <main className="container mx-auto px-4 py-32 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        {/* Introductory Text */}
        <p className="text-lg text-center text-gray-300 mb-8">
          Feel free to reach out to me via email or connect with me on LinkedIn. 
          I’m always open to discussing new opportunities or collaborations!
        </p>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-8">
              {/* Contact Options */}
              <div className="flex flex-col justify-center space-y-6 flex-grow">
                <div className="flex items-center space-x-6">
                  <MailIcon className="text-blue-400 text-4xl" />
                  <span className="text-xl font-medium">vilgot.ast@gmail.com</span>
                </div>
                <div className="flex items-center space-x-6">
                  <LinkedinIcon className="text-blue-400 text-4xl" />
                  <a
                    href="https://www.linkedin.com/in/vilgot-åström-1124401b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors text-xl font-medium"
                  >
                    Vilgot Åström
                  </a>
                </div>
              </div>
              {/* Avatar */}
              <div className="flex-shrink-0">
                <Avatar className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36">
                  <AvatarImage
                    src={`${import.meta.env.BASE_URL}/images/contact/profile_pic.jpg`}
                    alt="Profile Picture"
                    className="object-cover"
                  />
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
