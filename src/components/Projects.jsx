// src/components/Projects.jsx
import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A web application for managing tasks with a modern UI and secure backend.',
      stack: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/your-username/project-one',
      demo: 'https://project-one-demo.com',
      tags: ['Full-Stack', 'Web App'],
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform with payment integration and responsive design.',
      stack: ['Vue.js', 'Django', 'PostgreSQL'],
      github: 'https://github.com/your-username/project-two',
      demo: 'https://project-two-demo.com',
      tags: ['Full-Stack', 'E-Commerce'],
    },
    {
      title: 'Project Three',
      description: 'A security dashboard for monitoring vulnerabilities using OWASP guidelines.',
      stack: ['React', 'Node.js', 'Kali Linux'],
      github: 'https://github.com/your-username/project-three',
      demo: 'https://project-three-demo.com',
      tags: ['Security', 'Dashboard'],
    },
    {
      title: 'Project Four',
      description: 'A portfolio website built with modern frameworks and animations.',
      stack: ['React', 'Tailwind CSS'],
      github: 'https://github.com/your-username/project-four',
      demo: 'https://project-four-demo.com',
      tags: ['Frontend', 'Portfolio'],
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
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="p-6 bg-white dark:bg-[#0A192F] rounded-lg shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <h3 className="text-xl font-semibold text-[#0A192F] dark:text-[#64FFDA] mb-2">
                {project.title}
              </h3>
              <p className="text-base mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-[#0A192F] dark:text-[#64FFDA]">
                  Tech Stack:
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-sm px-2 py-1 bg-[#0A192F] dark:bg-[#64FFDA] text-[#64FFDA] dark:text-[#0A192F] rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-[#0A192F] dark:text-[#64FFDA]">
                  Tags:
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-sm px-2 py-1 bg-[#0A192F] dark:bg-[#64FFDA] text-[#64FFDA] dark:text-[#0A192F] rounded"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#64FFDA] hover:text-[#0A192F] dark:hover:text-[#F8F8F8] transition-colors"
                >
                  <CodeBracketIcon className="w-5 h-5 mr-1" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#64FFDA] hover:text-[#0A192F] dark:hover:text-[#F8F8F8] transition-colors"
                >
                  <CodeBracketIcon className="w-5 h-5 mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;