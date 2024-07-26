// File: src/App.jsx

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MotionBackground from './components/MotionBackground';
import { Hero } from './components/Hero';

const App = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  const handleScroll = () => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && scrollPosition >= section.offsetTop - window.innerHeight / 2) {
        setCurrentSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <MotionBackground currentSection={currentSection} />
      <div className="relative z-10">
        <Navbar />
        <main className="text-white">
          <section id="hero" className="min-h-screen flex items-center">
            <Hero />
          </section>

          <section id="about" className="min-h-screen flex items-center p-5">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 hoverable">About Me</h2>
              <p className="text-lg hoverable">As a passionate Full Stack Developer, I navigate the vast expanse of technology, from front-end nebulae to back-end black holes. My journey through the coding cosmos has equipped me with a diverse skill set and an insatiable curiosity for new technologies.</p>
            </div>
          </section>

          <section id="skills" className="min-h-screen flex items-center p-5">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 hoverable">Stellar Skills</h2>
              <ul className="text-lg grid grid-cols-2 gap-4">
                <li className="hoverable">React & Next.js</li>
                <li className="hoverable">Node.js & Express</li>
                <li className="hoverable">Python & Django</li>
                <li className="hoverable">MongoDB & PostgreSQL</li>
                <li className="hoverable">AWS & Docker</li>
              </ul>
            </div>
          </section>

          <section id="projects" className="min-h-screen flex items-center p-5">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 hoverable">Cosmic Creations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hoverable">
                  <h3 className="text-2xl font-bold mb-3">Nebula Navigator</h3>
                  <p>A star chart application for amateur astronomers.</p>
                </div>
                <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hoverable">
                  <h3 className="text-2xl font-bold mb-3">Quantum Quill</h3>
                  <p>AI-powered storytelling platform for sci-fi enthusiasts.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="min-h-screen flex items-center p-5">
            <div className="max-w-4xl mx-auto w-full">
              <h2 className="text-4xl font-bold mb-6 hoverable">Contact Transmission</h2>
              <form className="space-y-4">
                <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 bg-opacity-50 rounded hoverable" />
                <textarea placeholder="Your Message" className="w-full p-3 bg-gray-800 bg-opacity-50 rounded h-32 hoverable"></textarea>
                <button type="submit" className="px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors duration-300 hoverable">Send Message</button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;