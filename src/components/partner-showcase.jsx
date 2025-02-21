import React from 'react';

const PartnersShowcase = () => {
  const brandColor = '#048998';
  // const partners = [
  //   { name: "Carter's", image: "/assets/partner/carters.svg" },
  //   { name: "Upwork", image: "/assets/partner/upwork.svg" },
  //   { name: "Tesco Mobile", image: "/assets/partner/tesco-1.svg" },
  //   { name: "Walmart", image: "/assets/partner/walmart.svg" },
  //   { name: "LightInTheBox", image: "/assets/partner/lightinthebox.svg" },
  //   { name: "Squarespace", image: "/assets/partner/squarespace.svg" }
  // ];
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
            <div className="flex logos-slide-left">
            {Array.from({ length: 19 }).map((_, index) => (
    <div
      key={`partner-left-${index}`}
      className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
    >
      <img
        src={`/assets/${index}.png`} // Ensure `partners` is an 
        // alt={partners[index]?.name}
        className="h-12 w-auto object-contain"
      />
    </div>
  ))}
            </div>
          </div>

          {/* Second row - moving left to right */}
          <div className="overflow-hidden">
            <div className="flex logos-slide-right">
            {Array.from({ length: 19 }).map((_, index) => (
    <div
      key={`partner-left-${index}`}
      className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
    >
      <img
        src={`/assets/${index}.png`} // Ensure `partners` is an 
        // alt={partners[index]?.name}
        className="h-12 w-auto object-contain"
      />
    </div>
  ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .logos-slide-left, .logos-slide-right {
          width: max-content;
        }

        .logos-slide-left {
          animation: slideLeft 40s linear infinite;
        }

        .logos-slide-right {
          animation: slideRight 40s linear infinite;
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-66.666%);
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-66.666%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .logos-slide-left:hover,
        .logos-slide-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnersShowcase;