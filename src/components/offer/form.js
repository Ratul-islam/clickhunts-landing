import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../api/api";

const SearchForm = ({ catchData }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  
  // Options states
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [trafficOptions, setTrafficOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  
  // Form states
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [selectedCountry, setSelectedCountry] = useState(searchParams.get("country") || "");
  const [selectedTraffic, setSelectedTraffic] = useState(searchParams.get("traffic") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");

  const getData = async () => {
    try {
      const [categories, countries, labels] = await Promise.all([
        api.get("/networks/categories"),
        api.get("/meta/countries"),
        api.get("/networks/labels")
      ]);

      setCategoryOptions(categories.data.categories);
      setCountryOptions(countries.data.countries);
      setTrafficOptions(labels.data.labels);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching options:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.has("country")) setSelectedCountry(searchParams.get("country"));
    if (searchParams.has("traffic")) setSelectedTraffic(searchParams.get("traffic"));
    if (searchParams.has("category")) setSelectedCategory(searchParams.get("category"));
    if (searchParams.has("search")) setSearch(searchParams.get("search"));
    
    if ([...searchParams.entries()].length > 0) {
      handleSearch();
    }
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedCountry) params.set("country", selectedCountry);
    if (selectedTraffic) params.set("traffic", selectedTraffic);
    if (selectedCategory) params.set("category", selectedCategory);
    if (search) params.set("search", search);
    setSearchParams(params);
    catchData(selectedCountry, selectedTraffic, selectedCategory, search);
  };

  const handleReset = () => {
    setSelectedCountry("");
    setSelectedTraffic("");
    setSelectedCategory("");
    setSearch("");
    setSearchParams(new URLSearchParams());
    catchData("", "", "", "");
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <form className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8" onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#068896] pb-4 sm:pb-6 lg:pb-8">
          Find Offer
        </h1>
        
        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Country Select */}
          <div className="flex flex-col">
            <label htmlFor="Country" className="text-sm font-medium text-gray-700 mb-1.5">
              Country
            </label>
            <select
              id="Country"
              className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:border-[#068896] focus:ring-2 focus:ring-[#068896] focus:ring-opacity-20 transition-colors duration-200 text-sm sm:text-base"
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                handleSearch();
              }}
            >
              <option value="">All Countries</option>
              {countryOptions?.map((el, id) => (
                <option value={el.country_id} key={id}>
                  {el.country_name}
                </option>
              ))}
            </select>
          </div>

          {/* Traffic Type Select */}
          <div className="flex flex-col">
            <label htmlFor="Traffic" className="text-sm font-medium text-gray-700 mb-1.5">
              Traffic Type
            </label>
            <select
              id="Traffic"
              className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:border-[#068896] focus:ring-2 focus:ring-[#068896] focus:ring-opacity-20 transition-colors duration-200 text-sm sm:text-base"
              value={selectedTraffic}
              onChange={(e) => {
                setSelectedTraffic(e.target.value);
                handleSearch();
              }}
            >
              <option value="">All Traffic</option>
              {trafficOptions?.map((el, id) => (
                <option value={el.traffic_id} key={id}>
                  {el.label}
                </option>
              ))}
            </select>
          </div>

          {/* Categories Select */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <label htmlFor="Category" className="text-sm font-medium text-gray-700 mb-1.5">
              Categories
            </label>
            <select
              id="Category"
              className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:border-[#068896] focus:ring-2 focus:ring-[#068896] focus:ring-opacity-20 transition-colors duration-200 text-sm sm:text-base"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                handleSearch();
              }}
            >
              <option value="">All Categories</option>
              {categoryOptions?.map((el, id) => (
                <option value={el.network_category_id} key={id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Bar and Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 text-sm sm:text-base">Search</span>
            </div>
            <input
              type="text"
              className="w-full pl-16 sm:pl-20 pr-3 sm:pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:border-[#068896] focus:ring-2 focus:ring-[#068896] focus:ring-opacity-20 transition-colors duration-200 text-sm sm:text-base"
              placeholder="Search offers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleSearch}
              className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-[#068896] text-white rounded-lg hover:bg-[#057885] transition-colors duration-200 focus:ring-2 focus:ring-[#068896] focus:ring-opacity-50 text-sm sm:text-base whitespace-nowrap"
            >
              Apply Filter
            </button>
            
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 text-sm sm:text-base whitespace-nowrap"
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