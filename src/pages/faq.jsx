import React from 'react'
import "../css/faq.css"

const Faq = () => {
  return (
<>
    <div class="hero">
    <h1>Welcome to ClickHunts Knowledge Hub</h1>
    <p>Your complete guide to maximizing success with our industry-leading affiliate marketing platform</p>
</div>


    <div class="container">
        <aside class="sidebar">
            <h3>Quick Navigation</h3>
            <ul class="topic-list">
                <li>
                    <a href="#getting-started" class="topic-link">
                        <i class="nav-icon">🚀</i>
                        Getting Started with ClickHunts
                    </a>
                </li>
                <li>
                    <a href="#offer-apply" class="topic-link">
                        <i class="nav-icon">🎯</i>
                        Finding Offer Apply
                    </a>
                </li>
                <li>
                    <a href="#offer-link" class="topic-link">
                        <i class="nav-icon">🔗</i>
                        Offer Link Copy
                    </a>
                </li>
                <li>
                    <a href="#smartlink" class="topic-link">
                        <i class="nav-icon">📊</i>
                        Smartlink and Reports
                    </a>
                </li>
                <li>
                    <a href="#account-management" class="topic-link">
                        <i class="nav-icon">⚙️</i>
                        Account Management Guide
                    </a>
                </li>
            </ul>

            <div class="sidebar-info">
                <h4>Need Help?</h4>
                <p>Contact our support team for immediate assistance</p>
                <button class="support-button">Contact Support</button>
            </div>
        </aside>

        <main class="content">
            <section class="section" id="getting-started">
                <h2>Getting Started with ClickHunts</h2>
                <div class="info-block">
                    <h3>Welcome to ClickHunts!</h3>
                    <p>Your journey to successful affiliate marketing begins here. We've created a comprehensive platform that combines powerful tools with intuitive design to help you maximize your earnings.</p>
                </div>

                <div class="feature-grid">
                    <div class="feature-card">
                        <h3>Quick Setup</h3>
                        <p>Create your account and start promoting offers within minutes. Our streamlined onboarding process ensures you're ready to earn quickly.</p>
                    </div>
                    <div class="feature-card">
                        <h3>Dashboard Overview</h3>
                        <p>Access real-time statistics, top-performing offers, and essential tools all from your personalized dashboard.</p>
                    </div>
                    <div class="feature-card">
                        <h3>24/7 Support</h3>
                        <p>Get help anytime with our dedicated support team and comprehensive resource center.</p>
                    </div>
                </div>
            </section>

            <section class="section" id="offer-apply">
                <h2>Finding Offer Apply</h2>
                <div class="info-block">
                    <h3>Discover High-Converting Offers</h3>
                    <p>Learn how to find and apply for the best offers that match your traffic sources and audience.</p>
                </div>

                <div class="step-guide">
                    <div class="step">
                        <span class="step-number">1</span>
                        <h4>Navigate to Offers</h4>
                        <p>Click the "Offers" section in your dashboard's left sidebar</p>
                    </div>
                    <div class="step">
                        <span class="step-number">2</span>
                        <h4>Browse Categories</h4>
                        <p>Filter offers by category, payout, or geography</p>
                    </div>
                    <div class="step">
                        <span class="step-number">3</span>
                        <h4>Apply for Offers</h4>
                        <p>Click "Apply" on desired offers to request approval</p>
                    </div>
                </div>

                <div class="video-container">
                    <iframe src="about:blank" title="Finding and Applying for Offers" allowfullscreen></iframe>
                </div>
            </section>

            <section class="section" id="offer-link">
                <h2>Offer Link Copy</h2>
                <div class="info-block">
                    <h3>Generate Your Tracking Links</h3>
                    <p>Learn how to create and manage your affiliate tracking links for maximum conversion tracking.</p>
                </div>

                <div class="feature-grid">
                    <div class="feature-card">
                        <h3>Custom Parameters</h3>
                        <p>Add custom tracking parameters to monitor traffic sources and campaigns</p>
                    </div>
                    <div class="feature-card">
                        <h3>Deep Linking</h3>
                        <p>Create direct links to specific product pages or offers</p>
                    </div>
                    <div class="feature-card">
                        <h3>Link Management</h3>
                        <p>Organize and track multiple campaign links efficiently</p>
                    </div>
                </div>
            </section>

            <section class="section" id="smartlink">
                <h2>Smartlink and Check Smartlink Report</h2>
                <div class="info-block">
                    <h3>Maximize Earnings with SmartLinks</h3>
                    <p>Our intelligent link routing system automatically directs traffic to the highest-converting offers based on user data and behavior patterns.</p>
                </div>

                <div class="feature-grid">
                    <div class="feature-card highlight">
                        <h3>Real-Time Optimization</h3>
                        <p>SmartLinks automatically adjust routing based on performance metrics</p>
                    </div>
                    <div class="feature-card highlight">
                        <h3>Performance Analytics</h3>
                        <p>Track SmartLink performance with detailed reporting tools</p>
                    </div>
                </div>

                <div class="report-guide">
                    <h3>Accessing Your Reports</h3>
                    <ul class="check-list">
                        <li>View conversion rates by traffic source</li>
                        <li>Analyze earnings per click and ROI</li>
                        <li>Monitor traffic quality metrics</li>
                        <li>Export detailed performance data</li>
                    </ul>
                </div>
            </section>

            <section class="section" id="account-management">
                <h2>Account Management Guide</h2>
                <div class="info-block">
                    <h3>Company Settings & Configuration</h3>
                    <p>Learn how to customize your account settings and optimize your workflow.</p>
                </div>

                <div class="settings-guide">
                    <div class="setting-category">
                        <h4>Profile Settings</h4>
                        <ul class="settings-list">
                            <li>Update company information</li>
                            <li>Manage user access</li>
                            <li>Configure notification preferences</li>
                        </ul>
                    </div>
                    <div class="setting-category">
                        <h4>Payment Settings</h4>
                        <ul class="settings-list">
                            <li>Add payment methods</li>
                            <li>Set payment thresholds</li>
                            <li>View payment history</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>

        </div>
        </>             
  )
}

export default Faq;