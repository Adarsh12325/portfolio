import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    role: 'Data Specialist Intern',
    company: 'Technical Hub Private Limited',
    duration: 'May 2025 – June 2025',
    type: 'Internship',
    bullets: [
      'Worked with Excel, Power BI, SharePoint, Power Apps, Power Automate, and Snowflake to support data-driven business operations.',
      'Created interactive Power BI dashboards and conducted in-depth data analysis in Excel to generate actionable business insights.',
      'Streamlined workflows using Power Automate, reducing manual processing time significantly.',
      'Strengthened expertise in data management, visualization, and automation through real-world analytical projects.',
    ],
    tools: ['Excel', 'Power BI', 'SharePoint', 'Power Apps', 'Power Automate', 'Snowflake'],
    color: 'from-emerald-500 to-teal-600',
  },
];

const Experience = () => (
  <section id="experience" aria-labelledby="experience-heading" className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-[#070d1a] pointer-events-none" aria-hidden="true" />
    <div className="absolute inset-0 bg-dot-pattern opacity-[0.04] pointer-events-none" aria-hidden="true" />

    <div className="section-container relative z-10">
      <SectionHeader
        eyebrow="Work History"
        heading="Experience"
        subtext="Real-world internship and professional projects that shaped my data engineering skills."
      />

      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
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
            <div className={`h-1.5 bg-gradient-to-r ${exp.color}`} />

            <div className="p-8">
              {/* Role + company */}
              <div className="flex flex-col items-center gap-3 mb-6 text-center">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                  <Briefcase size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">{exp.role}</h3>
                  <p className="text-emerald-400 font-semibold text-sm mt-0.5">{exp.company}</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                    <Calendar size={11} />{exp.duration}
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-slate-300 border border-white/10">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3 mb-6">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <ChevronRight size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Tools */}
              <div className="text-center">
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wide mb-2">Tools Used</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {exp.tools.map(t => (
                    <span key={t} className="tech-chip">{t}</span>
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

export default Experience;
