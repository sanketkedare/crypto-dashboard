import React, { useCallback, useEffect, useMemo, useState } from "react";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { MarketData } from "../../APIs/api";
import MyData from "../../Utils/Market.json";
import { setCrypto, setMarketData } from "../../Data/Action";
import MarketTable from "./MarketTable";

const Market = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.currency);
  const [currentMarketData, setCurrentMarketData] = useState(MyData);
  const API = useMemo(() => MarketData(currency.code), [currency.code]);

  const setCurrency = useCallback(
    (c) => {
      dispatch(setCrypto(c));
    },
    [dispatch]
  );

  const getData = useCallback(async () => {
    try {
      const data = await fetch(API);
      const json = await data.json();
      setCurrentMarketData(json);
      dispatch(setMarketData(json));
    } catch (err) {
      console.log(err);
      dispatch(setMarketData(MyData));
    }
  }, [dispatch, API]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="bg-white h-[85vh] rounded-lg border border-black">
      <h1 className="h-[60px] relative bg-gray-100 text-center flex items-center justify-center font-bold rounded-xl shadow-md">
        Cryptocurrency By Market Cap
      </h1>

      <div className="p-3 decoration-none overflow-y-auto h-[90%]">
        {currentMarketData === null ? (
          <Shimmer />
        ) : (
          currentMarketData.map((crypto) => (
            <MarketTable
              key={crypto.id}
              crypto={crypto}
              setCurrency={setCurrency}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Market;
