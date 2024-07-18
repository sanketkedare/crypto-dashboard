import React from "react";
import TitleGraphSelector from "./TitleGraphSelector";
import TitlebarInfo from "./TitlebarInfo";
import TitlebarDaysSelector from "./TitlebarDaysSelector";

// Title Bar Component 

const TitleBar = ({ day, chart, dayType, chartType }) => {
  return (
    <div className="flex flex-wrap w-full lg:justify-between justify-center">
      <TitlebarInfo />
      <TitleGraphSelector chart={chart} chartType={chartType} />
      <TitlebarDaysSelector day={day} dayType={dayType} />
    </div>
  );
};

export default TitleBar;
