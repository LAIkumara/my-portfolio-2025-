import { Facebook, Twitter, Linkedin, Youtube, Zap, Sparkles, Code2, Terminal } from "lucide-react";
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navbar from "./navbar";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const roles = ["Software Engineer", "Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero">
      <div className="min-h-screen bg-[#0a192f] text-white relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-8 -right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
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

        <div className="relative z-100">
          <Navbar />
          {/* Hero Section */}
          <div className="px-8 md:px-16 lg:px-24 py-20 pt-32">
            <div className="max-w-6xl mx-auto">
              {/* Mobile: Image First */}
              <div className="md:hidden mb-12 animate-fadeInUp">
                <div className="relative flex justify-center">
                  {/* Profile Image */}
                  <div className="w-64 h-64 overflow-hidden rounded-full border-4 border-green-400/30 shadow-2xl shadow-green-400/20 animate-float">
                    <img
                      src="/AkilaLiyanage.png"
                      alt="Akila Liyanage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <Code2 className="absolute -left-4 top-10 w-8 h-8 text-green-400 opacity-60 animate-bounce-slow" />
                  <Terminal className="absolute -right-4 bottom-10 w-8 h-8 text-cyan-400 opacity-60 animate-bounce-slow animation-delay-1000" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="animate-fadeInLeft">
                  <p className="flex sm:justify-start justify-center text-green-400 text-lg font-medium tracking-wider animate-fadeIn">
                    HELLO I'M
                  </p>

                  <h1 className="sm:grid sm:justify-start flex justify-center gap-3 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mt-4 animate-fadeInUp animation-delay-200">
                    Akila
                    <br />
                    <span className="flex justify-end items-end  text-4xl md:text-6xl lg:text-7xl bg-linear-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent sm:pb-5">
                      Liyanage
                    </span>
                  </h1>

                  <div className="flex items-center gap-4 my-8 animate-fadeInUp animation-delay-400">
                    <span className="sm:text-xl text-gray-400">A Passionate</span>
                    <span className={`sm:text-xl text-white relative transition-opacity duration-500 ${isTyping ? 'opacity-100' : 'opacity-0'}`}>
                      {roles[currentRole]}
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-green-400 to-cyan-500 animate-pulse"></span>
                      <span className="animate-blink">|</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap sm:justify-start justify-center gap-4 animate-fadeInUp animation-delay-600">
                    <a 
                      href="#projects" 
                      className="px-8 py-4 bg-linear-to-r from-green-400 to-cyan-500 text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 sm:text-lg hover:scale-105 hover:-translate-y-1"
                    >
                      VIEW PROJECTS
                    </a>
                    <a 
                      href="#contact" 
                      className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 sm:text-lg hover:scale-105 hover:-translate-y-1"
                    >
                      CONTACT ME
                    </a>
                  </div>
                </div>

                {/* Right Side - Profile Image + Social Icons (Desktop) */}
                <div className="hidden md:block relative animate-fadeInRight">
                  <div className="relative">
                    {/* Glowing ring effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-green-400 to-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
                    
                    {/* Profile Image */}
                    <div className="relative w-full h-full overflow-hidden rounded-2xl border-2 border-green-400/30 shadow-2xl shadow-green-400/20 animate-float">
                      <img
                        src="/AkilaLiyanage.png"
                        alt="Akila Liyanage"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-linear-to-r from-[#0a192f] via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Decorative lightning bolts */}
                    <Zap className="absolute -left-8 top-20 w-12 h-12 text-yellow-400 opacity-60 animate-bounce-slow" />
                    <Zap className="absolute -right-12 bottom-16 w-16 h-16 text-pink-400 opacity-50 rotate-12 animate-bounce-slow animation-delay-1000" />
                    <Code2 className="absolute -left-4 bottom-24 w-10 h-10 text-cyan-400 opacity-50 animate-spin-slow" />
                    <Terminal className="absolute -right-8 top-32 w-10 h-10 text-green-400 opacity-50 animate-spin-slow animation-delay-2000" />

                    
                  </div>
                </div>
              </div>

              {/* Mobile Social Icons */}
              <div className="md:hidden flex justify-center gap-4 mt-8 animate-fadeInUp animation-delay-800">
                {[
                  { Icon: Facebook, color: "hover:bg-blue-600" },
                  { Icon: Twitter, color: "hover:bg-sky-500" },
                  { Icon: Linkedin, color: "hover:bg-blue-700" },
                  { Icon: Youtube, color: "hover:bg-red-600" },
                ].map(({ Icon, color }, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${color}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Scroll Indicator */}
          {/* <div className="fixed bottom-8 right-8 animate-bounce">
            <a 
              href="#about" 
              className="w-14 h-14 bg-linear-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
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
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        @keyframes fadeInLeft {
          from { 
            opacity: 0;
            transform: translateX(-30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from { 
            opacity: 0;
            transform: translateX(30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
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
      `}</style>
    </section>
  );
}

export default Hero;