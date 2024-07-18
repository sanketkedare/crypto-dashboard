import React from 'react'
import ExchangeCoin from './ExchangeCoin'
import TopCurrencyComponent from './TopCurrencyComponent'

const PortFollioComponent = () => {
  return (
    <div className='bg-white lg:h-[25vh] flex flex-wrap justify-between items-center rounded-xl p-3 border border-black lg:gap-3'>
      <TopCurrencyComponent/>
      <ExchangeCoin/>
    </div>
  )
}

export default PortFollioComponent
