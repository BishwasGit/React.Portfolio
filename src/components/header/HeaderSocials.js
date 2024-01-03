import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaFacebook, FaDiscord, FaGoogle } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://github.com/BishwasGit" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://np.linkedin.com/in/bishwas-shrestha-39b1ba1b5" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://www.facebook.com/justBishwas" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="mailto:workmail.bishwas@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaGoogle />
      </a>
      <a href="https://discord.com/app" target="_blank" rel="noopener noreferrer">
        <FaDiscord />
      </a>
    </div>
  );
};

export default HeaderSocials;
