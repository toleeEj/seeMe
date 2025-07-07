// src/components/Footer.jsx
import React from 'react';
import { EnvelopeIcon, LinkIcon } from '@heroicons/react/24/outline';

function Footer() {
  return (
    <footer
      className="py-8 bg-[#0A192F] text-[#F8F8F8] dark:bg-[#1F1F1F] dark:text-[#F8F8F8]"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          {/* Copyright Notice */}
          <p className="text-sm">&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
          
          {/* Social Media Icons */}
          <ul className="flex space-x-4">
            <li>
              <a
                href="mailto:your.email@example.com"
                className="text-[#64FFDA] hover:text-white transition-colors"
                aria-label="Email"
              >
                <EnvelopeIcon className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64FFDA] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkIcon className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64FFDA] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <LinkIcon className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
