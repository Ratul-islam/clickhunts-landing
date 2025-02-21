import React from 'react'

const ReadyToPertner = () => {
  return (
    <div class="readyContainer">
        <div class="readyHeader">
            <h1 class="title">Ready To Partner With Us?</h1>
            <p class="subtitle">Our partnerships are built on value, scaled with trust, and measured solely by results.</p>
        </div>

        <div class="partner-grid">
            <div class="partner-card">
                <div class="icon-container">
                    <svg viewBox="0 0 200 200" width="100%" height="100%">
                        <circle cx="100" cy="100" r="60" fill="#048998" opacity="0.1"/>
                        <path d="M100 60 C 140 60, 140 140, 100 140" stroke="#048998" fill="none" stroke-width="8" stroke-linecap="round"/>
                        <circle cx="85" cy="100" r="8" fill="#048998"/>
                        <line x1="85" y1="100" x2="115" y2="100" stroke="#048998" stroke-width="8" stroke-linecap="round"/>
                    </svg>
                </div>
                <h2 class="partner-title">Advertiser Partners</h2>
                <p class="partner-description">Profitably acquire customers at scale, with zero risk.</p>
                <a href="/" class="apply-button">I'm Ready to Apply Now</a>
                <br/>
                <a href="/" class="learn-more">Tell Me More</a>
            </div>

            <div class="partner-card">
                <div class="icon-container">
                    <svg viewBox="0 0 200 200" width="100%" height="100%">
                        <path d="M40 160 L 40 120 L 80 80 L 120 120 L 160 40" stroke="#048998" stroke-width="8" fill="none" stroke-linecap="round"/>
                        <circle cx="160" cy="40" r="12" fill="#048998"/>
                    </svg>
                </div>
                <h2 class="partner-title">Affiliate Partners</h2>
                <p class="partner-description">Earn more from your traffic by promoting brands people love.</p>
                <a href="/" class="apply-button">I'm Ready to Apply Now</a>
                <br/>
                <a href="/" class="learn-more">Tell Me More</a>
            </div>
        </div>
        <style jsx>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.5;
            background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
            color: #1a202c;
            min-height: 100vh;
        }

        .readyContainer {
            max-width: 1400px;
            margin: 0 auto;
            padding: 5rem 2rem;
        }

        .readyHeader {
            text-align: center;
            margin-bottom: 5rem;
            position: relative;
        }

        .readyHeader::before {
            content: '';
            position: absolute;
            top: -30px;
            left: 50%;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(4, 137, 152, 0.08) 0%, transparent 70%);
            transform: translateX(-50%);
            z-index: -1;
        }

        .title {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #048998 0%, #037885 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }

        .subtitle {
            font-size: 1.25rem;
            color: #4a5568;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.7;
        }

        .partner-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
            margin-top: 2rem;
            perspective: 1000px;
                margin: auto;
    max-width: 900px;
        }

        .partner-card {
            background: white;
            border-radius: 2rem;
            padding: 3.5rem;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 2px solid rgba(4, 137, 152, 0.1);
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                       0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .partner-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, transparent, #048998, transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .partner-card:hover {
            transform: translateY(-10px) rotateX(2deg);
            border-color: #048998;
            box-shadow: 0 25px 30px -12px rgba(4, 137, 152, 0.15);
        }

        .partner-card:hover::before {
            opacity: 1;
        }

        .icon-container {
            width: 120px;
            height: 120px;
            margin: 0 auto 2.5rem;
            position: relative;
            transition: transform 0.3s ease;
        }

        .partner-card:hover .icon-container {
            transform: scale(1.05) translateY(-5px);
        }

        .partner-title {
            font-size: 2rem;
            font-weight: 700;
            color: #048998;
            margin-bottom: 1.5rem;
            transition: color 0.3s ease;
        }

        .partner-description {
            font-size: 1rem;
            color: #4a5568;
            margin-bottom: 2rem;
            line-height: 1.7;
        }

        .apply-button {
            display: inline-block;
            background: linear-gradient(135deg, #048998 0%, #037885 100%);
            color: white;
            padding: 1rem 2rem;
            border-radius: 1rem;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.125rem;
            transition: all 0.3s ease;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 12px rgba(4, 137, 152, 0.15);
        }

        .apply-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(4, 137, 152, 0.2);
        }

        .learn-more {
            display: inline-block;
            color: #048998;
            text-decoration: none;
            font-weight: 500;
            font-size: 1.125rem;
            position: relative;
            padding: 0.25rem 0;
        }

        .learn-more::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: #048998;
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .learn-more:hover::after {
            transform: scaleX(1);
        }

        @media (max-width: 1200px) {
            .container {
                padding: 4rem 2rem;
            }
            .title {
                font-size: 3rem;
            }
            .partner-card {
                padding: 2.5rem;
            }
        }

        @media (max-width: 992px) {
            .partner-grid {
                gap: 2rem;
            }
            .icon-container {
                width: 140px;
                height: 140px;
            }
            .partner-title {
                font-size: 2rem;
            }
        }

        @media (max-width: 768px) {
            .partner-grid {
                grid-template-columns: 1fr;
                gap: 2.5rem;
            }
            .title {
                font-size: 2.5rem;
            }
            .container {
                padding: 3rem 1.5rem;
            }
            .partner-card {
                padding: 2rem;
            }
        }

        @media (max-width: 480px) {
            .title {
                font-size: 2rem;
            }
            .subtitle {
                font-size: 1.125rem;
            }
            .partner-description {
                font-size: 1.125rem;
            }
            .apply-button {
                padding: 1rem 2rem;
                font-size: 1rem;
            }
        }

        /* Touch Device Optimizations */
        @media (hover: none) {
            .partner-card {
                transform: none !important;
            }
            .apply-button:active {
                transform: translateY(1px);
            }
        }`}
    </style>
    </div>
  )
}

export default ReadyToPertner