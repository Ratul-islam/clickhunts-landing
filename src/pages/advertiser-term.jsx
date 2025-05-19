import React, { useState } from 'react';

const AdvertiserTerm = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>


<style jsx>{`

body {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
}

/* Header Styles */
.header {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 15px 40px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
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
    gap: 30px;
    list-style: none;
}

.nav-link {
    color: var(--text-dark);
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 14px;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: var(--primary);
}

.nav-link:hover::after {
    width: 100%;
}

.auth-buttons {
    display: flex;
    gap: 15px;
    margin-left: 30px;
}

.nav-button {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    color: white;
    border: none;
    padding: 10px 25px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.nav-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(4, 137, 152, 0.2);
}

/* Title Section */
.page-title {
    background: linear-gradient(rgba(4, 137, 152, 0.9), rgba(4, 137, 152, 0.9));
    color: white;
    text-align: center;
    padding: 60px 20px;
    margin-bottom: 40px;
}

.page-title h1 {
    font-size: 2.5em;
    margin-bottom: 15px;
}

.page-title p {
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
}

/* Main Content */
.terms-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px 60px;
}

.terms-section {
    margin-bottom: 30px;
    padding: 30px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.terms-section h2 {
    color: var(--primary);
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--primary-light);
}

.terms-section h3 {
    margin: 20px 0 10px;
    color: var(--text-dark);
}

.terms-section p, .terms-section li {
    margin-bottom: 15px;
    color: var(--text-dark);
}

.terms-section ul, .terms-section ol {
    margin-left: 25px;
    margin-bottom: 20px;
}

.terms-section li {
    margin-bottom: 8px;
}

.last-updated {
    text-align: right;
    color: var(--text-light);
    font-style: italic;
    margin-top: 40px;
}

/* Mobile Menu Toggle */
.mobile-nav-toggle {
    display: none;
    background: var(--primary);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    font-size: 24px;
    cursor: pointer;
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
        margin: 15px 0;
    }

    .nav-button {
        width: 100%;
        text-align: center;
    }
}

@media (max-width: 768px) {
    .page-title h1 {
        font-size: 2em;
    }

    .terms-section {
        padding: 20px;
    }
}`}
</style>

    <section class="page-title">
            <h1 className='font-bold'>Advertiser Terms and Conditions</h1>
            <p>Please review our terms and conditions carefully before
                partnering with the ClickHunts Network.</p>
      </section>

        <main class="terms-container">
            <div class="terms-section">
                <h2 className='font-bold'>1. Introduction</h2>
                <p>These Terms and Conditions ("Terms") govern the relationship
                    between advertisers ("Advertiser," "you," or "your") and
                    Click Hunts Network ("ClickHunts," "we," "us," or "our"). By
                    registering as an Advertiser or using our services, you
                    agree to comply with these Terms.</p>
                <p>ClickHunts is a performance-based affiliate network committed
                    to transparency and results-driven marketing solutions. We
                    connect Advertisers with Publishers to promote products and
                    services through various marketing channels.</p>
            </div>

            <div class="terms-section">
                <h2 className='font-bold'>2. Account Registration and Eligibility</h2>
                <p>To become an Advertiser with ClickHunts Network, you
                    must:</p>
                <ul>
                    <li>Complete the registration process through our
                        platform</li>
                    <li>Provide accurate and complete information about your
                        business</li>
                    <li>Be at least 18 years of age</li>
                    <li>Have the legal authority to bind your business to these
                        Terms</li>
                    <li>Maintain the security of your account credentials</li>
                </ul>
                <p>ClickHunts reserves the right to approve or reject any
                    application at our sole discretion. We may request
                    additional information or documentation to verify your
                    identity or business details.</p>
            </div>

            <div class="terms-section">
                <h2 className='font-bold'>3. Advertiser Responsibilities</h2>
                <p>As an Advertiser, you agree to:</p>
                <ul>
                    <li>Provide accurate and compliant marketing materials for
                        your offers</li>
                    <li>Ensure all promoted products and services comply with
                        applicable laws and regulations</li>
                    <li>Honor all conversions that meet the criteria specified
                        in your offer terms</li>
                    <li>Maintain sufficient funds in your account to cover
                        commission payments</li>
                    <li>Respond promptly to communications from ClickHunts
                        regarding your campaigns</li>
                    <li>Work collaboratively with your dedicated account
                        manager</li>
                    <li>Update your account information promptly if any changes
                        occur</li>
                </ul>
            </div>

            <div class="terms-section">
                <h2 className='font-bold'>4. Campaign Management</h2>
                <h3>4.1 Campaign Creation</h3>
                <p>Advertisers can create campaigns through the ClickHunts
                    platform. Each campaign must include:</p>
                <ul>
                    <li>Clear offer details and conversion requirements</li>
                    <li>Commission structure and payment terms</li>
                    <li>Approved marketing materials and guidelines</li>
                    <li>Target audience specifications</li>
                    <li>Any geographic or traffic source restrictions</li>
                </ul>

                <h3>4.2 Campaign Changes</h3>
                <p>You may modify your campaigns with reasonable notice.
                    However, substantial changes to commission rates, offer
                    terms, or tracking mechanisms require advance notification
                    to ClickHunts and affected Publishers.</p>

                <h3>4.3 Campaign Termination</h3>
                <p>ClickHunts reserves the right to pause or terminate campaigns
                    that:</p>
                <ul>
                    <li>Violate these Terms or applicable laws</li>
                    <li>Generate fraudulent or low-quality traffic</li>
                    <li>Receive consistent negative feedback from Publishers or
                        customers</li>
                    <li>Present risk to ClickHunts' reputation or business
                        relationships</li>
                </ul>
            </div>

            <div class="terms-section">
                <h2 className='font-bold'>5. Payments and Billing</h2>
                <h3>5.1 No Setup Fees</h3>
                <p>In line with our commitment to transparency, ClickHunts does
                    not charge setup fees for advertiser accounts or
                    campaigns.</p>

                <h3>5.2 Performance-Based Model</h3>
                <p>Advertisers only pay for tangible, high-quality results as
                    defined in their campaign terms (e.g., leads, sales,
                    installations).</p>

                <h3>5.3 Payment Terms</h3>
                <p>Advertisers agree to:</p>
                <ul>
                    <li>Fund their accounts in advance for CPA/CPL
                        campaigns</li>
                    <li>Maintain sufficient balance to cover anticipated
                        commission payments</li>
                    <li>Pay all valid conversions tracked through our
                        system</li>
                    <li>Settle any outstanding balances within the agreed
                        payment terms</li>
                </ul>

                <h3>5.4 Disputed Transactions</h3>
                <p>If you believe certain conversions are invalid, you must
                    report them within 15 days of occurrence. ClickHunts will
                    investigate and make a determination based on available data
                    and our fraud detection systems.</p>
            </div>

            <div class="terms-section">
                <h2 className='font-bold'>6. Prohibited Activities</h2>
                <p>Advertisers must not engage in or promote:</p>
                <ul>
                    <li>Illegal products, services, or activities</li>
                    <li>Content that infringes on intellectual property
                        rights</li>
                    <li>Deceptive or misleading marketing practices</li>
                    <li>Spyware, malware, or other harmful technologies</li>
                    <li>Adult content without proper age verification</li>
                    <li>Gambling without proper licensing</li>
                    <li>Products that make unsubstantiated health claims</li>
                    <li>Activities that violate ClickHunts' acceptable use
                        policies</li>
                </ul>
            </div>

            <div class="terms-section">
                <h2 className='font-bold'>7. Term and Termination</h2>
                <p>These Terms remain in effect as long as you maintain an
                    active Advertiser account with ClickHunts. Either party may
                    terminate the relationship:</p>
                <ul>
                    <li>With 30 days written notice for any reason</li>
                    <li>Immediately for material breach of these Terms</li>
                    <li>Immediately if the other party becomes insolvent or
                        files for bankruptcy</li>
                </ul>
                <p>Upon termination:</p>
                <ul>
                    <li>All active campaigns will be discontinued</li>
                    <li>Advertiser remains responsible for all valid conversions
                        occurring before termination</li>
                    <li>Any remaining balance after settling outstanding
                        payments will be refunded</li>
                    <li>Access to the ClickHunts platform will be revoked</li>
                </ul>
            </div>

            <div class="terms-section">
                <h2 className='font-bold'>8. Confidentiality and Data Protection</h2>
                <p>Both parties agree to:</p>
                <ul>
                    <li>Maintain the confidentiality of business information
                        shared during the partnership</li>
                    <li>Comply with applicable data protection and privacy
                        laws</li>
                    <li>Implement appropriate security measures to protect
                        personal data</li>
                    <li>Process customer data only for legitimate business
                        purposes related to the campaigns</li>
                </ul>
                <p>Advertisers must provide clear privacy policies and obtain
                    necessary consents for data collection and processing
                    activities related to their campaigns.</p>
            </div>

            <div class="terms-section">
                <h2 className='font-bold'>9. Intellectual Property</h2>
                <p>Advertisers retain ownership of </p>
            </div>
        </main>

    </>
  );
};

export default AdvertiserTerm;