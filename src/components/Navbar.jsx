// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
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
    <nav className="sticky top-0 z-50 bg-[#0A192F] text-[#64FFDA] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">seeMe</h1>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-white transition-colors duration-300"
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
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-[#64FFDA] hover:text-[#0A192F] transition-colors"
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;