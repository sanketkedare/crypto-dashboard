import React, {useState } from "react";
import CoinList from "../../Utils/Market.json";
import { useDispatch } from "react-redux";
import { setCrypto } from "../../Data/Action";

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

  const handelSelect = (c) =>{
    setText("")
    setPlaceholder(c.name)
    dispach(setCrypto(c));
  }

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
        <div className="absolute bg-gray-800 w-[50%] max-h-72 overflow-y-auto mt-7 ml-24 p-3 rounded-xl border border-black text-white">
          {filteredData.map((item) => (
            <div key={item.name}  className="flex gap-12 py-2 px-2 border-b hover:bg-sky-500 hover:text-black rounded-xl"
            onClick={()=>handelSelect(item)}
            >
              <img alt={item.name} src={item.image} width={"20px"}/>
              {item.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchComponent;
