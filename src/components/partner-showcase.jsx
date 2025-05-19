import React from 'react';

const PartnersShowcase = () => {
  const brandColor = '#048998';
  
  return (
    <div className="w-full py-20 bg-gradient-to-b from-[#F8F8FB] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span style={{ color: brandColor }}>Partners</span>
          </h2>
          <p className="text-xl text-gray-700 mb-4 leading-relaxed">
            At ClickHunts, we've built strong partnerships with industry leaders 
            across diverse verticals. Our network connects premium advertisers with 
            high-performing publishers, creating success stories in digital marketing.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* First row - moving right to left */}
          <div className="overflow-hidden mb-12">
            <div className="logos-slide">
              <div className="logos-slide-track">
                {Array.from({ length: 19 }).map((_, index) => (
                  <div
                    key={`partner-left-${index+1}`}
                    className="logo-slide-item mx-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={`/assets/${index+1}.png`}
                      className="h-12 w-auto object-contain"
                      alt='clickhunts partner'
                    />
                  </div>
                ))}
                {/* Duplicate logos for seamless loop */}
                {Array.from({ length: 19 }).map((_, index) => (
                  <div
                    key={`partner-left-dup-${index+1}`}
                    className="logo-slide-item mx-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={`/assets/${index+1}.png`}
                      className="h-12 w-auto object-contain"
                      alt='clickhunts partner'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second row - moving left to right */}
          <div className="overflow-hidden">
            <div className="logos-slide">
              <div className="logos-slide-track-reverse">
                {Array.from({ length: 19 }).map((_, index) => (
                  <div
                    key={`partner-right-${index+1}`}
                    className="logo-slide-item mx-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={`/assets/${index+1}.png`}
                      className="h-12 w-auto object-contain"
                      alt='clickhunts partner'
                    />
                  </div>
                ))}
                {/* Duplicate logos for seamless loop */}
                {Array.from({ length: 19 }).map((_, index) => (
                  <div
                    key={`partner-right-dup-${index+1}`}
                    className="logo-slide-item mx-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={`/assets/${index+1}.png`}
                      className="h-12 w-auto object-contain"
                      alt='clickhunts partner'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .logos-slide {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .logos-slide-track {
          display: flex;
          animation: slideLeft 40s linear infinite;
          width: max-content;
        }
        
        .logos-slide-track-reverse {
          display: flex;
          animation: slideRight 40s linear infinite;
          width: max-content;
        }
        
        .logo-slide-item {
          flex-shrink: 0;
        }
        
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes slideRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .logos-slide-track:hover,
        .logos-slide-track-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnersShowcase;