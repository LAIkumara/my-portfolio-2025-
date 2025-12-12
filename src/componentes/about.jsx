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
    <section id="about" className="  bg-[#0a192f] text-white relative overflow-hidden sm:py-20 py-12 ">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <div className="text-center mb-16">
            <p className="text-green-400 text-lg font-medium tracking-wider mb-4">
              GET TO KNOW ME
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-green-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-br from-green-400 to-cyan-500 mx-auto"></div>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300">
                <p className="text-gray-300 text-justify sm:text-lg leading-relaxed mb-6">
                I'm Akila Liyanage, a motivated and energetic full stack web developer with hands-on expertise in both frontend and backend technologies. 
                I enjoy utilizing React to create dynamic user interfaces and frameworks such as Spring Boot, Node.js, and Flask for solid backend solutions. 
                My experience encompasses the whole web development lifecycle, including planning, requirement analysis, requirement gathering, and web design. 
                I am dedicated to developing high-quality, scalable, and user-friendly online apps.
                </p>
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