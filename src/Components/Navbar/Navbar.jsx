import React from "react";
import CryptoLOGO, { SideCompoents } from "./NavComponents";

// Navbar Component
const Navbar = () => {
  return (
    <div className="h-[50px] shadow-lg w-full flex items-center lg:justify-between justify-between md:justify-around lg:px-10 px-2 cursor-pointer rounded-b-xl hover:bg-slate-200">
      <CryptoLOGO />
      <SideCompoents/>
    </div>
  );
};

export default Navbar;
