import React from 'react'
import PieComponent from './PieComponent'
import ExchangeCoin from './ExchangeCoin'

const PortFollioComponent = () => {
  return (
    <div className='bg-white lg:h-[25vh] flex flex-wrap justify-between items-center rounded-xl p-3 border border-black lg:gap-3'>
      <PieComponent/>
      <ExchangeCoin/>
    </div>
  )
}

export default PortFollioComponent
