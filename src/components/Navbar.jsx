// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0A192F] dark:bg-gray-900 text-[#64FFDA] dark:text-gray-100 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight transition-opacity duration-700 opacity-100">
          seeMe
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`transform transition duration-300 hover:scale-105 hover:-translate-y-1`}
            >
              <a
                href={link.href}
                className="text-sm lg:text-base font-medium hover:text-white dark:hover:text-[#64FFDA] transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href).scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-[#64FFDA] hover:text-[#0A192F] dark:hover:bg-gray-700 dark:hover:text-[#64FFDA] transition-all duration-300 transform hover:scale-110"
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#0A192F]/95 dark:bg-gray-900/95 backdrop-blur-lg z-40 transition-all duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-[#64FFDA] dark:text-gray-100 hover:text-white dark:hover:text-[#64FFDA] transition-transform duration-300 transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.querySelector(link.href).scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
