import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Layers } from 'lucide-react';
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: 'Employee Skill Matrix & Training Tracker',
    category: 'Business Intelligence',
    description:
      'Designed an interactive dashboard to monitor employee skills and training progression. Automated the approval process through Power Automate and Outlook, reducing admin overhead significantly.',
    techStack: ['Excel', 'SharePoint', 'Power Automate', 'Outlook'],
    github: '#',
    live: null,
    icon: '📊',
    color: 'from-blue-400 to-indigo-600',
    border: 'hover:border-blue-400/40',
    glow: 'hover:shadow-blue-500/15',
  },
  {
    title: 'Opportunity Nexus',
    category: 'Event Management System',
    description:
      'Built a full event management system that streamlined student registration and communication workflows. Developed real-time Power BI dashboards to analyze participant demographics and event metrics.',
    techStack: ['SharePoint', 'Power Automate', 'Power BI'],
    github: '#',
    live: null,
    icon: '🌐',
    color: 'from-cyan-400 to-blue-500',
    border: 'hover:border-cyan-400/40',
    glow: 'hover:shadow-cyan-500/15',
  },
  {
    title: 'Kafka to Snowflake Data Pipeline',
    category: 'Data Engineering',
    description:
      'Engineered a real-time streaming pipeline transferring events from Kafka to Snowflake via a Python consumer. Containerized with Docker and implemented Dead Letter Queue for robust error handling.',
    techStack: ['Python', 'Apache Kafka', 'Snowflake', 'Docker'],
    github: '#',
    live: null,
    icon: '⚡',
    color: 'from-purple-400 to-pink-600',
    border: 'hover:border-purple-400/40',
    glow: 'hover:shadow-purple-500/15',
  },
  {
    title: 'Large-Scale CSV Export Service',
    category: 'Backend Engineering',
    description:
      'Implemented a scalable FastAPI service exporting 10M+ rows from PostgreSQL to CSV via chunked background processing. Optimized with asynchronous streaming, progress tracking, and connection pooling.',
    techStack: ['FastAPI', 'Python', 'PostgreSQL', 'AsyncIO'],
    github: '#',
    live: null,
    icon: '🚀',
    color: 'from-emerald-400 to-teal-600',
    border: 'hover:border-emerald-400/40',
    glow: 'hover:shadow-emerald-500/15',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Projects = () => (
  <section id="projects" aria-labelledby="projects-heading" className="py-28 relative">
    <div className="section-container">
      <SectionHeader
        eyebrow="Featured Work"
        heading="Projects"
        subtext="Real-world data engineering and analytics projects that showcase my technical depth and problem-solving ability."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ staggerChildren: 0.1 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((project, i) => (
          <motion.article
            key={i}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className={`glass-card rounded-2xl border border-white/10 ${project.border} overflow-hidden flex flex-col transition-all duration-300 ${project.glow} hover:shadow-xl group`}
          >
            {/* Accent bar */}
            <div className={`h-1 bg-gradient-to-r ${project.color}`} />

            <div className="p-7 flex flex-col flex-1 items-center text-center">
              {/* Icon + links */}
              <div className="flex flex-col items-center gap-3 mb-5 w-full">
                <div className="w-14 h-14 rounded-xl glass-card border border-white/15 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    aria-label={`${project.title} GitHub repository`}
                    className="text-slate-400 hover:text-white transition-colors p-1"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      aria-label={`${project.title} live demo`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors p-1"
                    >
                      <FaExternalLinkAlt size={17} />
                    </a>
                  )}
                </div>
              </div>

              {/* Category */}
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">{project.category}</span>

              {/* Title */}
              <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/8 justify-center w-full">
                {project.techStack.map(t => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
