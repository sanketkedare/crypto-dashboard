import React from 'react'
import {CRYPTO_LOGO} from '../../Utils/utils'

const CryptoLOGO = () => {
  return (
    <div className="flex gap-2 items-center">
        <img
          src={CRYPTO_LOGO}
          alt="logo"
          className="h-[30px]"
        />
        <h1 className="uppercase lg:text-[1vw] text-[13px] font-bold">
          CryptoCurrency Dashboard
        </h1>
      </div>
  )
}

export default CryptoLOGO
