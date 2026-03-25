'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FlipWords } from '@/components/FlipWords';
import { MacbookScroll } from '@/components/MacbookScroll';
import { IBMSkillCard } from '@/components/IBMSkillCard';
import { TechStackMarquee } from '@/components/TechStackMarquee';
import { ProProjectCard } from '@/components/ProProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 text-center max-w-4xl">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Building{' '}
              <FlipWords
                words={['stunning', 'intelligent', 'high-performance', 'automated', 'secure']}
                duration={3000}
                className="text-6xl md:text-8xl"
              />{' '}
              fintech solutions
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Exploring robotics, and bridging the gap between physical discipline and digital systems.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Explore My Work
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* MacBook Scroll Section */}
      <MacbookScroll title="Portfolio Showcase" />

      {/* Journey Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">The Journey</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              I started as a nobody, driven by curiosity and a singular goal: to master full-stack development. Through sleepless nights and relentless dedication, I earned the IBM Full Stack Software Developer certification. But that was just the beginning. Through deep research, countless YouTube deep-dives, and hands-on practice, my skills have evolved far beyond the certification scope.
            </p>
          </motion.div>

          {/* IBM Skill Card */}
          <div className="mb-20">
            <IBMSkillCard
              skills={['Cloud', 'React', 'Node.js', 'Python', 'Django', 'Docker', 'Kubernetes']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Professional Projects</h2>
            <p className="text-xl text-gray-300">
              Cutting-edge solutions that showcase expertise in AI, fintech, and automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProProjectCard
              title="Lara AI"
              description="A sophisticated, fine-tuned multitasking AI assistant architected, programmed, and deployed under nemm Technologies to handle complex automated tasks."
              link="https://t.me/Lara_nemm_bot"
              icon="🤖"
              tags={['AI', 'Automation', 'Telegram Bot']}
            />

            <ProProjectCard
              title="Surefire AI"
              description="Mobile application for ultra-high-accuracy market direction analysis using a dual-model debate architecture. Claude Vision analyzes charts while GPT-4 processes logic for validated signals."
              icon="📈"
              tags={['Trading', 'AI', 'Mobile']}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
        </div>
        <TechStackMarquee items={['Next.js', 'TypeScript', 'Python', 'Tailwind CSS', 'Docker', 'Node.js']} />
      </section>

      {/* Footer CTA */}
      <section className="relative py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-bold text-white mb-6">Let's Build Something Great</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's create something exceptional together.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50"
          >
            Get in Touch
            <span>→</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
