import React from 'react';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

const TestimonialCell = ({ rating, content, author, isCenter }) => {
  const brandColor = '#048998';
  
  return (
    <div className="relative flex flex-col justify-evenly group h-full">
      <div className={`h-full p-6 transition-all duration-500 
        ${isCenter ? 'bg-gradient-to-br from-[#04899810] to-transparent' : 'bg-white'}`}
      >
        <div className="relative flex flex-col justify-between h-full">
          {/* Rating */}
          

          {/* Content */}
          <div className="mb-4 text-gray-600 text-sm leading-relaxed">
            {content}
          </div>

          <div >
          {/* Author */}
          
          <div className="flex gap-1 mb-3 ml-10">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${i < rating ? 'fill-current' : 'stroke-current'}`}
                style={{ color: i < rating ? '#FFD700' : '#E5E7EB' }}
              />
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              {author[0]}
            </div>
            <div>
            <div className="font-medium text-gray-900">{author}</div>
            </div>
          </div>


          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsTable = () => {
  const testimonials = [
    [
      {
        rating: 5,
        content: "ClickHunts is one of the best CPA networks. Nutra offer conversion rate is excellent, and the manager is friendly and helpful.",
        author: "Hailey Darby"
      },
      {
        rating: 5,
        content: "I've just received my first payout from Clickhunts directly into my Paypal account. A solid sum of $254.80 now securely rests in my Paypal balance. I highly recommend Clickhunts",
        author: "Gabriel Parker"
      },
      {
        rating: 5,
        content: "ClickHunts is the best network, fast payments, trustworthy, with friendly affiliate managers. I recommend anyone looking for the best CPA network to give ClickHunts a try.",
        author: "Luna camila"
      },
      {
        rating: 5,
        content: "I'm loving this platform! The manager is very attentive, always concerned with helping us, always bringing great offers, the offers are approved quickly and there's also the benefit of an increase in commission when we start selling well.",
        author: "Juliana Inês Alberti"
      },
      {
        rating: 5,
        content: "Working alongside the ClickHunts network over the past few weeks, my primary focus has been on delving into their offers, and I must say, the experience has left me genuinely impressed. As a co-founder of our affiliate network, establishing partnerships with reliable entities is paramount, and ClickHunts has proven to be an excellent choice.",
        author: "Andria G Skinner"
      },
      {
        rating: 5,
        content: "ClickHunts truly stands out as the premier network in the industry. With consistently prompt payments, the most competitive payouts across all offers, and unparalleled support from our dedicated AM, Matin, we strive to exceed expectations every step of the way.",
        author: "Camille"
      },
      {
        rating: 5,
        content: "Very happy to work with Click Hunts. It's an excellent network. I recommend trying their program. The support is great and quick. The payment system is really fast on high volumes.",
        author: "Marlon Tavares Lira"
      },
      {
        rating: 5,
        content: "ClickHunts is absolutely amazing! Their offers convert like magic, payouts are always on time, and the platform is incredibly user-friendly. The support team goes above and beyond—this network is a dream for any publisher. Highly, highly recommend!",
        author: "Muhammad"
      },
      {
        rating: 4,
        content: "Clickhunts is a great network, and you will be very happy working with them! It's recommended for anyone who needs real, exclusive Nutra offers.",
        author: "Hobart Steven"
      }
    ]
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span style={{ color: '#048998' }}>Partners</span> Testimonial's
          </h2>
          <p className="text-gray-600 text-lg">
            Join the growing community of successful affiliates
          </p>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          {testimonials.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className={`grid grid-cols-2 md:grid-cols-3 divide-x divide-gray-100 ${
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

        <div className="text-center mt-10">
          <button 
            className="px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#048998',
              boxShadow: '0 4px 12px rgba(4, 137, 152, 0.25)'
            }}
          >
            <a href="https://www.affpaying.com/clickhunts">
            View More Reviews
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsTable;