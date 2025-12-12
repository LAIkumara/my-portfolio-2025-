import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Colombo, Sri Lanka",
      description: "Leading frontend development team. Implemented microservices architecture. Improved application performance by 40%.",
      highlights: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      title: "Software Engineer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      location: "Remote",
      description: "Full-stack development. Built REST APIs and responsive UIs. Collaborated with cross-functional teams.",
      highlights: ["JavaScript", "Python", "MongoDB", "React"]
    },
    {
      title: "Junior Developer",
      company: "StartUp XYZ",
      period: "2019 - 2020",
      location: "Kandy, Sri Lanka",
      description: "Developed and maintained web applications. Learned agile development methodologies.",
      highlights: ["HTML/CSS", "JavaScript", "Git"]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-purple-500"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
              
              <div className="ml-16 md:ml-0 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-secondary mb-2">{exp.title}</h3>
                <div className="flex items-center gap-4 text-gray-600 mb-4 flex-wrap">
                  <span className="flex items-center gap-1">
                    <FaBriefcase /> {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;