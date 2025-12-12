import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management application",
      technologies: ["Next.js", "Socket.io", "Tailwind", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800"
    },
    {
      title: "Weather Dashboard",
      description: "Weather application with forecast and location tracking",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800"
    }
  ];

  return (
    <section id="projects" className="section-container bg-gray-50">
      <h2 className="section-title">Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-secondary">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Code
                </a>
                <a 
                  href={project.live}
                  className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;