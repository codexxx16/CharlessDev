'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MacbookScrollProps {
  image?: string;
  title?: string;
}

export const MacbookScroll = ({ image, title = 'Portfolio' }: MacbookScrollProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      const progress = Math.max(0, Math.min(1, 1 - (elementTop - windowHeight) / (elementHeight + windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen flex items-center justify-center py-20">
      <motion.div
        className="relative w-full max-w-4xl"
        style={{
          perspective: '1200px',
        }}
      >
        {/* Macbook Frame */}
        <motion.div
          className="relative mx-auto"
          style={{
            rotateX: scrollProgress * 30,
            y: scrollProgress * 50,
          }}
        >
          {/* Screen */}
          <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-900">
            <div className="aspect-video bg-gradient-to-br from-slate-900 to-black flex items-center justify-center">
              {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">{title}</h3>
                  <p className="text-gray-400">Scroll to see more</p>
                </div>
              )}
            </div>
          </div>

          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl border-8 border-gray-900 border-t-0"></div>

          {/* Bottom Bezel */}
          <div className="h-4 bg-gradient-to-b from-gray-900 to-black rounded-b-2xl"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};
