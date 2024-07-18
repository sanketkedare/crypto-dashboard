import React, { useEffect, useState } from "react";
import GraphData from "../../Utils/GraphData.json";
import { Bar, Line } from "react-chartjs-2";
import { aDay, daySwitch, month, week, year } from "./utils";

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

// Register the chart components
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
  const [data, setData] = useState(GraphData); // State for graph data
  const [myLabels, setMyLabels] = useState(year); // State for chart labels

  // Update data if the 'd' prop changes
  useEffect(() => {
    if (d) {
      setData(d);
    }
  }, [d]);

  // Update labels based on the 'day' prop
  useEffect(() => {
    setMyLabels(daySwitch(day, aDay, week, month, year));
  }, [day]);

  // Data for the chart
  const coinData = {
    labels: myLabels,
    datasets: [
      {
        label: "Price in Thousands",
        data: data.market_caps.map((item) => Math.floor(item[1]) / 1000000), // Transform market cap data
        backgroundColor: ["red", "yellow", "green", "orange", "pink"],
        borderColor: "blue",
        tension: 0.1, // For line chart smoothness
      },
    ],
  };

  // Options for the chart
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "black", // Legend labels color
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black", // X-axis labels color
        },
        title: {
          display: true,
          text: 'Time Period',
          color: 'black', // X-axis title color
        },
      },
      y: {
        ticks: {
          color: "black", // Y-axis labels color
        },
        title: {
          display: true,
          text: 'In Thousands',
          color: 'black', // Y-axis title color
        },
      },
    },
  };

  return (
    <div className="lg:h-[45vh] h-[40vh] flex justify-center items-center w-full ">
      {chart === "Line" && <Line data={coinData} options={options} className="shadow-md"/>}
      {chart === "Bar" && <Bar data={coinData} options={options}  className="shadow-md"/>}
    </div>
  );
};

export default ChartComponent;
