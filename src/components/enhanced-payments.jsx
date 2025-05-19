import React, { useState } from 'react';

const EnhancedPaymentMethods = () => {
  const [isPaused, setIsPaused] = useState(false);

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
      processingTime: 'Instant',
      logo: '/assets/payment/wise-2.png'
    },
    {
      name: 'Bank Transfer',
      type: 'Local Bank',
      description: 'Direct bank-to-bank transfers',
      minPayout: '500 USD',
      processingTime: '7-15 business days',
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
      processingTime: '24 hours',
      logo: '/assets/payment/usdt.png'
    },
    {
      name: 'Bitcoin',
      type: 'Cryptocurrency',
      description: 'Digital cryptocurrency payments',
      minPayout: '500 USD',
      processingTime: '24 hours',
      logo: '/assets/payment/bitcoin.jpg'
    },
    {
      name: 'Direct Deposit (ACH)',
      type: 'Traditional',
      description: 'Direct US Bank-To-Bank Transfers',
      minPayout: '100 USD',
      processingTime: '3-7 Business Days',
      logo: '/assets/payment/ahc.png'
    },
    {
      name: 'Capitalist',
      type: 'E-wallet',
      description: 'Online E-Payment',
      minPayout: '100 USD',
      processingTime: '1-2 hours',
      logo: '/assets/payment/capitalist.png'
    }
  ];

  return (
    <div className="bg-white py-24 pb-12 relative overflow-hidden">
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
          <div className="payment-slider">
            <div className={`payment-track ${isPaused ? 'paused' : ''}`}>
              {/* First set of payment methods */}
              {paymentMethods.map((method, index) => (
                <div
                  key={`method-${index}`}
                  className="payment-item"
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
              
              {/* Duplicate set of payment methods for seamless looping */}
              {paymentMethods.map((method, index) => (
                <div
                  key={`method-dup-${index}`}
                  className="payment-item"
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
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">
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

      {/* CSS for infinite scrolling */}
      <style jsx>{`
        .payment-slider {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .payment-track {
          display: flex;
          width: max-content;
          animation: slide 60s linear infinite;
        }

        .payment-track.paused {
          animation-play-state: paused;
        }

        .payment-item {
          flex-shrink: 0;
          width: 384px; /* w-96 */
          margin-left: 16px;
          margin-right: 16px;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default EnhancedPaymentMethods;