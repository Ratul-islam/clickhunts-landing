import React from 'react';
import { Layout, Clock, DollarSign, ArrowRight } from 'lucide-react';

const GetStartedSection = () => {
  const brandColor = '#048998';
  
  const steps = [
    {
      number: 1,
      icon: Layout,
      description: "Go to the Sign Up page, fill in your details and click 'Submit' to send your access request"
    },
    {
      number: 2,
      icon: Clock,
      description: "A ClickHunts rep will reach out to you within 24 hours to help you set up your account and walk you through it"
    },
    {
      number: 3,
      icon: DollarSign,
      description: "Whether you're a product owner or a Affiliater, now you can start selling more online with ClickHunts!"
    }
  ];

  return (
    <div className="py-10 bg-gradient-to-b from-[#048998]/5 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            How to <span style={{ color: brandColor }}>Get Started</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Signing up and selling more online with ClickHunts is easy. Here's how to do it.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div 
            className="absolute top-24 left-0 right-0 h-1 opacity-20"
            style={{ 
              background: `linear-gradient(to right, transparent, ${brandColor}, transparent)`
            }} 
          />
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center text-center w-80">
                {/* Circle with Icon */}
                <div className="relative w-48 h-48 mb-6 group">
                  <div className="absolute inset-0 rounded-full border-2 border-[#048998]/10 transition-all duration-300 group-hover:border-[#048998]/20" />
                  <div className="absolute inset-4 rounded-full bg-[#048998]/5 transition-all duration-300 group-hover:bg-[#048998]/10" />
                  <div className="absolute inset-8 rounded-full bg-[#048998]/10 transition-all duration-300 group-hover:bg-[#048998]/20" />
                  <div 
                    className="absolute inset-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{ backgroundColor: brandColor }}
                  >
                    <step.icon className="w-12 h-12 text-white" />
                  </div>

                  {/* Connector Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight 
                      className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-8 h-8 text-[#048998]/30 hidden md:block"
                    />
                  )}
                </div>
                
                {/* Step Number */}
                <div 
                  className="text-sm font-medium mb-3 px-4 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${brandColor}10`,
                    color: brandColor
                  }}
                >
                  STEP - {step.number}
                </div>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;