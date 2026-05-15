import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const quickLinks = [
  { name: 'About',        href: '#about' },
  { name: 'Education',    href: '#education' },
  { name: 'Skills',       href: '#skills' },
  { name: 'Experience',   href: '#experience' },
  { name: 'Projects',     href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact',      href: '#contact' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/8 bg-[#060c18]" role="contentinfo">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-lg">
                AS
              </div>
              <div>
                <p className="font-bold text-white text-sm">Adarsh Sah</p>
                <p className="text-slate-500 text-xs font-mono">Data Science Student</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Data Science student specializing in analytics, data engineering, and building scalable data-driven solutions.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/Adarsh12325"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg glass-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all"
              >
                <FaGithub size={17} />
              </a>
              <a
                href="https://linkedin.com/in/adarsh1357"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg glass-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/30 transition-all"
              >
                <FaLinkedin size={17} />
              </a>
              <a
                href="mailto:adarshsah5153@gmail.com"
                aria-label="Email Adarsh"
                className="w-9 h-9 rounded-lg glass-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all text-xs font-mono font-bold"
              >
                @
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <a href="mailto:adarshsah5153@gmail.com" className="hover:text-cyan-400 transition-colors break-all">
                  adarshsah5153@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/Adarsh12325" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  github.com/Adarsh12325
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/adarsh1357" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  linkedin.com/in/adarsh1357
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Adarsh Sah. Built with React + Vite + Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors group"
          >
            Back to top
            <span className="w-7 h-7 rounded-lg glass-card border border-white/10 flex items-center justify-center group-hover:border-cyan-400/30 transition-all">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
