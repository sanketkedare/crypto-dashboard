import React from "react";

// SearchDropdown: Component to display filtered coin results in a dropdown
const SearchDropdown = ({ filteredData, handleSelect }) => {
  return (
    <div className="absolute bg-gray-800 w-[50%] max-h-72 overflow-y-auto mt-2 p-3 rounded-xl border border-black text-white">
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-4 py-2 px-2 border-b hover:bg-sky-500 hover:text-black rounded-xl cursor-pointer"
            onClick={() => handleSelect(item)}
          >
            {/* Display coin image */}
            <img alt={item.name} src={item.image} width={"20px"} height={"20px"} aria-label={item.name} />
            <span>{item.name}</span>
          </div>
        ))
      ) : (
        <div className="py-2 px-2">No results found</div>
      )}
    </div>
  );
};

export default SearchDropdown;
