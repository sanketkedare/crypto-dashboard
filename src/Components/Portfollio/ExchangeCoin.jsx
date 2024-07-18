import React, { useEffect, useState } from "react";
import calculateExchangeRate from "./calculate";
import ExchangeCoinSell from "./ExchangeCoinHelper";

// Exchange Coin Component
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
    const result = calculateExchangeRate(sell, sellAmount, buy);
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
        <ExchangeCoinSell
          method={"Sell"}
          coin={sell}
          setCoin={setSell}
          coinOpen={sellOpen}
          setCoinOpen={setSellOpen}
          amount={sellAmount}
          setAmount={setSellAmount}
        />

        {/* Buy */}
        <ExchangeCoinSell
          method={"Buy"}
          coin={buy}
          setCoin={setBuy}
          coinOpen={buyOpen}
          setCoinOpen={setBuyOpen}
          amount={buyAmount}
          unit={unit}
          setUnit={setUnit}
        />
      </div>
    </div>
  );
};

export default ExchangeCoin;
