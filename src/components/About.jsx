import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Zap, Database, Bot } from 'lucide-react';
import SectionHeader from './SectionHeader';

const focuses = [
  { icon: BarChart2, title: 'Data Analysis',          desc: 'Extracting meaningful insights from complex datasets using Python and SQL.',      color: 'from-cyan-500 to-cyan-600' },
  { icon: BarChart2, title: 'Visualization',           desc: 'Building interactive dashboards and reports with Power BI, Matplotlib & Seaborn.', color: 'from-blue-500 to-blue-600' },
  { icon: Zap,       title: 'Workflow Automation',     desc: 'Streamlining business processes with Power Automate, Power Apps and SharePoint.',  color: 'from-purple-500 to-purple-600' },
  { icon: Database,  title: 'Scalable Data Pipelines', desc: 'Designing real-time streaming pipelines with Kafka, Airflow & Snowflake.',        color: 'from-emerald-500 to-emerald-600' },
];

const currentFocuses = [
  { icon: Database,  title: 'Data Engineering',   desc: 'Building ETL pipelines and learning cloud data warehousing at scale.' },
  { icon: BarChart2, title: 'Advanced Analytics', desc: 'Exploring statistical models and business intelligence frameworks.' },
  { icon: Bot,       title: 'AI-Powered Apps',    desc: 'Integrating generative AI capabilities into data workflows.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const About = () => (
  <section id="about" aria-labelledby="about-heading" className="py-28 relative">
    <div className="absolute inset-0 bg-dot-pattern opacity-[0.04] pointer-events-none" aria-hidden="true" />

    <div className="section-container relative z-10">
      <SectionHeader
        eyebrow="Who I Am"
        heading="About Me"
        subtext="Highly motivated Data Science student with a passion for transforming raw data into actionable insights and building scalable engineering solutions."
      />

      {/* Bio + Currently Focused grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-14">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="glass-card rounded-2xl p-8 border border-white/10 flex flex-col gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-5 text-center">My Story</h3>
            <div className="space-y-4 text-slate-300 leading-relaxed text-center">
              <p>
                I'm <span className="text-white font-semibold">Adarsh Sah</span>, a B.Tech Data Science
                student at Aditya College of Engineering and Technology, specializing in Data Science and
                Data Engineering, with a strong CGPA of <span className="text-cyan-400 font-semibold">8.62</span>.
              </p>
              <p>
                I thrive at the intersection of data, automation, and engineering — building systems that
                turn messy data into clear, impactful decisions. My hands-on experience spans Python data
                pipelines, Power Platform automation, and real-time streaming with Apache Kafka and Snowflake.
              </p>
              <p>
                I'm actively looking for opportunities in{' '}
                <span className="text-blue-300 font-medium">Data Engineering</span>,{' '}
                <span className="text-cyan-300 font-medium">Data Analytics</span>, and{' '}
                <span className="text-purple-300 font-medium">AI-powered applications</span>.
              </p>
            </div>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 justify-center">
            {['Aditya College of Engineering', 'B.Tech Data Science', '2023–2027', 'CGPA: 8.62'].map(t => (
              <span key={t} className="tech-chip">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Currently Focused On */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-xl font-bold text-white text-center">Currently Focused On</h3>
          {currentFocuses.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="glass-card rounded-xl p-5 border border-white/10 flex items-center gap-4 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/25 transition-colors">
                <f.icon size={18} className="text-cyan-400" />
              </div>
              <div className="text-center flex-1">
                <p className="font-semibold text-white text-sm mb-1">{f.title}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* What I Do – 4-card grid */}
      <div>
        <h3 className="text-xl font-bold text-white mb-8 text-center">What I Do</h3>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {focuses.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center gap-3 group cursor-default"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                <f.icon size={20} className="text-white" />
              </div>
              <h4 className="font-bold text-white text-sm leading-snug">{f.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
