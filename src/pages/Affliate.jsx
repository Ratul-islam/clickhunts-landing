import React from 'react'
import "../css/affliate.css"

const Affliate = () => {
  return (
    <main class="main-content">
      
        <section class="hero-section">
            <h1 class="hero-title">Affiliate Experience at Click Hunts Network</h1>
            <p class="hero-text">
                Click Hunts Network understands the needs of affiliates, so we simplify the process with the highest CPA rates, guaranteed rate-matching, and punctual payments. We offer the flexibility to create custom campaigns, access to a diverse range of offers, including exclusive CH-only deals, and dedicated Account Managers for personalized assistance.
            </p>
            <a href="https://clickhunts.everflowclient.io/affiliate/signup" class="cta-button">AFFILIATE SIGNUP</a>
        </section>

        <section class="features-section">
            <img src="https://clickhunts.com/wp-content/uploads/2024/01/marketing-phone.jpg" alt="Marketing Strategy" class="features-image"/>
            
            <div class="features-list">
                <div class="feature-item">
                    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23048998'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>" alt="Rate Icon" class="feature-icon"/>
                    <div class="feature-text">
                        <h3 class="feature-title">Attractive Rates Tailored for You</h3>
                        <p>Enjoy competitive rates that grow with your success</p>
                    </div>
                </div>

                <div class="feature-item">
                    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23048998'><path d='M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z'/></svg>" alt="Campaign Icon" class="feature-icon"/>
                    <div class="feature-text">
                        <h3 class="feature-title">Explore a Variety of Engaging Campaigns</h3>
                        <p>Access diverse, high-converting offers</p>
                    </div>
                </div>

                <div class="feature-item">
                    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23048998'><path d='M12 8V4l8 8-8 8v-4H4V8h8z'/></svg>" alt="Growth Icon" class="feature-icon"/>
                    <div class="feature-text">
                        <h3 class="feature-title">As Your Volume Grows, So Do Your Earnings</h3>
                        <p>Scale your success with our performance-based rewards</p>
                    </div>
                </div>

                <div class="feature-item">
                    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23048998'><path d='M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z'/></svg>" alt="Payment Icon" class="feature-icon"/>
                    <div class="feature-text">
                        <h3 class="feature-title">Enjoy Weekly Payments You Can Count On</h3>
                        <p>Reliable, timely payments for your peace of mind</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="join-section">
            <h2 class="join-title">Join ClickHunts Today</h2>
            <div class="join-buttons">
                <a href="https://clickhunts.everflowclient.io/affiliate/signup" class="join-button affiliate-button">BECOME AN AFFILIATE</a>
                <a href="https://clickhunts.everflowclient.io/advertiser/signup" class="join-button advertiser-button">BECOME AN ADVERTISER</a>
            </div>
        </section>
    </main>
  )
}

export default Affliate