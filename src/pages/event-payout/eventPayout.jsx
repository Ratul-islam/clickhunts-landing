import React from 'react';

const EventPayout = () => {
  return (
    <div className="font-sans text-gray-800 bg-white max-w-5xl mx-auto">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-[#048998] text-white py-10 px-8 border-b-4 border-[#048998]/50 relative overflow-hidden rounded-b-lg shadow-lg">
      <div className="relative z-10">
        <h1 className="text-4xl mb-2 font-semibold">Understanding Your Payment Terms</h1>
        <p>ClickHunts Affiliate Network Payment Schedule</p>
      </div>
      
      {/* Decorative circle */}
      <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full"></div>
    </header>
  );
};

const MainContent = () => {
  return (
    <main className="px-8 py-8">
      <Introduction />
      <EventPayoutExplanation />
      <ExamplesWithCalendar />
      <NetTermsExplanation />
      <PaymentMethods />
      <ContactSection />
    </main>
  );
};

const Introduction = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-[#048998]">
      <p>One of the most common questions our affiliates ask is "When will I get paid?" This guide explains our payment terms in detail to help you understand exactly when to expect your commissions.</p>
    </div>
  );
};

const EventPayoutExplanation = () => {
  return (
    <div>
      <SectionTitle>Payment Terms Explained</SectionTitle>
      
      <div className="bg-white rounded-lg p-5 my-5 shadow border-l-3 border-[#048998] italic">
        <p>"I understand what 'weekly' and 'monthly' mean, but what exactly is 'Net 7' or 'Net 15'?"</p>
      </div>
      
      <div className="mb-8 bg-white rounded-lg p-6 shadow">
        <p><span className="text-[#048998] font-semibold">"Weekly" and "Monthly"</span> refer to your payment <strong>frequency</strong> - how often we process payments:</p>
        <ul className="list-inside ml-5 my-4">
          <li className="mb-2">For <strong>weekly payments</strong>, the billing week starts on Monday and ends on Sunday</li>
          <li className="mb-2">For <strong>monthly payments</strong>, the billing month starts on the 1st and ends on the last day of the month</li>
        </ul>
        
        <p><span className="text-[#048998] font-semibold">"Net 7", "Net 15", and "Net 30"</span> refer to the <strong>delay</strong> between the end of a billing period and when payment is sent:</p>
        <ul className="list-inside ml-5 my-4">
          <li className="mb-2"><strong>Net 7</strong> = Payment 7 days after the billing period ends</li>
          <li className="mb-2"><strong>Net 15</strong> = Payment 15 days after the billing period ends</li>
          <li className="mb-2"><strong>Net 30</strong> = Payment 30 days after the billing period ends</li>
        </ul>
      </div>
    </div>
  );
};

