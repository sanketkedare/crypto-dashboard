import React from "react";
import { useSelector } from "react-redux";
import data from "../../Utils/Market.json";

const PieComponent = () => {
  const curr = useSelector((state) => state.currency.currency.symbol);
  const colors = ["yellow", "green", "sky"];

  return (
    <div className="lg:w-[50%] w-[100%] shadow-xl h-full flex justify-center items-center rounded-xl">
      <div className="lg:w-[50%] lg:m-3 flex flex-wrap justify-between m-auto">
        <h1 className="shadow-inner mt-5">Top 3</h1>

        <div className="flex justify-between">
          <div className="p-3 lg:ml-3">
            {colors.map((i, index) => (
              <li className={`text-[13px] text-${i}-800 font-bold`}>
                {data[index].name}
              </li>
            ))}
          </div>
          <div className="p-3 lg:ml-3">
            {colors.map((i, index) => (
              <h1 className={`text-[13px] text-${i}-800 font-bold`}>
                {curr} {data[index].current_price}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieComponent;
