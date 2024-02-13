import React, { useEffect, useState } from "react";
import GraphData from "../../Utils/GraphData.json";


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

import { Bar, Line } from "react-chartjs-2";

Chartjs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const ChartComponent = ({ day, chart, d }) => 
{
  const [data, setData] = useState(GraphData)
   
  useEffect(()=>{

    if(d)
    {
      setData(d)
    }

  },[d]) 


  const year = Array.from({ length: 365 }, (_, index) => index + 1);
  const month = [
    
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec","Jan",
    "Feb",
  ];
  const aDay = Array.from({ length: 24 }, (_, index) => index + 1);
  const week = Array.from({ length: 7 }, (_, index) => index + 1);
  const [myLabels, setMyLabels] = useState(year);

  useEffect(() => {
    switch (day) {
      case 1:
        setMyLabels(aDay);
        break;
      case 7:
        setMyLabels(week);
        break;
      case 30:
        setMyLabels(month);
        break;
      default:
        setMyLabels(year);
    }
  }, [day]);


  

  const coinData = {

    labels: myLabels.map(label => label),

    datasets: [
      {
        label: "Price in Thousands",
        data: data.market_caps.map((item) => Math.floor(item[1]) / 1000000),
        backgroundColor: ["red", "yellow", "green", "orange","pink"],
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
