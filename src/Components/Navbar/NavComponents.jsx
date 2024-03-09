import React from 'react'
import { ALMABETTER_LOGO, CRYPTO_LOGO, LINKEDIN_LOGO, LINKEDIN_URL } from '../../Utils/utils'

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


export const SideCompoents = () =>{
    return(
        <div className="flex gap-4 items-center">
        <a href={LINKEDIN_URL}>
          <img
            alt="Linkedin"
            className="rounded-xl w-[25px]"
            src={LINKEDIN_LOGO}
          />
        </a>
        <img
          src={ALMABETTER_LOGO}
          alt="Almabeter"
          className="lg:h-[25px] h-[20px] p-1 my-2"
        />
      </div>
    )
}
