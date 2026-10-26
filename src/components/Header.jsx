import React, { useState } from 'react';
import { LinkedinIcon, MailIcon, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isStartPage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const containerClass = isStartPage
    ? "container mx-auto px-5 max-w-5xl"
    : "container mx-auto px-5 max-w-4xl";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#f4e9cd]/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className={containerClass}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-3 pb-2.5 border-b-[3px] border-double border-[#2b2118]">
          <Link to="/" className="ff-mark text-[32px] sm:text-[36px] leading-none no-underline">
            VILGOT ÅSTRÖM
          </Link>

          <div className="flex items-center gap-5">
            <nav aria-label="Site navigation" className="hidden md:flex flex-wrap items-center gap-x-5">
              {navLinks.map(({ to, label }) => {
                const isActive =
                  location.pathname === to ||
                  (to === '/projects' && location.pathname.startsWith('/projects'));
                return (
                  <Link
                    key={to}
                    to={to}
                    aria-current={isActive ? 'page' : undefined}
                    className={`font-pixel uppercase tracking-[0.14em] text-[20px] py-1 transition-colors ${
                      isActive
                        ? "text-[#2b2118] underline decoration-[#b8322b] decoration-2 underline-offset-4"
                        : "text-[#6a583f] hover:text-[#2b2118] hover:underline underline-offset-4"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-2 pl-3 border-l border-dashed border-[#b9a67e]">
              <a
                href="https://www.linkedin.com/in/vilgot-åström-1124401b5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-1.5 text-[#2b2118] hover:text-[#b8322b] transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:vilgot.ast@gmail.com"
                aria-label="Email"
                className="p-1.5 text-[#2b2118] hover:text-[#b8322b] transition-colors"
              >
                <MailIcon className="h-4 w-4" />
              </a>
            </div>

            <button
              className="md:hidden p-1.5 text-[#2b2118] hover:text-[#b8322b]"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#eadcb7] border-b-[3px] border-double border-[#2b2118] py-4 px-5">
          <nav>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={toggleMenu}
                    className="block py-1 font-pixel uppercase tracking-[0.14em] text-[22px] text-[#2b2118] hover:text-[#b8322b]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-dashed border-[#b9a67e]">
            <a
              href="https://www.linkedin.com/in/vilgot-åström-1124401b5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-pixel uppercase tracking-[0.12em] text-[18px] text-[#2b2118] hover:text-[#b8322b]"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="mailto:vilgot.ast@gmail.com"
              className="inline-flex items-center gap-1.5 font-pixel uppercase tracking-[0.12em] text-[18px] text-[#2b2118] hover:text-[#b8322b]"
            >
              <MailIcon className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
