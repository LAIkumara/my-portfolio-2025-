import React from 'react';
import Hero from './componentes/hero';
import About from './componentes/about';
import Skills from './componentes/skills';
import Experience from './componentes/experience';
import Projects from './componentes/projects';
import Contact from './componentes/contact';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;