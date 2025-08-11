import React from 'react';
import { 
  AcademicCapIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  CloudIcon,
  LockClosedIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

function Certifications() {
  const certifications = [
    {
        title: 'Bachelor of Computer Science and Engineering',
        issuer: 'University of Technology',
        date: '2024',
        icon: AcademicCapIcon,
        credential: 'View Degree Certificate',
        link: 'https://drive.google.com/file/d/1G_VlhBmV79fRqnzje95wxZkTocsLFprw/view?usp=sharing', 
        tags: ['Education', '5-Year Program']
    },
    {
      title: 'Google Cybersecurity Certificate',
      issuer: 'Google',
      date: '2024',
      icon: ShieldCheckIcon,
      credential: 'View Credential',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/M4D22CHQZ6Y0',
      tags: ['Cybersecurity', 'Professional']
    },
    {
      title: 'CCNA',
      issuer: 'Cisco',
      date: '2024',
      icon: LockClosedIcon,
      credential: 'Verify Certification',
      link: 'https://www.credly.com/badges/d9de89c0-1a76-46e1-a3c5-be6a9ba1b070/public_url',
      tags: ['Security', 'Networking']
    },
    {
      title: 'API Security Fundamentals',
      issuer: 'APIsec University',
      date: '2024',
      icon: ShieldCheckIcon,
      credential: 'Verify Certification',
      link: 'https://www.credly.com/badges/be8203fd-436a-45dc-9913-88e1e485601d/public_url',
      tags: ['API', 'Security']
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2022',
      icon: CodeBracketIcon,
      credential: 'View Certificate',
      link: '#',
      tags: ['Web Development', 'Bootcamp']
    },
  ];

  const getTagColor = (tag) => {
    const tagColors = {
      'Education': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      'Professional': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      'Security': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
      'Networking': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      'Cloud': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      'Fundamentals': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
      'Web Development': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
      'Bootcamp': 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
      'Penetration Testing': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
      '5-Year Program': 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
    };
    return tagColors[tag] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
  };

  return (
    <section
      id="certifications"
      className="py-20 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(90deg, rgba(0,100,0,0.95) 0%, rgba(35,0,0,0.95) 100%),
          repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.06) 0px,
            rgba(255,255,255,0.06) 1px,
            transparent 1px,
            transparent 50px
          )
        `,
        backgroundSize: '100% 100%, 20px 20px',
        backgroundBlendMode: 'overlay',
        transition: 'background 0.8s ease-in-out'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#64FFDA]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#64FFDA]/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A192F] dark:text-[#64FFDA]">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] mx-auto mb-4"></div>
          <p className="text-lg text-gray-100 dark:text-gray-200 max-w-2xl mx-auto">
            My academic background and professional certifications in cybersecurity and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white/90 dark:bg-[#222222]/90 rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 border-l-4 border-[#64FFDA]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-[#64FFDA]/10 rounded-lg mr-4">
                    <cert.icon className="w-6 h-6 text-[#64FFDA]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A192F] dark:text-white mb-1">{cert.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Issued by {cert.issuer}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-2 py-1 rounded ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Completed: {cert.date}</span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#64FFDA] hover:text-[#0A192F] dark:hover:text-white transition-colors flex items-center"
                    >
                      {cert.credential}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-[#64FFDA] text-[#64FFDA] rounded-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition-colors duration-300"
          >
            <AcademicCapIcon className="w-5 h-5 mr-2" />
            View Full Academic History
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
