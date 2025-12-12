import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Code2, Sparkles, Zap } from 'lucide-react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      title: "Autosell Platform",
      description: "Autosell is a comprehensive classified advertisement platform that I developed as a fully functional website leveraging the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform is designed to facilitate seamless buying and selling of vehicles, properties, and other items across Sri Lanka. To deliver a modern and responsive user experience, I styled the frontend with Tailwind CSS, allowing for clean, scalable, and mobile-friendly design.",
      technologies: ["ReactJs", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      live: "https://www.autosell.lk/",
      image: "/website-img-10.jpg"
    },
    {
      title: "AutoExpert",
      description: "My university research focuses on 'Intelligent Vehicle Damage Detection and Repair Recommendation' and employs machine learning, image processing, sentiment analysis, and social media mining to detect car damage from photos and recommend nearby repair shops based on review trends.",
      technologies: ["Flask", "TensorFlow", "OpenCV", "ReactNative"],
      github: "https://github.com/LAIkumara/AutoXpert",
      image: "/website-img-6.jpg"
    },
    {
      title: "Ecommerce microservices app",
      description: "This project shows how to build a microservices-based backend using Spring Boot 3.5.3 (Java 21), with services for Product, Inventory, and Order. Each service is created with Spring Web and Spring Data JPA, and it connects to a MySQL database. The frontend is a simple React JS interface with Axios for API calls.",
      technologies: ["ReactJS", "SpringBoot", "Tailwind CSS", "JAVA"],
      github: "https://github.com/LAIkumara/ecommerce-microservices-app",
      image: "/website-img-7.jpg"
    },
    {
      title: "ScholerNet",
      description: "ScholerNet is a Learning Management System (LMS) built on the MERN stack and stylized with Tailwind CSS. It enables users to create and manage projects and assignments, assign supervisors to student projects, and track grades for both assignments and projects, thereby easing academic workflows and boosting overall learning management.",
      technologies: ["ReactJS", "NodeJs", "Express", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/LAIkumara/ScholerNet",
      image: "/website-img-8.jpg"
    },
    {
      title: "UnityWeb",
      description: "UnityWeb is a social media website built using ReactJS that aims to create a smooth and responsive user experience. It allows users to share posts, connect with others, and interact with content in real time. The frontend is created using current React components, which ensures quick performance and dynamic interactions.",
      technologies: ["ReactJS", "Tailwind CSS"],
      github: "https://github.com/LAIkumara/unityweb",
      image: "/website-img-9.jpg"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#0a192f] text-white relative overflow-hidden py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400 opacity-30" />
          </div>
        ))}
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-4">
            <Code2 className="w-8 h-8 text-green-400 animate-pulse-slow" />
            <p className="text-green-400 text-lg font-medium tracking-wider">PORTFOLIO</p>
            <Zap className="w-8 h-8 text-cyan-400 animate-pulse-slow" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my latest work and passion projects
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/20 hover:-translate-y-2">
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <Code2 className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description with expand/collapse */}
                  <div className="mb-4">
                    <p className={`text-gray-400 transition-all duration-300 ${expandedIndex === index ? '' : 'line-clamp-3'}`}>
                      {project.description}
                    </p>
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="text-green-400 hover:text-cyan-400 text-sm font-medium mt-2 flex items-center gap-1 transition-colors"
                    >
                      {expandedIndex === index ? '← Show Less' : 'Read More →'}
                    </button>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 backdrop-blur-sm text-gray-300 rounded-full text-sm border border-white/10 hover:border-green-400/50 hover:text-green-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm text-gray-300 rounded-lg hover:bg-green-400 hover:text-black font-medium transition-all duration-300 hover:scale-105 border border-white/10 hover:border-green-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-5 h-5" /> Code
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 to-cyan-500 text-black font-medium rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" /> LIVE
                      </a>
                    )}
                  </div>
                </div>

                {/* Decorative corner elements */}
                {hoveredIndex === index && (
                  <>
                    <Sparkles className="absolute top-2 left-2 w-6 h-6 text-green-400 animate-pulse-slow" />
                    <Sparkles className="absolute bottom-2 right-2 w-6 h-6 text-cyan-400 animate-pulse-slow animation-delay-1000" />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;