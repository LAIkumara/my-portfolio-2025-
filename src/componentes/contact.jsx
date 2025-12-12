import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { Mail, Phone, MapPin, Send, Sparkles, Code2, Zap } from 'lucide-react';

const Contact = () => {



  return (
    <section id="contact" className="min-h-screen bg-[#0a192f] text-white relative overflow-hidden py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
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
            <Mail className="w-8 h-8 text-green-400 animate-pulse-slow" />
            <p className="text-green-400 text-lg font-medium tracking-wider">CONTACT</p>
            <Send className="w-8 h-8 text-cyan-400 animate-pulse-slow" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="bg-linear-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="animate-fadeInLeft grid md:grid-cols-2 sm:gap-12">
              
              <div>
              <h3 className="text-3xl flex sm:justify-start  justify-center font-bold mb-8 bg-linear-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              
              <div className="space-y-6 mb-12">
                {/* Email */}
                <div className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-linear-to-r from-green-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-black text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-300 mb-1">Email</p>
                    <a href="mailto:akilaimalsha@gmail.com" className="text-white hover:text-green-400 transition-colors">
                      akilaimalsha@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-linear-to-r from-green-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-black text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-300 mb-1">Phone</p>
                    <a href="tel:+94775878240" className="text-white hover:text-green-400 transition-colors">
                      077 5878 240
                    </a>
                  </div>
                </div>
                
              </div>
              </div>

              <div>
               {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6 text-white">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/akila-liyanage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-white/10 hover:border-blue-600"
                  >
                    <FaLinkedin className="text-2xl text-white" />
                  </a>
                  <a 
                    href="https://github.com/LAIkumara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-white/10 hover:border-gray-700"
                  >
                    <FaGithub className="text-2xl text-white" />
                  </a>
                  <a 
                    href="https://wa.me/+94775878240"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-white/10 hover:border-green-500"
                  >
                    <FaWhatsapp className="text-2xl text-white" />
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="hidden md:block relative mt-12">
                <Code2 className="absolute -left-4 top-0 w-12 h-12 text-green-400 opacity-30 animate-spin-slow" />
                <Zap className="absolute -right-8 bottom-0 w-16 h-16 text-cyan-400 opacity-30 animate-bounce-slow" />
              </div>
              </div>
              
            </div>
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
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
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
};

export default Contact;