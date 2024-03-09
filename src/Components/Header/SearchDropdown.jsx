import React from "react";

const SearchDropdown = ({ filteredData, handelSelect }) => {
  return (
    <div className="absolute bg-gray-800 w-[50%] max-h-72 overflow-y-auto mt-7 ml-24 p-3 rounded-xl border border-black text-white">
      {filteredData.map((item) => (
        <div
          key={item.name}
          className="flex gap-12 py-2 px-2 border-b hover:bg-sky-500 hover:text-black rounded-xl"
          onClick={() => handelSelect(item)}
        >
          <img alt={item.name} src={item.image} width={"20px"} />
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default SearchDropdown;
