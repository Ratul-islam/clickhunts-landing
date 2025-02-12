import React from 'react';
import { BarChart2, Users, Shield, Target, ChevronRight, TrendingUp, DollarSign } from 'lucide-react';

const StatsDashboard = () => {
  const brandColor = '#048998';
  
  return (
    <div className="relative p-8 bg-white rounded-3xl shadow-xl">
      {/* Top Stats Row */}
      <div className="absolute top-6 right-8 bg-blue-50 rounded-lg px-4 py-2">
        <div className="text-sm text-gray-600">Last Month Revenue</div>
        <div className="text-xl font-bold text-blue-600">$8,790</div>
      </div>

      {/* Main Chart Area */}
      <div className="bg-white rounded-xl p-6 mt-4">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Performance Overview</h3>
          <p className="text-sm text-gray-500">Monthly campaign metrics</p>
        </div>
        
        <div className="h-64 relative">
          {/* Chart Bars */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-48 gap-3">
            {[65, 85, 75, 95, 80, 90, 85].map((height, index) => (
              <div key={index} className="relative flex-1">
                <div 
                  className="w-full rounded-t-lg transition-all duration-700"
                  style={{ 
                    height: `${height}%`,
                    background: `linear-gradient(to top, ${brandColor}99, ${brandColor})`
                  }}
                >
                  <div 
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium"
                    style={{ color: brandColor }}
                  >
                    {height}%
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* X-Axis Labels */}
          <div className="absolute bottom-[-24px] left-0 right-0 flex justify-between">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="text-xs text-gray-500">{day}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mt-8">
        {[
          { label: 'Active Campaigns', value: '147', icon: <BarChart2 className="w-5 h-5" /> },
          { label: 'Conversion Rate', value: '8.6%', icon: <TrendingUp className="w-5 h-5" /> },
          { label: 'Total Revenue', value: '$12.4k', icon: <DollarSign className="w-5 h-5" /> },
          { label: 'Growth', value: '+24%', icon: <TrendingUp className="w-5 h-5" /> }
        ].map((stat, index) => (
          <div 
            key={index} 
            className="bg-gray-50 rounded-xl p-4 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <div 
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${brandColor}15` }}
              >
                <div style={{ color: brandColor }}>{stat.icon}</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdvertiserSection = () => {
  const brandColor = '#048998';
  
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Premium Traffic Sources",
      description: "Access high-quality, targeted traffic from diverse channels"
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Track and optimize your campaigns in real-time"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud Prevention",
      description: "Industry-leading security and compliance measures"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "Dedicated account managers for campaign optimization"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Stats Dashboard */}
          <div className="lg:w-1/2">
            <StatsDashboard />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <div 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{ 
                backgroundColor: `${brandColor}15`,
                color: brandColor
              }}
            >
              For Advertisers
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Drive Growth with Smart Advertising
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Launch and scale your campaigns with our advanced platform. Get access to premium traffic sources and expert optimization support.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                >
                  <div 
                    className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${brandColor}15` }}
                  >
                    <div style={{ color: brandColor }}>{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: brandColor,
                boxShadow: `0 4px 12px ${brandColor}40`
              }}
            >
              Get Started Now
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserSection;