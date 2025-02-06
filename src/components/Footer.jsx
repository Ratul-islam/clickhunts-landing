const Footer = () => {
    return (
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
            <ul className="space-y-4 md:space-y-0 md:flex md:justify-start md:gap-8 text-center md:text-left w-max mx-auto animate-ripple-shock">
              <li>
                <a
                  href="https://clickhunts.com/affiliater-terms-and-conditions/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Affiliate Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://clickhunts.com/advertiser-terms/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Advertiser Terms
                </a>
              </li>
              <li>
                <a
                  href="https://clickhunts.com/privacy-policy/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://clickhunts.com/event-payout/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Event Payout
                </a>
              </li>
              <li>
                <a
                  href="/faq/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://clickhunts.com/event-schedule/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Event Schedule
                </a>
              </li>
            </ul>
          </div>
  
          <div className="mt-8 text-center text-gray-400 animate-ripple-shock">
            <p>
              Copyright 2025 ©{" "}
              <strong className="text-white">Click Hunts</strong>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  