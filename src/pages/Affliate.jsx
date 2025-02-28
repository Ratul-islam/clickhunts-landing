import React from 'react'
import "../css/affliate.css"
import CTA from '../components/cta'

const Affliate = () => {
  return (
    <main class="main-content mt-10">
      
        <section class="hero-section">
            <h1 class="hero-title">Affiliate Experience at ClickHunts Network</h1>
            <p class="hero-text">
            Click Hunts Network understands the needs of affiliates, so we simplify the process with the highest CPA rates, guaranteed rate-matching, and punctual payments. We offer the flexibility to create custom campaigns, access to a diverse range of offers, including exclusive CH-only deals, and dedicated Account Managers for personalized assistance. Our solutions are scalable to accommodate your evolving requirements.
<br/>
<br/>
Our success is intricately tied to yours, and at CH, we are committed to boosting your bottom line. This involves not only matching other network’s payouts but also increasing your rates as your volume grows and expediting your pay schedule. Additionally, we aim to enhance your market reach and differentiation by assisting you in developing customized campaigns managed by your dedicated Account Manager.
<br/>
<br/>

Our aspiration is for Click Hunts Network to be more than just a convenient option for your performance-based marketing needs – we want it to be your exclusive destination. Let’s embark on this journey together; get started with us today!
            </p>
            <a href="https://clickhunts.everflowclient.io/affiliate/signup" class="bg-[#048998] text-white px-8 py-4 rounded-sm" >AFFILIATE SIGNUP</a>
        </section>

        <section class="features-section">
            <img src="/assets/home/clickhunts-marketing-plan.png" alt="Marketing Strategy" class="features-image"/>
            
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

        <CTA/>
    </main>
  )
}

export default Affliate