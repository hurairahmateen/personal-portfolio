"use client";

import React, { useEffect, useState } from "react";

import { PERSONAL_INFO } from "@/constants";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100">
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#about" className="text-2xl font-bold tracking-tighter">
            <span className="gradient-text">
              {PERSONAL_INFO.name.split(" ")[1].toLowerCase()}.dev
            </span>
          </a>

          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-900/20 transition-all hover:bg-sky-500"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button
            className="text-slate-300 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i
              className={`fa-solid ${
                isMenuOpen ? "fa-xmark" : "fa-bars"
              } text-2xl`}
            ></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="glass absolute top-full left-0 right-0 border-t border-slate-700/50 p-6 md:hidden">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="border-t border-slate-800 py-12 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with
            React &amp; Gemini.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={PERSONAL_INFO.social.github}
              className="text-slate-400 transition-colors hover:text-white"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a
              href={PERSONAL_INFO.social.linkedin}
              className="text-slate-400 transition-colors hover:text-white"
            >
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a
              href={PERSONAL_INFO.social.twitter}
              className="text-slate-400 transition-colors hover:text-white"
            >
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
