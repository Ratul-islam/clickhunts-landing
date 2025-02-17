import React from 'react';
import { motion } from 'framer-motion';
import home from "../assets/home.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <div className="mx-auto px-8 md:px-24 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Access The Ultimate
              <span className="text-[#048998] block mt-2">
                CPA Network Solution
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Join the most robust CPA affiliate network globally. Get access to top-converting VSLs with industry-leading payouts.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-[#04899262] flex items-center justify-center"
                >
                  <span className="text-[#048998] text-lg">✓</span>
                </motion.div>
                <p className="text-gray-700">Highest CPA payouts in the industry</p>
              </div>
              <div className="flex items-start space-x-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-[#04899262] flex items-center justify-center"
                >
                  <span className="text-[#048998] text-lg">✓</span>
                </motion.div>
                <p className="text-gray-700">Impeccable in-house tracking system</p>
              </div>
              <div className="flex items-start space-x-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-[#04899262] flex items-center justify-center"
                >
                  <span className="text-[#048998] text-lg">✓</span>
                </motion.div>
                <p className="text-gray-700">24/7 dedicated affiliate support</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#048998] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#048998] transition-colors"
            >
              Join ClickHunts Now
            </motion.button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img 
                src={home}
                alt="ClickHunts Dashboard Preview"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-[#04899262] p-2 rounded-full">
                    <svg className="w-6 h-6 text-[#048998]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Average Payout</p>
                    <p className="text-lg font-bold text-gray-900">$250+ per conversion</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;