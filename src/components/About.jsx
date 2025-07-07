// src/components/About.jsx
import React from 'react';

function About() {
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
          About Me
        </h2>
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Hi, I'm [Your Name], a passionate Full Stack Developer and Junior Penetration Tester. I love
            building seamless, user-friendly web applications and securing them against vulnerabilities. With a
            strong foundation in both development and cybersecurity, I enjoy solving complex problems and
            creating solutions that make a difference.
          </p>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            My journey in tech started with a curiosity for how applications work, leading me to master
            frameworks like React, Vue.js, Django, and Node.js, alongside databases like MongoDB and
            PostgreSQL. As a penetration tester, I use tools like Kali Linux and Burp Suite to identify and
            mitigate security risks, ensuring robust and secure systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div data-aos="fade-right" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-[#0A192F] dark:text-[#64FFDA] mb-4">
                Full Stack Development
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>React</li>
                <li>Vue.js</li>
                <li>Django</li>
                <li>Node.js</li>
                <li>.NET</li>
                <li>Tailwind CSS</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div data-aos="fade-left" data-aos-delay="400">
              <h3 className="text-xl font-semibold text-[#0A192F] dark:text-[#64FFDA] mb-4">
                Security Testing
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Kali Linux</li>
                <li>Burp Suite</li>
                <li>OWASP Top 10</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;