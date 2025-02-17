import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
        <style jsx>{`
        :root {
            --primary: #048998;
            --primary-dark: #037885;
            --primary-light: rgba(4, 137, 152, 0.1);
            --text-dark: #2D3748;
            --bg-light: #f8f9fa;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, sans-serif;
        }

        body {
            line-height: 1.6;
            color: var(--text-dark);
        }

        /* Header Styles */
        .header {
            background: rgba(255, 255, 255, 0.98);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 15px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            height: 50px;
        }

        .logo img {
            height: 100%;
            width: auto;
        }

        .nav-menu {
            display: flex;
            align-items: center;
            gap: 35px;
            list-style: none;
        }

        .nav-link {
            color: #666;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            transition: color 0.3s ease;
        }

        .nav-link:hover {
            color: var(--primary);
        }

        .auth-buttons {
            display: flex;
            gap: 15px;
            margin-left: 30px;
        }

        .nav-button {
            background: var(--primary);
            color: white;
            border: none;
            padding: 10px 25px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .nav-button:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(4, 137, 152, 0.2);
        }

        /* Hero Section */
        .hero {
            position: relative;
            padding: 80px 0;
            background: linear-gradient(rgba(4, 137, 152, 0.9), rgba(4, 137, 152, 0.95)),
                        url('/api/placeholder/1920/1080') center/cover;
            color: white;
            text-align: center;
        }

        .hero-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .hero-title {
            font-size: 2.5em;
            margin-bottom: 20px;
        }

        .hero-subtitle {
            font-size: 1.1em;
            opacity: 0.9;
            margin-bottom: 30px;
        }

        /* Features Section */
        .features {
            padding: 80px 0;
            background: white;
        }

        .aboutContainer {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .section-title {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-title h2 {
            color: var(--primary);
            font-size: 2em;
            margin-bottom: 10px;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .feature-card {
            background: var(--bg-light);
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 20px;
            color: var(--primary);
        }

        .feature-title {
            font-size: 1.2em;
            margin-bottom: 15px;
            color: var(--primary);
        }

        /* About Section */
        .about {
            padding: 80px 0;
            background: var(--bg-light);
        }

        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
        }

        .about-image img {
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        /* CTA Section */
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
            margin-top: 30px;
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
        }

        /* Mobile Menu */
        .mobile-nav-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--primary);
        }

        @media (max-width: 1024px) {
            .mobile-nav-toggle {
                display: block;
            }

            .nav-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                padding: 20px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                flex-direction: column;
            }

            .nav-menu.active {
                display: flex;
            }

            .auth-buttons {
                flex-direction: column;
                width: 100%;
                margin: 10px 0;
            }

            .nav-button {
                width: 100%;
                text-align: center;
            }

            .about-grid {
                grid-template-columns: 1fr;
            }

            .cta-buttons {
                flex-direction: column;
                padding: 0 20px;
            }
        }

        @media (max-width: 768px) {
            .nav-container {
                padding: 15px 20px;
            }

            .hero-title {
                font-size: 2em;
            }
        }
        `}
        
    </style>

    <section class="hero">
        <div class="hero-content">
            <h1 class="font-bold text-white">Click Hunts Network, LLC</h1>
            <p class="hero-subtitle">Established in 2023, we're committed to revolutionizing affiliate marketing through innovation, transparency, and performance-driven results.</p>
        </div>
    </section>

    <section class="features">
        <div class="aboutContainer">
            <div class="section-title">
                <h2>Why Choose Click Hunts</h2>
                <p>Innovative solutions for modern affiliate marketing</p>
            </div>

            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3 class="feature-title">Proprietary Tracking</h3>
                    <p>Advanced tracking solution meticulously developed with industry expertise</p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">👥</div>
                    <h3 class="feature-title">Dedicated Support</h3>
                    <p>Personal account managers to optimize your campaigns</p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">💰</div>
                    <h3 class="feature-title">Simplified Payments</h3>
                    <p>Straightforward payment process with no hidden fees</p>
                </div>
            </div>
        </div>
    </section>

    <section class="about">
        <div class="aboutContainer">
            <div class="about-grid">
                <div>
                    <h2>Our Mission</h2>
                    <p>The mission of CH is straightforward for an affiliate network: cultivate an environment where both advertisers and publishers can grow and thrive simultaneously. The core objective is to create a symbiotic relationship, ensuring the success of both parties within the network.</p>
                </div>
                <div class="about-image">
                    <img src="/api/placeholder/600/400" alt="Team Meeting"/>
                </div>
            </div>
        </div>
    </section>

    <section class="cta">
        <div class="aboutContainer">
            <h2>Ready to Get Started?</h2>
            <p>Join our network and start growing your business today.</p>
            <div class="cta-buttons">
                <a href="https://clickhunts.everflowclient.io/affiliate/signup" class="cta-button primary-button">BECOME AN AFFILIATE</a>
                <a href="https://clickhunts.everflowclient.io/advertiser/signup" class="cta-button secondary-button">BECOME AN ADVERTISER</a>
            </div>
        </div>
    </section>
    </div>
  );
};

export default About;
