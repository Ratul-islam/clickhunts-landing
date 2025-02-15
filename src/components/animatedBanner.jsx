import React from 'react';

const AnimatedBanner = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-[#1a237e]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#048998] to-[#048998] opacity-90" />
        
        {/* Hexagon Grid */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute hexagon border-2 border-blue-400/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              width: '60px',
              height: '60px'
            }}
          />
        ))}
        
        {/* Animated Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-6xl font-bold mb-6 text-center animate-fadeIn">
          Connect & Earn
        </h1>
        <div className="text-2xl tracking-wide animate-fadeIn animation-delay-500">
          Be Modern | Be Digital
        </div>
      </div>

      <style jsx>{`
        .hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -10px) rotate(5deg); }
        }

        @keyframes particle {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(20px, -20px); opacity: 0.6; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-particle {
          animation: particle 4s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBanner;