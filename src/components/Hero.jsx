import React, { useState, useEffect } from 'react';

function Hero() {
  const [gradientIndex, setGradientIndex] = useState(0);
  const gradients = [
    'from-[#64FFDA] to-[#0A192F]',
    'from-[#FF6B6B] to-[#4ECDC4]',
    'from-[#FDC830] to-[#F37335]'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-[#1F1F1F] dark:text-[#F8F8F8] py-12 px-4 overflow-hidden"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}assets/background.avif')`,
      }}
    >
      {/* Dark overlay for clarity */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#64FFDA]/10 blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#64FFDA]/15 blur-3xl animate-pulse animation-delay-1500" />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 relative z-20">
        {/* Left Column - Content */}
        <div className="md:w-[45%] flex flex-col justify-center items-start space-y-6 md:pl-12 animate-fadeIn">
          <div className="w-full overflow-hidden">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-[#64FFDA] animate-pulse block mb-2 animate-fadeIn animation-delay-300">Hello, I'm</span>
              <span
                className={`animate-pulse inline-block bg-clip-text text-transparent bg-gradient-to-r ${gradients[gradientIndex]} transition-shadow duration-10 border-b-8 border-indigo-500`}
              >
                Tolesa Ijara
              </span>
              <span className="block h-1.5 bg-[#64FFDA] origin-left scale-x-0 animate-scaleX animation-delay-800" />
            </h1>
          </div>

          <div className="w-full space-y-2 animate-fadeIn animation-delay-500">
            <div className="h-1 w-16 bg-[#64FFDA] my-4 origin-left scale-x-0 animate-scaleX animation-delay-700" />
            <p className="text-lg md:text-xl text-[#64FFDA]/90 leading-relaxed">
              Full Stack Developer | Junior pentester
            </p>
            <p className="text-base md:text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
              Webs with Modern web tech + security-first mindset = apps people love and trust.
              Front-end flair + back-end brains = stuff users enjoy and hackers hate.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 w-full animate-fadeIn animation-delay-700">
            <a
              href={`${import.meta.env.BASE_URL}assets/cv.pdf`}
              download
              className="relative bg-[#0A192F] text-[#64FFDA] px-8 py-3 rounded-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all duration-500 border-2 border-[#64FFDA] overflow-hidden group flex items-center hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </span>
              <span className="absolute inset-0 bg-[#64FFDA] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a
              href="#contact"
              className="relative bg-transparent text-[#64FFDA] px-8 py-3 rounded-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all duration-500 border-2 border-[#64FFDA] overflow-hidden group flex items-center hover:scale-105 active:scale-95"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Let's Talk
              </span>
              <span className="absolute inset-0 bg-[#64FFDA] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-[45%] flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] group animate-float">
            <div className="absolute inset-0 rounded-full bg-[#64FFDA]/10 blur-xl scale-90 group-hover:scale-100 transition-all duration-1000" />
            <div className="absolute inset-0 rounded-full border-[12px] border-[#64FFDA]/10 scale-95 group-hover:scale-105 transition-all duration-700" />
            <img
              src={`${import.meta.env.BASE_URL}assets/profile-placeholder.jpg`}
              alt="Profile"
              className="relative z-10 w-full h-full rounded-full object-cover border-[12px] border-[#032019] shadow-2xl transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute -inset-6 rounded-full border-4 border-[#64FFDA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#64FFDA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
