import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal } from 'lucide-react';
import SectionHeader from './SectionHeader';

const achievements = [
  {
    icon: Medal,
    rank: '2nd Place',
    title: 'Oracle Query Quest',
    org: 'Oracle Event',
    description:
      'Solved advanced SQL challenges showcasing strong database querying, query optimization, and analytical thinking skills under competitive time constraints.',
    tags: ['SQL', 'Oracle', 'Database'],
    color: 'from-yellow-400 to-orange-500',
    badgeBg: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/25',
  },
  {
    icon: Trophy,
    rank: '1st Place',
    title: 'Mock Interview Competition',
    org: 'College Technical Fest',
    description:
      'Secured 1st place in a rigorous competition involving technical quizzes, group discussions, aptitude rounds, and core computer science interview simulations.',
    tags: ['Communication', 'CS Fundamentals', 'Problem Solving'],
    color: 'from-purple-400 to-pink-500',
    badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/25',
  },
];

const Achievements = () => (
  <section id="achievements" aria-labelledby="achievements-heading" className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-[#070d1a] pointer-events-none" aria-hidden="true" />

    <div className="section-container relative z-10">
      <SectionHeader
        eyebrow="Milestones"
        heading="Achievements"
        subtext="Recognition earned through competitive performance and technical excellence."
      />

      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col group"
          >
            {/* Gradient header */}
            <div className={`bg-gradient-to-br ${ach.color} p-6 relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_white,_transparent)]" />
              <div className="flex flex-col items-center gap-2 relative z-10 text-center">
                <ach.icon size={36} className="text-white drop-shadow-md" />
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${ach.badgeBg}`}>
                  {ach.rank}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 items-center text-center">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-wide mb-1">{ach.org}</p>
              <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-cyan-300 transition-colors">
                {ach.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{ach.description}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/8 justify-center w-full">
                {ach.tags.map(t => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
