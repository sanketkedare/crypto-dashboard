import React from 'react'
import { ALMABETTER_LOGO, LINKEDIN_LOGO, LINKEDIN_URL } from '../../Utils/utils'

const NavSideComponents = () => {
  return (
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

export default NavSideComponents
