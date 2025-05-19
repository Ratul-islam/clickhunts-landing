import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import Loader from "./loader";

// Slugify function for SEO-friendly URLs
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/--+/g, "-");
}

const Offers = ({ selectedCountry, selectedCategory, selectedTraffic, search }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async () => {
    setLoading(true);
    try {
      const fetchedData = await api.post(
        `/networks/offerstable?page=${currentPage}&page_size=50&order_field=&order_direction=desc&relationship=ruleset&relationship=tracking_domain&relationship=account_manager&relationship=sales_manager`,
        {
          filters: {
            offer_status: "active",
            visibilities: [
              "public",
              "require_approval"
            ],
            network_category_ids: selectedCategory
              ? [parseInt(selectedCategory)]
              : [],
            country_ids: selectedCountry ? [parseInt(selectedCountry)] : [],
            labels: selectedTraffic ? [selectedTraffic] : [],
          },
          search_terms: search ? [
            {
              "search_type": "name",
              "value": search
            }
          ] : []
        }
      );
      setData(fetchedData.data.offers);
    } catch (err) {
      console.log(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [selectedCategory, selectedCountry, selectedTraffic, currentPage, search]);

  // SEO-friendly navigation: /:offername/:id
  const navigateNext = (name, id) => {
    const slug = slugify(name);
    navigate(`/${slug}/${id}`, { state: { id } });
  };

  // Display countries, up to 2, then ellipsis
  const renderCountries = (countries = []) => {
    if (countries.length === 0) return <span className="text-gray-400">N/A</span>;
    if (countries.length > 2) {
      return (
        <>
          <span>{countries[0]?.label}</span>
          <span className="ml-1">{countries[1]?.label} <span className="text-gray-500">...</span></span>
        </>
      );
    }
    return countries.map((el, idx) => (
      <span key={idx} className="mr-1">{el.label}</span>
    ));
  };

  // Display payout amount or percent
  const renderPayout = (elem) => {
    if (elem.payout_amount === 0) {
      return <>{elem.payout_percentage}<span className="text-xs">%</span></>;
    }
    return <>${elem.payout_amount}</>;
  };

  const tableRowClass = "hover:bg-[#e6f7fa] transition-all duration-200 cursor-pointer group";

  return (
    <div className="py-8 px-2 sm:px-6">
      <div className="relative">
        {loading ? (
          <div className="h-80 flex items-center justify-center">
            <Loader />
          </div>
        ) : data?.length < 1 ? (
          <div className="text-2xl sm:text-3xl font-extrabold text-[#068896] text-center py-16">
            No Offers found!
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow-xl border border-[#e6f7fa]">
            <table className="min-w-full divide-y divide-[#e0f2f1]">
              <thead className="bg-[#e6f7fa]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold tracking-wider text-[#068896] uppercase">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold tracking-wider text-[#068896] uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold tracking-wider text-[#068896] uppercase">
                    Country
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-bold tracking-wider text-[#068896] uppercase">
                    Payout
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f2fbfc]">
                {data.map((elem, idx) => (
                  <tr
                    key={elem.network_offer_id}
                    className={tableRowClass}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">
                      <span className="bg-[#e6f7fa] px-2 py-1 rounded-lg font-mono text-[#057885]">{elem.network_offer_id}</span>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-base text-[#068896] font-semibold group-hover:underline"
                      onClick={() => navigateNext(elem.name, elem.network_offer_id)}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="transition-colors duration-150">{elem.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
                      {renderCountries(elem?.relationship?.ruleset?.countries || [])}
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-right text-base font-bold text-green-700"
                    >
                      {renderPayout(elem)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {(!loading && data?.length > 0) && (
          <div className="flex justify-end mt-6">
            <div className="flex flex-col items-center">
              <div className="inline-flex gap-1">
                {currentPage > 1 && (
                  <>
                    <button
                      onClick={() => {
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="flex items-center px-4 h-10 text-base font-medium text-[#068896] rounded-l-lg border-2 border-[#068896] bg-white hover:bg-[#e6f7fa] transition"
                    >
                      <svg className="w-4 h-4 mr-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                      </svg>
                      Prev
                    </button>
                    <button
                      onClick={() => { if (currentPage > 1) setCurrentPage(currentPage - 1); }}
                      className="flex items-center px-4 h-10 text-base font-medium text-[#068896] border-2 border-[#068896] bg-white hover:bg-[#e6f7fa] transition"
                    >
                      {currentPage - 1}
                    </button>
                  </>
                )}
                <button
                  className="flex items-center px-4 h-10 text-base font-bold text-white bg-[#068896] rounded-lg shadow hover:bg-[#057885] transition"
                >
                  {currentPage}
                </button>
                {data?.length >= 50 && (
                  <>
                    <button
                      onClick={() => {
                        setCurrentPage(currentPage + 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="flex items-center px-4 h-10 text-base font-medium text-[#068896] border-2 border-[#068896] bg-white hover:bg-[#e6f7fa] transition"
                    >
                      {currentPage + 1}
                    </button>
                    <button
                      onClick={() => {
                        setCurrentPage(currentPage + 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="flex items-center px-4 h-10 text-base font-medium text-[#068896] rounded-r-lg border-2 border-[#068896] bg-white hover:bg-[#e6f7fa] transition"
                    >
                      Next
                      <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Offers;