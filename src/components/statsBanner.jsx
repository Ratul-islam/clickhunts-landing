import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { Users, Globe, Package } from 'lucide-react';

const AnimatedNumber = ({ end, duration = 2000 }) => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '50px 0px'  // Preload before visible
  });

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? end : 0 },
    config: { duration },
    immediate: !inView
  });

  return (
    <animated.span ref={ref}>
      {number.to(n => Math.floor(n).toLocaleString())}
    </animated.span>
  );
};

const StatsBanner = () => {
  const brandColor = '#048998';
  
  const stats = [
    {
      icon: <Users className="w-4 h-4 md:w-6 md:h-8 lg:w-10" />,
      number: 210,
      suffix: "+",
      label: "Active Advertisers",
      description: "Growing partnerships"
    },
    {
      icon: <Globe className="w-4 h-4 md:w-6 md:h-8 lg:w-10" />,
      number: 7500,
      suffix: "+",
      label: "Active Publishers",
      description: "Worldwide network"
    },
    {
      icon: <Package className="w-4 h-4 md:w-6 md:h-8 lg:w-10" />,
      number: 1800,
      suffix: "+",
      label: "Active Offers",
      description: "High-converting campaigns"
    }
  ];

  return (
    <div className="w-full py-8 md:py-12 lg:py-14 bg-gray-50">
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        {/* Mobile Layout (< 768px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md"
              style={{ borderBottom: `4px solid ${brandColor}` }}
            >
              <div 
                className="mb-4 p-2 rounded-full" 
                style={{ 
                  background: `linear-gradient(45deg, ${brandColor}, ${brandColor}dd)`,
                  boxShadow: `0 4px 12px ${brandColor}33`
                }}
              >
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold mb-1" style={{ color: brandColor }}>
                <AnimatedNumber end={stat.number} />
                {stat.suffix}
              </div>
              <div className="text-sm font-medium text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Tablet & Desktop Layout (≥ 768px) */}
        <div className="hidden md:flex items-center justify-between max-w-[800px] mx-auto">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <div 
                    className="p-3 lg:p-4 rounded-2xl shadow-md"
                    style={{ 
                      background: `linear-gradient(45deg, ${brandColor}, ${brandColor}dd)`,
                      boxShadow: `0 4px 12px ${brandColor}33`
                    }}
                  >
                    <div className="text-white">{stat.icon}</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div 
                    className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2"
                    style={{ color: brandColor }}
                  >
                    <AnimatedNumber end={stat.number} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm lg:text-base font-medium text-gray-800 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>
              </div>
              
              {index < stats.length - 1 && (
                <div 
                  className="text-4xl lg:text-5xl font-light"
                  style={{ color: brandColor }}
                >
                  +
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;