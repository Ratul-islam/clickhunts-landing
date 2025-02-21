import '../css/topCountry.css';

const TopCountries = () => {
  const countries = [
    {
      name: "United States",
      population: "331M+ Population",
      status: "Premium Market",
      verticals: "Finance & Insurance",
      tags: ["CC Submit", "Finance","Health", "E-Commerce", "Email Submit", "Loan","Real Estate"],
      link: "/assets/flags/usa.png"
    },
    {
      name: "Canada",
      population: "38M+ Population",
      status: "High Value",
      verticals: "Health & Wellness",
      tags: ["Nutra", "CBD", "Insurance", "E-Commerce", "Health", "CBD", "Sweepstakes", "Survey"],
      link: "/assets/flags/canada.png"

    },
    {
      name: "Germany",
      population: "83M+ Population",
      status: "Growing Market",
      verticals: "Technology & Education",
      tags: [ "Health", "CBD", "COD", "E-Commerce", "Sweepstakes"],
      link: "/assets/flags/germany.jpg"

    },
    {
      name: "United Kingdom",
      population: "67M+ Population",
      status: "Premium Market",
      verticals: "Finance & Gaming",
      tags: ["E-Commerce", "Bizopp", "Email Submit", "Health"],
      link: "/assets/flags/kingdom.png"

    },
    {
      name: "Australia",
      population: "25M+ Population",
      status: "High ROI",
      verticals: "Lifestyle & Finance",
      tags: ["Bizoop", "Sweepstakes", "Health", "E-Commerce", "CBD"],
      link: "/assets/flags/aus.png"

    },
    {
      name: "New Zealand",
      population: "5M+ Population",
      status: "Emerging",
      verticals: "Education & Finance",
      tags: ["Email Submit", "Health", "E-Commerce", "Sweepstakes"],
      link: "/assets/flags/new.png"

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
                  src={country.link}
                  alt={`${country.name} flag`}
                  className="flag"
                />
                {country.name}
              </div>
              {/* <div className="stats">
                <span>{country.population}</span>
              </div> */}
              <div className="status-badge">{country.status}</div>
            </div>
            
            <div className="card-body">
              <div className="offer-section">
                {/* <div className="section-title">Top Verticals</div> */}
                {/* <div className="offer-value">{country.verticals}</div> */}
                <div className="tags flex flex-wrap justify-center items-center">
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