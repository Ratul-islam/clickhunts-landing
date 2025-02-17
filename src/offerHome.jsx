import React, { useState } from "react";
import SearchForm from "./components/offer/form";
import Offers from "./components/offer/offers";



const OfferHome = () => {
  const [selectedCountry, setSelectedCountry]= useState("")
  const [ selectedTraffic, setSelectedTraffic]= useState("")
  const [ selectedCategory,setSelectedCategory]= useState("")
  const [ search,setSearch]= useState("")

  const catchData=(selectedCountry, selectedTraffic, selectedCategory, search)=>{
    setSelectedCategory(selectedCategory)
    setSelectedTraffic(selectedTraffic)
    setSelectedCountry(selectedCountry)
    setSearch(search)
  }
  return (
    <div className="px-6">
      
      {/* <div className="flex justify-center"> */}
      {/* <div className="flex flex-col md:flex-row m-10 w-screen max-w-screen-xl relative justify-end"> */}
{/*       
      <div className=" gap-5 hidden md:flex">
        <a href="https://clickhunts.everflowclient.io/" className="bg-[#068896] px-5 py-4 text-white font-bold rounded-md">Login</a>
        <a href="https://clickhunts.everflowclient.io/affiliate/signup" className="bg-[#068896] px-5 py-4 text-white font-bold rounded-md">Sign Up</a>
      </div> */}
      {/* </div> */}
      {/* </div> */}

      <div className="flex justify-center">
        <div className="m-2 w-screen max-w-screen-xl">
          <div className="flex flex-col">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
              <SearchForm catchData={catchData}/>
              <Offers selectedCountry={selectedCountry} selectedTraffic={selectedTraffic} selectedCategory={selectedCategory} search={search} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferHome;
