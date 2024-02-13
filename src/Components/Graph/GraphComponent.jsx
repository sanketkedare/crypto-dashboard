import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HistoricalChart } from "../../APIs/api";
import GraphData from "../../Utils/GraphData.json";
import MarketData from "../../Utils/Market.json";
import TitleBar from "./TitleBar";
import ChartComponent from "./ChartComponent";

const GraphComponent = () => {
  const coin = useSelector((state) => state.crypto);
  const currency = useSelector((state) => state.currency.currency.code);

  const [selected, setSelected] = useState(coin);
  const [coinId, setCoinId] = useState(selected.id);
  const [days, setDays] = useState(365);

  const [API, setAPI] = useState(HistoricalChart(coinId, days, currency));
  const [history, setHistory] = useState("");

  const [chartType, setChartType] = useState("Bar");
  

  const getData = async () => {
    try 
    {
      const data = await fetch(API);
      const JSON = await data.json();
      setHistory(JSON);
    } 
    catch (err) 
    {
      setHistory(GraphData);
    }
  };

  useEffect(() => {
    const c = MarketData.filter((e) => e.name === coin.name);
    setSelected(c);
    setCoinId(c.id);
    setAPI(HistoricalChart(coin.id, days, currency));
    getData(history);
  }, [coin, days, currency,history]);

  return (
    <div className="bg-white rounded-xl p-2 my-2 border border-black">
      <TitleBar dayType={setDays} chartType={setChartType} day={days} chart={chartType} />
      <ChartComponent day={days} chart={chartType} data={history}/>
    </div>
  );
};

export default GraphComponent;
