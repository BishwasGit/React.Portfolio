import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {FaLaravel} from 'react-icons/fa'
import {SiMaterialui} from 'react-icons/si'
import {DiPhp} from 'react-icons/di'
import {SiExpress} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();
const About = () => {
  return (
    <section id="about">
      <h5>MY EXPERIENCE</h5>
      <h2>Programming Languages</h2>

      <div className="container about__container" data-aos="fade-right" data-aos-delay="100" data-aos-offset="200" data-aos-duration="1000">
      
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="PIC"/>
        </div>
      </div>
      

      <div className="about__content">
        <div className="about__cards" data-aos="fade-left" data-aos-delay="100" data-aos-offset="200" data-aos-duration="1000">
          <article className='about__card'>
              <AiOutlineHtml5  className='about__icons'/><DiCss3 className='about__icons'/><FaBootstrap className='about__icons'/><SiMaterialui className='about__icons'/>
              <h5>HTML, CSS, Bootstrap, REACRJS, Material UI, JQuery</h5>
              <small>Faimliar with these Font-End tools</small>
          </article>
          <article className='about__card'>
              <DiPhp  className='about__icons'/><FaLaravel className='about__icons'/><SiExpress className='about__icons'/><SiMysql className='about__icons'/>
              <h5>PHP, Laravel, Express, MYSQL, Ajax</h5>
              <small>As well as these Back-End tools</small>
          </article>
          <a href='#contact' className='btn'>Let's Talk</a><br />
        </div>
      </div> 

      </div>
    </section>
  )
}

export default About
