import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Blog from './components/blog';
import Experience from './components/Experience';
import Contact from './components/contact';
import SiteFooter from './components/footer';
import './index.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="blog"><Blog /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
      <SiteFooter />
    </div>
  );
}

export default App;
