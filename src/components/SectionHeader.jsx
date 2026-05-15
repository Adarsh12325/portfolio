import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Section Header
 * @param {string} eyebrow  – small label above the heading
 * @param {string} heading  – main section title
 * @param {string} [subtext] – optional paragraph below
 * @param {string} [align]  – 'center' (default) | 'left'
 * @param {string} [eyebrowColor] – tailwind color class e.g. 'text-cyan-400'
 */
const SectionHeader = ({
  eyebrow,
  heading,
  subtext,
  align = 'center',
  eyebrowColor = 'text-cyan-400',
}) => {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`flex flex-col gap-3 mb-14 ${alignClass}`}
    >
      {eyebrow && (
        <span className={`font-mono text-xs font-semibold tracking-widest uppercase ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
        {heading}
      </h2>
      {subtext && (
        <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed mt-1">
          {subtext}
        </p>
      )}
      {align === 'center' && (
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-1" />
      )}
    </motion.div>
  );
};

export default SectionHeader;
