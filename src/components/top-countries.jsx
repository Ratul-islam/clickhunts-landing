import '../css/topCountry.css';

const TopCountries = () => {
  const countries = [
    {
      name: "United States",
      population: "331M+ Population",
      status: "Premium Market",
      verticals: "Finance & Insurance",
      tags: ["Credit Cards", "Insurance", "Trading"]
    },
    {
      name: "Canada",
      population: "38M+ Population",
      status: "High Value",
      verticals: "Health & Wellness",
      tags: ["Nutra", "CBD", "Insurance"]
    },
    {
      name: "Germany",
      population: "83M+ Population",
      status: "Growing Market",
      verticals: "Technology & Education",
      tags: ["FinTech", "E-learning", "SaaS"]
    },
    {
      name: "United Kingdom",
      population: "67M+ Population",
      status: "Premium Market",
      verticals: "Finance & Gaming",
      tags: ["Trading", "iGaming", "Crypto"]
    },
    {
      name: "Australia",
      population: "25M+ Population",
      status: "High ROI",
      verticals: "Lifestyle & Finance",
      tags: ["Dating", "Insurance", "Health"]
    },
    {
      name: "New Zealand",
      population: "5M+ Population",
      status: "Emerging",
      verticals: "Education & Finance",
      tags: ["Education", "Investments", "Green Tech"]
    }
  ];

  return (
    <div className="topContainer">
      <header className="topHeader">
        <h1 className="title">Premium Market Overview</h1>
        <p className="subtitle">
          Top-performing markets with exceptional conversion rates and premium traffic quality
        </p>
      </header>

      <div className="topGrid">
        {countries.map((country) => (
          <div key={country.name} className="card">
            <div className="card-header">
              <div className="country-name">
                <img
                  src="/api/placeholder/48/32"
                  alt={`${country.name} flag`}
                  className="flag"
                />
                {country.name}
              </div>
              <div className="stats">
                <span>{country.population}</span>
              </div>
              <div className="status-badge">{country.status}</div>
            </div>
            
            <div className="card-body">
              <div className="offer-section">
                <div className="section-title">Top Verticals</div>
                <div className="offer-value">{country.verticals}</div>
                <div className="tags">
                  {country.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCountries;