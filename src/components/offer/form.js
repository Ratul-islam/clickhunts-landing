import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../api/api";
// import Select from "react-select"; // Optionally use react-select for better dropdowns

const SearchForm = ({ catchData }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Option states
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [trafficOptions, setTrafficOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);

  // Form states
  const [search, setSearch] = useState(searchParams.get("search") || "");
  // Hold slugs/names for UI, but IDs for API
  const [selectedCountryName, setSelectedCountryName] = useState(searchParams.get("country") || "");
  const [selectedTrafficName, setSelectedTrafficName] = useState(searchParams.get("traffic") || "");
  const [selectedCategoryName, setSelectedCategoryName] = useState(searchParams.get("category") || "");

  // Helper: Find ID by Name/Slug
  const getIdByName = (arr, nameField, idField, val) =>
    arr.find(item => (item[nameField]?.toLowerCase() || "") === (val?.toLowerCase() || ""))?.[idField] || "";

  const getData = async () => {
    try {
      setLoading(true);
      setError(false);
      const [categories, countries, labels] = await Promise.all([
        api.get("/networks/categories"),
        api.get("/meta/countries"),
        api.get("/networks/labels")
      ]);
      setCategoryOptions(categories.data.categories.filter(c => c.status === 'active'));
      setCountryOptions(countries.data.countries);
      setTrafficOptions(labels.data.labels);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // On mount, fetch options and sync from URL
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Sync from URL on first load
    if (searchParams.has("country")) setSelectedCountryName(searchParams.get("country"));
    if (searchParams.has("traffic")) setSelectedTrafficName(searchParams.get("traffic"));
    if (searchParams.has("category")) setSelectedCategoryName(searchParams.get("category"));
    if (searchParams.has("search")) setSearch(searchParams.get("search"));

    if ([...searchParams.entries()].length > 0) {
      handleSearch();
    }
    // eslint-disable-next-line
  }, []);

  // Main Search Handler
  const handleSearch = () => {
    // For each: convert slug/name to id for filtering, but keep name in URL
    const countryId = getIdByName(countryOptions, "country_name", "country_id", selectedCountryName);
    const trafficId = getIdByName(trafficOptions, "label", "traffic_id", selectedTrafficName);
    const categoryId = getIdByName(categoryOptions, "name", "network_category_id", selectedCategoryName);

    // Build new params with names
    const params = new URLSearchParams();
    if (selectedCountryName) params.set("country", selectedCountryName);
    if (selectedTrafficName) params.set("traffic", selectedTrafficName);
    if (selectedCategoryName) params.set("category", selectedCategoryName);
    if (search) params.set("search", search);

    setSearchParams(params);

    // Pass IDs for backend filtering
    catchData(countryId, trafficId, categoryId, search);
  };

  // Reset everything
  const handleReset = () => {
    setSelectedCountryName("");
    setSelectedTrafficName("");
    setSelectedCategoryName("");
    setSearch("");
    setSearchParams(new URLSearchParams());
    catchData("", "", "", "");
  };

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-8 text-center animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4 w-1/2 mx-auto"></div>
        <div className="h-6 bg-gray-100 rounded mb-2 w-2/3 mx-auto"></div>
        <div className="h-6 bg-gray-100 rounded mb-2 w-2/3 mx-auto"></div>
        <div className="h-6 bg-gray-100 rounded mb-2 w-2/3 mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-8 text-center text-red-500">
        Failed to load search filters. Please try again later.
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <form
        className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100"
        onSubmit={e => e.preventDefault()}
      >
        <h1 className="text-center text-3xl font-extrabold text-[#068896] pb-6 tracking-tight">
          Find Offer
        </h1>
        
        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Country Select */}
          <div className="flex flex-col">
            <label htmlFor="Country" className="text-sm font-semibold text-gray-700 mb-2">
              Country
            </label>
            <select
              id="Country"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:border-[#068896] focus:ring-2 focus:ring-[#068896] text-base"
              value={selectedCountryName}
              onChange={e => {
                setSelectedCountryName(e.target.value);
                // Delay handleSearch until user clicks "Apply Filter"
              }}
            >
              <option value="">All Countries</option>
              {countryOptions.map((el, id) => (
                <option value={el.country_name} key={id}>
                  {el.country_name}
                </option>
              ))}
            </select>
          </div>

          {/* Traffic Type Select */}
          <div className="flex flex-col">
            <label htmlFor="Traffic" className="text-sm font-semibold text-gray-700 mb-2">
              Traffic Type
            </label>
            <select
              id="Traffic"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:border-[#068896] focus:ring-2 focus:ring-[#068896] text-base"
              value={selectedTrafficName}
              onChange={e => {
                setSelectedTrafficName(e.target.value);
              }}
            >
              <option value="">All Traffic</option>
              {trafficOptions.map((el, id) => (
                <option value={el.label} key={id}>
                  {el.label}
                </option>
              ))}
            </select>
          </div>

          {/* Categories Select */}
          <div className="flex flex-col">
            <label htmlFor="Category" className="text-sm font-semibold text-gray-700 mb-2">
              Categories
            </label>
            <select
              id="Category"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:border-[#068896] focus:ring-2 focus:ring-[#068896] text-base"
              value={selectedCategoryName}
              onChange={e => {
                setSelectedCategoryName(e.target.value);
              }}
            >
              <option value="">All Categories</option>
              {categoryOptions.map((el, id) => (
                <option value={el.name} key={id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Bar and Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              className="w-full pl-4 pr-3 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:border-[#068896] focus:ring-2 focus:ring-[#068896] text-base"
              placeholder="Search offers..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <span className="absolute left-3 top-2.5 text-gray-400 text-base pointer-events-none">
              <svg width="20" height="20" fill="none" stroke="currentColor" className="inline-block align-middle">
                <circle cx="9" cy="9" r="7" strokeWidth="2"/>
                <path d="M15 15l-3.5-3.5" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSearch}
              className="px-6 py-2 bg-[#068896] text-white rounded-lg hover:bg-[#057885] font-semibold text-base shadow transition"
            >
              Apply Filter
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold text-base shadow transition"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;