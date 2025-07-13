import React, { useState } from 'react';
import { 
  EnvelopeIcon, 
  LinkIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', type: '' });
    
    try {
      await axios.post('https://formspree.io/f/your-form-id', formData);
      setStatus({ 
        message: 'Message sent successfully! I\'ll get back to you soon.', 
        type: 'success' 
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({ 
        message: 'Failed to send message. Please try again or email me directly.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-[#F8F8F8] dark:bg-[#1A1A1A] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#64FFDA]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#64FFDA]/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A192F] dark:text-[#64FFDA]">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Reach out and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            className="bg-white dark:bg-[#222222] rounded-xl shadow-lg p-8"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold text-[#0A192F] dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white text-blue-600 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white text-blue-600 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white text-blue-600 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:border-transparent"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-[#0A192F] hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {status.message && (
                <div
                  className={`mt-4 p-3 rounded-lg text-center ${
                    status.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>

          </div>

          {/* Contact Information */}
          <div 
            className="bg-white dark:bg-[#222222] rounded-xl shadow-lg p-8"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-[#0A192F] dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-[#64FFDA]/10 rounded-lg mr-4">
                  <EnvelopeIcon className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-lg font-medium text-[#0A192F] dark:text-white hover:text-[#64FFDA] transition-colors"
                  >
                    tolesaejara@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-[#64FFDA]/10 rounded-lg mr-4">
                  <PhoneIcon className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-lg font-medium text-[#0A192F] dark:text-white hover:text-[#64FFDA] transition-colors"
                  >
                    +251708744454
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-[#64FFDA]/10 rounded-lg mr-4">
                  <MapPinIcon className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="text-lg font-medium text-[#0A192F] dark:text-white">
                    Addis Ababa
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/tolesa-ijara/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-300 rounded-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/toleeEj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-300 rounded-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                  <a
                    href="https://t.me/T011ii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-300 rounded-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition-colors"
                  >
                    <span className="sr-only">Telegram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.04 16.91c-.14 0-.28-.03-.41-.09l-1.46-.66c-.35-.16-.54-.53-.46-.91l.77-3.57 6.62-3.93c.15-.09.33-.09.48-.01s.25.23.25.4v.05l-1.6 7.26c-.05.24-.22.43-.45.51l-3.23 1.18c-.09.03-.17.05-.26.05zm-1.36-1.88l.77.35 2.35-.86 1.25-5.66-4.37 2.6-.61 2.81zm13.32-11.1c-.77-.74-1.85-1.13-3.09-1.13H6.09c-1.24 0-2.31.39-3.09 1.13C2.23 4.75 2 5.69 2 6.72v10.56c0 1.03.23 1.97.99 2.79.77.74 1.85 1.13 3.09 1.13h10.82c1.24 0 2.31-.39 3.09-1.13.76-.82.99-1.76.99-2.79V6.72c0-1.03-.23-1.97-.99-2.79z" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;