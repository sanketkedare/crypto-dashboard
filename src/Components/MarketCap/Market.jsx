import React, { useEffect, useState } from "react";
// import MarketData from "../../Data/Market.json";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { MarketData } from "../../APIs/api";
import MyData from "../../Utils/Market.json";
import { setCrypto, setMarketData } from "../../Data/Action";

const Market = () => 
{
  const dispatch = useDispatch();
  const currency = useSelector((state)=>state.currency.currency)
  const [currentMarketData, setCurrentMarketData] = useState(null);
  
  const API = MarketData(currency.code);
  
  
  const getData = async() => 
  {
    try
    {
      const data = await fetch(API);
      const json = await data.json();      
      setCurrentMarketData(json)
      dispatch(setMarketData(json))
    }
    catch(err)
    {
       setCurrentMarketData(MyData)
       dispatch(setMarketData(MyData))
    }
  }

  const setCurrency = (c) =>{
    dispatch(setCrypto(c));
  }

  useEffect(()=>{
    getData();
  },[currency.code])

  return (
    <div className="bg-white h-[85vh] rounded-lg border border-black">
      <h1 className="h-[60px] relative bg-gray-100 text-center flex items-center justify-center font-bold rounded-xl shadow-md">
        Cryptocurrency By Market Cap
      </h1>
      
      <div className="p-3 decoration-none overflow-y-auto h-[90%]">
        {currentMarketData === null ? (
          <Shimmer />
        ) : (
          currentMarketData.map((crypto) => (
            <tr
              key={crypto.id}
              className="table-auto text-center border border-black hover:bg-yellow-200 shadow shadow-red-300 transition"
              onClick={()=>setCurrency(crypto)}
            >
              <td className="align-middle">
                <p className="text-gray-600 text-[13px] text-nowrap">{crypto.name}</p>
              </td>
              <td className="w-20 h-10 lg:p-1 rounded-full  m-auto align-middle">
                <img src={crypto.image} alt="curr" className=" mx-auto"/>
              </td>
              
              <td className="text-right text-[10px] font-bold align-middle">{currency.symbol}{crypto.current_price}</td>
              <td
                className={`text-right text-[12px] px-2 align-middle ${
                  crypto.market_cap_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {-(crypto.ath_change_percentage / 10).toFixed(2)}%
              </td>
              <td className="text-right p-2 text-sm text-[10px] align-middle">
              <p className="text-gray-600 text-[13px] text-nowrap">
              {currency.symbol}{(crypto.market_cap / 1000000000).toFixed(2)}M</p>
              </td>

            </tr>
          ))
        )}
      </div>
    </div>
  );
};

export default Market;
