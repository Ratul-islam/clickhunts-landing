import React from 'react'

const Privacy = () => {
  return (
    <div>
        <style jsx>{`
    :root {
      --primary: #048998;
      --primary-light: #0ab0c2;
      --primary-dark: #037885;
      --primary-bg: #e6f7f9;
      --accent: #ff7e33;
      --text-dark: #1a2b32;
      --text-light: #637381;
      --white: #ffffff;
      --gray-light: #f5f7fa;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      color: var(--text-dark);
      line-height: 1.6;
    }
    
    .privacy-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 60px 20px;
      position: relative;
      padding-bottom:0px;
    }
    
    .background-pattern {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.07;
      background-image: 
        radial-gradient(circle at 100% 0%, var(--primary) 0%, transparent 40%),
        radial-gradient(circle at 0% 100%, var(--accent) 0%, transparent 40%);
    }
    
    .header {
      text-align: center;
      margin-bottom: 3rem;
      position: relative;
    }
    
    .header::before {
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
      font-size: 2.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, #048998 0%, #037885 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    
    .subtitle {
      font-size: 1.1rem;
      color: var(--text-light);
      max-width: 700px;
      margin: 0 auto;
    }
    
    .policy-section {
      background: var(--white);
      border-radius: 16px;
      padding: 2rem;
      margin-top: 2rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
      border-left: 4px solid var(--primary);
    }
    
    h2 {
      color: var(--primary);
      font-size: 1.5rem;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 1.2rem;
    }
    
    h3 {
      color: var(--text-dark);
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }
    
    p, ul, ol {
      margin-bottom: 1.2rem;
      color: var(--text-light);
    }
    
    ul, ol {
      padding-left: 1.5rem;
    }
    
    li {
      margin-bottom: 0.5rem;
    }
    
    .effective-date {
      text-align: center;
      margin-top: 3rem;
      color: var(--text-light);
      font-size: 0.9rem;
    }
    
    .contact-us {
      background: var(--primary-bg);
      padding: 2rem;
      border-radius: 16px;
      margin-top: 2rem;
      text-align: center;
    }
    
    .contact-us h3 {
      color: var(--primary);
      margin-top: 0;
    }
    
    .contact-us p {
      margin-bottom: 1.5rem;
    }
    
    .contact-button {
      display: inline-block;
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
      color: var(--white);
      padding: 12px 25px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 6px 15px rgba(4, 137, 152, 0.25);
    }
    
    .contact-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(4, 137, 152, 0.35);
    }
    
    .footer {
      text-align: center;
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid #e5e7eb;
      color: var(--text-light);
    }
      .margin-0{
            margin-bottom:0px;
      }
    
    @media (max-width: 768px) {
      .privacy-container {
        padding: 40px 20px;
        padding-bottom: 0px;
      }
      
      .title {
        font-size: 2rem;
      }
      
      .policy-section {
        padding: 1.5rem;
      }
    }`}
  </style>
  <div class="privacy-container">
    <div class="background-pattern"></div>
    
    <div class="header">
      <h1 class="title">Privacy Policy</h1>
      <p class="subtitle">At ClickHunts Network, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains our practices regarding data collection, usage, and your rights.</p>
    </div>
    
    <div class="policy-section">
      <h2>Introduction</h2>
      <p>ClickHunts Network ("we," "our," or "us") operates a performance marketing ecosystem connecting advertisers and affiliate partners. This Privacy Policy applies to our website, platform, and services, including the advanced engagement network and all related tools and services.</p>
      <p>By accessing or using our services, you acknowledge that you have read and understand this Privacy Policy. We may update this policy periodically, and your continued use constitutes acceptance of any changes.</p>
    </div>
    
    <div class="policy-section">
      <h2>Information We Collect</h2>
      <h3>Information You Provide</h3>
      <p>When you apply to join our network, register an account, or communicate with us, we may collect:</p>
      <ul>
        <li>Contact information (name, email address, phone number)</li>
        <li>Business information (company name, website, tax ID)</li>
        <li>Account credentials (username, password)</li>
        <li>Payment information (bank details, payment methods)</li>
        <li>Communications and correspondence with us</li>
      </ul>
      
      <h3>Information Collected Automatically</h3>
      <p>When you use our platform or visit our website, we may automatically collect:</p>
      <ul>
        <li>Device information (IP address, browser type, operating system)</li>
        <li>Usage data (pages visited, time spent, actions taken)</li>
        <li>Tracking data (through cookies and similar technologies)</li>
        <li>Performance metrics (traffic sources, conversion data)</li>
      </ul>
    </div>
    
    <div class="policy-section">
      <h2>How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>Providing and improving our services</li>
        <li>Processing transactions and payments</li>
        <li>Analyzing performance and optimizing campaigns</li>
        <li>Communicating with you about our services</li>
        <li>Delivering personalized experiences and recommendations</li>
        <li>Preventing fraud and ensuring network compliance</li>
        <li>Meeting legal obligations and enforcing our terms</li>
      </ul>
    </div>
    
    <div class="policy-section">
      <h2>Tracking Technologies</h2>
      <p>Our platform uses cookies, pixels, and similar tracking technologies to:</p>
      <ul>
        <li>Enable core functionality of our platform</li>
        <li>Track conversions and attribute actions to marketing sources</li>
        <li>Analyze user behavior and platform performance</li>
        <li>Customize your experience and improve our services</li>
      </ul>
      <p>You can manage cookie preferences through your browser settings, though this may impact certain features or functionality of our platform.</p>
    </div>
    
    <div class="policy-section">
      <h2>Data Sharing and Disclosure</h2>
      <p>We may share your information with:</p>
      <ul>
        <li><strong>Advertisers and Publishers:</strong> As necessary to facilitate transactions and measure performance</li>
        <li><strong>Service Providers:</strong> Third parties that help us operate our business and platform</li>
        <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
        <li><strong>Business Partners:</strong> In connection with joint offerings or promotional activities</li>
      </ul>
      <p>We do not sell your personal information to third parties for their marketing purposes.</p>
    </div>
    
    <div class="policy-section">
      <h2>Data Security</h2>
      <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, loss, or alteration. However, no security system is impenetrable, and we cannot guarantee the absolute security of your data.</p>
      <p>We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
    </div>
    
    <div class="policy-section">
      <h2>Your Rights and Choices</h2>
      <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
      <ul>
        <li>Accessing and reviewing your information</li>
        <li>Updating or correcting inaccurate data</li>
        <li>Requesting deletion of your information</li>
        <li>Opting out of marketing communications</li>
        <li>Data portability and restriction of processing</li>
      </ul>
      <p>To exercise these rights, please contact us using the information provided below.</p>
    </div>
    
    <div class="policy-section">
      <h2>International Data Transfers</h2>
      <p>We operate globally and may transfer your information to countries with different data protection laws than your country of residence. We use appropriate safeguards to ensure your information is protected in accordance with this Privacy Policy.</p>
    </div>
    
    <div class="policy-section margin-0">
      <h2>Children's Privacy</h2>
      <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.</p>
    </div>
    
  </div>

    </div>
  )
}

export default Privacy