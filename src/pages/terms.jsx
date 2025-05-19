import React from 'react'

const Terms = () => {
    return (
        <div>
      <style jsx>{
        `
    .advertiser-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 60px 20px;
      position: relative;
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
    
    .terms-section {
      background: #fff;
      border-radius: 16px;
      padding: 2rem;
      margin-bottom: 2rem;
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
      margin-bottom: 0.8rem;
    }
    
    .term-number {
      display: inline-block;
      width: 30px;
      height: 30px;
      background: var(--primary);
      color: white;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      margin-right: 10px;
      font-weight: 600;
      font-size: 0.9rem;
    }
    
    .term-title {
      display: inline-block;
      font-weight: 700;
      color: var(--text-dark);
      text-transform: uppercase;
      font-size: 1.1rem;
      margin-bottom: 1rem;
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
      margin-top: 3rem;
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
      border-top: 1px solid var(--gray-border);
      color: var(--text-light);
    }
    
    .scroll-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: var(--primary);
      color: var(--white);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      font-size: 1.5rem;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s;
      text-decoration: none;
    }
    
    .scroll-to-top.visible {
      opacity: 1;
    }
    
    @media (max-width: 768px) {
      .advertiser-container {
        padding: 40px 20px;
      }
      
      .title {
        font-size: 2rem;
      }
      
      .terms-section {
        padding: 1.5rem;
      }
      
      .scroll-to-top {
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 1.2rem;
      }
    }`
        }
  </style>

  <div class="advertiser-container">
      <div class="background-pattern"></div>

      <div class="header">
        <h1 class="title">Affiliate Terms and Conditions</h1>
        <p class="subtitle">This Agreement outlines the relationship between
          ClickHunts Network LLC ("ClickHunts Network") and YOU the (PUBLISHER).
          By joining our affiliate program, you agree to abide by these terms
          and conditions.</p>
      </div>

      <div class="terms-section">
        <span class="term-number">1</span>
        <span class="term-title">Insertion Order</span>
        <p>An "IO" means those certain separate or attached written document(s)
          titled, substantially, Insertion Order, entered into and executed by
          both parties hereto and which incorporates this MSA by reference. IOs
          shall set forth the specific Services to be provided by PUBLISHER and
          may set forth additional terms such as the deliverables, scope,
          duration, responsibilities, fees, payment terms, and other details
          applicable to such Services.</p>
      </div>

      <div class="terms-section">
        <span class="term-number">2</span>
        <span class="term-title">Services</span>
        <p>PUBLISHER may enter into various advertising campaigns through one or
          more online platforms (collectively, the "Platform") which facilitates
          the exchange of "Payable Actions" between potential advertisers and
          publishers. A "Payable Action" is defined as a specific request made
          by a consumer for a specific product or service. Each Party may
          represent one or more advertisers and/or publishers hereunder,
          according to insertion orders.</p>
        <p>ClickHunts Network hereby grants to PUBLISHER during the Contract
          Period a non-exclusive, royalty-free, worldwide right and license by
          all means and in any media, whether now known or hereafter discovered,
          to use, reproduce, distribute, publicly perform, publicly display and
          digitally perform such Advertisement and all its constituent
          parts.</p>
      </div>

      <div class="terms-section">
        <span class="term-number">3</span>
        <span class="term-title">Qualified Actions</span>
        <p>Qualified Actions are referred to as Leads, Calls, Sales, SMS Text
          Messages, or any other form of actionable option prospects who meet
          Click Hunts Network's screening criteria as described in the Insertion
          Order and who provide their complete valid contact data. PUBLISHER
          will be paid on a delivered Qualified Action basis defined as when a
          user agrees through a pre-approved opt-in method to be contacted.</p>
        <p>In the case of any dispute between the parties as to the number of
          Qualified Actions, ClickHunts Network's numbers will control.</p>
      </div>

      <div class="terms-section">
        <span class="term-number">4</span>
        <span class="term-title">Lead Validation Procedure</span>
        <p>Click Hunts Network will verify each Qualified Action delivered by
          the PUBLISHER. Upon receipt, all Qualified Actions will be checked for
          data validity (i.e. containing valid data inputs for the fields
          specified in the Insertion Order) and uniqueness of data (i.e. that
          the Qualified Actions are not present in ClickHunts Network's database
          for the designated Advertisement in the past 60 days).</p>
        <p>Click Hunts Network reserves the right to send an auto-responder to
          all respondents re-confirming their request for information. Any
          objections from respondents (about the email, or the offer) will be
          raised to the PUBLISHER.</p>
      </div>

      <div class="terms-section">
        <span class="term-number">5</span>
        <span class="term-title">Creative Changes</span>
        <p>Editing of ClickHunts Network's Creative is strictly prohibited,
          without prior written approval from ClickHunts Network. Creative
          includes, but is not limited to, text ads, graphic ads, from and
          subject line, any copy associated with the campaign including survey
          questions and answers.</p>
        <p>Any changes to Creative, without prior written permission will result
          in the loss of payment of Leads per offer/campaign basis.</p>
      </div>

      <div class="terms-section">
        <span class="term-number">6</span>
        <span class="term-title">Advertiser Trademarks</span>
        <p>The trademarks of Advertisers are to be used only as presented and
          contained in Creative Materials. PUBLISHER shall not use and shall
          require it's third party partners know as SUB-PUBLISHERS/AFFILIATES to
          agree not to use Advertisers trademarks for any other purpose,
          including but not limited to bidding on Advertiser trademarks in
          search engines, using Advertiser trademarks in the display URL in
          search marketing, and including Advertiser trademarks in Advertising
          Locations URLs.</p>
      </div>

      <div class="terms-section">
        <span class="term-number">7</span>
        <span class="term-title">Advertising Guidelines</span>
        <p>PUBLISHER may, in its complete discretion, reject, cancel or remove
          at any time any Advertisement from the service for any reason without
          prior notice to Click Hunts Network. PUBLISHER must notify ClickHunts
          Network following the rejection, cancellation or removal of any
          Advertisement from the service within 24 hours.</p>
      </div>

      <div class="terms-section">
        <span class="term-number">8</span>
        <span class="term-title">Term & Target Launch</span>
        <p>Term will be as noted in the (Insertion Order). Agreement may
          continue thereafter by mutual consent but may be terminated by either
          party for any reason whatsoever. If Budget caps are provided to
          PUBLISHER and PUBLISHER does not fulfill set allocation ClickHunts has
          full rights to reassign any used allocation.</p>
        <p>All legitimate revenue due to PUBLISHER will be paid during the next
          billing cycle. If PUBLISHER defrauds the ClickHunts Network, then
          payment is revoked as determined solely by Click Hunts Network.</p>
      </div>

      <div class="terms-section">
        <span class="term-number">9</span>
        <span class="term-title">Payment</span>
        <p>PUBLISHER will invoice Click Hunts Network on a monthly basis or per
          agreed upon payment terms set forth in Insertion Order at the payout
          rates reflected in the Insertion Order. The invoice will reflect
          delivery of final qualified action numbers that are based upon numbers
          reported by ClickHunts Network to PUBLISHER pursuant to the terms of
          this Agreement.</p>
        <p>All PUBLISHERS are required to submit a valid signed W9 or W8. These
          documents can be found on the INTERNAL REVENUE SERVICE (IRS) website.
          Every PUBLISHER Account must have a unique, valid taxpayer
          identification number (TIN) or valid Social Security number on file
          with the ClickHunts Network.</p>
        <p>All payments are based on actual figures as defined, accounted and
          audited by the Click Hunts Network. In the event ClickHunts Network
          does not receive payment from it's ADVERTISER(S) for any reason
          including, but not limited to, traffic provided by PUBLISHER or
          PUBLISHERS third party partners or if Advertiser charges back or
          requests refund of payments, or alleges that any Event was fraudulent
          or was a result of a violation of an applicable law, rule or
          regulation, ClickHunts Network does not guarantee payments on behalf
          of the Advertiser.</p>
        <p>Click Hunts Network will not pay for any Events that occur before a
          Program is initiated, after a Program terminates or for actions for a
          Program that the PUBLISHER was not invited to or is not assigned to
          promote. ClickHunts Network will not be responsible to compensate You
          for actions that are not recorded due to your error. Click Hunts
          Network shall have no obligation to make payment to PUBLISHER.</p>
      </div>

      <div class="terms-section">
        <span class="term-number">10</span>
        <span class="term-title">Payment Terms</span>
        <p>ClickHunts Network shall make all payments to PUBLISHER within 30
          days Net (30) as per standard Network terms of the Invoice Date unless
          otherwise specified and agreed and signed Insertion Order states. All
          payments made to PUBLISHER do not include, and PUBLISHER shall pay,
          any sales, use or similar tax associated with such payment. All
          Payment service charges such as bank transfer fees are the
          responsibility of the PUBLISHER.</p>
        <p>All past due amounts shall accrue interest at the rate of one and
          one-half percent (1.5%) per month
          </p>
        </div>
      </div>
    </div>
    )
}

export default Terms