import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import Loader from "../components/offer/loader";
import WhyChoose from "../components/offer/whyChoose";

const OfferDetails = () => {
  const { offerId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      const fetchedData = await api.get(`/networks/offers/${offerId}`);
      setData(fetchedData.data);
    } catch (err) {
      console.log(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [offerId]);

  function trimDescription(input) {
    if (!input) return "";
    if (input.startsWith("Description:")) {
      return input.replace(/^Description:\s*/, "");
    }
    return input;
  }

  return (
    <div className="pt-8 bg-gradient-to-b from-[#f5fafb] via-[#f6fafd] to-white min-h-screen">
      <div className="flex justify-center">
        <div className="m-3 md:m-10 w-full max-w-5xl">
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-10 shadow-xl transition-shadow hover:shadow-2xl">
              {loading ? (
                <div className="min-h-[300px] flex items-center justify-center">
                  <Loader />
                </div>
              ) : !data ? (
                <div className="text-2xl md:text-3xl font-bold text-[#068896] text-center py-16">
                  No Offer found!
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {/* Title */}
                  <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#068896] text-center mb-2 tracking-tight">
                    {data.name}
                  </div>
                  {/* Main details */}
                  <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
                    {/* Image */}
                    <div className="w-full md:w-[42%] flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100 p-2 shadow-inner">
                      <img
                        className="w-full h-64 object-contain rounded-lg"
                        src={data.thumbnail_url}
                        alt={data.name || "offer"}
                        loading="lazy"
                      />
                    </div>
                    {/* Info */}
                    <div className="w-full md:w-[58%] flex flex-col gap-3">
                      <dl className="space-y-2">
                        {/* Category */}
                        <div>
                          <dt className="font-semibold text-[#068896] text-sm sm:text-base">Category</dt>
                          <dd className="text-gray-800 text-sm sm:text-base rounded px-2 py-1 bg-[#f6fafb] inline-block mt-1">
                            {data.relationship?.category?.name}
                          </dd>
                        </div>
                        {/* Labels */}
                        <div>
                          <dt className="font-semibold text-[#068896] text-sm sm:text-base">Labels</dt>
                          <dd className="flex flex-wrap gap-2 mt-1">
                            {data.relationship?.labels?.entries?.map((label, idx) => (
                              <span
                                key={label + idx}
                                className="bg-[#e6f7fa] text-[#068896] border border-[#068896]/10 rounded-full px-2 py-0.5 text-xs sm:text-sm"
                              >
                                {label}
                              </span>
                            ))}
                          </dd>
                        </div>
                        {/* Payout */}
                        <div>
                          <dt className="font-semibold text-[#068896] text-sm sm:text-base">Payout</dt>
                          <dd className="text-green-700 font-bold text-base sm:text-lg mt-1">
                            $
                            {data.relationship?.payout_revenue?.entries?.[0]?.payout_amount
                              ? data.relationship.payout_revenue.entries[0].payout_amount
                              : "N/A"}
                          </dd>
                        </div>
                      </dl>
                      {/* Description */}
                      <div className="mt-2">
                        <div className="font-semibold text-[#068896] text-sm sm:text-base mb-1">
                          Description
                        </div>
                        <div className="text-gray-700 text-sm sm:text-base leading-relaxed bg-[#f6fafb] rounded-lg p-3">
                          {trimDescription(data.html_description)}
                        </div>
                      </div>
                      {/* CTA Button */}
                      <div className="mt-4 flex justify-center">
                        <a
                          href="https://clickhunts.everflowclient.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#068896] hover:bg-[#057885] text-white font-bold px-7 py-3 rounded-lg shadow transition-transform duration-150 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#068896] focus:ring-opacity-40"
                        >
                          Join this Network
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Why Choose Section */}
            <WhyChoose />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;