import React, { useState, useEffect } from 'react';

const EnhancedPaymentMethods = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const scrollInterval = setInterval(() => {
        setScrollPosition(prev => (prev >= 100 ? 0 : prev + 0.03));
      }, 20);
      return () => clearInterval(scrollInterval);
    }
  }, [isPaused]);

  const paymentMethods = [
    {
      name: 'Payoneer',
      type: 'Digital Wallet',
      description: 'Global payment platform for professionals',
      minPayout: '100 USD',
      processingTime: 'Instant',
      logo: '/assets/payment/payoneer.png'
    },
    {
      name: 'PayPal',
      type: 'Digital Payment',
      description: 'Secure online payment system',
      minPayout: '100 USD',
      processingTime: 'Instant',
      logo: '/assets/payment/paypal-3.svg'
    },
    {
      name: 'Wise',
      type: 'Money Transfer',
      description: 'International money transfers',
      minPayout: '100 USD',
      processingTime: '1-2 business days',
      logo: '/assets/payment/wise-2.png'
    },
    {
      name: 'Bank Transfer',
      type: 'Traditional',
      description: 'Direct bank-to-bank transfers',
      minPayout: '500 USD',
      processingTime: '2-5 business days',
      logo: '/assets/payment/bank.png'
    },
    {
      name: 'WebMoney',
      type: 'E-Currency',
      description: 'Electronic payment system',
      minPayout: '100 USD',
      processingTime: 'Instant',
      
      logo: '/assets/payment/webmoney.png'
    },
    {
      name: 'USDT',
      type: 'Cryptocurrency',
      description: 'Stablecoin digital currency',
      minPayout: '500 USDT',
      processingTime: '10-30 minutes',
      logo: '/assets/payment/usdt.png'
    },
    {
      name: 'Bitcoin',
      type: 'Cryptocurrency',
      description: 'Digital cryptocurrency payments',
      minPayout: '500 USD',
      processingTime: '1-2 hours',
      logo: '/assets/payment/bitcoin.jpg'
    },
    {
      name: 'Direct Deposit (ACH)',
      type: 'Traditional',
      description: 'Direct bank-to-bank transfers',
      minPayout: '100 USD',
      processingTime: '1-2 hours',
      logo: '/assets/payment/ahc.png'
    },
    {
      name: 'Capitalist',
      type: 'Traditional',
      description: 'Direct bank-to-bank transfers',
      minPayout: '100 USD',
      processingTime: '1-2 hours',
      logo: '/assets/payment/capitalist.png'
    }
  ];

  return (
    <div className="bg-white py-24 relative overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#048998]/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#048998] to-[#036d7a]">
              Payment Methods
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of secure payment options. Fast processing, competitive rates, and reliable transactions guaranteed.
          </p>
        </div>

        {/* Scrolling Container */}
        <div 
          className="relative overflow-x-hidden pb-[24px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Payment Methods */}
          <div 
            className="flex transition-transform duration-100 ease-linear"
            style={{ transform: `translateX(-${scrollPosition}%)` }}
          >
            {[...paymentMethods, ...paymentMethods].map((method, index) => (
              <div
                key={`${method.name}-${index}`}
                className="flex-none mx-4 w-96"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden">
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#048998]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Logo Section */}
                    <div className="mb-6 h-20 flex items-center justify-center bg-gray-50 rounded-xl p-4 group-hover:bg-[#048998]/5 transition-colors duration-300">
                      <img
                        src={method.logo}
                        alt={`${method.name} logo`}
                        className="h-[40px]"
                      />
                    </div>

                    {/* Method Info */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#048998] transition-colors">
                          {method.name}
                        </h3>
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#048998]/10 text-[#048998]">
                          {method.type}
                        </span>
                      </div>

                      <p className="text-gray-600">
                        {method.description}
                      </p>

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                        <div>
                          <p className="text-sm text-gray-500">Minimum Payout</p>
                          <p className="font-medium text-gray-900">{method.minPayout}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Processing Time</p>
                          <p className="font-medium text-gray-900">{method.processingTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: 'Secure Transactions',
              description: 'Enterprise-grade security protocols for all payments',
              icon: '🔒'
            },
            {
              title: 'Fast Processing',
              description: 'Quick payment processing and confirmation',
              icon: '⚡'
            },
            {
              title: 'Global Support',
              description: '24/7 dedicated payment support team',
              icon: '🌍'
            }
          ].map((feature) => (
            <div 
              key={feature.title}
              className="relative group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#048998] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#048998] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedPaymentMethods;