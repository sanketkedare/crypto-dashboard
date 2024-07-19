import React, { useEffect, useRef } from "react";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { MarketData } from "../../APIs/api";
import { setMarketData } from "../../Data/Action";
import MarketTable from "./MarketTable";
import { sort } from "../Portfollio/sort";

const Market = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.currency); // Get the current currency from the Redux store
  const currentMarketData = useSelector((state) => state.market); // Get the current market data from the Redux store
  const marketDataCache = useRef({}); // Create a ref to store the market data cache

  // Function to fetch market data from the API
  const getData = async () => {
    const currencyCode = currency.code; // Get the current currency code

    // Check if data for the current currency is already in the cache
    if (marketDataCache.current[currencyCode]) {
      dispatch(setMarketData(marketDataCache.current[currencyCode])); // Use cached data
      return;
    }

    const API = MarketData(currencyCode); // Generate the API URL based on the currency code
    try {
      const response = await fetch(API); // Fetch the data from the API
      const json = await response.json(); // Parse the JSON response
      const sorted = sort(json); // Sort the data
      marketDataCache.current[currencyCode] = sorted; // Cache the new data
      dispatch(setMarketData(sorted)); // Dispatch the new data to the Redux store
    } catch (err) {
      console.log(err); // Log any errors
    }
  };

  // Fetch data whenever the currency code changes
  useEffect(() => {
    getData();
  }, [currency.code]);

  return (
    <div className="bg-white h-[85vh] rounded-lg border border-black overflow-hidden">
      <h1 className="h-[60px] bg-gray-100 text-center flex items-center justify-center font-bold rounded-xl shadow-md">
        Cryptocurrency By Market Cap
      </h1>

      {/* Scrollable container for the table */}
      <div className="overflow-x-auto overflow-y-auto h-[calc(85vh-60px)]">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 border-b border-gray-300">
              <th className="p-2 text-left  text-[12px]">Image</th>
              <th className="p-2 text-left  text-[12px]">Name</th>
              <th className="p-2 text-right text-[12px]">Current Price</th>
              <th className="p-2 text-right text-[12px]">24h Change</th>
              <th className="p-2 text-right text-[12px]">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {/* Display shimmer effect while loading data */}
            {currentMarketData === null ? (
              <tr>
                <td colSpan="5" className="p-4 text-center">
                  <Shimmer />
                </td>
              </tr>
            ) : (
              // Render market data
              currentMarketData.map((crypto) => (
                <MarketTable key={crypto.id} crypto={crypto} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Market;
