import React from "react";

// Graph Selector Component

const TitleGraphSelector = ({ chart, chartType }) => {
  const type = ["Bar", "Line"];

  return (
    <div className="flex justify-around my-2">
      {type.map((i) => (
        <button
          key={i}
          className={`text-[15px] w-[100px] p-1 px-2 mx-2 border border-black rounded-lg 
                       ${chart === i ? "bg-black text-white" : "bg-sky-200"} 
                       font-bold hover:bg-sky-600 hover:text-white}`}
          onClick={() => chartType(i)}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default TitleGraphSelector;
