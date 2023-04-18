import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Typical from 'react-typical'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bishwas Shrestha</h1>
        <h5 className="text-light">BCA Student at Kathmandu Bernhardt College</h5>
        <CTA />
        <HeaderSocials/>

        <h1 className="roles">
          <Typical
            loop={Infinity}
            steps={["Hi I'm Bishwas Shrestha",1000, "Web Developer", 1000, "Front-End", 1000, "Back-End", 1000]}
          />
        </h1>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header