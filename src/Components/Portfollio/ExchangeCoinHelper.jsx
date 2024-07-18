import React from "react";
import ExchangeCoinDropDown from "./ExchangeCoinDropDown";
import ExchangeCoinInfo from "./ExchangeCoinInfo";

// Common Component for Exchenge Coin
const ExchangeCoinSell = ({
  method,
  coin,
  setCoin,
  coinOpen,
  setCoinOpen,
  amount,
  setAmount,
  unit,
  setUnit,
}) => {
  return (
    <div className="flex flex-wrap justify-around lg:justify-between px-2 items-center">


      <ExchangeCoinInfo method={method} coin={coin} setCoinOpen={setCoinOpen} />

      {coinOpen && (<ExchangeCoinDropDown method={method} setUnit={setUnit} setCoin={setCoin} setCoinOpen={setCoinOpen}/>)}

      {method === "Sell" ? (
        <input
          className="lg:w-[200px] w-[100%] border m-auto border-black rounded-lg p-1 text-red-600 my-1"
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      ) : (
        <h1 className="lg:w-[200px] w-[100%] border m-auto border-black rounded-lg p-1 text-green-600 my-1">
          {unit} {amount}
        </h1>
      )}
    </div>
  );
};

export default ExchangeCoinSell;
