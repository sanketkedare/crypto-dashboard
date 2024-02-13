import React from "react";
import { useSelector } from "react-redux";
import getPrice from "./getPrice";

const TitleBar = ({day,chart,dayType,chartType}) => 
{
  const coin = useSelector((state) => state.crypto);
  const curr = useSelector((state) => state.currency.currency.symbol)
  const Market = useSelector(state => state.market);

  const price = getPrice(Market,coin.name);

  return (
    <div className="flex flex-wrap w-full lg:justify-between justify-center">
      <div className=" flex items-center gap-2 p-2 shadow-md rounded-md">
        <img src={coin.image} alt={coin.id} className="w-[20px]" />
        <h1 className="text-[15px]">
          <span className="uppercase font-bold">{coin.id} : </span>
          {coin.name}
        </h1>
        {curr}{price}
      </div>
        {/* Chart Type */}
        <div className="flex justify-around my-2">
          <button className={`text-[15px] w-[100px] p-1 px-2 mx-2 border border-black rounded-lg ${chart === "Bar" ? "bg-black text-white" :"bg-sky-200"} font-bold hover:bg-sky-600 hover:text-white}`}
            onClick={()=>chartType("Bar")}>
            Bar
          </button>
          <button className={`text-[15px] w-[100px] p-1 px-2 mx-2 border border-black rounded-lg ${chart === "Line" ? "bg-black text-white" :"bg-sky-200"} font-bold hover:bg-sky-600 hover:text-white}`}
          onClick={()=>chartType("Line")}>
            Line
          </button>
          
        </div>

        {/* Chart Days */}
        <div className="flex justify-between my-2">
          <button className={`p-1 px-2 mx-2  rounded-full  border border-black hover:bg-sky-950 text-white ${day === 1 ? "bg-black" :"bg-yellow-800"}`}
            onClick={()=>dayType(1)}>
            1D
          </button>
          <button className={`p-1 px-2 mx-2  rounded-full  border border-black hover:bg-sky-950 text-white ${day === 7 ? "bg-black" :"bg-yellow-800"}`}
            onClick={()=>dayType(7)}>
            1W
          </button>
          <button className={`p-1 px-2 mx-2  rounded-full  border border-black hover:bg-sky-950 text-white ${day === 30 ? "bg-black" :"bg-yellow-800"}`}
            onClick={()=>dayType(30)}>
            1M
          </button>
          <button className={`p-1 px-2 mx-2  rounded-full  border border-black hover:bg-sky-950 text-white ${day === 365 ? "bg-black" :"bg-yellow-800"}`}
            onClick={()=>dayType(365)}>
            1Y
          </button>
        </div>
      </div>
  );
};

export default TitleBar;
