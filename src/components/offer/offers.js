import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import Loader from "./loader";

const Offers = ({ selectedCountry, selectedCategory, selectedTraffic, search }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const getData = async () => {
    setLoading(true);
    try {
      const fetchedData = await api.post(
        `/networks/offerstable?page=${currentPage}&page_size=50&order_field=&order_direction=&relationship=ruleset&relationship=tracking_domain&relationship=account_manager&relationship=sales_manager`,
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
          search_terms: search? [
            {
              "search_type": "name",
              "value": search
            }
          ] : []
        }
      );
      setData(fetchedData.data.offers);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [selectedCategory, selectedCountry, selectedTraffic,currentPage, search]);


  const navigateNext=(name, id)=>{
    console.log(name)
    navigate(`/${name}/${id}`, {
      state: { id }
    });
  }
  // const trim = (words) => {
  //   let trimmed;
  //   if (words?.length > 200) {
  //     trimmed = words?.slice(0, 200) + "....";
  //     return trimmed;
  //   }
  //   return words;
  // };
  return (
    <div>
      <div className="flex-wrap grid grid-cols-1 gap-6 mt-12">
        {loading ? (
          <div className="grid place-content-center">
            <Loader />
          </div>
        ) : data?.length < 1 ? (
          <div className="text-3xl font-bold text-[#068896] text-center">
            No Offers found!
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-200 "> 
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start md:text-md text-sm font-medium text-gray-800 uppercase "
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start md:text-md text-sm font-medium text-gray-800 uppercase "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start md:text-md text-sm font-medium text-gray-800 uppercase "
                        >
                          Country
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase "
                        >
                          Payout
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 ">
                      {data?.map((elem, id) => {
                        return (
                          <tr className="hover:bg-gray-100 transition-all ease-out duration-200 cursor-pointer">
                              <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800  hover:text-[#22646b] hover:font-semibold hover:underline">
                            <div  className="cursor-pointer">
                                {elem.network_offer_id}
                            </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800  hover:text-[#22646b] hover:font-semibold hover:underline"  onClick={()=>{navigateNext(elem.name, elem.network_offer_id)}}>
                              <div className="cursor-pointer">
                                {elem.name}
                            </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800 hover:text-[#22646b] hover:font-semibold hover:underline">
                              <div  className="cursor-pointer">
                                {elem?.relationship.ruleset.countries.map(el=>{
                                  return <div>{el.label}</div>
                                })}
                            </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-end text-md font-medium hover:text-[#22646b] hover:font-semibold hover:underline">
                              <div  className="cursor-pointer">
                                {elem.payout_amount === 0 ? "Revenue Share "+elem.payout_percentage +"%":"$"+ elem.payout_amount}
                            </div>
                              </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    


                  </table>
                </div>
                
              </div>
            </div>
          </div>
        )}

<div className="flex justify-end">
<div class="flex flex-col items-center">
  
  <div class="inline-flex mt-2 xs:mt-0">
    {
  currentPage>1 && <>
    <button onClick={()=>{if(currentPage>1)setCurrentPage(currentPage-1)}} class="flex items-center justify-center px-4 h-10 text-base font-medium  text-[#068896] rounded-s border-2 border-[#068896]">
        <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        Prev
    </button>
    <button onClick={()=>{if(currentPage>1)setCurrentPage(currentPage-1)}} class="flex items-center justify-center px-4 h-10 text-base font-medium text-[#068896] rounded-s border-2 border-[#068896]">
        {currentPage-1}
    </button>
  </>
    }
    
    <button class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-[#068896] rounded-s hover:bg-gray-900 ">
        {currentPage}
    </button>
    {
      data?.length<20 ? "": <>
      
    <button onClick={()=>{setCurrentPage(currentPage+1)}} class="flex items-center justify-center px-4 h-10 text-base font-medium text-[#068896] rounded-s border-2 border-[#068896]">
        {currentPage+1}
    </button>
    <button onClick={()=>{setCurrentPage(currentPage+1)}} class="flex items-center justify-center px-4 h-10 text-base font-medium  text-[#068896] rounded-s border-2 border-[#068896]">
        Next
        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </button>
      </>
    }
  </div>
</div>
</div>
      </div>
    </div>
  );
};

export default Offers;
