import React, { useState, useEffect } from 'react';
import {
  CodeBracketIcon,
  ServerIcon,
  ShieldCheckIcon,
  CubeIcon,
  CpuChipIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState([]);

  const skills = [
    { name: 'React', level: 4, icon: CodeBracketIcon, category: 'frontend', years: 1 },
    { name: 'Next.js', level: 3, icon: CodeBracketIcon, category: 'frontend', years: 1 },
    { name: 'Tailwind CSS', level: 4, icon: CommandLineIcon, category: 'frontend', years: 1 },
    { name: 'Django', level: 4, icon: ServerIcon, category: 'backend', years: 2 },
    { name: 'Node.js', level: 3, icon: ServerIcon, category: 'backend', years: 1 },
    { name: 'postgresql', level: 3, icon: CpuChipIcon, category: 'database', years: 2 },
    { name: 'supabase', level: 3, icon: CpuChipIcon, category: 'database', years: 2 },
    { name: 'Mysql', level: 3, icon: CpuChipIcon, category: 'database', years: 2 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills.map((_, i) => i));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      frontend: 'from-blue-500 to-blue-700',
      backend: 'from-purple-500 to-purple-700',
      database: 'from-green-500 to-green-700',
      security: 'from-red-500 to-red-700'
    };
    return colors[category] || 'from-[#64FFDA] to-[#0A192F]';
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'frontend': return <CodeBracketIcon className="w-5 h-5"/>;
      case 'backend': return <ServerIcon className="w-5 h-5"/>;
      case 'database': return <CpuChipIcon className="w-5 h-5"/>;
      case 'security': return <ShieldCheckIcon className="w-5 h-5"/>;
      default: return <CommandLineIcon className="w-5 h-5"/>;
    }
  };

  const proficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master'];

  return (




    <section
      id="skills"
      className="py-20 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(90deg, rgba(50,0,0,0.95) 0%, rgba(10,105,0,0.95) 100%),
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

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A192F] dark:text-[#64FFDA]">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] mx-auto mb-4"></div>
          <p className="text-lg text-gray-100 dark:text-gray-200 max-w-2xl mx-auto">
            My skillset spans across multiple domains, with proficiency measured by real-world project experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div 
              key={i}
              className={`bg-white/90 dark:bg-[#222222]/90 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${getCategoryColor(skill.category).replace('from', 'border')}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${getCategoryColor(skill.category)} mr-4 text-white`}>
                    {getCategoryIcon(skill.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{skill.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{skill.years}+ years</p>
                  </div>
                </div>
                <span className="text-sm font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  {proficiencyLevels[skill.level - 1]}
                </span>
              </div>
              
              <div className="mb-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Proficiency</span>
                <span>{skill.level * 20}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} transition-all duration-1000 ease-out`}
                  style={{ 
                    width: animatedSkills.includes(i) ? `${skill.level * 20}%` : '0%' 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
