import React from "react";
import { useSelector } from "react-redux";

const MarketTable = ({ crypto, setCurrency }) => {
  const currency = useSelector((state) => state.currency.currency);

  return (
    <tr
      className="table-auto text-center border border-black hover:bg-yellow-200 shadow shadow-red-300 transition"
      onClick={() => setCurrency(crypto)}
    >
      <td className="align-middle">
        <p className="text-gray-600 text-[13px] text-nowrap">{crypto.name}</p>
      </td>
      <td className="w-20 h-10 lg:p-1 rounded-full  m-auto align-middle">
        <img src={crypto.image} alt="curr" className=" mx-auto" />
      </td>

      <td className="text-right text-[10px] font-bold align-middle">
        {currency.symbol}
        {crypto.current_price}
      </td>
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
          {currency.symbol}
          {(crypto.market_cap / 1000000000).toFixed(2)}M
        </p>
      </td>
    </tr>
  );
};

export default MarketTable;
