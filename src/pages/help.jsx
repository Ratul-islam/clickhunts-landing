import React from 'react'

const Help = () => {
  return (
    <div>
        



        <section class="hero">
        <h1>Welcome to ClickHunts Helpdesk</h1>
        <p>Find answers, explore guides, and get the support you need to succeed.</p>
        <div class="search-bar">
            <input type="text" placeholder="Search for guides, tutorials, or FAQs..."/>
            <button>Search</button>
        </div>
    </section>


    <div class="container-help">
        <div class="categories">
            <div class="category-card">
                <div class="category-content">
                    <h2 class="category-title">
                        <span class="category-icon">🚀</span>
                        Getting Started
                    </h2>
                    <ul class="category-list">
                        <li><a href="#" class="category-link">Account Setup Guide</a></li>
                        <li><a href="#" class="category-link">Platform Overview</a></li>
                        <li><a href="#" class="category-link">First Campaign Launch</a></li>
                        <li><a href="#" class="category-link">Understanding Analytics</a></li>
                    </ul>
                </div>
                <a href="/getting-started" class="more-info-btn">Coming Soon</a>
            </div>

            <div class="category-card">
                <div class="category-content">
                    <h2 class="category-title">
                        <span class="category-icon">⚙️</span>
                        Account Management
                    </h2>
                    <ul class="category-list">
                        <li><a href="#" class="category-link">Profile Settings</a></li>
                        <li><a href="#" class="category-link">Payment Methods</a></li>
                        <li><a href="#" class="category-link">Security Settings</a></li>
                        <li><a href="#" class="category-link">Team Management</a></li>
                    </ul>
                </div>
                <a href="/account-management" class="more-info-btn">Coming Soon</a>
            </div>

            <div class="category-card">
                <div class="category-content">
                    <h2 class="category-title">
                        <span class="category-icon">📊</span>
                        Campaign Tools
                    </h2>
                    <ul class="category-list">
                        <li><a href="#" class="category-link">SmartLink Setup</a></li>
                        <li><a href="#" class="category-link">Tracking Integration</a></li>
                        <li><a href="#" class="category-link">Optimization Tips</a></li>
                        <li><a href="#" class="category-link">Performance Reports</a></li>
                    </ul>
                </div>
                <a href="/campaign-tools" class="more-info-btn">Coming Soon</a>
            </div>

            <div class="category-card">
                <div class="category-content">
                    <h2 class="category-title">
                        <span class="category-icon">💡</span>
                        Best Practices
                    </h2>
                    <ul class="category-list">
                        <li><a href="#" class="category-link">Traffic Optimization</a></li>
                        <li><a href="#" class="category-link">Conversion Tips</a></li>
                        <li><a href="#" class="category-link">Compliance Guidelines</a></li>
                        <li><a href="#" class="category-link">Success Stories</a></li>
                    </ul>
                </div>
                <a href="/best-practices" class="more-info-btn">Coming Soon</a>
            </div>

            <div class="category-card">
                <div class="category-content">
                    <h2 class="category-title">
                        <span class="category-icon">🎯</span>
                        Offer Management
                    </h2>
                    <ul class="category-list">
                        <li><a href="#" class="category-link">Finding Top Offers</a></li>
                        <li><a href="#" class="category-link">Approval Process</a></li>
                        <li><a href="#" class="category-link">Payout Structure</a></li>
                        <li><a href="#" class="category-link">Offer Requirements</a></li>
                    </ul>
                </div>
                <a href="/offer-management" class="more-info-btn">Coming Soon</a>
            </div>

            <div class="category-card">
                <div class="category-content">
                    <h2 class="category-title">
                        <span class="category-icon">🤝</span>
                        Support Resources
                    </h2>
                    <ul class="category-list">
                        <li><a href="#" class="category-link">Contact Support</a></li>
                        <li><a href="#" class="category-link">FAQ Database</a></li>
                        <li><a href="#" class="category-link">Video Tutorials</a></li>
                        <li><a href="#" class="category-link">Community Forums</a></li>
                    </ul>
                </div>
                <a href="/support-resources" class="more-info-btn">Coming Soon</a>
            </div>
        </div>
    </div>


        <style jsx>{`root {
            --primary: #048998;
            --primary-dark: #037885;
            --primary-light: #e6f4f6;
            --secondary: #FFD700;
            --text-dark: #2D3748;
            --text-light: #718096;
            --bg-light: #f7f9fc;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background-color: var(--bg-light);
        }

        /* Header Styles */
        .header {
            background: white;
            padding: 15px 40px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(4, 137, 152, 0.1);
            box-shadow: 0 2px 4px rgba(4, 137, 152, 0.05);
        }

        .nav-container-help {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            height: 60px;
            display: flex;
            align-items: center;
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
            color: var(--text-dark);
            text-decoration: none;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 14px;
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
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .nav-button:hover {
            background: var(--primary-dark);
            transform: translateY(-1px);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            padding: 60px 20px;
            text-align: center;
            margin-bottom: 40px;
        }

        .hero h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 1.2em;
            max-width: 800px;
            margin: 0 auto 30px;
            opacity: 0.9;
        }

        .search-bar {
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            gap: 10px;
            background: white;
            padding: 8px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .search-bar input {
            flex: 1;
            padding: 12px;
            border: 1px solid rgba(4, 137, 152, 0.2);
            border-radius: 6px;
            font-size: 1em;
            transition: border-color 0.3s ease;
        }

        .search-bar input:focus {
            outline: none;
            border-color: var(--primary);
        }

        .search-bar button {
            background: var(--primary);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .search-bar button:hover {
            background: var(--primary-dark);
            transform: translateY(-1px);
        }

        /* Categories */
        .container-help {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .categories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        /* Modern Card Design */
        .category-card {
            background: white;
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(4, 137, 152, 0.05);
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid rgba(4, 137, 152, 0.1);
            position: relative;
            overflow: hidden;
        }

        .category-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .category-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(4, 137, 152, 0.12);
        }

        .category-card:hover::before {
            opacity: 1;
        }

        .category-content {
            margin-bottom: 25px;
            position: relative;
            z-index: 1;
        }

        /* Enhanced Title Design */
        .category-title {
            color: var(--primary);
            font-size: 1.5em;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid var(--primary-light);
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .category-icon {
            font-size: 1.6em;
            background: var(--primary-light);
            padding: 10px;
            border-radius: 12px;
            transition: transform 0.3s ease;
        }

        .category-card:hover .category-icon {
            transform: scale(1.1) rotate(5deg);
        }

        /* Modern List Style */
        .category-list {
            list-style: none;
            margin-left: 10px;
        }

        .category-list li {
            margin: 12px 0;
            transition: transform 0.3s ease;
        }

        .category-list li:hover {
            transform: translateX(8px);
        }

        .category-link {
            color: var(--text-dark);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            border-radius: 8px;
            transition: all 0.3s ease;
            font-size: 0.95em;
        }

        .category-link::before {
            content: '→';
            color: var(--primary);
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.3s ease;
        }

        .category-link:hover {
            background: var(--primary-light);
            color: var(--primary);
            padding-left: 15px;
        }

        .category-link:hover::before {
            opacity: 1;
            transform: translateX(0);
        }

        /* Enhanced Button Style */
        .more-info-btn {
            display: inline-block;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 8px;
            text-align: center;
            font-weight: 500;
            transition: all 0.3s ease;
            margin-top: auto;
            position: relative;
            overflow: hidden;
            z-index: 1;
        }

        .more-info-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
        }

        .more-info-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(4, 137, 152, 0.2);
        }

        .more-info-btn:hover::before {
            opacity: 1;
        }

        /* Enhanced Search Bar */
        .search-bar {
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            gap: 12px;
            background: rgba(255, 255, 255, 0.95);
            padding: 10px;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
        }

        .search-bar input {
            flex: 1;
            padding: 15px;
            border: 1px solid rgba(4, 137, 152, 0.2);
            border-radius: 8px;
            font-size: 1em;
            transition: all 0.3s ease;
            background: white;
        }

        .search-bar input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(4, 137, 152, 0.1);
        }

        .search-bar button {
            background: var(--primary);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .search-bar button:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(4, 137, 152, 0.2);
        }

        .category-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(4, 137, 152, 0.1);
        }

        .category-title {
            color: var(--primary);
            font-size: 1.5em;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--primary-light);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .category-icon {
            font-size: 1.4em;
        }

        .category-list {
            list-style: none;
        }

        .category-list li {
            margin: 15px 0;
        }

        .category-link {
            color: var(--text-dark);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px;
            border-radius: 6px;
            transition: all 0.3s ease;
        }

        .category-link:hover {
            background: var(--primary-light);
            color: white;
            transform: translateX(5px);
        }

        /* Footer */
        .footer {
            background: var(--primary);
            color: white;
            padding: 30px 20px;
            margin-top: 60px;
        }

        .footer-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .footer-title {
            font-size: 1.2em;
            margin-bottom: 15px;
        }

        .footer-text {
            margin: 10px 0;
            opacity: 0.9;
        }

        .footer-link {
            color: var(--secondary);
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .footer-link:hover {
            color: white;
            text-decoration: underline;
        }

        /* Responsive Design */
        /* Mobile Navigation Styles */
        .mobile-nav-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            color: var(--primary);
            cursor: pointer;
            padding: 10px;
        }

        @media (max-width: 1024px) {
            .mobile-nav-toggle {
                display: block;
            }

            .nav-container-help {
                position: relative;
            }

            .nav-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                padding: 20px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                flex-direction: column;
                align-items: stretch;
                gap: 15px;
                border-radius: 0 0 12px 12px;
            }

            .nav-menu.active {
                display: flex;
            }

            .nav-item {
                width: 100%;
            }

            .nav-link {
                display: block;
                padding: 12px 15px;
                border-radius: 6px;
            }

            .nav-link:hover {
                background: var(--primary-light);
            }

            .auth-buttons {
                margin: 15px 0 0;
                flex-direction: column;
                gap: 10px;
            }

            .nav-button {
                width: 100%;
                text-align: center;
            }
        }

        @media (max-width: 480px) {
            .header {
                padding: 10px 15px;
            }

            .logo {
                height: 40px;
            }
        }
        `}</style>
    </div>
  )
}

export default Help
    