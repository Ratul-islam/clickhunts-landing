import React from 'react'
import "../css/advisers.css"

const Advisers = () => {
  return (
    <>
        <section class="hero-banner">
        <div class="hero-content">
            <h1>GROW YOUR BUSINESS</h1>
            <p>Performance Based Marketing. Set Your Metric. Watch the Results.</p>
        </div>
    </section>


    <main class="main-content">
        <div class="title-section">
            <h2>Click Hunts Network</h2>
            <h3>The Advertiser Experience</h3>
        </div>

        <p class="description">
            The Click Hunts Network is committed to its core principle as a performance-based affiliate network. We uphold transparency by eliminating set-up fees and undisclosed charges. Advertisers exclusively pay for tangible, high-quality results.
        </p>

        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">💰</div>
                <h3 class="feature-title">No Setup Fee</h3>
                <p>Start your campaigns without any upfront costs or hidden charges.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">👥</div>
                <h3 class="feature-title">Dedicated Manager</h3>
                <p>Get personalized support from your dedicated account manager.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">📈</div>
                <h3 class="feature-title">Scale Campaigns</h3>
                <p>Easily scale your successful campaigns for maximum results.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3 class="feature-title">Quick Results</h3>
                <p>See tangible results and ROI from day one.</p>
            </div>
        </div>

        <div class="cta-section">
            <h2>Ready to Start Growing?</h2>
            <p>Join ClickHunts today and transform your advertising strategy.</p>
            <a href="https://clickhunts.everflowclient.io/advertiser/signup" class="cta-button">GET STARTED NOW</a>
        </div>
    </main>
    
    </>
  )
}

export default Advisers