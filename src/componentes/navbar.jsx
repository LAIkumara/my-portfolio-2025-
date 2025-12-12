import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-50 shadow-sm border-b border-white/5">
                <div className="container mx-auto px-4 py-4">
                  <div className="flex justify-between items-center">
                    <a href="#hero" className="text-2xl font-bold bg-linear-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent animate-pulse-slow">
                      Akila Liyanage
                    </a>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                      {navItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="text-gray-300 hover:text-green-400 font-medium transition-all duration-300 relative group"
                        >
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-green-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                      ))}
                    </div>
                    
                    {/* Mobile menu button */}
                    <button
                      className="md:hidden text-white hover:text-green-400 transition-colors"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                  </div>
                  
                  {/* Mobile Navigation */}
                  {isOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-slideDown">
                      <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-gray-300 hover:text-green-400 font-medium transition-colors py-2 hover:translate-x-2 transition-transform duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </nav>
  );
};

export default Navbar;