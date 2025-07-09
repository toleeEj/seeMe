import React from 'react';
import { 
  CodeBracketIcon, 
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  LinkIcon,
  ShieldCheckIcon,
  ServerIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

function Projects() {
  const projects = [
    {
      title: 'Task Management App',
      description: 'A modern web application for managing tasks with real-time updates, user authentication, and secure backend API.',
      stack: ['React', 'Node.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/your-username/project-one',
      demo: 'https://project-one-demo.com',
      tags: ['Full-Stack', 'Web App', 'Authentication'],
      image: '/images/project1.jpg',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Complete e-commerce solution with payment integration, product management, and responsive design.',
      stack: ['Vue.js', 'Django', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/your-username/project-two',
      demo: 'https://project-two-demo.com',
      tags: ['Full-Stack', 'E-Commerce', 'Payments'],
      image: '/images/project2.jpg'
    },
    {
      title: 'Security Dashboard',
      description: 'Comprehensive security monitoring tool implementing OWASP Top 10 guidelines with vulnerability scanning.',
      stack: ['React', 'Node.js', 'Kali Linux', 'OWASP'],
      github: 'https://github.com/your-username/project-three',
      demo: 'https://project-three-demo.com',
      tags: ['Security', 'Dashboard', 'Monitoring'],
      image: '/images/project3.jpg',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'Interactive portfolio website with smooth animations, dark mode, and responsive design.',
      stack: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/your-username/project-four',
      demo: 'https://project-four-demo.com',
      tags: ['Frontend', 'Portfolio', 'Animation'],
      image: '/images/project4.jpg'
    },
  ];

  const getTagColor = (tag) => {
    const tagColors = {
      'Full-Stack': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      'Frontend': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      'Security': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
      'E-Commerce': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      'Web App': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
      'Authentication': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      'Payments': 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200',
      'Dashboard': 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
      'Monitoring': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
      'Portfolio': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
      'Animation': 'bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-800 dark:text-fuchsia-200'
    };
    return tagColors[tag] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
  };

  const getTechIcon = (tech) => {
    const icons = {
      'React': <CommandLineIcon className="w-4 h-4 mr-1" />,
      'Node.js': <ServerIcon className="w-4 h-4 mr-1" />,
      'MongoDB': <ServerIcon className="w-4 h-4 mr-1" />,
      'JWT': <ShieldCheckIcon className="w-4 h-4 mr-1" />,
      'Vue.js': <CommandLineIcon className="w-4 h-4 mr-1" />,
      'Django': <ServerIcon className="w-4 h-4 mr-1" />,
      'PostgreSQL': <ServerIcon className="w-4 h-4 mr-1" />,
      'Stripe': <LinkIcon className="w-4 h-4 mr-1" />,
      'Kali Linux': <ShieldCheckIcon className="w-4 h-4 mr-1" />,
      'OWASP': <ShieldCheckIcon className="w-4 h-4 mr-1" />,
      'Tailwind CSS': <CommandLineIcon className="w-4 h-4 mr-1" />,
      'Framer Motion': <CommandLineIcon className="w-4 h-4 mr-1" />
    };
    return icons[tech] || <CodeBracketIcon className="w-4 h-4 mr-1" />;
  };

  return (
    <section id="projects" className="py-20 bg-[#F8F8F8] dark:bg-[#1A1A1A] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#64FFDA]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#64FFDA]/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A192F] dark:text-[#64FFDA]">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development and security expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${project.featured ? 'lg:col-span-2' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="bg-white dark:bg-[#222222] p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-[#0A192F] dark:text-[#64FFDA] hover:text-[#64FFDA] dark:hover:text-white transition-colors"
                  >
                    <CodeBracketIcon className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-[#0A192F] dark:text-[#64FFDA] hover:text-[#64FFDA] dark:hover:text-white transition-colors"
                  >
                    <EyeIcon className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-[#64FFDA] text-[#64FFDA] rounded-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition-colors duration-300"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;