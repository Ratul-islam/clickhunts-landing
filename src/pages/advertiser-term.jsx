import React, { useState } from 'react';

const AdvertiserTerm = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Terms and Conditions</h1>
      <p className="mb-6 text-gray-600">
        This Master Service Agreement ("Agreement") governs your use of ClickHunts's online advertising network ("Network"). 
        Please read these terms carefully before using our services.
      </p>

      {/* Accordion sections */}
      <div className="space-y-4">
        {/* Section A */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button 
            className="w-full p-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
            onClick={() => toggleSection('sectionA')}
          >
            <span>Terms and Conditions</span>
            <span>{activeSection === 'sectionA' ? '−' : '+'}</span>
          </button>
          {activeSection === 'sectionA' && (
            <div className="p-4 bg-white">
              <p className="text-gray-700">
                The terms and conditions contained in this Master Service Agreement govern Advertiser's use of 
                ClickHunts's online advertising network of marketing affiliates to distribute advertisements 
                within the U.S. that promote Advertiser's products, services, or websites as set out in the 
                Insertion Orders (IOs). This Agreement supersedes any prior agreements between ClickHunts and 
                the Advertiser and governs all existing IOs.
              </p>
            </div>
          )}
        </div>

        {/* Section B */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button 
            className="w-full p-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
            onClick={() => toggleSection('sectionB')}
          >
            <span>Creation and Distribution of Advertiser Content</span>
            <span>{activeSection === 'sectionB' ? '−' : '+'}</span>
          </button>
          {activeSection === 'sectionB' && (
            <div className="p-4 bg-white">
              <ol className="list-decimal ml-6 space-y-4">
                <li className="text-gray-700">
                  ClickHunts will make Advertiser content available for distribution. Advertiser shall create and 
                  deliver all content at their expense. Changes made by ClickHunts must be approved in writing. 
                  ClickHunts requires 48 hours to implement changes.
                </li>
                <li className="text-gray-700">
                  ClickHunts reserves the right to reject or remove any Advertiser Campaigns that do not meet 
                  standards or comply with this Agreement. ClickHunts has no obligation to monitor Advertiser 
                  Campaigns for compliance with laws.
                </li>
                <li className="text-gray-700">
                  For email distribution, Advertiser must comply with the CAN-SPAM Act and maintain an up-to-date 
                  suppression list of individuals who have requested not to receive commercial email.
                </li>
                <li className="text-gray-700">
                  For telephone or text message marketing, Advertiser shall comply with the Telephone Consumer 
                  Protection Act, Telemarketing Sales Rule, and obtain "prior express written consent" for all recipients.
                </li>
                <li className="text-gray-700">
                  Advertiser represents they own all intellectual property used or have obtained sufficient licensing rights. 
                  Advertiser grants ClickHunts a non-exclusive, royalty-free license to use, distribute, and market all 
                  Advertiser Campaigns.
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Section C */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button 
            className="w-full p-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
            onClick={() => toggleSection('sectionC')}
          >
            <span>Payment and Deposit</span>
            <span>{activeSection === 'sectionC' ? '−' : '+'}</span>
          </button>
          {activeSection === 'sectionC' && (
            <div className="p-4 bg-white">
              <ol className="list-decimal ml-6 space-y-4">
                <li className="text-gray-700">
                  Advertiser agrees to pay on a Cost per Action (CPA) basis. An "Action" means certain acts of an 
                  Internet user, including clicks, landing on Advertiser's website, and completing forms or purchases.
                </li>
                <li className="text-gray-700">
                  ClickHunts may conduct credit checks and request deposits or pre-payments for Commissions. Deposits 
                  may be applied against invoices or kept as security.
                </li>
                <li className="text-gray-700">
                  Time is of the essence for all payment terms. Payment not made within 30 days accrues interest at 
                  1.5% per month. Advertiser is responsible for all collection costs.
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Section D */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button 
            className="w-full p-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
            onClick={() => toggleSection('sectionD')}
          >
            <span>Reporting</span>
            <span>{activeSection === 'sectionD' ? '−' : '+'}</span>
          </button>
          {activeSection === 'sectionD' && (
            <div className="p-4 bg-white">
              <ol className="list-decimal ml-6 space-y-4">
                <li className="text-gray-700">
                  Reporting on Actions is the responsibility of both parties. Invoicing will be based on the highest 
                  gross counts from electronic reporting systems.
                </li>
                <li className="text-gray-700">
                  Disputed Actions must be reported in writing by the payment due date, or the right to dispute is waived. 
                  ClickHunts's determination is final and binding.
                </li>
                <li className="text-gray-700">
                  Advertiser must retain books and records for at least 3 months after each Campaign. ClickHunts has the 
                  right to audit these records.
                </li>
              </ol>
            </div>
          )}
        </div>
        
        {/* Section E */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button 
            className="w-full p-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
            onClick={() => toggleSection('sectionE')}
          >
            <span>Representations, Warranties, and Indemnification</span>
            <span>{activeSection === 'sectionE' ? '−' : '+'}</span>
          </button>
          {activeSection === 'sectionE' && (
            <div className="p-4 bg-white">
              <ol className="list-decimal ml-6 space-y-4">
                <li className="text-gray-700">
                  Each party represents they are a valid corporation with the authority to execute this Agreement.
                </li>
                <li className="text-gray-700">
                  Advertiser is solely responsible for all content and warrants no part shall infringe on third-party rights, 
                  violate laws, or contain malicious code.
                </li>
                <li className="text-gray-700">
                  Advertiser warrants it is not under investigation by any regulatory agencies and will disclose any past 
                  decrees or orders.
                </li>
                <li className="text-gray-700">
                  Advertiser agrees to indemnify and hold harmless ClickHunts for any claims arising from Advertiser's breach, 
                  content, or products promoted.
                </li>
                <li className="text-gray-700">
                  ClickHunts may require Advertiser to maintain comprehensive liability insurance and name ClickHunts as an 
                  additional insured.
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Additional Sections */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button 
            className="w-full p-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
            onClick={() => toggleSection('sectionAdditional')}
          >
            <span>Additional Terms</span>
            <span>{activeSection === 'sectionAdditional' ? '−' : '+'}</span>
          </button>
          {activeSection === 'sectionAdditional' && (
            <div className="p-4 bg-white">
              <div className="space-y-4">
                <p className="font-medium text-gray-800">Assignment</p>
                <p className="text-gray-700 ml-4">
                  Advertiser may not assign this Agreement without ClickHunts's prior written consent.
                </p>
                
                <p className="font-medium text-gray-800">Limitations on Liability</p>
                <p className="text-gray-700 ml-4">
                  ClickHunts shall not be liable for special, indirect, or consequential damages. Liability is limited 
                  to the net amount received within the previous six months.
                </p>
                
                <p className="font-medium text-gray-800">Non-Circumvention</p>
                <p className="text-gray-700 ml-4">
                  During the term and for six months after, Advertiser agrees not to directly engage with any Affiliate 
                  within the ClickHunts Network.
                </p>
                
                <p className="font-medium text-gray-800">Confidentiality</p>
                <p className="text-gray-700 ml-4">
                  Each party agrees to protect the confidential information of the other party and limit disclosure to 
                  those who need to know.
                </p>
                
                <p className="font-medium text-gray-800">Term and Termination</p>
                <p className="text-gray-700 ml-4">
                  This Agreement is for 12 months and automatically renews unless terminated with 10 days' notice. 
                  Either party may terminate with 10 days' written notice.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="mt-8 p-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm text-gray-600">© 2025 ClickHunts Network, LLC. All Rights Reserved.</p>
          </div>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg">
              Accept Terms
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AdvertiserTerm;