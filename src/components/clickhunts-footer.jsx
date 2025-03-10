import React from 'react';
import { 
  HelpCircle, 
  CreditCard, 
  MousePointer, 
  FileText, 
  DollarSign, 
  Calendar 
} from 'lucide-react';
import mainLogo from "../assets/ClickHunts.png";


const FooterLink = ({ icon: Icon, children, href }) => (
  <a 
    href={href}
    className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-all duration-300"
  >
    <Icon className="w-4 h-4 text-orange-500 group-hover:text-teal-600 transition-colors" />
    <span>{children}</span>
  </a>
);

const FooterSection = ({ title, children }) => (
  <div className="flex flex-col">
    <h4 className="font-bold text-lg text-teal-700 border-b-2 border-yellow-400 pb-2 mb-4">
      {title}
    </h4>
    <div className="flex flex-col space-y-3">
      {children}
    </div>
  </div>
);

const ClickHuntsHorizontalFooter = () => {
  return (
  <div className='bg-white'>

    <div className="bg-white py-8 mx-auto max-w-[calc(1300px)] ">
      <div className=" mx-auto px-4 w-[100%]">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo and Address */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src={mainLogo}
                alt="ClickHunts Logo" 
                className="h-10"
              />
            </div>
            <div className="text-sm text-gray-600">
              <p>30 N Gould Street Suite #41562</p>
              <p>Sheridan, WY 82801, USA</p>
            </div>
          </div>

          {/* Services */}
          <FooterSection title="Services">
            <FooterLink href="/help" icon={HelpCircle}>Help</FooterLink>
            <FooterLink href="/payment" icon={CreditCard}>Payment</FooterLink>
            <FooterLink href="/offer" icon={MousePointer}>Offer</FooterLink>
          </FooterSection>

          {/* Policy Page */}
          <FooterSection title="Policy Page">
            <FooterLink href="/advertiser-terms" icon={FileText}>Advertiser Terms</FooterLink>
            <FooterLink href="/affiliate-terms-and-conditions" icon={FileText}>Affiliate Terms</FooterLink>
            <FooterLink href="/privacy" icon={FileText}>Privacy Policy</FooterLink>
          </FooterSection>

          {/* Additional */}
          <FooterSection title="Additional">
            <FooterLink href="/event-payout" icon={DollarSign}>Event Payout</FooterLink>
            <FooterLink href="/event-schedule" icon={Calendar}>Event Schedule</FooterLink>
            <FooterLink href="/faq" icon={HelpCircle}>FAQ</FooterLink>
          </FooterSection>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-4 border-t border-gray-200 text-gray-600">
          © ClickHunts. All rights reserved 2025.
        </div>
      </div>
    </div>
                </div>
  );
};

export default ClickHuntsHorizontalFooter;