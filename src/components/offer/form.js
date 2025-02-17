import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { HashLoader } from "react-spinners";

const SearchForm = ({catchData}) => {
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [trafficOptions, setTrafficOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // States for selected values
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedTraffic, setSelectedTraffic] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const getData = async () => {
    try {
      const fetchedCategory = await api.get("/networks/categories");
      setCategoryOptions(fetchedCategory.data.categories);
      const fetchedCountries = await api.get("/meta/countries");
      setCountryOptions(fetchedCountries.data.countries);
      const fetchedLabels = await api.get("/networks/labels");
      setTrafficOptions(fetchedLabels.data.labels);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = () => {
    catchData(selectedCountry, selectedTraffic, selectedCategory, search)
  };
const handleChange=(e)=>{
  setSearch(e.target.value)
}

// console.log(search)
  
  return (
    <>
      {(
        <form className="">
          <h1 className="text-center text-3xl font-bold text-[#068896] pb-8">Find Offer</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
            <div className="flex flex-col">
              <label
                htmlFor="Country"
                className="text-sm font-medium text-stone-600"
              >
                Country
              </label>

              <select
                id="Country"
                className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={selectedCountry}
                onChange={(e) => {setSelectedCountry(e.target.value)
                  handleSearch()}}
              >
                <option value="">All Countries</option>
                {countryOptions?.map((el, id) => (
                  <option value={el.country_id} key={id}>
                    {el.country_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="Traffic"
                className="text-sm font-medium text-stone-600"
              >
                Traffic type
              </label>

              <select
                id="Traffic"
                className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={selectedTraffic}
                onChange={(e) => {
                  setSelectedTraffic(e.target.value)
                  handleSearch()
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

            <div className="flex flex-col">
              <label
                htmlFor="Category"
                className="text-sm font-medium text-stone-600"
              >
                Categories
              </label>

              <select
                id="Category"
                className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={selectedCategory}
                onChange={(e) =>{
                  setSelectedCategory(e.target.value)
                  handleSearch()
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
          <div>
           <div className="flex my-3 ">
           <div className="bg-[#068896] text-white flex justify-center items-center px-3 rounded-lg rounded-e-none">Search</div>
            <input type="text" className="w-full bg-gray-100 px-2 py-2" placeholder="Search offers...." onChange={handleChange}/>
            
            <button
              type="button"
              className="rounded-lg bg-[#068896] px-8 font-medium text-white outline-none hover:opacity-80 focus:ring rounded-s-none w-[200px]"
              onClick={handleSearch}
            >
              Apply Filter
            </button>
           </div>
          {/* <div className="mt-6 grid w-full grid-cols-2 justify-center space-x-4 md:flex">
            <button
              type="button"
              className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring"
              onClick={() => {
                setSelectedCountry("");
                setSelectedTraffic("");
                setSelectedCategory("");
              }}
            >
              Reset
            </button>
          </div> */}
          </div>

        </form>
      )}
    </>
  );
};

export default SearchForm;
