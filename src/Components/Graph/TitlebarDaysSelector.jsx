import React from "react";
import { days } from "./utils";

const TitlebarDaysSelector = ({ day, dayType }) => {
  return (
    <div className="flex justify-between my-2">
      {days.map((i) => (
        <button
          key={i.time}
          className={`p-1 px-2 mx-2  rounded-full  border border-black hover:bg-sky-950 text-white ${
            day === i.time ? "bg-black" : "bg-yellow-800"
          }`}
          onClick={() => dayType(i.time)}
        >
          {i.indicator}
        </button>
      ))}
    </div>
  );
};

export default TitlebarDaysSelector;
