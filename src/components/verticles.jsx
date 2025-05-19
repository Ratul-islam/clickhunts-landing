import React from 'react';
import { 
  DollarSign, 
  ShoppingBag, 
  Heart, 
  Target, 
  TrendingUp, 
  Trophy,
  PiggyBank,
  Home,
  ClipboardList
} from 'lucide-react';

const CategoryCell = ({ icon, title, color, delay }) => {
  const brandColor = '#048998';
  
  return (
    <div 
      className="group relative p-6 bg-white border-gray-100 transition-all duration-500 hover:z-10 animate-fadeIn"
      style={{ 
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="relative z-10 flex justify-center md:justify-start items-center md:gap-4">
        <div 
          className="flex-shrink-0 p-4 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ 
            background: `linear-gradient(135deg, ${color}15, ${color}25)`,
            color: color
          }}
        >
          {icon}
        </div>
        
        <div className="hidden md:block">
          <h3 className="text-md md:text-lg font-semibold text-gray-900 group-hover:text-[#048998] transition-colors duration-300">
            {title}
          </h3>
          <div className="w-0 group-hover:w-full h-0.5 transition-all duration-300 mt-1 rounded-full" 
            style={{ background: color }} 
          />
        </div>
      </div>

      <div className="absolute inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
        style={{
          background: `
            linear-gradient(45deg, ${color}10, transparent),
            linear-gradient(135deg, transparent, ${color}05)
          `,
          filter: 'blur(4px)'
        }}
      />
    </div>
  );
};

const Verticles = () => {
  const categories = [
    // Row 1
    [
      {
        icon: <DollarSign className="w-7 h-7" />,
        title: "Finance",
        color: "#2563eb"
      },
      {
        icon: <ShoppingBag className="w-7 h-7" />,
        title: "Ecommerce",
        color: "#048998"
      },
      {
        icon: <Heart className="w-7 h-7" />,
        title: "Health/Nutra",
        color: "#dc2626"
      }
    ],
    // Row 2
    [
      {
        icon: <Target className="w-7 h-7" />,
        title: "Sweepstakes",
        color: "#7c3aed"
      },
      {
        icon: <TrendingUp className="w-7 h-7" />,
        title: "Biz Opp",
        color: "#048998"
      },
      {
        icon: <Trophy className="w-7 h-7" />,
        title: "Sports",
        color: "#059669"
      }
    ],
    // Row 3
    [
      {
        icon: <PiggyBank className="w-7 h-7" />,
        title: "Loan",
        color: "#9333ea"
      },
      {
        icon: <Home className="w-7 h-7" />,
        title: "Real Estate",
        color: "#048998"
      },
      {
        icon: <ClipboardList className="w-7 h-7" />,
        title: "Survey",
        color: "#0891b2"
      }
    ]
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explore Our <span style={{ color: '#048998' }}>Verticals</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover high-performing offers across diverse verticals
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(#048998 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}
            />
          </div>

          <div className="relative grid divide-y divide-gray-100">
            {categories.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-3 divide-x divide-gray-100">
                {row.map((category, colIndex) => (
                  <CategoryCell 
                    key={colIndex} 
                    {...category}
                    delay={(rowIndex * 3 + colIndex) * 100}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Verticles;