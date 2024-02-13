import React from "react";
import { useSelector } from "react-redux";

const PieComponent = () => 
{
  const curr = useSelector((state)=> state.currency.currency.symbol);
  const data = useSelector((state)=> state.market).sort((a,b)=>b.current_price-a.current_price)


  return (
    <div className="lg:w-[50%] w-[100%] shadow-xl h-full flex justify-center items-center rounded-xl">
      <div className="lg:w-[50%] lg:m-3 flex flex-wrap justify-between m-auto">
      <h1 className="shadow-inner mt-5">Top 3</h1>

        <div className="flex justify-between">
          <div className="p-3 lg:ml-3">
            <li className="text-[13px] text-yellow-800 font-bold">{data[0].name}</li>
            <li className="text-[13px] text-green-700 font-bold">{data[1].name}</li>
            <li className="text-[13px] text-sky-800 font-bold">{data[2].name}</li>
          </div>
          <div className="p-3 lg:ml-3">
            <h1 className="text-[13px] text-yellow-800 font-bold">{curr} {data[0].current_price}</h1>
            <h1 className="text-[13px] text-green-700 font-bold">{curr} {data[1].current_price}</h1>
            <h1 className="text-[13px] text-sky-800 font-bold">{curr} {data[2].current_price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieComponent;
