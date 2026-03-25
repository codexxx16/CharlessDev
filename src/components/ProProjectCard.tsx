'use client';

import { motion } from 'framer-motion';

interface ProProjectCardProps {
  title: string;
  description: string;
  link?: string;
  icon?: string;
  tags?: string[];
}

export const ProProjectCard = ({ title, description, link, icon, tags = [] }: ProProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 overflow-hidden hover:border-white/40 transition-all duration-300 shadow-2xl">
        {/* Animated gradient background */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
          style={{
            background: 'linear-gradient(45deg, #0ea5e9, #06b6d4, #8b5cf6, #0ea5e9)',
            backgroundSize: '200% 200%',
          }}
        ></motion.div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <p className="text-gray-300 text-sm">{description}</p>
            </div>
            {icon && (
              <div className="text-3xl flex-shrink-0 ml-4">
                {icon}
              </div>
            )}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-500/20 border border-cyan-500/50 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Link */}
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
              whileHover={{ x: 5 }}
            >
              View Project
              <span>→</span>
            </motion.a>
          )}
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};
