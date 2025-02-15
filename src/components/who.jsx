import React, { useState } from 'react';

const CompanyOverview = () => {
  const [activeTab, setActiveTab] = useState('stats');

  const TabContent = {
    stats: (
      <div className="fade-in">
        <div className="stats-grid items-center">
          <div className="stat-card">
            <div className="stat-inner">
              <div className="stat-number">+1M</div>
              <div className="stat-label">Monthly Leads</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-inner">
              <div className="stat-number">+500</div>
              <div className="stat-label">Advertisers</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-inner">
              <div className="stat-number">+2000</div>
              <div className="stat-label">HQ Publishers</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-inner">
              <div className="stat-number">+1000</div>
              <div className="stat-label">Offers</div>
            </div>
          </div>
        </div>
      </div>
    ),
    geos: (
      <div className="fade-in">
        <div className="geo-grid">
          <div className="geo-card">
            <img src="/api/placeholder/48/32" alt="US Flag" className="geo-flag" />
            <div className="geo-details">
              <h3>United States</h3>
              <p>Primary Market</p>
            </div>
          </div>
          <div className="geo-card">
            <img src="/api/placeholder/48/32" alt="CA Flag" className="geo-flag" />
            <div className="geo-details">
              <h3>Canada</h3>
              <p>Premium Traffic</p>
            </div>
          </div>
          <div className="geo-card">
            <img src="/api/placeholder/48/32" alt="UK Flag" className="geo-flag" />
            <div className="geo-details">
              <h3>United Kingdom</h3>
              <p>High Converting</p>
            </div>
          </div>
          <div className="geo-card">
            <img src="/api/placeholder/48/32" alt="AU Flag" className="geo-flag" />
            <div className="geo-details">
              <h3>Australia</h3>
              <p>Growing Market</p>
            </div>
          </div>
        </div>
      </div>
    ),
    business: (
      <div className="fade-in">
        <div className="business-grid">
          <div className="model-card">
            <div className="model-icon">CPA</div>
            <h3>Cost Per Action</h3>
            <p>Pay only for completed actions</p>
          </div>
          <div className="model-card">
            <div className="model-icon">CPL</div>
            <h3>Cost Per Lead</h3>
            <p>Lead generation focused</p>
          </div>
          <div className="model-card">
            <div className="model-icon">CPS</div>
            <h3>Cost Per Sale</h3>
            <p>Sales-driven campaigns</p>
          </div>
          <div className="model-card">
            <div className="model-icon">CPC</div>
            <h3>Cost Per Click</h3>
            <p>Traffic-based pricing</p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">WHO IS CLICKHUNTS</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A global performance marketing network connecting premium advertisers with
            high-quality publishers, delivering exceptional results through innovative
            tracking technology and dedicated support.
          </p>
        </div>



        <div className="fade-in">
        <div className="business-grid">
          <div className="model-card">
            <div className="model-icon">CPA</div>
            <h3>Cost Per Action</h3>
            <p>Pay only for completed actions</p>
          </div>
          <div className="model-card">
            <div className="model-icon">CPL</div>
            <h3>Cost Per Lead</h3>
            <p>Lead generation focused</p>
          </div>
          <div className="model-card">
            <div className="model-icon">CPS</div>
            <h3>Cost Per Sale</h3>
            <p>Sales-driven campaigns</p>
          </div>
          <div className="model-card">
            <div className="model-icon">CPC</div>
            <h3>Cost Per Click</h3>
            <p>Traffic-based pricing</p>
          </div>
        </div>
      </div>
        {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b">
            {['stats', 'geos', 'business'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-4 text-lg font-semibold transition-all duration-200
                  ${activeTab === tab 
                    ? 'text-[#048998] border-b-2 border-[#048998] bg-[#048998]/5' 
                    : 'text-gray-500 hover:text-[#048998] hover:bg-[#048998]/5'
                  }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="p-8 bg-gradient-to-br from-white to-gray-50">
            {TabContent[activeTab]}
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #048998;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #4a5568;
          font-size: 1.125rem;
        }

        .geo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .geo-card {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }

        .geo-card:hover {
          transform: translateY(-5px);
        }

        .geo-flag {
          width: 48px;
          height: 32px;
          object-fit: cover;
          border-radius: 4px;
          margin-right: 1rem;
        }

        .geo-details h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2d3748;
        }

        .geo-details p {
          color: #048998;
          font-size: 0.875rem;
        }

        .business-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .model-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }

        .model-card:hover {
          transform: translateY(-5px);
        }

        .model-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          background: #048998;
          color: white;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.25rem;
        }

        .model-card h3 {
          color: #2d3748;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .model-card p {
          color: #4a5568;
          font-size: 0.875rem;
        }

        @media (max-width: 868px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 7680px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyOverview;