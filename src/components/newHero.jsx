import React from 'react'

const NewHero = () => {
  return (
    <>
    <style jsx>{`
    
        :root {
            --primary: #0EB19A;
            --primary-light: #E3F9F6;
            --dark: #222;
            --light: #fff;
            --gradient: linear-gradient(135deg, #0EB19A 0%, #16D6BB 100%);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f2f5fa;
            color: var(--dark);
            position: relative;
            overflow-x: hidden;
        }
        
        .not-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        header {
            padding: 2rem 0;
        }
        
        .logo {
            font-weight: 700;
            font-size: 1.8rem;
            color: var(--primary);
        }
        
        .hero {
            display: flex;
            align-items: center;
            min-height: 80vh;
            position: relative;
        }
        
        .hero-content-new {
            flex: 1;
            padding-right: 2rem;
            position: relative;
            z-index: 2;
        }
        
        .hero-image {
            flex: 1;
            position: relative;
            z-index: 2;
        }
        
        .tag {
            background-color: var(--primary-light);
            color: var(--primary);
            padding: 0.5rem 1rem;
            border-radius: 50px;
            display: inline-block;
            font-weight: 500;
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
        }
        
        h1 {
            font-size: 3.5rem;
            line-height: 1.2;
            margin-bottom: 1.5rem;
        }
        
        h1 span {
            color: var(--primary);
            display: block; className='font-bold'
        }
        
        .subtitle-new {
            font-size: 1.2rem;
            line-height: 1.6;
            color: #555;
            margin-bottom: 2.5rem;
            max-width: 90%;
        }
        
        .feature-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-bottom: 2.5rem;
        }
        
        .feature-card {
            background: var(--light);
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
        }
        
        .feature-icon {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--primary-light);
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .feature-name {
            color: var(--dark);
            font-weight: 600;
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
        }
        
        .feature-desc {
            color: #555;
            line-height: 1.5;
            font-size: 0.95rem;
        }
        
        .btn {
            padding: 0.8rem 1.8rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .btn-primary {
            background: var(--gradient);
            color: var(--light);
            border: none;
        }
        
        .btn-primary:hover {
            box-shadow: 0 5px 15px rgba(14,177,154,0.3);
            transform: translateY(-3px);
        }
        
        .dashboard {
            background: var(--light);
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #f0f0f0;
        }
        
        .dashboard-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--dark);
        }
        
        .live-tag {
            display: flex;
            align-items: center;
            color: var(--primary);
            font-weight: 500;
            font-size: 0.9rem;
        }
        
        .live-dot {
            width: 8px;
            height: 8px;
            background: var(--primary);
            border-radius: 50%;
            display: inline-block;
            margin-right: 0.5rem;
        }
        
        .dashboard-content {
            padding: 1.5rem;
        }
        
        .dashboard-chart {
            width: 100%;
            height: 200px;
            background-color: var(--primary-light);
            border-radius: 0.8rem;
            overflow: hidden;
            margin-bottom: 1.5rem;
            position: relative;
        }
        
        .chart-line {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--primary);
            transform: translateY(-50%);
        }
        
        .chart-line:before {
            content: "";
            position: absolute;
            top: -50px;
            left: 20%;
            width: 60%;
            height: 100px;
            border-radius: 50%;
            border: 2px solid var(--primary);
            border-bottom: none;
            border-left: none;
            border-right: none;
        }
        
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }
        
        .metric-card {
            background: #f9f9f9;
            padding: 1rem;
            border-radius: 0.8rem;
        }
        
        .metric-title {
            font-size: 0.9rem;
            color: #777;
            margin-bottom: 0.5rem;
        }
        
        .metric-value {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--dark);
        }
        
        .section-title {
            text-align: center;
            margin: 4rem 0 2rem;
        }
        
        .section-title h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .section-title h2 span {
            color: var(--primary);
        }
        
        .section-title p {
            color: #555;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin: 3rem 0;
        }
        
        .benefit-card {
            background: var(--light);
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .audience-label {
            display: inline-block;
            background-color: var(--primary-light);
            color: var(--primary);
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-weight: 500;
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        
        .benefit-title {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
        
        .benefit-title span {
            color: var(--primary);
        }
        
        .benefit-list {
            margin-top: 1.5rem;
        }
        
        .benefit-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 1.2rem;
        }
        
        .benefit-icon {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: var(--primary-light);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            flex-shrink: 0;
        }
        
        .benefit-content h4 {
            font-size: 1.1rem;
            margin-bottom: 0.3rem;
            color: var(--dark);
        }
        
        .benefit-content p {
            color: #555;
            font-size: 0.95rem;
            line-height: 1.5;
        }
        
        .steps-section {
            margin: 4rem 0;
            text-align: center;
        }
        
        .steps-not-container {
            display: flex;
            justify-content: space-between;
            margin-top: 3rem;
            position: relative;
        }
        
        .steps-not-container:before {
            content: "";
            position: absolute;
            top: 40px;
            left: 100px;
            right: 100px;
            height: 2px;
            background-color: #e0e0e0;
            z-index: 1;
        }
        
        .step-item {
            position: relative;
            z-index: 2;
            flex: 1;
            padding: 0 1rem;
        }
        
        .step-number {
            width: 80px;
            height: 80px;
            background: var(--light);
            border: 2px solid var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
        }
        
        .step-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.8rem;
        }
        
        .step-desc {
            color: #555;
            font-size: 0.95rem;
            line-height: 1.5;
        }
        
        .verticals-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin: 3rem 0;
        }
        
        .vertical-card {
            background: var(--light);
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
        }
        
        .vertical-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .vertical-icon {
            width: 40px;
            height: 40px;
            background-color: var(--primary-light);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            color: var(--primary);
            flex-shrink: 0;
        }
        
        .vertical-name {
            font-weight: 600;
            font-size: 1.1rem;
            color: var(--dark);
        }
        
        @media (max-width: 992px) {
            .hero {
                flex-direction: column;
                gap: 3rem;
            }
            
            .feature-cards, .metrics-grid, .benefits-grid, .verticals-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .steps-not-container {
                flex-direction: column;
                gap: 3rem;
            }
            
            .steps-not-container:before {
                left: 50%;
                top: 0;
                bottom: 0;
                width: 2px;
                height: auto;
                transform: translateX(-50%);
            }
        }
        
        @media (max-width: 576px) {
            .feature-cards, .metrics-grid, .benefits-grid, .verticals-grid {
                grid-template-columns: 1fr;
            }
            
            h1 {
                font-size: 2.5rem;
            }
        }
    `}
    </style>
    
    <div class="not-container">
        
    <section class="hero">
            <div class="hero-content-new">
                <div class="tag">Premium Affiliate Network</div>
                <h1 className='font-bold'>Transform Your <span>Marketing Success</span></h1>
                <p class="subtitle-new">Experience unprecedented growth with our advanced CPA network platform. Industry-leading conversion rates and real-time analytics at your fingertips.</p>
                
                <div class="feature-cards">
                    <div class="feature-card">
                        <div class="feature-icon">👥</div>
                        <div class="feature-name">Active Advertisers</div>
                        <p class="feature-desc">Growing partnerships across multiple verticals.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🌎</div>
                        <div class="feature-name">Active Publishers</div>
                        <p class="feature-desc">Worldwide network of quality traffic sources.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">📊</div>
                        <div class="feature-name">Active Offers</div>
                        <p class="feature-desc">High-converting campaigns across diverse markets.</p>
                    </div>
                </div>
                
                <a href="#" class="btn btn-primary">Get Started Now</a>
            </div>
            
            <div class="hero-image">
                <div class="dashboard">
                    <div class="dashboard-header">
                        <div class="dashboard-title">Performance Analytics</div>
                        <div class="live-tag">
                            <span class="live-dot"></span>
                            <span>Live Updates</span>
                        </div>
                    </div>
                    
                    <div class="dashboard-content mb-8 md:mb-0">
                        <div class="dashboard-chart">
                            <div class="chart-line"></div>
                        </div>
                        
                        <div class="metrics-grid">
                            <div class="metric-card">
                                <div class="metric-title">Active Users</div>
                                <div class="metric-value">Growing Network</div>
                            </div>
                            
                            <div class="metric-card">
                                <div class="metric-title">Conversion Rate</div>
                                <div class="metric-value">Industry-Leading</div>
                            </div>
                            
                            <div class="metric-card">
                                <div class="metric-title">Daily Avg. Revenue</div>
                                <div class="metric-value">Competitive</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default NewHero