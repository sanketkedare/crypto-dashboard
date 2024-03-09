import React from 'react'
import { useSelector } from 'react-redux';
import { getPrice } from './utils';

const TitlebarInfo = () => 
{
 const coin = useSelector((state) => state.crypto);
 const symbol = useSelector((state) => state.currency.currency.symbol);
 const market = useSelector((state) => state.market);
 const price = getPrice(market, coin.name).current_price;


  return (
    <div className=" flex items-center gap-2 p-2 shadow-md rounded-md">
        <img src={coin.image} alt={coin.id} className="w-[20px]" />
        <h1 className="text-[15px]">
          <span className="uppercase font-bold">{coin.id} : </span>
          {coin.name}
        </h1>
        {symbol} {price}
      </div>
  )
}

export default TitlebarInfo
