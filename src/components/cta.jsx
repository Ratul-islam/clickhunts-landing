import React from 'react'

const CTA = () => {
  return (
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
            <h2>Ready to Get Started?</h2>
            <p>Join our network and start growing your business today.</p>
            <div class="cta-buttons">
                <a href="https://clickhunts.everflowclient.io/affiliate/signup" class="cta-button primary-button">BECOME AN AFFILIATE</a>
                <a href="https://clickhunts.everflowclient.io/advertiser/signup" class="cta-button secondary-button">BECOME AN ADVERTISER</a>
            </div>
        </div>
    </section>
  )
}

export default CTA