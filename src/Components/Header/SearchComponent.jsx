import React, { useState } from "react";
import CoinList from "../../Utils/Market.json";
import { useDispatch } from "react-redux";
import { setCrypto } from "../../Data/Action";
import SearchDropdown from "./SearchDropdown";

const SearchComponent = () => {
  const dispach = useDispatch();
  const [text, setText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [placeholder, setPlaceholder] = useState("Search By Coin");

  const handleSearch = (searchText) => {
    const filteredResults = CoinList.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const handleChange = (e) => {
    const searchText = e.target.value;
    setText(searchText);
    handleSearch(searchText);
  };

  const handelSelect = (c) => {
    setText("");
    setPlaceholder(c.name);
    dispach(setCrypto(c));
  };

  return (
    <>
      <input
        type="text"
        className="border border-black w-[80%] relative rounded-xl mx-1 px-3"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {text && (
        <SearchDropdown
          filteredData={filteredData}
          handelSelect={handelSelect}
        />
      )}
    </>
  );
};

export default SearchComponent;
