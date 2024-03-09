import React from "react";
import { currency, flags, symbol } from "../../Utils/utils";

const CurrencyDropdown = ({ currencyChange }) => {
  return (
    <div className="absolute bg-gray-600 text-white mt-48 lg:left-20 left-7 w-[150px] z-10 p-1 rounded-xl border border-black">
      <ul>
        {currency.map((curr, index) => (
          <li
            key={index}
            className="p-2 border-b border-black hover:bg-sky-300 hover:text-black rounded-b-xl shadow-sm flex justify-evenly gap-3"
            onClick={currencyChange}
            value={index}
          >
            <img
              src={flags[`${index}`]}
              alt={curr}
              className="w-6 h-4 my-auto"
            />
            {symbol[`${index}`]}
            {" " + curr}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyDropdown;


