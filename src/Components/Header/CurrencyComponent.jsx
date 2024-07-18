import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../Data/Action";
import CurrencyDropdown from "./CurrencyDropdown";

const CurrencyComponent = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.currency.currency);
  const [openDropdown, setOpenDropdown] = useState(false);

  const changeCountry = (country) => {
    dispatch(setCurrency(country.currency, country.symbol, country.flag));
    setOpenDropdown(false);
  };

  return (
    <button
      className="w-[150px] border border-black bg-sky-100 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-600 hover:text-white"
      onMouseEnter={() => setOpenDropdown(true)}
      onMouseLeave={() => setOpenDropdown(false)}
    >
      <img
        src={current.flag}
        alt={current.code}
        className="w-6 h-4 my-auto border border-black"
      />
      {current.symbol} {current.code} <IoIosArrowDropdownCircle />
      {openDropdown && <CurrencyDropdown changeCountry={changeCountry} />}
    </button>
  );
};

export default CurrencyComponent;
