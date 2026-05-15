import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BarChart2, Database, Wrench, Zap, Award, Cpu } from 'lucide-react';
import SectionHeader from './SectionHeader';

const categories = [
  {
    icon: Code2,
    title: 'Programming',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    skills: ['Python', 'SQL', 'Java'],
  },
  {
    icon: BarChart2,
    title: 'Data Analysis & Visualization',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Excel'],
  },
  {
    icon: Database,
    title: 'Data Engineering & ETL',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    skills: ['Apache Kafka', 'Apache NiFi', 'Apache Airflow', 'Snowflake'],
  },
  {
    icon: Cpu,
    title: 'Databases',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    skills: ['MySQL', 'PostgreSQL', 'Oracle'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    skills: ['Jupyter Notebook', 'VS Code', 'Docker', 'Git', 'SharePoint', 'Power Apps'],
  },
  {
    icon: Zap,
    title: 'Automation',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    skills: ['Power Automate'],
  },
  {
    icon: Award,
    title: 'Certifications',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    skills: [
      'Microsoft Power Platform',
      'Cisco Data Analytics',
      'Oracle Database',
      'Snowflake SnowPro Associate',
      'Google Generative AI',
      'Java', 'Python', 'SQL', 'HTML/CSS',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
};

const Skills = () => (
  <section id="skills" aria-labelledby="skills-heading" className="py-28 relative">
    <div className="section-container">
      <SectionHeader
        eyebrow="Tech Stack"
        heading="Skills & Expertise"
        subtext="The tools and technologies I use to build data-driven solutions and engineering pipelines."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ staggerChildren: 0.08 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center gap-4 group"
          >
            {/* Header */}
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <cat.icon size={18} className={cat.color} />
              </div>
              <h3 className="font-bold text-white text-sm leading-tight">{cat.title}</h3>
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2 justify-center">
              {cat.skills.map(s => (
                <span key={s} className="tech-chip">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
