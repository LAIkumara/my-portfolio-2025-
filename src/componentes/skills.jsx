import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, SiJavascript, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const languages = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" />, level: 90 },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 85 },
    { name: 'Python', icon: <FaPython className="text-blue-500" />, level: 80 },
    { name: 'Java', level: 75 },
  ];

  const frameworks = [
    { name: 'React', icon: <FaReact className="text-cyan-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
  ];

  const tools = [
    { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
  ];

  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title">My Skills</h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Languages */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-center text-secondary">Languages</h3>
          <div className="space-y-4">
            {languages.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium flex items-center gap-2">
                    {skill.icon} {skill.name}
                  </span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-center text-secondary">Frameworks</h3>
          <div className="grid grid-cols-2 gap-4">
            {frameworks.map((framework, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white group transition-all"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {framework.icon}
                </div>
                <span className="font-semibold">{framework.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-center text-secondary">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full hover:bg-secondary hover:text-white group transition-all"
              >
                <div className="text-xl">
                  {tool.icon}
                </div>
                <span className="font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;