import React, { useState, useEffect } from 'react';

const PremiumNetworkSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const paymentModels = [
    { id: 'CPA', label: 'Cost Per Action' },
    { id: 'CPL', label: 'Cost Per Lead' },
    { id: 'CPS', label: 'Cost Per Sale' },
    { id: 'CPC', label: 'Cost Per Click' },
    { id: 'CPM', label: 'Cost Per Mile' },
    { id: 'RevShare', label: 'Revenue Share' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#048998]/5"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                animation: `float ${Math.random() * 10 + 20}s infinite linear`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Network Visualization */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#048998]/10 via-transparent to-transparent opacity-30" />
              <svg viewBox="0 0 500 500" className="w-full max-w-lg mx-auto">
                {/* Core network circle */}
                <circle 
                  cx="250" 
                  cy="250" 
                  r="180" 
                  fill="none" 
                  stroke="url(#networkGradient)" 
                  strokeWidth="1"
                  strokeDasharray="8,8"
                  className="animate-spin-slow"
                />

                {/* Dynamic nodes */}
                {paymentModels.map((model, i) => {
                  const angle = (i * Math.PI * 2) / paymentModels.length;
                  const x = 250 + Math.cos(angle) * 180;
                  const y = 250 + Math.sin(angle) * 180;
                  return (
                    <g key={model.id} className="group">
                      <circle
                        cx={x}
                        cy={y}
                        r="35"
                        fill="white"
                        stroke="#048998"
                        strokeWidth="2"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#048998"
                        fontSize="12"
                        fontWeight="bold"
                        className="select-none"
                      >
                        {model.id}
                      </text>
                      <circle
                        cx={x}
                        cy={y}
                        r="35"
                        fill="#048998"
                        opacity="0"
                        className="transition-opacity duration-300 group-hover:opacity-10"
                      />
                      <line
                        x1="250"
                        y1="250"
                        x2={x}
                        y2={y}
                        stroke="#048998"
                        strokeWidth="1"
                        opacity="0.2"
                        className="transition-opacity duration-300 group-hover:opacity-50"
                      />
                    </g>
                  );
                })}

                {/* Center hub */}
                <circle
                  cx="250"
                  cy="250"
                  r="40"
                  fill="white"
                  stroke="#048998"
                  strokeWidth="2"
                  className="transition-transform duration-300 hover:scale-110"
                />
                <text
                  x="250"
                  y="250"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#048998"
                  fontSize="14"
                  fontWeight="bold"
                  className="select-none"
                >
                  ClickHunts
                </text>

                {/* Gradients */}
                <defs>
                  <linearGradient id="networkGradient" gradientTransform="rotate(45)">
                    <stop offset="0%" stopColor="#048998" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#048998" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#048998" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right side: Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div>
              <h2 className="text-[#048998] text-xl font-semibold mb-3">
                Network Excellence
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Advanced Performance Marketing Network
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join our premium network to access high-converting offers and cutting-edge tracking technology. Partner with industry leaders and scale your success.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Multiple Payment Models",
                  description: "Flexible payment options including CPA, CPL, CPS, and custom models."
                },
                {
                  title: "Smart Tracking",
                  description: "Real-time analytics and advanced conversion tracking system."
                },
                {
                  title: "Global Reach",
                  description: "Access to premium offers from worldwide advertisers."
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-xl bg-white hover:bg-gradient-to-r hover:from-[#048998]/5 hover:to-transparent transition-all duration-300 border border-gray-100 hover:border-[#048998]/20"
                >
                  <h3 className="text-gray-900 font-semibold text-xl mb-2 group-hover:text-[#048998] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center px-8 py-4 bg-[#048998] text-white font-semibold rounded-xl hover:bg-[#037885] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
              <span>Join Our Network</span>
              <svg 
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PremiumNetworkSection;