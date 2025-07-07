// src/components/Contact.jsx
import React, { useState } from 'react';
import { EnvelopeIcon, LinkIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://formspree.io/f/your-form-id', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section
      className="py-16 bg-[#F8F8F8] dark:bg-[#1F1F1F] text-[#1F1F1F] dark:text-[#F8F8F8]"
      data-aos="fade-up"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#0A192F] dark:text-[#64FFDA]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Contact Me
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div data-aos="fade-up" data-aos-delay="200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0A192F] dark:text-[#64FFDA]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#0A192F] dark:border-[#64FFDA] rounded-md bg-white dark:bg-[#0A192F] text-[#1F1F1F] dark:text-[#F8F8F8] focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#0A192F] dark:text-[#64FFDA]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#0A192F] dark:border-[#64FFDA] rounded-md bg-white dark:bg-[#0A192F] text-[#1F1F1F] dark:text-[#F8F8F8] focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0A192F] dark:text-[#64FFDA]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 border border-[#0A192F] dark:border-[#64FFDA] rounded-md bg-white dark:bg-[#0A192F] text-[#1F1F1F] dark:text-[#F8F8F8] focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0A192F] text-[#64FFDA] py-3 rounded-md hover:bg-[#64FFDA] hover:text-[#0A192F] dark:hover:text-[#1F1F1F] transition-colors"
              >
                Send Message
              </button>
              {status && (
                <p className={`text-center text-sm ${status.includes('successfully') ? 'text-[#64FFDA]' : 'text-red-500'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
          {/* Contact Info & Links */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold text-[#0A192F] dark:text-[#64FFDA] mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <EnvelopeIcon className="w-6 h-6 text-[#64FFDA] mr-2" />
                <a
                  href="mailto:your.email@example.com"
                  className="text-[#64FFDA] hover:text-[#0A192F] dark:hover:text-[#F8F8F8] transition-colors"
                >
                  your.email@example.com
                </a>
              </li>
              <li className="flex items-center">
                <LinkIcon className="w-6 h-6 text-[#64FFDA] mr-2" />
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64FFDA] hover:text-[#0A192F] dark:hover:text-[#F8F8F8] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <LinkIcon className="w-6 h-6 text-[#64FFDA] mr-2" />
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64FFDA] hover:text-[#0A192F] dark:hover:text-[#F8F8F8] transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;