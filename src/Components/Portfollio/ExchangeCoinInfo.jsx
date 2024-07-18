import React from 'react'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'

// Exchnage Coin Information Component
const ExchangeCoinInfo = ({method,coin,setCoinOpen }) => {
  return (
    <>
     <h1
        className={`${
          method === "Sell" ? "text-red-800" : "text-green-800"
        } font-bold px-1 m-3`}
      >
        {method}:
      </h1>
      <div
        className="p-1 px-3 border border-black rounded-lg w-[100%] lg:w-[150px] flex items-center justify-between"
        onClick={() => setCoinOpen(true)}
      >
        {coin}
        <MdOutlineArrowDropDownCircle className="text-end" />
      </div>
      
    </>
  )
}

export default ExchangeCoinInfo
