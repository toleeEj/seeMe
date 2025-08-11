import React from 'react';
import { 
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon,
  LinkIcon,
  ShieldCheckIcon,
  ServerIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

function Projects() {
  const projects = [
    {
      title: 'Automated University Timetable Generator',
      description: 'Automated University Timetable Generator is a smart scheduling system that ensures conflict-free timetables for all departments. It provides real-time notifications to students and teachers on any schedule updates. The platform also supports feedback from users and full administrative control for efficient management.',
      stack: ['bootstrap', 'Django', 'Mysql', 'JWT'],
      github: 'https://github.com/toleeEj/auto-timetable-generator.git',
      tags: ['Full-Stack', 'Web App', 'Authentication'],
      image: 'assets/auto.jpg',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Complete e-commerce solution with payment integration, product management, and responsive design.',
      stack: ['bootstrap', 'dotNet', 'Mysql', 'Stripe'],
      github: 'https://github.com/toleeEj/UR-e-market.git',
      tags: ['Full-Stack', 'E-Commerce', 'Payments'],
      image: 'assets/emarket.jpg'
    },
    {
      title: 'Oromo Cultural Garments',
      description: 'Oromo Cultural Garments is a web platform showcasing the rich tradition of Oromo attire, blending heritage with modern design. It celebrates identity through curated collections and cultural insights.',
      stack: ['bootstrap', 'dotNet', 'html'],
      github: 'https://github.com/toleeEj/F_web.git',
      tags: ['Full-Stack', 'Dashboard'],
      image: 'assets/fashin.jpg',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'Interactive portfolio website with smooth animations, dark mode, and responsive design.',
      stack: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/toleeEj/seeMe.git',
      tags: ['Frontend', 'Portfolio', 'Animation'],
      image: 'assets/personalw.jpg'
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
    <section id="projects" className="relative overflow-hidden min-h-screen">
      {/* Smooth vertical gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(0, 100, 0, 0.95) 0%, rgba(35, 0, 0, 0.95) 100%)',
        }}
      ></div>

      {/* Content wrapper */}
      <div className="relative container mx-auto px-4 py-20 max-w-7xl z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-red-400 mx-auto mb-4 rounded"></div>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development and security expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-80
                ${project.featured ? 'lg:col-span-2' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 rounded-t-xl">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
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
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center text-xs px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-full"
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
                    className="flex items-center text-sm font-medium text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors"
                  >
                    <CodeBracketIcon className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to all GitHub projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/toleeEj?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-white transition-colors duration-300"
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
