// src/components/Footer.jsx
import React from 'react';
import { EnvelopeIcon, LinkIcon } from '@heroicons/react/24/outline';

function Footer() {
  return (
    <footer
      className="py-8 text-white"
      data-aos="fade-up"
      style={{
        background: 'linear-gradient(90deg, #16a34a 0%, #dc2626 100%)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          {/* Copyright Notice */}
          <p className="text-sm">&copy; {new Date().getFullYear()} tolee. All rights reserved.</p>

          {/* Social Media Icons */}
          <ul className="flex space-x-4">
            <li>
              <a
                href="mailto:tolesaejara@gmail.com"
                className="hover:text-gray-200 transition-colors"
                aria-label="Email"
              >
                <EnvelopeIcon className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tolesa-ijara/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkIcon className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/toleeEj"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
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
