import React from 'react';
import { Code2, Rocket, Sparkles, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, tested code following best practices"
    },
    {
      icon: Rocket,
      title: "Cloud Native",
      description: "Mastering cloud architectures and scalable solutions"
    },
    {
      icon: Sparkles,
      title: "AI Integration",
      description: "Exploring the intersection of AI and web development"
    },
    {
      icon: Award,
      title: "Open Source",
      description: "Contributing to projects and sharing knowledge"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-[#0a192f] text-white relative overflow-hidden py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-green-400 text-lg font-medium tracking-wider mb-4">
              GET TO KNOW ME
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-green-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate <span className="text-green-400 font-semibold">Software Engineer</span> with 3+ years of experience in developing scalable web applications. My expertise lies in modern JavaScript frameworks, cloud technologies, and creating efficient, maintainable code.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I believe in writing clean, tested code and following best practices. When I'm not coding, I enjoy contributing to open-source projects, learning new technologies, and sharing knowledge with the developer community.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Currently focused on mastering <span className="text-cyan-400 font-semibold">cloud-native architectures</span> and exploring the intersection of AI and web development.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "3+", label: "Years Experience" },
                  { number: "50+", label: "Projects Done" },
                  { number: "100%", label: "Client Satisfaction" }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center"
                  >
                    <div className="text-3xl font-bold text-green-400 mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Highlights */}
            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-green-400/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-400 to-cyan-500 text-black font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 text-lg hover:scale-105"
            >
              LET'S WORK TOGETHER
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default About;