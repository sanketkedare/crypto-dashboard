/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HistoricalChart } from "../../APIs/api";
import GraphData from "../../Utils/GraphData.json";
import MarketData from "../../Utils/Market.json";
import TitleBar from "./TitleBar";
import ChartComponent from "./ChartComponent";
import Loder from "./Loder";

// Graph Component

const GraphComponent = () => {
  // Redux selectors to get the current coin and currency from the state
  const coin = useSelector((state) => state.crypto);
  const currency = useSelector((state) => state.currency.currency.code);

  // State variables for the number of days, historical data, and chart type
  const [days, setDays] = useState(365);
  const [history, setHistory] = useState("");
  const [chartType, setChartType] = useState("Bar");

  // Function to fetch historical data based on the coin ID, number of days, and currency
  const getData = async (coinId, days, currency) => {
    const apiURL = HistoricalChart(coinId, days, currency); // Construct the API URL
    try {
      setHistory("Loading"); // Set loading state
      const response = await fetch(apiURL); // Fetch data from the API
      const data = await response.json(); // Parse the response JSON
      setHistory(data); // Set the historical data
    } catch (err) {
      setHistory(GraphData); // Fallback to static data on error
    }
  };

  // Effect to fetch data when the coin, currency, or number of days changes
  useEffect(() => {
    const coinData = MarketData.find((e) => e.name === coin.name); // Find the coin data
    if (coinData) {
      getData(coinData.id, days, currency); // Fetch data for the found coin
    }
  }, [coin, currency, days]); // Dependencies for re-running the effect

  return (
    <div className="bg-white rounded-xl p-2 my-2 border border-black">
      {/* TitleBar component for setting the number of days and chart type */}
      <TitleBar
        dayType={setDays}
        chartType={setChartType}
        day={days}
        chart={chartType}
      />
      {/* Loader or ChartComponent based on the loading state */}
      {history === "Loading" ? (
        <Loder />
      ) : (
        <ChartComponent day={days} chart={chartType} d={history} />
      )}
    </div>
  );
};

export default GraphComponent;
