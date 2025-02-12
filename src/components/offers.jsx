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
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Example offers</h2>
        <a href="#" className="text-teal-500 hover:text-teal-600 text-sm">View all →</a>
      </div>

      <div className="space-y-4">
        {offers.map(offer => (
          <div key={offer.id} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-[13px] md:text-[17px] font-bold text-gray-800">{offer.title}</h3>
                <p className="text-gray-500 text-[10px] md:text-[13px]">{offer.type}</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-1">
                {offer.countries.map(country => (
                  <span
                    key={country}
                    className="w-6 h-4 rounded-sm overflow-hidden shadow-sm hidden md:inline-block"
                  >
                    <img
                      src={`/api/placeholder/24/16`}
                      alt={country}
                      className="w-full h-full object-cover"
                    />
                  </span>
                ))}
                {offer.moreCount > 0 && (
                  <span className="text-sm text-gray-400">
                    ...and {offer.moreCount} more
                  </span>
                )}
              </div>

              <div className="min-w-28 text-right">
                <span className="text-gray-800">{offer.payout}</span>
              </div>

              <button className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors">
                Info
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-8 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors">
          Show more
        </button>
      </div>
    </div>
  );
};

export default OffersList;