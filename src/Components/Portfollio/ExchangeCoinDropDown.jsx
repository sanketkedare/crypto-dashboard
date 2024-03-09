import React from "react";
import CoinList from "../../Utils/Exchange.json";


const ExchangeCoinDropDown = ({method,setUnit, setCoin, setCoinOpen}) => {
  return (
    <div
      className="lg:w-[150px] w-[200px] max-h-[100px] overflow-y-auto bg-black text-white  absolute ml-10 mt-32 rounded-xl p-2 "
      onMouseLeave={() => setCoinOpen(false)}
    >
      {Object.keys(CoinList).map((c) => (
        <h1
          key={c}
          className="border-b hover:bg-sky-400 hover:text-black text-[13px]"
          onClick={() => {
            setCoin(CoinList[c].name);
            method === "Buy" && setUnit(CoinList[c].unit);
            setCoinOpen(false);
          }}
        >
          {CoinList[c].name}
        </h1>
      ))}
    </div>
  );
};

export default ExchangeCoinDropDown;
