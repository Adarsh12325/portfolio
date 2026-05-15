import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main id="main-content">
        {/* Hero – full width, no box */}
        <Hero />

        {/* ── About ───────────────────────────────────── */}
        <div className="section-wrapper">
          <div className="section-box">
            <About />
          </div>
        </div>

        {/* ── Education ───────────────────────────────── */}
        <div className="section-wrapper">
          <div className="section-box">
            <Education />
          </div>
        </div>

        {/* ── Skills ──────────────────────────────────── */}
        <div className="section-wrapper">
          <div className="section-box">
            <Skills />
          </div>
        </div>

        {/* ── Experience ──────────────────────────────── */}
        <div className="section-wrapper">
          <div className="section-box">
            <Experience />
          </div>
        </div>

        {/* ── Projects ────────────────────────────────── */}
        <div className="section-wrapper">
          <div className="section-box">
            <Projects />
          </div>
        </div>

        {/* ── Achievements ────────────────────────────── */}
        <div className="section-wrapper">
          <div className="section-box">
            <Achievements />
          </div>
        </div>

        {/* ── Contact ─────────────────────────────────── */}
        <div className="section-wrapper">
          <div className="section-box">
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
