/*eslint-disable*/

import React, { useEffect, useState } from "react";
import GraphData from "../../Utils/GraphData.json";
import { Bar, Line } from "react-chartjs-2";
import {aDay, daySwitch, month, week, year} from "./utils";

import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";



Chartjs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const ChartComponent = ({ day, chart, d }) => {
  const [data, setData] = useState(GraphData);
  const [myLabels, setMyLabels] = useState(year);


  useEffect(() => {
    if (d) {
      setData(d);
    }
  }, [d]);


  useEffect(() => {
    setMyLabels(daySwitch(day,aDay,week,month,year));
  }, [day]);

  const coinData = {
    labels: myLabels.map((label) => label),
    datasets: [
      {
        label: "Price in Thousands",
        data: data.market_caps.map((item) => Math.floor(item[1]) / 1000000),
        backgroundColor: ["red", "yellow", "green", "orange", "pink"],
        borderColor: "blue",
        tension: 0.1,
      },
    ],
  };

  const options = {};

  return (
    <div className="lg:h-[45vh] flex justify-center items-center w-full">
      {chart === "Line" && <Line data={coinData} options={options} />}
      {chart === "Bar" && <Bar data={coinData} options={options} />}
    </div>
  );
};

export default ChartComponent;
