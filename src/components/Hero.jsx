import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Database, BarChart2, Cpu, Workflow } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import adarshPhoto from '../assets/adarsh.jpg';


/* ── Stat Card ──────────────────────────────────────────────────── */
const StatCard = ({ icon: Icon, value, label, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    className="glass-card rounded-2xl p-5 flex flex-col items-center text-center gap-2 border border-white/10 min-w-[130px] flex-1"
  >
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
      <Icon size={20} className="text-white" />
    </div>
    <span className="text-2xl font-extrabold text-white leading-none">{value}</span>
    <span className="text-xs text-slate-400 font-medium leading-tight text-center">{label}</span>
  </motion.div>
);

/* ── Hero ────────────────────────────────────────────────────────── */
const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const parallaxRef = useRef(null);

  // Parallax on scroll
  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldReduceMotion]);

  const stats = [
    { icon: BarChart2, value: '8.62', label: 'CGPA', color: 'bg-cyan-500/20 text-cyan-400' },
    { icon: Cpu, value: '4+', label: 'Projects', color: 'bg-blue-500/20 text-blue-400' },
    { icon: Database, value: 'DS', label: 'Data Science', color: 'bg-purple-500/20 text-purple-400' },
    { icon: Workflow, value: 'DE', label: 'Data Engineering', color: 'bg-emerald-500/20 text-emerald-400' },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="hero"
      aria-label="Hero – Introduction"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-28"
    >
      {/* ── Parallax background blobs ─────────────────────────────── */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none parallax-bg"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 left-1/3 w-[300px] h-[300px] bg-purple-600/8 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      </div>

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="section-container relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center w-full"
        >

          {/* ── Profile Photo ───────────────────────────────────── */}
          <motion.div variants={item} className="mb-8">
            <div className="relative inline-block">
              {/* Cyan glow ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-70 blur-md animate-pulse-glow" />
              {/* Photo – face-centered crop */}
              <img
                src={adarshPhoto}
                alt="Adarsh Sah – Data Science Student"
                width={176}
                height={176}
                className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full border-4 border-[#020617] shadow-2xl"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                }}
              />
              {/* Available dot */}
              <span
                className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#020617] shadow-lg"
                aria-label="Available for opportunities"
              />
            </div>
          </motion.div>

          {/* Eyebrow tag */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-400/20 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight px-4"
          >
            Hi, I'm{' '}
            <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              Adarsh Sah
            </span>
          </motion.h1>

          {/* Headline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-200 mb-4 leading-relaxed max-w-2xl px-4"
          >
            Building Data-Driven Solutions with Analytics, Automation &amp; Engineering.
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-10 px-4"
          >
            Data Science student passionate about{' '}
            <span className="text-cyan-300 font-medium">Python, SQL, Power BI, Kafka</span>,{' '}
            <span className="text-blue-300 font-medium">Snowflake</span>, and scalable data systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-3 justify-center mb-12 px-4">
            <a href="#projects" className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
              Contact Me
            </a>
            <a
              href="https://github.com/Adarsh12325"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="btn-secondary text-sm sm:text-base px-4 sm:px-5 py-3 sm:py-4"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/adarsh1357"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="btn-secondary text-sm sm:text-base px-4 sm:px-5 py-3 sm:py-4"
            >
              <FaLinkedin size={20} />
            </a>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-3 w-full max-w-2xl px-4"
          >
            {stats.map((s, i) => (
              <StatCard key={i} {...s} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator – below content, never overlaps ─────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="relative z-10 mt-8 flex flex-col items-center gap-1 text-slate-500"
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
