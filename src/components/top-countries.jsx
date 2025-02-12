import "../css/topCountry.css";

const TopCountries = () => {
  return (
    <div class="topContainer">
        <header class="topHeader">
            <h1 class="title">Premium Market Overview</h1>
            <p class="subtitle">Top-performing markets with exceptional conversion rates and premium traffic quality</p>
        </header>

        <div class="topGrid">
            <div class="card">
                <div class="card-header">
                    <div class="country-name">
                        <img src="/api/placeholder/48/32" alt="USA flag" class="flag"/>
                        United States
                    </div>
                    <div class="stats">
                        <span>331M+ Population</span>
                    </div>
                    <div class="status-badge">Premium Market</div>
                </div>
                <div class="card-body">
                    <div class="offer-section">
                        <div class="section-title">Top Verticals</div>
                        <div class="offer-value">Finance & Insurance</div>
                        <div class="tags">
                            <span class="tag">Credit Cards</span>
                            <span class="tag">Insurance</span>
                            <span class="tag">Trading</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="country-name">
                        <img src="/api/placeholder/48/32" alt="Canada flag" class="flag"/>
                        Canada
                    </div>
                    <div class="stats">
                        <span>38M+ Population</span>
                    </div>
                    <div class="status-badge">High Value</div>
                </div>
                <div class="card-body">
                    <div class="offer-section">
                        <div class="section-title">Top Verticals</div>
                        <div class="offer-value">Health & Wellness</div>
                        <div class="tags">
                            <span class="tag">Nutra</span>
                            <span class="tag">CBD</span>
                            <span class="tag">Insurance</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="country-name">
                        <img src="/api/placeholder/48/32" alt="Germany flag" class="flag"/>
                        Germany
                    </div>
                    <div class="stats">
                        <span>83M+ Population</span>
                    </div>
                    <div class="status-badge">Growing Market</div>
                </div>
                <div class="card-body">
                    <div class="offer-section">
                        <div class="section-title">Top Verticals</div>
                        <div class="offer-value">Technology & Education</div>
                        <div class="tags">
                            <span class="tag">FinTech</span>
                            <span class="tag">E-learning</span>
                            <span class="tag">SaaS</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="country-name">
                        <img src="/api/placeholder/48/32" alt="UK flag" class="flag"/>
                        United Kingdom
                    </div>
                    <div class="stats">
                        <span>67M+ Population</span>
                    </div>
                    <div class="status-badge">Premium Market</div>
                </div>
                <div class="card-body">
                    <div class="offer-section">
                        <div class="section-title">Top Verticals</div>
                        <div class="offer-value">Finance & Gaming</div>
                        <div class="tags">
                            <span class="tag">Trading</span>
                            <span class="tag">iGaming</span>
                            <span class="tag">Crypto</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="country-name">
                        <img src="/api/placeholder/48/32" alt="Australia flag" class="flag"/>
                        Australia
                    </div>
                    <div class="stats">
                        <span>25M+ Population</span>
                    </div>
                    <div class="status-badge">High ROI</div>
                </div>
                <div class="card-body">
                    <div class="offer-section">
                        <div class="section-title">Top Verticals</div>
                        <div class="offer-value">Lifestyle & Finance</div>
                        <div class="tags">
                            <span class="tag">Dating</span>
                            <span class="tag">Insurance</span>
                            <span class="tag">Health</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <div class="country-name">
                        <img src="/api/placeholder/48/32" alt="New Zealand flag" class="flag"/>
                        New Zealand
                    </div>
                    <div class="stats">
                        <span>5M+ Population</span>
                    </div>
                    <div class="status-badge">Emerging</div>
                </div>
                <div class="card-body">
                    <div class="offer-section">
                        <div class="section-title">Top Verticals</div>
                        <div class="offer-value">Education & Finance</div>
                        <div class="tags">
                            <span class="tag">Education</span>
                            <span class="tag">Investments</span>
                            <span class="tag">Green Tech</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TopCountries;