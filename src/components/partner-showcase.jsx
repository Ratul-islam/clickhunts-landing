import React from 'react';

const PartnersShowcase = () => {
  const brandColor = '#048998';
  
  const partners = [
    { name: "Carter's", image: "/assets/partner/carters.svg"  },
    { name: "Upwork", image: "/assets/partner/upwork.svg"  },
    { name: "Tesco Mobile", image: "/assets/partner/tesco-1.svg"  },
    { name: "Walmart", image: "/assets/partner/walmart.svg" },
    { name: "LightInTheBox", image: "/assets/partner/"  },
    { name: "Squarespace", image: "/assets/partner/squarespace.svg"  },
    { name: "Morrisons", image: "/assets/partner/morrisons.svg"  },
    { name: "VICI", image: "/assets/partner/walmart.svg" }
  ];

  return (
    <div className="w-full py-20 bg-gradient-to-b from-[#F8F8FB] to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Description */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span style={{ color: brandColor }}>Partners</span>
          </h2>
          <div className="mb-8">
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              At ClickHunts, we've built strong partnerships with industry leaders 
              across diverse verticals. Our network connects premium advertisers with 
              high-performing publishers, creating success stories in digital marketing.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From global e-commerce giants to innovative tech platforms, our partners 
              trust us to deliver exceptional results through our data-driven approach 
              and cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Partners Logo Showcase */}
        <div className="relative overflow-hidden">
          {/* First Row */}
          <div className="mb-12">
            <div className="flex justify-between items-center animate-scroll">
              {partners.slice(0, 6).map((partner, index) => (
                <div 
                  key={`row1-${index}`}
                  className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div>
            <div className="flex justify-between items-center animate-scroll-reverse">
              {partners.slice(0, 6).reverse().map((partner, index) => (
                <div 
                  key={`row2-${index}`}
                  className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our growing network of successful partners and experience the power of 
            data-driven performance marketing. Let's create success stories together.
          </p>
          <button 
            className="mt-8 px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: brandColor,
              boxShadow: `0 4px 12px ${brandColor}40`
            }}
          >
            Become a Partner
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        @keyframes scroll-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          &:hover {
            animation-play-state: paused;
          }
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
          &:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
};

export default PartnersShowcase;