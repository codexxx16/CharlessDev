'use client';

import { motion } from 'framer-motion';

interface TechStackMarqueeProps {
  items?: string[];
}

export const TechStackMarquee = ({ items = ['Next.js', 'TypeScript', 'Python', 'Tailwind CSS', 'Docker', 'Node.js'] }: TechStackMarqueeProps) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden py-12 bg-gradient-to-r from-slate-900/50 via-black to-slate-900/50">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 flex-shrink-0"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
            <span className="text-white font-semibold text-sm">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
