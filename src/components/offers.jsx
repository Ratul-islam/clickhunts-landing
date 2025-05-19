import React from 'react';

const OffersList = () => {
  const offers = [
    {
      id: 7191,
      title: "NanoKlean",
      image: "/api/placeholder/80/80",
      type: "Health CPA",
      payout: "25€ - 35€",
      countries: ["us", "ca"],
      moreCount: 0
    },
    {
      id: 7192,
      title: "NanoKlean Australia",
      image: "/api/placeholder/80/80",
      type: "Health CPA",
      payout: "30€ - 35€",
      countries: ["au"],
      moreCount: 0
    },
    {
      id: 7194,
      title: "SnoreFix",
      image: "/api/placeholder/80/80",
      type: "Health CPA",
      payout: "35€ - 40€",
      countries: ["us", "ca"],
      moreCount: 0
    },
    {
      id: 7195,
      title: "SnoreFix UK",
      image: "/api/placeholder/80/80",
      type: "Health CPA",
      payout: "35€ - 40€",
      countries: ["gb"],
      moreCount: 0
    },
    {
      id: 7198,
      title: "SnoreFix DACH",
      image: "/api/placeholder/80/80",
      type: "Health CPA",
      payout: "35€ - 40€",
      countries: ["de", "at"],
      moreCount: 0
    },
    {
      id: 7258,
      title: "FocusPro Glasses",
      image: "/api/placeholder/80/80",
      type: "Health CPA",
      payout: "25€ - 30€",
      countries: ["us", "ca"],
      moreCount: 0
    },
    {
      id: 7259,
      title: "Dreamzy Period Pain Relief",
      image: "/api/placeholder/80/80",
      type: "Health CPA",
      payout: "45€ - 50€",
      countries: ["us", "ca"],
      moreCount: 0
    },
    {
      id: 7294,
      title: "Dreamzy Period Pain Relief AU",
      image: "/api/placeholder/80/80",
      type: "Health CPA",
      payout: "35€ - 40€",
      countries: ["au"],
      moreCount: 0
    },
    {
      id: 7295,
      title: "PhenoMAN ME Gummies",
      image: "/api/placeholder/80/80",
      type: "Health CPA",
      payout: "70€ - 80€",
      countries: ["gb"],
      moreCount: 0
    }
  ];

  return (
    <div className=" mx-auto p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">Example offers</h2>
        <a 
          href="/" 
          className="text-teal-500 hover:text-teal-600 text-sm transition-colors duration-200"
        >
          View all →
        </a>
      </div>

      <div className="space-y-3 md:space-y-4">
        {offers.map(offer => (
          <div 
            key={offer.id} 
            className="group flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-white rounded-lg border border-gray-100 
              hover:shadow-lg hover:border-teal-100 transition-all duration-300 ease-in-out"
          >
            {/* Left side with image and title */}
            <div className="flex items-center gap-3 md:gap-4 mb-3 sm:mb-0">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <h3 className="text-sm md:text-base font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-200">
                  {offer.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500">{offer.type}</p>
              </div>
            </div>

            {/* Right side with countries, payout, and button */}
            <div className="flex items-center justify-between sm:justify-end gap-3 md:gap-8">
              {/* Countries */}
              <div className="flex items-center gap-1 order-2 sm:order-1">
                {offer.countries.map(country => (
                  <span
                    key={country}
                    className="w-5 h-3 md:w-6 md:h-4 rounded-sm overflow-hidden shadow-sm hidden sm:inline-block 
                      transition-transform duration-300 hover:scale-110"
                  >
                    <img
                      src={`/api/placeholder/24/16`}
                      alt={country}
                      className="w-full h-full object-cover"
                    />
                  </span>
                ))}
                {offer.moreCount > 0 && (
                  <span className="text-xs md:text-sm text-gray-400">
                    ...and {offer.moreCount} more
                  </span>
                )}
              </div>

              {/* Payout */}
              <div className="min-w-20 md:min-w-28 text-right order-1 sm:order-2">
                <span className="text-sm md:text-base text-gray-800 font-medium">
                  {offer.payout}
                </span>
              </div>

              {/* Info Button */}
              <button className="order-3 px-4 md:px-6 py-1.5 md:py-2 bg-teal-500 text-white text-sm md:text-base rounded-md
                hover:bg-teal-600 active:bg-teal-700 transform hover:-translate-y-0.5 
                transition-all duration-200 ease-in-out">
                Info
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 md:mt-8 text-center">
        <button className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-teal-500 text-white rounded-md
          hover:bg-teal-600 active:bg-teal-700 transform hover:-translate-y-0.5
          transition-all duration-200 ease-in-out">
          Show more
        </button>
      </div>
    </div>
  );
};

export default OffersList;