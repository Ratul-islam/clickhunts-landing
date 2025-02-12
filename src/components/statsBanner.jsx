import React, { useState, useEffect, useRef } from 'react';
import { Users, Globe, Package, Radio } from 'lucide-react';

const AnimatedNumber = ({ end, duration = 5000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const easeOutQuart = t => 1 - Math.pow(1 - t, 4); // Smooth easing function

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * easeOutQuart(percentage)));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count.toLocaleString()}</span>;
};

const StatsBanner = () => {
  const brandColor = '#048998';
  
  const stats = [
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      number: 210,
      suffix: "+",
      label: "Active Advertisers",
      description: "Growing partnerships"
    },
    {
      icon: <Globe className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      number: 7500,
      suffix: "+",
      label: "Active Publishers",
      description: "Worldwide network"
    },
    {
      icon: <Package className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      number: 1800,
      suffix: "+",
      label: "Active Offers",
      description: "High-converting campaigns"
    },
    {
      icon: <Radio className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      number: 1,
      suffix: "",
      label: "Network",
      description: "Unified platform"
    }
  ];

  return (
    <div className="w-full py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F8F8FB' }}>
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        {/* Mobile Layout (< 768px) */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                borderBottom: `4px solid ${brandColor}`,
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div 
                className="mb-4 p-3 rounded-full" 
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
        <div className="hidden md:flex items-center justify-between">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center group transition-all duration-300">
                <div className="mb-6 transform transition-all duration-300 group-hover:scale-105">
                  <div 
                    className="p-5 lg:p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(45deg, ${brandColor}, ${brandColor}dd)`,
                      boxShadow: `0 4px 12px ${brandColor}33`
                    }}
                  >
                    <div className="text-white">{stat.icon}</div>
                  </div>
                </div>
                
                <div className="text-center transform transition-all duration-300">
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
                  className="text-4xl lg:text-5xl font-light transform hover:scale-110 transition-transform duration-300"
                  style={{ color: brandColor }}
                >
                  +
                </div>
              )}
              
              {index === stats.length - 2 && (
                <div 
                  className="text-4xl lg:text-5xl font-light transform hover:scale-110 transition-transform duration-300"
                  style={{ color: brandColor }}
                >
                  =
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