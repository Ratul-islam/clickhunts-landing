import React from 'react'
import "../css/advisers.css"

const Advisers = () => {
  return (
    <>

    
        <section class="hero-banner">
        <div class="hero-content">
            <h1 className='font-bold'>GROW YOUR BUSINESS</h1>
            <p>Performance Based Marketing. Set Your Metric. Watch the Results.</p>
        </div>
    </section>


    <main class="main-content mb-[40px]">
        <div class="title-section">
            <h2 className='font-bold text-[#048998e6]'>ClickHunts Network</h2>
            <h3 className='text-black'>The Advertiser Experience</h3>
        </div>

        <p class="description text-center">
        The Click Hunts Network is committed to its core principle as a performance-based affiliate network. We uphold transparency by eliminating set-up fees and undisclosed charges. Advertisers exclusively pay for tangible, high-quality results. Whether your preferred performance metric involves a sale, installation, download, email submission, or any other real-time action, our diverse network of affiliates excels in delivering the precise type of lead generation essential for your product’s success.
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

        {/* <div class="cta-section m-auto text-[#000]">
            <h2 className='font-bold'>Ready to Start Growing?</h2>
            <p>Join ClickHunts today and transform your advertising strategy.</p>
            <a href="https://clickhunts.everflowclient.io/advertiser/signup" class="cta-button">GET STARTED NOW</a>
        </div> */}

        <section class="cta max-w-[900px] m-auto rounded-md">
        <style jsx>
            {`
            .cta {
            padding: 60px 0;
            background: var(--primary);
            color: white;
            text-align: center;
        }

        .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .cta-button {
            display: inline-block;
            padding: 15px 40px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .primary-button {
            background: white;
            color: var(--primary);
        }

        .secondary-button {
            background: transparent;
            color: white;
            border: 2px solid white;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            color:white;
            border: 2px solid white;
        }
 @media (max-width: 1024px) {
            .cta-buttons {
                flex-direction: column;
                padding: 0 20px;
            }
        }
            `}
        </style>
        <div class="aboutContainer">
            <h2 className='text-3xl font-bold'>Ready to Get Started?</h2>
            <p>Join our network and start growing your business today.</p>
            <div class="cta-buttons">
                {/* <a href="https://clickhunts.everflowclient.io/affiliate/signup" class="cta-button primary-button">BECOME AN AFFILIATE</a> */}
                <a href="https://clickhunts.everflowclient.io/advertiser/signup" class="cta-button secondary-button">BECOME AN ADVERTISER</a>
            </div>
        </div>
    </section>

    </main>
    
    </>
  )
}

export default Advisers