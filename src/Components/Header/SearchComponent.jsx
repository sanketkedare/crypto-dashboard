import React, { useState } from "react";
import CoinList from "../../Utils/Market.json";
import { useDispatch } from "react-redux";
import { setCrypto } from "../../Data/Action";
import SearchDropdown from "./SearchDropdown";

// SearchComponent: Component to search and display a list of coins
const SearchComponent = () => {
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const [text, setText] = useState(""); // State for search input text
  const [filteredData, setFilteredData] = useState([]); // State for filtered coin data
  const [placeholder, setPlaceholder] = useState("Search By Coin"); // State for input placeholder

  // Function to filter coins based on search text
  const handleSearch = (searchText) => {
    const filteredResults = CoinList.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  // Function to handle input text change
  const handleChange = (e) => {
    const searchText = e.target.value;
    setText(searchText);
    handleSearch(searchText);
  };

  // Function to handle coin selection from dropdown
  const handleSelect = (c) => {
    setText(""); // Clear the search text
    setPlaceholder(c.name); // Set the placeholder to selected coin name
    dispatch(setCrypto(c)); // Dispatch action to set selected coin
  };

  return (
    <div className="relative w-full">
      {/* Input field for search */}
      <input
        type="text"
        className="border border-black w-[80%] relative rounded-xl mx-1 px-3"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {/* Render SearchDropdown component if there is text in the input */}
      {text && (
        <SearchDropdown
          filteredData={filteredData}
          handleSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default SearchComponent;
