// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Apply theme class to <html> on mount and when darkMode changes
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
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
    <nav
      className="sticky top-0 z-50 text-white p-4 shadow-lg"
      style={{
        background: `
          linear-gradient(90deg, rgba(0,50,0,0.5) 0%, rgba(40,0,0,0.5) 100%),
          repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.06) 0px,
            rgba(255,255,255,0.06) 1px,
            transparent 1px,
            transparent 1px
          )
        `,
        backgroundSize: '100% 100%, 20px 20px',
        backgroundBlendMode: 'overlay',
        transition: 'background 0.8s ease-in-out'
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight transition-opacity duration-700 opacity-100">
          seeMe
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="transform transition duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <a
                href={link.href}
                className="text-sm lg:text-base font-medium hover:text-gray-200 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    .scrollIntoView({ behavior: 'smooth' });
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
          className="p-2 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-white/20 transition-all duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-gradient-to-r from-green-800/95 via-green-500/70 to-red-800/95 backdrop-blur-lg z-40 transition-all duration-300 transform ${
          isMobileMenuOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white hover:text-gray-200 transition-transform duration-300 transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document
                  .querySelector(link.href)
                  .scrollIntoView({ behavior: 'smooth' });
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
