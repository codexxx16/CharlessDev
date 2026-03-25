'use client';

import { motion } from 'framer-motion';

interface IBMSkillCardProps {
  skills?: string[];
}

export const IBMSkillCard = ({ skills = ['Cloud', 'React', 'Node.js', 'Python', 'Django', 'Docker', 'Kubernetes'] }: IBMSkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Glassmorphism Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl overflow-hidden">
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">IBM</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">IBM Full Stack Developer</h3>
              <p className="text-gray-300 text-sm">Professional Certification</p>
            </div>
          </div>

          <p className="text-gray-200 mb-6 leading-relaxed">
            Comprehensive certification covering cloud technologies, modern web development, and containerization. Foundation for continuous growth beyond the certification scope.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-center hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-white font-semibold text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>

          {/* Certification Badge */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-xs text-gray-400 text-center">✓ Verified Professional Credential</p>
          </div>
        </div>

        {/* Animated gradient background */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
          style={{
            background: 'linear-gradient(45deg, #0ea5e9, #06b6d4, #0ea5e9)',
            backgroundSize: '200% 200%',
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
};
