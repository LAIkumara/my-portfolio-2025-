import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-secondary">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:akila@example.com" className="text-gray-600 hover:text-primary transition-colors">
                    akila@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+94771234567" className="text-gray-600 hover:text-primary transition-colors">
                    +94 77 123 4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-all hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;