import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[#F8F8F8] dark:bg-[#1F1F1F] text-[#1F1F1F] dark:text-[#F8F8F8] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#64FFDA]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#64FFDA]/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/3 flex justify-center" data-aos="fade-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden group">
              <img
                src={`${import.meta.env.BASE_URL}assets/about.jpg`} 
                alt="About Me"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-[#64FFDA]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute inset-0 border-4 border-[#64FFDA]/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0A192F] dark:text-[#64FFDA] relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA] transform origin-left transition-all duration-1000"></span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Hi, I'm <span className="text-[#64FFDA] font-medium">Tolesa Ijara</span>, a passionate Full Stack Developer and Junior Penetration Tester. I love building seamless, user-friendly web applications and securing them against vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
