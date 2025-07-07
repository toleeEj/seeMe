// src/components/Certifications.jsx
import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

function Certifications() {
  const certifications = [
    {
      title: 'Bachelor of Arts in [Your Major]',
      issuer: '[Your University]',
      date: '[Year, e.g., 2023]',
    },
    {
      title: 'Google Cybersecurity Certificate',
      issuer: 'Google',
      date: '[Year, e.g., 2024]',
    },
    {
      title: 'Cisco Certified CyberOps Associate',
      issuer: 'Cisco',
      date: '[Year, e.g., 2024]',
    },
  ];

  return (
    <section
      className="py-16 bg-[#F8F8F8] dark:bg-[#1F1F1F] text-[#1F1F1F] dark:text-[#F8F8F8]"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#0A192F] dark:text-[#64FFDA]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Certifications
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="p-6 bg-white dark:bg-[#0A192F] rounded-lg shadow-md hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <AcademicCapIcon className="w-8 h-8 text-[#64FFDA] mb-4" />
                <h3 className="text-xl font-semibold text-[#0A192F] dark:text-[#64FFDA] mb-2">
                  {cert.title}
                </h3>
                <p className="text-base mb-1">Issuer: {cert.issuer}</p>
                <p className="text-base">Date: {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;