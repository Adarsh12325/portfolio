import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',         href: '#hero' },
  { name: 'About',        href: '#about' },
  { name: 'Education',    href: '#education' },
  { name: 'Skills',       href: '#skills' },
  { name: 'Experience',   href: '#experience' },
  { name: 'Projects',     href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact',      href: '#contact' },
];

const NAVBAR_HEIGHT = 80;

const scrollToSection = (href) => {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  /* Track scroll: glassmorphism bg + active link highlight */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - NAVBAR_HEIGHT - 20) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close drawer on Escape key */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  /* Mobile: close drawer first, then scroll so drawer doesn't block */
  const handleMobileLink = (href) => {
    setIsOpen(false);
    setTimeout(() => scrollToSection(href), 80);
  };

  /* Desktop: prevent default anchor jump, smooth scroll instead */
  const handleDesktopLink = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-card border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleDesktopLink(e, '#hero')}
          className="flex items-center gap-3 group"
          aria-label="Adarsh Sah – Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-lg group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-105">
            AS
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-bold text-white text-sm tracking-wide">Adarsh Sah</span>
            <span className="text-xs text-slate-400 font-mono">Data Science</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map(link => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleDesktopLink(e, link.href)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#projects"
            onClick={(e) => handleDesktopLink(e, '#projects')}
            className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
          >
            View Projects
          </a>
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-[#0a0f1e] backdrop-blur-xl"
          >
            <nav className="section-container flex flex-col py-4 gap-1" aria-label="Mobile navigation">
              {navLinks.map(link => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleMobileLink(link.href)}
                    className={`w-full text-left flex items-center px-4 py-4 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                    )}
                    {link.name}
                  </button>
                );
              })}

              {/* Bottom CTA buttons */}
              <div className="pt-4 border-t border-white/10 mt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => handleMobileLink('#projects')}
                  className="flex-1 btn-primary text-sm py-3"
                >
                  View Projects
                </button>
                <button
                  type="button"
                  onClick={() => handleMobileLink('#contact')}
                  className="flex-1 btn-secondary text-sm py-3"
                >
                  Contact Me
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
