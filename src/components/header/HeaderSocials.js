import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaDiscord} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="github.com/justbishwas" target="_blank"><FaGithub /></a>
      <a href="linkedin.com/justbishwas" target="_blank"><BsLinkedin/></a>
      <a href="discord.com/app" target="_blank"><FaDiscord/></a>
    </div>
  )
}

export default HeaderSocials
