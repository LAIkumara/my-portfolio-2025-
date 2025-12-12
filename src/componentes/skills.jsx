import React, { useState } from 'react';
import { Code2, Layers, Wrench, Zap, TrendingUp } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Layers },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frontend&backend', label: 'Frontend & backend', icon: Zap },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'databases', label: 'Databases', icon: TrendingUp },
  ];

  const skills = [
    // Languages
    { name: 'JavaScript', category: 'languages', level: 60, color: 'from-yellow-400 to-yellow-600', icon: '⚡' },
    { name: 'Python', category: 'languages', level: 30, color: 'from-green-400 to-green-600', icon: '🐍' },
    { name: 'Java', category: 'languages', level: 40, color: 'from-red-400 to-red-600', icon: '☕' },
    
    // frontend & backend
    { name: 'React', category: 'frontend&backend', level: 95, color: 'from-cyan-400 to-cyan-600', icon: '⚛️' },
    { name: 'Next.js', category: 'frontend&backend', level: 88, color: 'from-gray-700 to-gray-900', icon: '▲' },
    { name: 'Node.js', category: 'frontend&backend', level: 85, color: 'from-green-500 to-green-700', icon: '🟢' },
    { name: 'Tailwind CSS', category: 'frontend&backend', level: 92, color: 'from-teal-400 to-teal-600', icon: '🎨' },
    { name: 'Express', category: 'frontend&backend', level: 82, color: 'from-gray-600 to-gray-800', icon: '🚀' },
    { name: 'Spring boot', category: 'frontend&backend', level: 92, color: 'from-teal-400 to-teal-600', icon: '🌿' },
    { name: 'Flask', category: 'frontend&backend', level: 82, color: 'from-gray-600 to-gray-800', icon: '🌶️' },
    
    // Tools
    // { name: 'AWS', category: 'tools', level: 78, color: 'from-orange-400 to-orange-600', icon: '☁️' },
    // { name: 'Docker', category: 'tools', level: 80, color: 'from-blue-500 to-blue-700', icon: '🐳' },
    { name: 'Git', category: 'tools', level: 90, color: 'from-orange-500 to-red-600', icon: '📦' },
    { name: 'VS Code', category: 'tools', level: 95, color: 'from-blue-400 to-blue-600', icon: '📝' },
    { name: 'Postman', category: 'tools', level: 70, color: 'from-orange-400 to-orange-600', icon: '📬' },
    { name: 'Figma', category: 'tools', level: 65, color: 'from-pink-400 to-pink-600', icon: '🎨' },
    { name: 'Android Studio', category: 'tools', level: 60, color: 'from-green-400 to-green-600', icon: '🤖' },
    { name: 'IntelliJ IDEA', category: 'tools', level: 75, color: 'from-purple-500 to-purple-700', icon: '💡' },
    // { name: 'Redis', category: 'tools', level: 75, color: 'from-red-500 to-red-700', icon: '⚡' },

    //Databses
    { name: 'MySQL', category: 'databases', level: 80, color: 'from-blue-500 to-blue-700', icon: '🐬' },
    { name: 'SQLite', category: 'databases', level: 70, color: 'from-gray-500 to-gray-700', icon: '🗄️' },
    { name: 'Oracle DB', category: 'databases', level: 60, color: 'from-red-600 to-red-800', icon: '🛢️' },
    { name: 'MongoDB', category: 'databases', level: 75, color: 'from-green-500 to-green-700', icon: '🍃' },
    { name: 'PostgreSQL(Supabase)', category: 'databases', level: 70, color: 'from-blue-600 to-blue-800', icon: '🐘' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="min-h-screen bg-[#0a192f] text-white relative overflow-hidden py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fadeInUp">
            <p className="text-green-400 text-lg font-medium tracking-wider mb-4">
              WHAT I KNOW
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              My <span className="text-green-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp animation-delay-200">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-black shadow-lg shadow-green-400/50 scale-105'
                    : 'bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-400/50 hover:bg-white/10'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-400 capitalize">{skill.category}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-400">
                    {skill.level}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative group-hover:shadow-lg`}
                    style={{ 
                      width: `${skill.level}%`,
                      animation: 'progressBar 1s ease-out'
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                  </div>
                </div>

                {/* Skill Level Text */}
                <div className="mt-3 text-xs text-gray-500 flex justify-between">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeInUp animation-delay-400">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center group hover:scale-105">
              <div className="text-4xl mb-2">💻</div>
              <div className="text-3xl font-bold text-green-400 mb-1">4+</div>
              <div className="text-sm text-gray-400">Languages</div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center group hover:scale-105">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-3xl font-bold text-cyan-400 mb-1">5+</div>
              <div className="text-sm text-gray-400">frontend & Backend</div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-center group hover:scale-105">
              <div className="text-4xl mb-2">🛠️</div>
              <div className="text-3xl font-bold text-purple-400 mb-1">6+</div>
              <div className="text-sm text-gray-400">Tools</div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 text-center group hover:scale-105">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">87%</div>
              <div className="text-sm text-gray-400">Avg Proficiency</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fadeInUp animation-delay-600">
            <p className="text-gray-400 mb-6 text-lg">
              Want to see these skills in action?
            </p>
            <a
              href="#projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-400 to-cyan-500 text-black font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 text-lg hover:scale-105"
            >
              VIEW MY PROJECTS
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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

        @keyframes progressBar {
          from {
            width: 0%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
          animation-fill-mode: both;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
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

export default Skills;