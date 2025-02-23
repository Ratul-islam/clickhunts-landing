import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useSpring } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const useAnimationFrame = (callback) => {
  const requestRef = useRef();
  const previousTimeRef = useRef();

  useEffect(() => {
    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        callback(deltaTime);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [callback]);
};

const FloatingParticle = ({ x, y, radius, mouse }) => {
  const baseX = useRef(x);
  const baseY = useRef(y);
  const position = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const timeOffset = useRef(Math.random() * Math.PI * 2);
  
  // Smoother springs with lower stiffness
  const springX = useSpring(0, { stiffness: 25, damping: 30 });
  const springY = useSpring(0, { stiffness: 25, damping: 30 });

  // Increase speed multiplier for faster movement
  const params = useMemo(() => ({
    speedMultiplier: 0.25 + Math.random() * 0.15,
    amplitude: 20 + Math.random() * 10,
    phaseOffset: Math.random() * Math.PI * 2,
  }), []);

  useAnimationFrame(() => {
    const time = Date.now() * 0.001 * params.speedMultiplier + timeOffset.current;
    
    // Smooth autonomous movement
    const targetX = Math.sin(time + params.phaseOffset) * params.amplitude;
    const targetY = Math.cos(time * 0.8) * params.amplitude;

    // Mouse interaction
    const dx = mouse.x - (baseX.current + position.current.x);
    const dy = mouse.y - (baseY.current + position.current.y);
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 400;

    if (distance < maxDistance && distance !== 0) {
      const force = (1 - distance / maxDistance) * 40;
      position.current.x += (dx / distance) * force * 0.01;
      position.current.y += (dy / distance) * force * 0.01;
    }

    // Smooth movement
    velocity.current.x = (targetX - position.current.x) * 0.05;
    velocity.current.y = (targetY - position.current.y) * 0.05;
    
    position.current.x += velocity.current.x;
    position.current.y += velocity.current.y;

    springX.set(position.current.x);
    springY.set(position.current.y);
  });

  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-br from-teal-200/10 to-teal-300/50"
      style={{
        width: radius * 2,
        height: radius * 2,
        x: springX,
        y: springY,
        left: baseX.current,
        top: baseY.current,
        filter: "blur(15px)",
      }}
      animate={{
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 6 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const InteractiveHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  // Create a spring for the interactive background
  const backgroundMotion = useSpring({ x: 0, y: 0 }, { stiffness: 50, damping: 30 });
  
  // Update background spring based on mouse position
  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const factor = 0.05; // adjust sensitivity as needed
    backgroundMotion.set({
      x: (mousePosition.x - centerX) * factor,
      y: (mousePosition.y - centerY) * factor,
    });
  }, [mousePosition, backgroundMotion]);
  
  // Generate base particles with better distribution
  const baseParticles = useMemo(() => {
    const cols = 4;
    const rows = 3;
    const particles = [];
    
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          id: `base-${i * rows + j}`,
          x: (window.innerWidth / (cols + 1)) * (i + 1) + (Math.random() - 0.5) * 100,
          y: (window.innerHeight / (rows + 1)) * (j + 1) + (Math.random() - 0.5) * 100,
          radius: 45 + Math.random() * 35,
        });
      }
    }
    return particles;
  }, []);

  // Generate additional particles on the top side
  const topParticles = useMemo(() => {
    const count = 6; // Adjust count as needed
    return Array.from({ length: count }).map((_, i) => ({
      id: `top-${i}`,
      x: Math.random() * window.innerWidth,
      y: Math.random() * (window.innerHeight / 2), // top half of the screen
      radius: 45 + Math.random() * 35,
    }));
  }, []);

  // Combine all particles
  const particles = useMemo(() => [...baseParticles, ...topParticles], [baseParticles, topParticles]);

  // Throttled mouse move handler attached to containerRef
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        if (!rect) return;
        
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Chart data with smooth curve
  const chartData = useMemo(() => 
    Array.from({ length: 30 }).map((_, i) => ({
      value: 75 + Math.sin(i / 5) * 15 + Math.sin(i / 3) * 5
    }))
  , []);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden"
    >
      {/* Interactive Background Layer */}
      <motion.div
        className="absolute inset-0 z-[-1] bg-gradient-to-br from-indigo-50 to-white"
        style={{
          x: backgroundMotion.x,
          y: backgroundMotion.y,
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <FloatingParticle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          radius={particle.radius}
          mouse={mousePosition}
        />
      ))}

      {/* Hero Content */}
      <div className="relative mx-auto px-8 md:px-24 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-teal-500/10 text-teal-600 border border-teal-500/20">
                Next Generation Platform
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Transform Your
              <span className="text-teal-600 block mt-2">
                Marketing Success
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Experience unprecedented growth with our advanced CPA network platform. 
              Industry-leading conversion rates and real-time analytics at your fingertips.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {[
                { label: "Average ROI", value: "385%", trend: "+12.5%" },
                { label: "Conversion Rate", value: "32.4%", trend: "+8.3%" },
                { label: "Client Retention", value: "96%", trend: "+5.2%" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-teal-600 text-sm mt-1">{stat.trend}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                className="bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-teal-700 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
              >
                Get Started Now
              </motion.button>
              <motion.button
                className="border border-teal-200 text-teal-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-teal-50 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-900 text-xl font-semibold">Performance Analytics</h3>
                  <motion.span 
                    className="text-teal-600 flex items-center gap-2"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="w-2 h-2 bg-teal-600 rounded-full"/> Live Updates
                  </motion.span>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#0D9488"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Active Users", value: "2,847", change: "+12.5%" },
                    { label: "Conversion Rate", value: "32.4%", change: "+8.3%" },
                    { label: "Avg. Revenue", value: "$12.8k", change: "+15.2%" }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50/80 backdrop-blur-sm rounded-lg p-4"
                      whileHover={{ y: -2 }}
                    >
                      <p className="text-gray-600 text-sm">{metric.label}</p>
                      <p className="text-gray-900 text-lg font-semibold mt-1">{metric.value}</p>
                      <p className="text-teal-600 text-sm">{metric.change}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHero;
