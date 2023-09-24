import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaDiscord} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://github.com/BishwasGit" target="_blank"><FaGithub /></a>
      <a href="https://np.linkedin.com/in/bishwas-shrestha-39b1ba1b5" target="_blank"><BsLinkedin/></a>
      <a href="discord.com/app" target="_blank"><FaDiscord/></a>
    </div>
  )
}

export default HeaderSocials
