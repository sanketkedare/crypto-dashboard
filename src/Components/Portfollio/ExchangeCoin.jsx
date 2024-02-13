import React, { useEffect, useState } from "react";
import CoinList from "../../Utils/Exchange.json";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import calculateExchangeRate from "./calculate";

const ExchangeCoin = () => 
{

  const [sell, setSell] = useState("Bitcoin");
  const [buy, setBuy] = useState("Ether");
  const [unit, setUnit] = useState("ETH");

  const [sellOpen, setSellOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);

  const [sellAmount, setSellAmount] = useState(1);
  const [buyAmount, setBuyAmount] = useState(0);
  
  useEffect(() => {
    const result = calculateExchangeRate(sell,sellAmount , buy);
    setBuyAmount(result);
  }, [sell, buy, sellAmount]);

  useEffect(() => {
    if (buyOpen) setSellOpen(false);
    if (sellOpen) setBuyOpen(false);
  }, [sellOpen, buyOpen]);

  return (
    <div className="lg:w-[45%] w-[350px] p-2 shadow-md flex flex-wrap justify-center items-center rounded-xl">
      <div className="w-full ">
        <h1 className="text-[15px] text-left font-bold my-3">Exchange Coin</h1>

        {/* Sell */}
        <div className="flex flex-wrap justify-around lg:justify-between px-2 items-center">
          <h1 className="text-red-800 font-bold px-1 m-3">Sell:</h1>
          <div
            className="p-1 px-3 border border-black rounded-lg w-[100%] lg:w-[150px] flex items-center justify-between"
            onClick={() => setSellOpen(true)}
          >
            {sell}
            <MdOutlineArrowDropDownCircle className="text-end" />
          </div>

          {sellOpen && (
            <div
              className="lg:w-[150px] w-[200px] max-h-[100px] overflow-y-auto bg-black text-white  absolute ml-10 mt-32 rounded-xl p-2 "
              onMouseLeave={() => setSellOpen(false)}
            >
              {Object.keys(CoinList).map((c) => (
                <h1
                  key={c}
                  className="border-b hover:bg-sky-400 hover:text-black text-[13px]"
                  onClick={() => {
                    setSell(CoinList[c].name);
                    setSellOpen(false);
                  }}
                >
                  {CoinList[c].name}
                </h1>
              ))}
            </div>
          )}
          <input
            className="lg:w-[200px] w-[100%] border m-auto border-black rounded-lg p-1 text-red-600 my-1"
            value={sellAmount}
            type="number"
            onChange={(e) => setSellAmount(e.target.value)}
          />
        </div>

        {/* Buy */}
        <div className="flex flex-wrap justify-around lg:justify-between px-2 items-center">
          <h1 className="text-green-800 font-bold px-1 m-3">Buy:</h1>

          <div
            className="p-1 px-3 border border-black rounded-lg w-[100%] lg:w-[150px] flex items-center justify-between"
            onClick={() => setBuyOpen(true)}
          >
            {buy}
            <MdOutlineArrowDropDownCircle className="text-end" />
          </div>
          {buyOpen && (
            <div
              className="lg:w-[150px] w-[200px]  max-h-[100px] overflow-y-auto bg-black text-white  absolute ml-10 mt-32 rounded-xl p-2 "
              onMouseLeave={() => setBuyOpen(false)}
            >
              {Object.keys(CoinList).map((c) => (
                <h1
                  className="border-b hover:bg-sky-400 hover:text-black text-[13px]"
                  onClick={() => {
                    setBuy(CoinList[c].name);
                    setUnit(CoinList[c].unit)
                    setBuyOpen(false);
                  }}
                >
                  {CoinList[c].name}
                </h1>
              ))}
            </div>
          )}
          <h1 className="lg:w-[200px] w-[100%] border m-auto border-black rounded-lg p-1 text-green-600 my-1">
            {unit} {buyAmount} 
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCoin;
