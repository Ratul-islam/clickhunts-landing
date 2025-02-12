import React from 'react';
import { Rocket, Clock, Shield, Users, ChevronRight, TrendingUp, DollarSign } from 'lucide-react';

const IllustrationSVG = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full">
    <defs>
      <linearGradient id="brandGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#048998" stopOpacity="1"/>
        <stop offset="100%" stopColor="#036d78" stopOpacity="1"/>
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Dynamic Network Grid */}
    <g className="network-grid">
      {[...Array(5)].map((_, i) => (
        <g key={i}>
          <line 
            x1={160 + i * 120} 
            y1="100" 
            x2={160 + i * 120} 
            y2="500" 
            stroke="#048998" 
            strokeWidth="1" 
            strokeOpacity="0.1"
          />
          <line 
            x1="100" 
            y1={160 + i * 80} 
            x2="700" 
            y2={160 + i * 80} 
            stroke="#048998" 
            strokeWidth="1" 
            strokeOpacity="0.1"
          />
        </g>
      ))}
    </g>

    {/* Analytics Dashboard */}
    <g transform="translate(200, 150)">
      <rect width="400" height="300" rx="20" fill="white" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
      
      {/* Chart Area */}
      <g transform="translate(40, 40)">
        <path 
          d="M0 180 L80 120 L160 150 L240 60 L320 90" 
          stroke="url(#brandGradient)" 
          strokeWidth="3" 
          fill="none"
        />
        <circle cx="80" cy="120" r="6" fill="#048998"/>
        <circle cx="160" cy="150" r="6" fill="#048998"/>
        <circle cx="240" cy="60" r="6" fill="#048998"/>
        <circle cx="320" cy="90" r="6" fill="#048998"/>
      </g>

      {/* Stats Boxes */}
      {[0, 1, 2].map(i => (
        <rect 
          key={i}
          x={40 + i * 110} 
          y="220" 
          width="90" 
          height="40" 
          rx="8" 
          fill="#f8f9fa"
        />
      ))}
    </g>

    {/* Floating Elements */}
    {[...Array(6)].map((_, i) => (
      <g key={i} className={`float-animation-${i + 1}`}>
        <circle
          cx={200 + Math.random() * 400}
          cy={100 + Math.random() * 400}
          r={10 + Math.random() * 10}
          fill="#048998"
          opacity={0.1 + Math.random() * 0.2}
        />
        <text
          x={200 + Math.random() * 400}
          y={100 + Math.random() * 400}
          fontSize="16"
          fill="#048998"
          opacity="0.6"
        >
          $
        </text>
      </g>
    ))}
  </svg>
);

const PublisherSection = () => {
  const brandColor = '#048998';
  
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Tracking",
      description: "Real-time analytics and smart insights"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Fast Payments",
      description: "Weekly payouts with multiple options"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Support",
      description: "Dedicated account management"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Traffic Optimization",
      description: "Smart conversion tools and tips"
    }
  ];

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"/>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Section */}
          <div className="flex-1 max-w-xl">
            <div className="mb-8">
              <div 
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
                style={{ 
                  backgroundColor: `${brandColor}15`,
                  color: brandColor
                }}
              >
                For Publishers
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Maximize Your <span className="text-[#048998]">Earnings</span>
              </h2>
              <p className="text-lg text-gray-600">
                Join our premium network to access exclusive offers and industry-leading tools designed to boost your revenue.
              </p>
            </div>

            <div className="grid gap-5 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
                >
                  <div 
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${brandColor}12` }}
                  >
                    <div style={{ color: brandColor }}>{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: brandColor,
                boxShadow: `0 4px 12px ${brandColor}40`
              }}
            >
              Start Earning Now
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Illustration Section */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-2xl mx-auto">
              <IllustrationSVG />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10px, -10px) rotate(3deg); }
        }
        .float-animation-1 { animation: float 6s ease-in-out infinite; }
        .float-animation-2 { animation: float 7s ease-in-out infinite 1s; }
        .float-animation-3 { animation: float 5s ease-in-out infinite 2s; }
        .float-animation-4 { animation: float 8s ease-in-out infinite 3s; }
        .float-animation-5 { animation: float 6s ease-in-out infinite 4s; }
        .float-animation-6 { animation: float 7s ease-in-out infinite 5s; }
      `}</style>
    </div>
  );
};

export default PublisherSection;