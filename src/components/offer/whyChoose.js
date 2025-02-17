import React from 'react'
import "./whychoose.css"

const WhyChoose = () => {
  return (
    <>
   <div class="cta-container">
        <h1 class="main-title">Unlock Your Earning Potential with ClickHunts</h1>
        
        <p class="network-intro">
            Welcome to <span class="highlight">ClickHunts LLC</span>, a leading performance marketing network that's revolutionizing the affiliate industry. We specialize in connecting premium advertisers with top-performing affiliates across multiple verticals. With our cutting-edge tracking technology, industry-leading payouts, and dedicated account management, we're committed to driving exceptional results for both advertisers and affiliates. Join our network of successful marketers and experience the perfect blend of innovation, reliability, and profitability.
        </p>

        <div class="features-grid">
            <div class="feature-item">
                <h3 class="feature-title">
                    <span class="feature-icon">💎</span>
                    Premium Campaigns & Verticals
                </h3>
                <p class="feature-description">
                    Access high-converting offers across diverse verticals with competitive payouts and exclusive deals.
                </p>
                <ul class="feature-list">
                    <li>Health & Wellness Campaigns</li>
                    <li>Finance & Business Opportunities</li>
                    <li>Entertainment & Streaming Services</li>
                    <li>Exclusive Direct Advertiser Relationships</li>
                </ul>
            </div>
            
            <div class="feature-item">
                <h3 class="feature-title">
                    <span class="feature-icon">📊</span>
                    Advanced Technology
                </h3>
                <p class="feature-description">
                    Leverage our state-of-the-art tracking and analytics platform for maximum performance.
                </p>
                <ul class="feature-list">
                    <li>Real-Time Performance Tracking</li>
                    <li>Advanced Fraud Protection</li>
                    <li>Smart Link Optimization</li>
                    <li>Comprehensive API Access</li>
                </ul>
            </div>

            <div class="feature-item">
                <h3 class="feature-title">
                    <span class="feature-icon">🚀</span>
                    Partner Success Program
                </h3>
                <p class="feature-description">
                    Benefit from our comprehensive support system designed for your success.
                </p>
                <ul class="feature-list">
                    <li>Dedicated Account Managers</li>
                    <li>Performance Optimization Tips</li>
                    <li>Regular Payment Schedules</li>
                    <li>Custom Campaign Solutions</li>
                </ul>
            </div>

            <div class="feature-item">
                <h3 class="feature-title">
                    <span class="feature-icon">💰</span>
                    Competitive Advantages
                </h3>
                <p class="feature-description">
                    Enjoy industry-leading benefits that set us apart from other networks.
                </p>
                <ul class="feature-list">
                    <li>High-Converting Offers</li>
                    <li>Flexible Payment Options</li>
                    <li>Weekly Payment Available</li>
                    <li>Performance Bonuses</li>
                </ul>
            </div>
        </div>

        <div class="cta-sections">
            <div class="cta-section">
                <h2 class="section-title">Partner Dashboard Access</h2>
                <p class="section-description">
                    Already part of our network? Access your dashboard to view offers, track performance, and manage your campaigns.
                </p>
                <a href="https://clickhunts.everflowclient.io/">
                <button class="cta-button existing-member-button">Access Dashboard</button>
                </a>
            </div>

            <div class="cta-section">
                <h2 class="section-title">Start Monetizing Today</h2>
                <p class="section-description">
                    Ready to scale your business? Join our network and start earning with premium campaigns and expert support.
                </p>
                <a href="https://clickhunts.everflowclient.io/">

                <button class="cta-button new-member-button">Become a Partner</button>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default WhyChoose