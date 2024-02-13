import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../Data/Action";
import { currency, symbol, flags } from "../../Utils/utils";

const CurrencyComponent = () => {
  const curr = useSelector((state) => state.currency.currency);
  const dispatch = useDispatch();

  const [openDropdown, setOpenDropdown] = useState(false);
  const [index, setIndex] = useState(0);

  const currencyChange = (event) => {
    const selectedIndex = event.target.value;
    const code = currency[selectedIndex];
    const sym = symbol[selectedIndex];
    setIndex(selectedIndex);
    dispatch(setCurrency(code, sym));
    setOpenDropdown(false);
  };

  return (
    <button
      className="w-[150px] border border-black bg-sky-100 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-600 hover:text-white"
      onMouseEnter={() => setOpenDropdown(true)}
      onMouseLeave={() => setOpenDropdown(false)}
    >
      <img
        src={flags[index]}
        alt={curr.code}
        className="w-6 h-4 my-auto border border-black"
      />
      {curr.symbol} {curr.code} <IoIosArrowDropdownCircle />
      {openDropdown && (
        <div className="absolute bg-gray-600 text-white mt-52 lg:left-20 left-7 w-[150px] z-10 p-1 rounded-xl border border-black">
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
      )}
    </button>
  );
};

export default CurrencyComponent;
