import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../Data/Action";
import { currency, symbol, flags } from "../../Utils/utils";
import CurrencyDropdown from "./CurrencyDropdown";

const CurrencyComponent = () => {
  const dispatch = useDispatch();
  const curr = useSelector((state) => state.currency.currency);

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
      {openDropdown && <CurrencyDropdown currencyChange={currencyChange} />}
    </button>
  );
};

export default CurrencyComponent;
