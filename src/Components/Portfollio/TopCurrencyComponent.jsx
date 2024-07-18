import React from "react";
import { useSelector } from "react-redux";

// TopCurrencyComponent: Displays the top 3 currencies from the market data

const TopCurrencyComponent = () => {
  // Get the currency symbol from the Redux store
  const curr = useSelector((state) => state.currency.currency.symbol);
  
  // Get the market data from the Redux store and slice the first 3 items
  const marketData = useSelector((state) => state.market);
  const data = marketData && marketData.slice(0,3)
  
  // Define colors for styling
  const colors = ["yellow", "green", "sky"];

  return (
    <div className="lg:w-[50%] w-[100%] shadow-xl h-full flex justify-center items-center rounded-xl">
      <div className="lg:w-[50%] lg:m-3 flex flex-wrap justify-between m-auto">
        <h1 className="shadow-inner mt-5">Top 3</h1>

        {/* Check if data is available */}
        {data.length > 0 ? (
          <div className="flex justify-between">
            <div className="p-3 lg:ml-3">
              {colors.map((color, index) => (
                <li key={index} className={`text-[13px] text-${color}-800 font-bold`}>
                  {data[index] ? data[index].name : "N/A"}
                </li>
              ))}
            </div>
            <div className="p-3 lg:ml-3">
              {colors.map((color, index) => (
                <h1 key={index} className={`text-[13px] text-${color}-800 font-bold`}>
                  {curr} {data[index] ? data[index].current_price : "N/A"}
                </h1>
              ))}
            </div>
          </div>
        ) : (
          "Please Wait...."
        )}
      </div>
    </div>
  );
};

export default TopCurrencyComponent;
