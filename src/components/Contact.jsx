import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'adarshsah5153@gmail.com',
    href: 'mailto:adarshsah5153@gmail.com',
    color: 'from-cyan-500 to-blue-600',
    hoverBorder: 'hover:border-cyan-400/50',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Adarsh12325',
    href: 'https://github.com/Adarsh12325',
    color: 'from-slate-500 to-slate-700',
    hoverBorder: 'hover:border-slate-400/50',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/adarsh1357',
    href: 'https://linkedin.com/in/adarsh1357',
    color: 'from-blue-500 to-blue-700',
    hoverBorder: 'hover:border-blue-400/50',
  },
];

const Contact = () => (
  <section id="contact" aria-labelledby="contact-heading" className="py-28 relative">
    {/* Parallax glow accent */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px]" />
    </div>

    <div className="section-container relative z-10">
      <SectionHeader
        eyebrow="Get In Touch"
        heading="Let's Build Something Data-Driven Together"
        subtext="I'm open to opportunities, collaborations, and projects in data science, analytics, automation, and data engineering. Reach out — I'd love to connect."
      />

      {/* Contact Link Cards */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.1 }}
        className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 mb-12"
      >
        {contactLinks.map((c, i) => (
          <motion.a
            key={i}
            href={c.href}
            target={c.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            whileHover={{ y: -5 }}
            className={`flex-1 glass-card rounded-2xl p-6 border border-white/10 ${c.hoverBorder} flex flex-col items-center gap-3 text-center group transition-all duration-300`}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
              <c.icon size={22} className="text-white" />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-mono uppercase tracking-wide">{c.label}</p>
              <p className="text-white font-semibold text-sm mt-0.5 break-all">{c.value}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Message form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        className="glass-card rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto"
      >
        <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
          <Send size={18} className="text-cyan-400" /> Send a Message
        </h3>
        <form
          onSubmit={e => e.preventDefault()}
          className="flex flex-col gap-4"
          aria-label="Contact form"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell me about your opportunity or project..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="btn-primary self-end px-8 py-3 text-sm"
          >
            <Send size={16} /> Send Message
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

export default Contact;
