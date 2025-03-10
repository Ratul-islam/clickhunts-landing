import React from 'react'

const Payment = () => {
  return (
    <div className='max-w-[1000px] mx-auto'>

<style jsx>{`

        /* Header Styles */
        .header-container {
            position: relative;
            text-align: center;
            margin: 40px 0 60px;
            padding: 30px;
        }

        .header-box {
            position: relative;
            display: inline-block;
            padding: 20px 60px;
        }

        .header-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 3px solid #00A3B4;
            border-radius: 10px;
            transform: skew(-3deg);
        }

        .header-box::after {
            content: '';
            position: absolute;
            top: 10px;
            left: 10px;
            right: -10px;
            bottom: -10px;
            background: rgba(0, 163, 180, 0.1);
            border-radius: 10px;
            transform: skew(-3deg);
            z-index: -1;
        }

        h1 {
            color: #00A3B4;
            font-size: 36px;
            margin: 0;
            position: relative;
            z-index: 1;
        }

        /* Payment Schedules Section */
        .category {
            background: #f9f9f9;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .category-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            border-bottom: 2px solid #00A3B4;
            padding-bottom: 10px;
        }

        .category-name {
            color: #00A3B4;
            font-weight: bold;
            font-size: 18px;
        }

        .category-date {
            color: #5D4037;
            font-weight: bold;
            font-size: 16px;
        }

        /* Payout Details Section */
        .payout-container {
            position: relative;
            padding: 40px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            margin: 40px 0;
        }

        .payout-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            position: relative;
        }

        .payout-item {
            background: #ffffff;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            border: 1px solid #f0f0f0;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .payout-item::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, transparent 50%, rgba(0, 163, 180, 0.1) 50%);
            border-radius: 0 15px 0 100%;
        }

        .payout-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border-color: #00A3B4;
        }

        /* FAQ Section */
        .faq-section {
            background: white;
            border-radius: 20px;
            padding: 40px;
            margin-top: 60px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .faq-item {
            margin-bottom: 30px;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 10px;
            border-left: 4px solid #00A3B4;
        }

        .faq-question {
            color: #00A3B4;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .faq-answer {
            color: #5D4037;
            font-size: 15px;
            line-height: 1.6;
        }

        /* Common Elements */
        h2 {
            color: #00A3B4;
            font-size: 32px;
            text-align: center;
            margin: 40px 0;
            position: relative;
            padding-bottom: 15px;
        }

        h2::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 3px;
            background: linear-gradient(90deg, #00A3B4, #4CAF50);
            border-radius: 2px;
        }

        .highlight-text {
            color: #00A3B4;
            font-weight: bold;
        }

        .bullet-list {
            list-style: none;
            padding-left: 25px;
            margin: 15px 0;
        }

        .bullet-list li {
            position: relative;
            margin: 10px 0;
            padding-left: 20px;
        }

        .bullet-list li::before {
            content: "\u272A";
            position: absolute;
            left: -5px;
            color: rgba(76, 175, 80, 0.5);
            font-size: 14px;
        }

        /* Footer */
        .footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 10px;
        }

        .footer p {
            margin: 10px 0;
            color: #5D4037;
        }

        /* Timeline */
        .timeline {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
            padding: 20px;
            background: #fff;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .timeline-step {
            text-align: center;
            position: relative;
            flex: 1;
        }

        .timeline-step:not(:last-child)::after {
            content: "";
            position: absolute;
            right: -10px;
            top: 50%;
            transform: translateY(-50%);
            color: #00A3B4;
        }

        .timeline-date {
            font-weight: bold;
            color: #00A3B4;
        }

        /* Method Details */
        .method-name {
            color: #00A3B4;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #f0f0f0;
            position: relative;
        }

        .detail-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 12px 0;
            font-size: 15px;
        }

        .fee-covered {
            color: #4CAF50;
            font-size: 13px;
            margin-top: 15px;
            padding: 8px;
            background: rgba(76, 175, 80, 0.1);
            border-radius: 8px;
            text-align: center;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0 auto;
        }

        .category {
            margin-bottom: 30px;
        }

        .category-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #00A3B4;
            margin-bottom: 15px;
            padding-bottom: 8px;
        }

        .category-name {
            color: #00A3B4;
            font-size: 18px;
            font-weight: bold;
        }

        .category-date {
            color: #5D4037;
            font-size: 16px;
        }

        .payment-info {
            color: #5D4037;
            margin: 15px 0;
            line-height: 1.6;
        }

        .timeline-section {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin: 20px 0;
            padding: 20px;
        }

        .timeline-header {
            color: #00A3B4;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e0e0e0;
        }

        .timeline {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;
            position: relative;
            padding: 10px 0;
        }

        .timeline::after {
            content: "\u2192";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            color: #00A3B4;
            font-size: 30px;
        }

        .timeline-step {
            text-align: center;
            padding: 0 20px;
            flex: 1;
        }

        .timeline-date {
            color: #00A3B4;
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 16px;
        }

        .timeline-label {
            color: #5D4037;
            font-size: 14px;
        }

        .highlight {
            color: #00A3B4;
        }

        .first-payment-section {
            margin-top: 30px;
            border-left: 4px solid #00A3B4;
            background: #f8f9fa;
        }
    `}</style>
    <div class="header-container">
        <div class="header-box">
            <h1 className='font-bold'>ClickHunts Payment Policy</h1>
        </div>
    </div>


    <h2 className='font-bold'>Payment Schedules</h2>
    <div class="category">
        <div class="category-header">
            <div class="category-name">Health, CBD, Nutra, COD</div>
            <div class="category-date">12th - 15th of each month</div>
        </div>
        <div class="category-details">
            Payments for <span class="highlight-text">Health, CBD, Male Enhancement, and Nutra products</span> will be
            processed during this period.
        </div>
        <div class="timeline">
            <div class="timeline-step">
                <div class="timeline-date">January 1st - 31st</div>
                <div>Earning Period</div>
            </div>
            <div class="timeline-step">
                <div class="timeline-date">February 12th - 15th</div>
                <div>Payment Processing</div>
            </div>
        </div>
    </div>

    <div class="category">
        <div class="category-header">
            <div class="category-name">Business & Finance</div>
            <div class="category-date">5th - 9th of each month</div>
        </div>
        <div class="category-details">
            Payments for <span class="highlight-text">BIZ OPP, Survey, Sweepstakes, Travel, Credit Card, Email Submit,
                Loans, Insurance, Finance & Real Estate Offers</span> will be processed during this period.
        </div>
        <div class="timeline">
            <div class="timeline-step">
                <div class="timeline-date">January 1st - 31st</div>
                <div>Earning Period</div>
            </div>
            <div class="timeline-step">
                <div class="timeline-date">March 5th - 9th</div>
                <div>Payment Processing</div>
            </div>
        </div>
    </div>

    <div class="category">
        <div class="category-header">
            <div class="category-name">Sports & Media</div>
            <div class="category-date"></div>
        </div>
        <div class="category-details">
            Payments for <span class="highlight-text">Sports, Live Streaming, Movies, and TV Shows Offers</span>
            will be processed during this period.
        </div>

        <div class="timeline-section">
            <div class="timeline-header">First Payment / Regular Monthly Schedule</div>
            <div class="timeline">
                <div class="timeline-step">
                    <div class="timeline-date">January 1st - 31st</div>
                    <div class="timeline-label">Earning Period</div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-date">February 12th - 17th</div>
                    <div class="timeline-label">Payment Processing</div>
                </div>
            </div>
        </div>

        <div class="timeline-section first-payment-section">
            <div class="timeline-header">Sports & Media Net15 Schedule Only</div>
            <div class="timeline">
                <div class="timeline-step">
                    <div class="timeline-date">January 1st - 15th</div>
                    <div class="timeline-label">First Earning Period</div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-date">February 2nd - 8th</div>
                    <div class="timeline-label">First Payment Processing</div>
                </div>
            </div>
            <div class="timeline">
                <div class="timeline-step">
                    <div class="timeline-date">January 16th - 31st</div>
                    <div class="timeline-label">Second Earning Period</div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-date">February 16th - 18th</div>
                    <div class="timeline-label">Second Payment Processing</div>
                </div>
            </div>
        </div>
    </div>

    <h2 className='font-bold'>Payout Details</h2>
    <div class="payout-container">
        <div class="payout-grid">
            <div class="payout-item">
                <div class="method-name">Payoneer</div>
                <div class="detail-row">
                    <span class="label">Minimum</span>
                    <span class="value">$100 USD</span>
                </div>
                <div class="detail-row">
                    <span class="label">Fee</span>
                    <span class="value">1%</span>
                </div>
                <div class="fee-covered">Fee covered by ClickHunts</div>
            </div>

            <div class="payout-item">
                <div class="method-name">Wise</div>
                <div class="detail-row">
                    <span class="label">Minimum</span>
                    <span class="value">$100 USD</span>
                </div>
                <div class="detail-row">
                    <span class="label">Fee</span>
                    <span class="value">$0</span>
                </div>
                <div class="fee-covered">Fee covered by ClickHunts</div>
            </div>

            <div class="payout-item">
                <div class="method-name">Direct Deposit (ACH)</div>
                <div class="detail-row">
                    <span class="label">Minimum</span>
                    <span class="value">$100 USD</span>
                </div>
                <div class="detail-row">
                    <span class="label">Fee</span>
                    <span class="value">$2</span>
                </div>
                <div class="fee-covered">Fee covered by ClickHunts</div>
            </div>

            <div class="payout-item">
                <div class="method-name">Bank Transfer</div>
                <div class="detail-row">
                    <span class="label">Minimum</span>
                    <span class="value">$500 USD</span>
                </div>
                <div class="detail-row">
                    <span class="label">Fee</span>
                    <span class="value">$20</span>
                </div>
                <div class="fee-covered">Fee covered by ClickHunts</div>
            </div>

            <div class="payout-item">
                <div class="method-name">WebMoney</div>
                <div class="detail-row">
                    <span class="label">Minimum</span>
                    <span class="value">$100 USD</span>
                </div>
                <div class="detail-row">
                    <span class="label">Fee</span>
                    <span class="value">1%</span>
                </div>
                <div class="fee-covered">Fee covered by ClickHunts</div>
            </div>

            <div class="payout-item">
                <div class="method-name">USDT</div>
                <div class="detail-row">
                    <span class="label">Minimum</span>
                    <span class="value">$500 USD</span>
                </div>
                <div class="detail-row">
                    <span class="label">Fee</span>
                    <span class="value">5$</span>
                </div>
                <div class="fee-covered">Fee covered by ClickHunts</div>
            </div>

            <div class="payout-item">
                <div class="method-name">Bitcoin</div>
                <div class="detail-row">
                    <span class="label">Minimum</span>
                    <span class="value">$500 USD</span>
                </div>
                <div class="detail-row">
                    <span class="label">Fee</span>
                    <span class="value">4%</span>
                </div>
                <div class="fee-covered">Fee covered by ClickHunts</div>
            </div>
            <div class="payout-item">
                <div class="method-name">Capitalist</div>
                <div class="detail-row">
                    <span class="label">Minimum</span>
                    <span class="value">$100 USD</span>
                </div>
                <div class="detail-row">
                    <span class="label">Fee</span>
                    <span class="value">$0</span>
                </div>
                <div class="fee-covered">Fee covered by ClickHunts</div>
            </div>
        </div>

<div className='flex justify-center items-center mt-12'>

<a href="/payment-edit" className="px-6 py-3 bg-[#007f96] text-white rounded-lg hover:bg-[#006e85] cursor-pointer transition-all transform hover:scale-105 hover:translate-x-3 flex items-center space-x-2">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 3l9 9-4 4-9-9 4-4zm0 0L3 13l-3 8 8-3 9-9z"/>
  </svg>
  <span className='font-bold'>Payment Profile Setup</span>
</a>


</div>
    </div>


    <div class="faq-section mb-16">
        <h2 className='font-bold'>Frequently Asked Payment Questions</h2>

        <div class="faq-item">
            <div class="faq-question">What payment methods are available?</div>
            <div class="faq-answer">
                At <span class="highlight-text">ClickHunts</span>, we support a variety of payment methods to ensure
                convenience for our partners. These include <span class="highlight-text">Payoneer, Wise,
                    WebMoney</span>, <span class="highlight-text">Bank Wire</span>, <span
                    class="highlight-text">ACH</span> (for US Banks only), and <span class="highlight-text">USDT &
                    Bitcoin</span>. We are constantly working to add more payment options to accommodate our global
                audience.
            </div>
        </div>

        <div class="faq-item">
            <div class="faq-question">How do I set or update my payment details?</div>
            <div class="faq-answer">
                Setting up your payment method is simple and secure. Log in to your ClickHunts dashboard and navigate to
                the <span class="highlight-text">Company Settings</span> "Billing" section. Here, you can add your <span
                    class="highlight-text">Payoneer email address</span> or provide Bank Wire details, including:
                <ul class="bullet-list">
                    <li>Bank name and address</li>
                    <li>ABA, SWIFT, or IBAN codes</li>
                    <li>Account number</li>
                </ul>
                For assistance, please reach out to your dedicated Account Manager at any time.
            </div>
        </div>

        <div class="faq-item">
            <div class="faq-question">What are the payment terms at ClickHunts?</div>
            <div class="faq-answer">
                We offer flexible payment schedules to suit your needs:
                <ul class="bullet-list">
                    <li><span class="highlight-text">Weekly Payments:</span> Available for high-performing partners with
                        <span class="highlight-text">Verified Traffic</span> Quality.
                    </li>
                    <li><span class="highlight-text">Net 30:</span> Default schedule for new accounts, with payments
                        issued 30 days after the end of the month.</li>
                    <li><span class="highlight-text">Custom Terms:</span> Special arrangements can be discussed with
                        your Account Manager.</li>
                </ul>
                The minimum payment threshold is <span class="highlight-text">$100</span>. Payments are processed on
                time to ensure a smooth experience for our partners.
            </div>
        </div>

        <div class="faq-item">
            <div class="faq-question">Why does ClickHunts require W8/W9 forms?</div>
            <div class="faq-answer">
                As a compliant and trusted network, <span class="highlight-text">ClickHunts</span> is required to
                collect <span class="highlight-text">W8</span> (for international partners) and <span
                    class="highlight-text">W9</span> (for US-based partners) forms to meet government regulations. These
                forms are necessary for us to process your payments efficiently. Don't worry – the process is quick and
                easy! Simply upload the required form on your dashboard or contact us for assistance.
            </div>
        </div>

        <div class="faq-item">
            <div class="faq-question">How do I ensure timely payments?</div>
            <div class="faq-answer">
                To receive your payments without delay:
                <ul class="bullet-list">
                    <li>Ensure all your account and payment details are accurate and up to date.</li>
                    <li>Meet the minimum payment threshold of <span class="highlight-text">$100</span> within the
                        payment period.</li>
                    <li>Communicate with your Account Manager if you have special payment requests.</li>
                </ul>
                With ClickHunts, your earnings are always secure and paid on time.
            </div>
        </div>
    </div>


    </div>
  )
}

export default Payment