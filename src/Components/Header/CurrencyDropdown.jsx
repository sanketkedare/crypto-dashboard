import React from "react";
import ContryData from "../../Utils/ContryData.json";

const CurrencyDropdown = ({ changeCountry }) => {
  return (
    <div className="absolute bg-gray-600 text-white mt-48 lg:left-20 left-7 w-[150px] z-10 p-1 rounded-xl border border-black">
      <ul>
        {ContryData.map((curr) => (
          <li
            key={curr.id}
            className="p-2 border-b border-black hover:bg-sky-300 hover:text-black rounded-b-xl shadow-sm flex justify-evenly gap-3"
            onClick={() => changeCountry(curr)}
            value={curr.id}
          >
            <img src={curr.flag} alt={curr} className="w-6 h-4 my-auto" />
            {curr.symbol}
            {" " + curr.currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyDropdown;
