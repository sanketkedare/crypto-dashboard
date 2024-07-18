import React from "react";
import CryptoLOGO from "./NavComponents";
import NavSideComponents from "./NavSideComponents";

// Navbar Component
const Navbar = () => {
  return (
    <div className="h-[50px] shadow-lg w-full flex items-center lg:justify-between justify-between md:justify-around lg:px-10 px-2 cursor-pointer rounded-b-xl hover:bg-slate-200">
      <CryptoLOGO />
      <NavSideComponents/>
    </div>
  );
};

export default Navbar;
