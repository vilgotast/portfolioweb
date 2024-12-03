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
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Contact Options */}
              <div className="flex flex-col justify-center space-y-6 flex-grow text-center lg:text-left">
                {/* Email with mailto link */}
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <MailIcon className="text-blue-400 text-3xl sm:text-4xl md:text-5xl" />
                  <a
                    href="mailto:vilgot.ast@gmail.com"
                    className="text-lg sm:text-xl md:text-2xl font-medium hover:text-blue-400 transition-colors"
                  >
                    vilgot.ast@gmail.com
                  </a>
                </div>

                {/* LinkedIn Link */}
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <LinkedinIcon className="text-blue-400 text-3xl sm:text-4xl md:text-5xl" />
                  <a
                    href="https://www.linkedin.com/in/vilgot-åström-1124401b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors text-lg sm:text-xl md:text-2xl font-medium"
                  >
                    Vilgot Åström
                  </a>
                </div>
              </div>

              {/* Avatar */}
              <div className="flex-shrink-0">
                <Avatar className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32">
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
