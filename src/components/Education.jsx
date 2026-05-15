import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';

const education = [
  {
    degree: 'Bachelor of Technology in Data Science',
    institution: 'Aditya College of Engineering and Technology',
    specialization: 'Data Science & Data Engineering',
    duration: '2023 – 2027',
    cgpa: '8.62',
    status: 'Ongoing',
    highlights: ['Machine Learning', 'Data Warehousing', 'Big Data Analytics', 'Database Systems'],
    color: 'from-cyan-500 to-blue-600',
    badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  },
];

const Education = () => (
  <section id="education" aria-labelledby="education-heading" className="py-28 relative overflow-hidden">
    {/* Alternating section background */}
    <div className="absolute inset-0 bg-[#070d1a] pointer-events-none" aria-hidden="true" />
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" aria-hidden="true" />

    <div className="section-container relative z-10">
      <SectionHeader
        eyebrow="Academic Background"
        heading="Education"
        subtext="My academic foundation in data science, machine learning, and engineering."
      />

      <div className="max-w-3xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Accent bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${edu.color}`} />

            <div className="p-8">
              {/* Header */}
              <div className="flex flex-col items-center gap-4 mb-6 text-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg`}>
                  <GraduationCap size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight mb-1">{edu.degree}</h3>
                  <p className="text-cyan-300 font-semibold text-sm">{edu.institution}</p>
                </div>
                {/* Status badge */}
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${edu.badgeColor}`}>
                  {edu.status}
                </span>
              </div>

              {/* Details grid */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="glass-card rounded-xl p-4 border border-white/8 flex flex-col gap-1 items-center text-center">
                  <span className="text-slate-500 text-xs font-mono uppercase tracking-wide">Specialization</span>
                  <span className="text-white font-medium text-sm">{edu.specialization}</span>
                </div>
                <div className="glass-card rounded-xl p-4 border border-white/8 flex flex-col gap-1 items-center text-center">
                  <span className="text-slate-500 text-xs font-mono uppercase tracking-wide">Duration</span>
                  <span className="text-white font-medium text-sm">{edu.duration}</span>
                </div>
                <div className="glass-card rounded-xl p-4 border border-white/8 flex flex-col gap-1 items-center text-center">
                  <span className="text-slate-500 text-xs font-mono uppercase tracking-wide">CGPA</span>
                  <span className="text-3xl font-extrabold text-cyan-400 leading-none">{edu.cgpa}</span>
                </div>
              </div>

              {/* Highlight tags */}
              <div className="text-center">
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wide mb-3">Key Areas</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {edu.highlights.map(h => (
                    <span key={h} className="tech-chip">{h}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
