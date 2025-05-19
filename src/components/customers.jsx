import React, { useState, useRef, useEffect } from 'react';

const Customers = () => {
  const [activeTab, setActiveTab] = useState('OPERATOR');
  const [containerSize, setContainerSize] = useState(0);
  const containerRef = useRef(null);
  const bgColor = '#048998';

  const tabs = ['OPERATOR', 'AFFILIATES', 'LINKS'];

  const operatorFeatures = [
    { title: 'SMS Traffic', color: 'green' },
    { title: 'Affiliates', color: 'green' },
    { title: 'Review sites', color: 'green' },
    { title: 'Facebook', color: 'green' },
    { title: 'Google', color: 'green' },
    { title: 'Links', color: 'purple' }
  ];

  const affiliateFeatures = [
    { title: 'One affiliate manager', color: 'green' },
    { title: '400+ brands', color: 'green' },
    { title: 'Affiliate Campaigns', color: 'green' },
    { title: 'Performance Knowledge', color: 'green' },
    { title: 'One invoice', color: 'green' },
    { title: 'One Tracking Platform', color: 'green' },
    { title: 'Links', color: 'purple' }
  ];

  const linkFeatures = [
    { title: 'Self Service Linkbuilding', color: 'purple' },
    { title: 'Managed Linkbuilding', color: 'purple' },
    { title: 'Content Creation', color: 'purple' },
    { title: 'Access 30+ Countries', color: 'purple' },
    { title: 'Target Outreach', color: 'purple' },
    { title: 'Industry Knowledge', color: 'purple' },
    { title: 'Network', color: 'green' }
  ];

  const content = {
    OPERATOR: {
      title: "We can help you as an Operator",
      description: `Are you an ambitious operator seeking to expand your customer base across 15+ countries? Look no further!
        Our comprehensive solution enables you to acquire customers through various channels such as Google, 
        Facebook, Instagram, and our extensive network of external affiliates.`,
      features: operatorFeatures,
      avatars: 2
    },
    AFFILIATES: {
      title: "We can help you as an Affiliate",
      description: `Gain access to our Affiliate Network with 400+ brands from multiple Operators around the world! 
        We have been running as affiliates ourselves since 2019 and gained extensive knowledge within the space.`,
      features: affiliateFeatures,
      avatars: 2
    },
    LINKS: {
      title: "We can help with Linkbuilding",
      description: `We've recently acquired a global player that specializes in iGaming and link building. 
        This acquisition, combined with our network developed over five years, makes us the perfect match for cross-border brands.`,
      features: linkFeatures,
      avatars: 1
    }
  };

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerSize(width);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const getResponsiveRadius = () => {
    return containerSize * 0.4; // 40% of container width
  };

  const getResponsiveCircleSize = () => {
    const baseSize = containerSize * 0.12; // 12% of container width
    return Math.min(Math.max(baseSize, 48), 96); // min 48px, max 96px
  };

  return (
    <div className="pb-10" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-2xl text-white hidden md:block">Customers</h1>
          <div className="bg-white rounded-full p-1 flex gap-2">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm md:text-md px-3 md:px-6 py-2 rounded-full transition-colors ${
                  activeTab === tab 
                    ? tab === 'LINKS' 
                      ? 'bg-purple-600 text-white'
                      : 'bg-green-500 text-white'
                    : 'text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Circular Diagram */}
          <div 
            ref={containerRef}
            className="relative"
            style={{ width: "clamp(200px, 20vw, 700px)", height: "clamp(200px, 20vw, 700px)" }}
          >
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 rounded-full" />
            <div className="absolute inset-8 bg-gray-800 bg-opacity-70 rounded-full" />
            <div className="absolute inset-16 bg-gray-800 bg-opacity-90 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold text-center">
                {activeTab === 'LINKS' ? 'Operator\nAffiliates' : activeTab.charAt(0) + activeTab.slice(1).toLowerCase()}
              </span>
            </div>
            
            {content[activeTab].features.map((feature, index) => {
              const angle = (index * 360) / content[activeTab].features.length;
              const radius = getResponsiveRadius()*1.3;
              const circleSize = getResponsiveCircleSize();
              const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
              const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
              
              return (
                <div
                  key={feature.title}
                  className={`absolute rounded-full flex items-center justify-center text-center text-white
                    ${feature.color === 'green' ? 'bg-green-500' : 'bg-purple-600'}`}
                  style={{
                    width: `${circleSize*1.5}px`,
                    height: `${circleSize*1.5}px`,
                    transform: `translate(${x + containerSize/7}px, ${y + containerSize/2}px)`,
                    transition: 'all 0.3s ease',
                    fontSize: `${Math.max(circleSize * 0.16, 12)}px`
                  }}
                >
                  {feature.title}
                </div>
              );
            })}
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="flex gap-2 mb-4">
              {[...Array(content[activeTab].avatars)].map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-xl bg-green-500" />
              ))}
            </div>
            <h2 className="text-3xl text-white mb-6">{content[activeTab].title}</h2>
            <p className="text-white text-lg leading-relaxed">{content[activeTab].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;