const ExamplesWithCalendar = () => {
  return (
    <div>
      <SectionTitle>Examples With Calendar</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-5 my-8">
        <ExampleBox 
          title="Weekly Net 7 Example" 
          content={
            <>
              <p>Let's say your payment terms are <span className="text-[#048998] font-semibold">Weekly Net 7</span>, and you begin earning commissions on Monday, July 1:</p>
              
              <div className="bg-gray-50 p-4 my-4 rounded-lg">
                <p>Commissions earned during July 1-7 (highlighted) will be paid on July 15:</p>
                <CalendarTable 
                  highlightDays={[1,2,3,4,5,6,7]}
                  paymentDate={15}
                  numberOfWeeks={3}
                />
                <p className="italic text-sm">Note: Payment is sent 7 days after the end of the billing period (July 8-14), on July 15</p>
              </div>
            </>
          }
        />
        
        <ExampleBox 
          title="Monthly Net 7 Example" 
          content={
            <>
              <p>With <span className="text-[#048998] font-semibold">Monthly Net 7</span> payment terms, all commissions for the month of July will be paid 7 days after the end of July:</p>
              
              <div className="bg-gray-50 p-4 my-4 rounded-lg">
                <p>Commissions earned during all of July (highlighted) will be paid on August 7:</p>
                <CalendarTable 
                  highlightDays={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}
                  paymentDate={null}
                  numberOfWeeks={5}
                />
                
                <CalendarTable 
                  isNextMonth={true}
                  paymentDate={7}
                  numberOfWeeks={2}
                />
              </div>
            </>
          }
        />
      </div>


      <div className="grid md:grid-cols-2 gap-5 my-8">
        
        <ExampleBox 
          title="Monthly Net 7 Example" 
          content={
            <>
              <p>With <span className="text-[#048998] font-semibold">Monthly Net 7</span> payment terms, all commissions for the month of July will be paid 7 days after the end of July:</p>
              
              <div className="bg-gray-50 p-4 my-4 rounded-lg">
                <p>Commissions earned during all of July (highlighted) will be paid on August 7:</p>
                <CalendarTable 
                  highlightDays={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}
                  paymentDate={null}
                  numberOfWeeks={5}
                />
                
                <CalendarTable 
                  isNextMonth={true}
                  paymentDate={7}
                  numberOfWeeks={2}
                />
              </div>
            </>
          }
        />
        <ExampleBox 
          title="Monthly Net 7 Example" 
          content={
            <>
              <p>With <span className="text-[#048998] font-semibold">Monthly Net 7</span> payment terms, all commissions for the month of July will be paid 7 days after the end of July:</p>
              
              <div className="bg-gray-50 p-4 my-4 rounded-lg">
                <p>Commissions earned during all of July (highlighted) will be paid on August 7:</p>
                <CalendarTable 
                  highlightDays={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}
                  paymentDate={null}
                  numberOfWeeks={5}
                />
                
                <CalendarTable 
                  isNextMonth={true}
                  paymentDate={7}
                  numberOfWeeks={2}
                />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

const NetTermsExplanation = () => {
  return (
    <div className="mb-8 bg-white rounded-lg p-6 shadow">
      <h3 className="text-xl font-semibold text-[#048998] mb-4">Monthly Net 15 & Net 30</h3>
      <p><span className="text-[#048998] font-semibold">Monthly Net 15</span> payment terms would have all commissions from July paid on August 15 (15 days after the end of July).</p>
      <p className="mt-4"><span className="text-[#048998] font-semibold">Monthly Net 30</span> payment terms would have all commissions from July paid on August 30 (30 days after the end of July).</p>
    </div>
  );
};

const PaymentMethods = () => {
  const paymentMethodsData = [
    {
      id: 1,
      title: "Bank Transfer (ACH/Wire)",
      description: "Direct deposit to your bank account",
      minimum: "$500",
      cancelled: false
    },
    {
      id: 2,
      title: "PayPal",
      description: "Fast online payments to your PayPal account",
      minimum: "$100",
      cancelled: false
    },
    {
      id: 3,
      title: "Payoneer",
      description: "Global payment service",
      minimum: "$100",
      cancelled: false
    },
    {
      id: 4,
      title: "Check by Mail",
      description: "Physical check sent to your address",
      minimum: "This option is no longer available",
      cancelled: true
    },
    {
      id: 5,
      title: "Bitcoin or USDT",
      description: "Cryptocurrency payment option",
      minimum: "$100",
      cancelled: false
    },
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-5 my-8">
      <h3 className="text-xl font-semibold text-[#048998] mb-4">Payment Methods & Minimum Thresholds</h3>
      <p>At ClickHunts, we offer multiple payment options with the following minimum balance requirements:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {paymentMethodsData.map(method => (
          <PaymentMethodCard key={method.id} {...method} />
        ))}
      </div>
      
      <p className="mt-5">Balances below the minimum threshold will roll over to the next payment period.</p>
    </div>
  );
};

const PaymentMethodCard = ({ title, description, minimum, cancelled }) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow flex flex-col">
      <h4 className={`${cancelled ? 'line-through text-gray-500' : 'text-[#048998]'} text-lg font-medium mb-2`}>
        {title}
      </h4>
      <p className={cancelled ? 'line-through text-gray-500' : ''}>
        {description}
      </p>
      <p className={`font-bold mt-2 ${cancelled ? 'line-through text-gray-500' : ''}`}>
        Minimum: {minimum}
      </p>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div className="bg-[#048998]/10 rounded-lg p-6 mt-10 text-center">
      <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
      <p>If you have any questions about your payment terms or need to update your payment preferences, please contact your dedicated account manager or reach out to our affiliate support team:</p>
      <p className="mt-4">
        <a href="mailto:affiliates@clickhunts.com" className="text-[#048998] font-bold hover:underline">
          affiliates@clickhunts.com
        </a>
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="text-center py-8 mt-12 border-t border-gray-200 text-gray-600 text-sm">
      <p>&copy; 2025 ClickHunts Network. All Rights Reserved.</p>
    </footer>
  );
};

// Reusable Components
const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-2xl font-semibold mt-10 mb-5 text-[#048998] pb-2 border-b-2 border-[#048998]/10">
      {children}
    </h2>
  );
};

const ExampleBox = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
      <h3 className="bg-[#048998] text-white p-4 text-xl">
        {title}
      </h3>
      <div className="p-5">
        {content}
      </div>
    </div>
  );
};

const CalendarTable = ({ highlightDays = [], paymentDate = null, numberOfWeeks = 3, isNextMonth = false }) => {
  // Simple calendar layout - this would need to be enhanced for a real implementation
  const weekdays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  
  const renderWeeks = () => {
    const weeks = [];
    
    for (let week = 0; week < numberOfWeeks; week++) {
      const days = [];
      
      for (let day = 0; day < 7; day++) {
        const dayNumber = week * 7 + day + 1;
        
        // Don't render days beyond reasonable month length
        if ((!isNextMonth && dayNumber <= 31) || (isNextMonth && dayNumber <= 11)) {
          const isHighlighted = highlightDays.includes(dayNumber);
          const isPaymentDay = dayNumber === paymentDate;
          
          days.push(
            <td 
              key={day}
              className={`p-3 text-center border-b border-gray-200
                ${isHighlighted ? 'bg-[#fff6dd]' : 'bg-white'}
                ${isPaymentDay ? 'bg-[#d0f5e6] font-bold relative' : ''}
              `}
            >
              {dayNumber}
              {isPaymentDay && 
                <span className="absolute text-[0.65rem] bottom-0.5 left-1/2 transform -translate-x-1/2 text-[#048998]">
                  PAYMENT
                </span>
              }
            </td>
          );
        } else {
          days.push(<td key={day}></td>);
        }
      }
      
      weeks.push(<tr key={week}>{days}</tr>);
    }
    
    return weeks;
  };
  
  return (
    <table className="w-full my-4 bg-white rounded-lg shadow">
      <thead>
        <tr>
          {weekdays.map((day, index) => (
            <th key={index} className="bg-[#048998] text-white p-3 text-center font-semibold">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {renderWeeks()}
      </tbody>
    </table>
  );
};

export default EventPayout;