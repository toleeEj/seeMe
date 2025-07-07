import React from 'react';
import {
  CodeBracketIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

function Skills() {
  const skills = [
    { name: 'React', level: 4, icon: CodeBracketIcon, category: 'frontend' },
    { name: 'Vue.js', level: 3, icon: CodeBracketIcon, category: 'frontend' },
    { name: 'Django', level: 4, icon: ServerIcon, category: 'backend' },
    { name: 'Node.js', level: 3, icon: ServerIcon, category: 'backend' },
    { name: '.NET', level: 3, icon: ServerIcon, category: 'backend' },
    { name: 'Tailwind CSS', level: 5, icon: CodeBracketIcon, category: 'frontend' },
    { name: 'MongoDB', level: 3, icon: ServerIcon, category: 'database' },
    { name: 'PostgreSQL', level: 4, icon: ServerIcon, category: 'database' },
    { name: 'Kali Linux', level: 3, icon: ShieldCheckIcon, category: 'security' },
    { name: 'Burp Suite', level: 2, icon: ShieldCheckIcon, category: 'security' },
    { name: 'OWASP Top 10', level: 3, icon: ShieldCheckIcon, category: 'security' },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'frontend': return 'bg-blue-500';
      case 'backend': return 'bg-purple-500';
      case 'database': return 'bg-green-500';
      case 'security': return 'bg-red-500';
      default: return 'bg-[#64FFDA]';
    }
  };

  const mid = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, mid);
  const rightSkills = skills.slice(mid);

  return (
    <section id="skills" className="py-20 bg-[#F8F8F8] dark:bg-[#1A1A1A]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A192F] dark:text-[#64FFDA]">
            Skills Proficiency
          </h2>
          <div className="w-20 h-1 bg-[#64FFDA] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Measured by practical experience and project implementation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[leftSkills, rightSkills].map((column, colIdx) => (
            <div key={colIdx} className="space-y-10">
              {column.map((skill, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <skill.icon className={`w-5 h-5 mr-3 ${getCategoryColor(skill.category).replace('bg', 'text')}`} />
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master'][skill.level - 1]}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className={`${getCategoryColor(skill.category)} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-center flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
              Frontend
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
              Backend
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              Database
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
              Security
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
