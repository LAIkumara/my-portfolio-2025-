import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp, Award, Zap, Code2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "UI/UX Designer & WordPress Developer Intern",
      company: "CodeSec Global",
      period: "2023 - 2024",
      description: "Designed user interfaces and experiences for web applications, developed and maintained WordPress websites, and created responsive designs optimized for all devices at CodeSec Global.",
      highlights: ["React", "Node.js", "AWS", "Docker"],
      current: true
    },
    {
      title: "System Administrator Intern",
      company: "SMIB Bank",
      period: "2024 - 2025",
      location: "Remote",
      description: "Assisted in managing and maintaining IT systems, supported the IT team in troubleshooting technical issues, and gained hands-on experience in network administration and system security at SMIB Bank.",
      highlights: ["JavaScript", "Python", "MongoDB", "React"],
      current: false
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-[#0a192f] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20 animate-fadeInUp">
            <p className="text-green-400 text-lg font-medium tracking-wider mb-4">
              MY JOURNEY
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Work <span className="text-green-400">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-green-400 to-cyan-500 mx-auto"></div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-green-400 via-cyan-500 to-purple-500 opacity-30"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Desktop Layout */}
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Left/Right Content */}
                    <div className="md:w-1/2 mb-0 md:mb-0">
                      <div className={`${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                        {/* Period Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-green-400/10 border border-green-400/30 rounded-full mb-4 animate-pulse-slow ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                          <Calendar className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 font-semibold text-sm">{exp.period}</span>
                          
                        </div>
                      </div>
                    </div>

                    {/* Center Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-r from-green-400 to-cyan-500 rounded-full animate-ping opacity-75"></div>
                        <div className="relative w-16 h-16 bg-linear-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50 animate-float">
                          <Briefcase className="w-8 h-8 text-black" />
                        </div>
                      </div>
                    </div>

                    {/* Right/Left Content */}
                    <div className="md:w-1/2">
                      <div className={`${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 hover:border-green-400/50 hover:bg-white/10 transition-all duration-300 group">
                          {/* Mobile Timeline Indicator */}
                          <div className="md:hidden flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-linear-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center">
                              <Briefcase className="w-5 h-5 text-black" />
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-green-400/10 border border-green-400/30 rounded-full">
                              <Calendar className="w-3 h-3 text-green-400" />
                              <span className="text-green-400 font-semibold text-xs">{exp.period}</span>
                              
                            </div>
                          </div>

                          {/* Job Title */}
                          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                            {exp.title}
                          </h3>

                          {/* Company & Location */}
                          <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-cyan-400" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            {/* <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-cyan-400" />
                              <span>{exp.location}</span>
                            </div> */}
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Tech Stack */}
                          {/* <div className="flex flex-wrap gap-2">
                            {exp.highlights.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1.5 bg-linear-to-r from-green-400/10 to-cyan-500/10 border border-green-400/30 rounded-lg text-green-400 text-sm font-medium hover:bg-green-400/20 hover:scale-105 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div> */}

                          {/* Decorative Element */}
                          <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Zap className="w-8 h-8 text-yellow-400 animate-bounce-slow" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fadeInUp animation-delay-600">
            {[
              { icon: Award, label: "Years Experience", value: "3+" },
              { icon: Briefcase, label: "Companies", value: "3" },
              { icon: Code2, label: "Projects", value: "50+" },
              { icon: TrendingUp, label: "Success Rate", value: "100%" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="w-12 h-12 bg-linear-to-r from-green-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-black" />
                </div>
                <div className="text-3xl font-bold text-green-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div> */}
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
          50% { transform: translateY(-10px); }
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

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
          animation-fill-mode: both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default Experience;