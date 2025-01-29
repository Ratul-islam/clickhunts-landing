import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./api/api";
import Loader from "./components/loader";
import WhyChoose from "./components/whyChoose";

const OfferDetails = () => {
  const { id, offerId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      const fetchedData = await api.get(`/networks/offers/${offerId}`);
      setData(fetchedData.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(data);
  }, []);

  function trimDescription(input) {
    if (input.startsWith("Description:")) {
      return input.replace(/^Description:\s*/, "");
    }
    return input;
  }
  
  return (
    <div className="pt-5">
      <img
        className="mx-auto w-[10vw] min-w-[100px] max-w-[150px]"
        src="https://clickhunts.com/wp-content/uploads/2024/01/ClickHunts.png"
        alt="Clickhunts"
      />

      <div className="flex justify-center">
        <div className="m-3 md:m-10 w-screen max-w-screen-xl">
          <div className="flex flex-col">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
              {loading ? (
                <div className="grid place-content-center">
                  <Loader/>
                </div>
              ) : data?.length < 1 ? (
                <div className="text-3xl font-bold text-[#068896] text-center">
                  No Offer found!
                </div>
              ) : (
                <div>
                  <div className="text-md md:text-xl xl:text-3xl font-bold text-[#068896] py-4 md:py-0 text-center mb-4">
                    {data.name}
                  </div>
                  <div className="flex flex-col md:flex-row gap-7">
                    <div className="w-full md:w-[50%]">
                      <img
                        className="w-full"
                        src={data.thumbnail_url}
                        alt="offer"
                      />
                    </div>
                    <div className="w-full md:w-[50%]">
                      <div className="text-sm md:text-md py-1 md:py-4">
                        <span className="font-bold  text-[#068896]">
                          Category:{" "}
                        </span>
                        {data.relationship.category.name}
                      </div>
                      <div className="text-sm md:text-md py-1 md:py-4">
                        <span className="font-bold  text-[#068896]">
                          Labels:{" "}
                        </span>
                        {data.relationship.labels.entries.join(", ")}
                      </div>

                      <div className="text-sm md:text-md py-1 md:py-4">
                        <span className="font-bold  text-[#068896]">
                          Payout:{" "}
                        </span>
                        ${
                          data.relationship.payout_revenue.entries[0]
                            .payout_amount
                        }
                      </div>
                      <div className="text-sm md:text-md py-1 md:py-4">
                        <span className="font-bold  text-[#068896]">
                          Description:{" "}
                        </span>
                        {trimDescription(data.html_description)}
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              )}
              <hr />
              {/* <div className="flex justify-center items-center flex-col mt-9">
                <div className="font-bold text-3xl text-center text-[#068896]">Want to join the network?</div>
                <a href="https://clickhunts.everflowclient.io/" className="block bg-[#068896] text-white px-5 py-3 rounded-xl mt-6">CLick Here!</a>
                </div> */}
            </div>
                <WhyChoose/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
