import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MailIcon, LinkedinIcon } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#f4e9cd] text-[#2b2118] flex flex-col justify-between">
      <Header isStartPage={false} />
      <main className="container mx-auto px-5 pt-28 pb-12 max-w-2xl flex-grow">
        <h1 className="ff-title text-[52px] sm:text-[62px] mb-4">Contact Me</h1>

        <p className="text-[20px] leading-[1.5] text-[#2b2118] mb-8">
          Feel free to reach out to me via email or connect with me on LinkedIn.
          I’m always open to discussing new opportunities or collaborations!
        </p>

        <div className="ff-box p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-5 flex-grow w-full">
              <div className="pb-4 border-b border-dashed border-[#b9a67e]">
                <div className="flex items-center gap-2 mb-1">
                  <MailIcon className="w-4 h-4 text-[#b8322b]" />
                  <span className="font-pixel uppercase tracking-[0.14em] text-[16px] text-[#6a583f]">
                    Email
                  </span>
                </div>
                <a
                  href="mailto:vilgot.ast@gmail.com"
                  className="text-[22px] font-semibold text-[#b8322b] underline underline-offset-4 hover:text-[#2b2118]"
                >
                  vilgot.ast@gmail.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <LinkedinIcon className="w-4 h-4 text-[#b8322b]" />
                  <span className="font-pixel uppercase tracking-[0.14em] text-[16px] text-[#6a583f]">
                    LinkedIn
                  </span>
                </div>
                <a
                  href="https://www.linkedin.com/in/vilgot-åström-1124401b5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[22px] font-semibold text-[#b8322b] underline underline-offset-4 hover:text-[#2b2118]"
                >
                  Vilgot Åström
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 text-center">
              <img
                src={`${import.meta.env.BASE_URL}/images/contact/profile_pic.jpg`}
                alt="Profile Picture"
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover"
                style={{ boxShadow: '0 0 0 1px #2b2118' }}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
