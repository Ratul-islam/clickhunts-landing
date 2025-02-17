import React from 'react';
import { delay, motion, useInView } from 'framer-motion';

const AnimatedBanner = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.2,
    once: false
  });

  const textRevealVariants = {
    hidden: { 
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        delay: .5
      }
    }
  };

  const wordRevealVariants = {
    hidden: { 
      y: 40,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.5
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="relative w-full h-[400px] overflow-hidden bg-[#1a237e]"
    >
      {/* Static Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#048998] to-[#048998] opacity-90" />
        
        {/* Static Hexagon Grid */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute hexagon border-2 border-blue-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '60px',
              height: '60px'
            }}
          />
        ))}
        
        {/* Static Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Content with Reveal Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white overflow-hidden">
        <div className="overflow-hidden">
          <motion.h1 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textRevealVariants}
            className="text-6xl font-bold mb-6 text-center"
          >
            Connect & Earn
          </motion.h1>
        </div>
        
        <div className="overflow-hidden flex gap-4">
          {["Be Modern", "|", "Be Digital"].map((text, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={wordRevealVariants}
              transition={{ delay: index * 0.1 }}
              className="text-2xl tracking-wide"
            >
              {text}
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </motion.div>
  );
};

export default AnimatedBanner;