import React from 'react';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

const TestimonialCell = ({ rating, content, author, position, isCenter }) => {
  const brandColor = '#048998';
  
  return (
    <div className="relative group h-full">
      <div className={`h-full p-8 transition-all duration-500 
        ${isCenter ? 'bg-gradient-to-br from-[#04899810] to-transparent' : 'bg-white'}
      `}>
        {/* Top Quote Icon */}
        <div 
          className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ color: brandColor }}
        >
          <Quote className="w-6 h-6" />
        </div>

        {/* Content Area */}
        <div className="relative">
          {/* Rating Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 
                  ${i < rating ? 'fill-current' : 'stroke-current'}`}
                style={{ 
                  color: i < rating ? '#FFD700' : '#E5E7EB',
                  transitionDelay: `${i * 50}ms`
                }}
              />
            ))}
          </div>

          {/* Testimonial Content */}
          <div className="mb-6 text-gray-600 text-sm leading-relaxed relative">
            {content}
            <div className="absolute -left-4 top-0 w-0.5 h-0 group-hover:h-full transition-all duration-500"
              style={{ backgroundColor: brandColor }} />
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-3">
            <div 
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: brandColor }} />
              <span className="relative z-10 text-gray-700 group-hover:text-gray-900 transition-colors">
                {author[0]}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">{author}</span>
              {position && (
                <>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{position}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Hover Effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute top-0 right-0 w-12 h-12 transform -translate-x-4 translate-y-4">
            <ArrowUpRight 
              className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              style={{ color: brandColor }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsTable = () => {
  const testimonials = [
    // Row 1
    [
      {
        rating: 5,
        content: "Exceptional service with fast payments and outstanding support team always ready to help optimize campaigns.",
        author: "John Davidson",
        position: "Media Buyer"
      },
      {
        rating: 5,
        content: "Best network I've worked with. High-converting offers and excellent account management team.",
        author: "Sarah Mitchell",
        position: "Affiliate Marketer"
      },
      {
        rating: 4,
        content: "Professional team with great optimization tips and reliable weekly payments.",
        author: "Mike Reynolds",
        position: "Traffic Expert"
      }
    ],
    // Row 2
    [
      {
        rating: 5,
        content: "Consistent performance and amazing support. Payments always on time with great rates.",
        author: "Emma Thompson",
        position: "Digital Marketer"
      },
      {
        rating: 5,
        content: "Premium offers with competitive payouts. Best-in-class platform and support.",
        author: "David Lee",
        position: "Performance Manager"
      },
      {
        rating: 4,
        content: "Reliable partnership with excellent communication and optimization support.",
        author: "Lisa Parker",
        position: "Publisher"
      }
    ],
    // Row 3
    [
      {
        rating: 5,
        content: "Amazing platform with helpful account managers and high-converting campaigns.",
        author: "Alex Wilson",
        position: "Traffic Specialist"
      },
      {
        rating: 5,
        content: "Top-tier offers and consistent results. Great optimization suggestions.",
        author: "James Brown",
        position: "Marketing Lead"
      },
      {
        rating: 4,
        content: "Professional service with excellent support and competitive payouts.",
        author: "Maria Garcia",
        position: "Campaign Manager"
      }
    ]
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Partner <span style={{ color: '#048998' }}>Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of successful affiliates who trust our network
          </p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          {testimonials.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className={`grid grid-cols-3 divide-x divide-gray-100 ${
                rowIndex !== testimonials.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              {row.map((testimonial, colIndex) => (
                <TestimonialCell 
                  key={colIndex} 
                  {...testimonial}
                  isCenter={rowIndex === 1 && colIndex === 1}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="group px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 relative overflow-hidden"
            style={{ 
              backgroundColor: '#048998',
              boxShadow: '0 4px 12px rgba(4, 137, 152, 0.25)'
            }}
          >
            <span className="relative z-10">View More Reviews</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsTable;