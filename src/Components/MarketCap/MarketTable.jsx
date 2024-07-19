import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCrypto } from "../../Data/Action";

const MarketTable = ({ crypto }) => {
  const dispatch = useDispatch();
  const currentCoin = useSelector((state)=>state.crypto.id);
  const setCoin = (c) => dispatch(setCrypto(c));
  const currency = useSelector((state) => state.currency.currency);

  return (
    <tr
      className={`table-row text-center border border-black hover:bg-yellow-200 shadow transition-shadow cursor-pointer ${currentCoin === crypto.id && 'bg-yellow-100'}`}
      onClick={() => setCoin(crypto)}
    >
      <td className="w-16 h-16 p-2 align-middle">
        <img src={crypto.image} alt={crypto.name} className="w-full h-full object-contain rounded-full" />
      </td>

      <td className="align-middle text-left font-bold">
        <p className="text-gray-600 text-[12px] ">{crypto.name}</p>
      </td>

      <td className="text-right  font-bold align-middle text-[12px]">
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
      <td className="text-right p-2 text-[12px] align-middle">
        <p className="text-gray-600 text-[12px] truncate">
          {currency.symbol}
          {(crypto.market_cap / 1000000000).toFixed(1)}B
        </p>
      </td>
    </tr>
  );
};

export default MarketTable;
