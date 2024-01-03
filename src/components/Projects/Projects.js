import React from "react";
import "./projects.css";
import Porto from "../../assets/1.png";
import Metal from "../../assets/2.png";
import Game from "../../assets/3.png";
import Cms from "../../assets/cms.png";
import Qr from "../../assets/qr.png";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from 'react-icons/fa';
AOS.init();
const projects = () => {
  return (
    <section id="experience">
      <h5>MY PROJECT</h5>
      <h2>Full projects are available on my github  
      <a href="https://github.com/BishwasGit" target="_blank" rel="noopener noreferrer" style={{
        marginLeft : 10,
        marginBottom : 5,
      }}>
        <FaGithub />
        </a>
      </h2>
      <Carousel data-aos="fade-left" data-aos-delay="100" data-aos-offset="200" data-aos-duration="1000">
      <Carousel.Item>
        <div className="container">
          <div className="projects__card">
            <article className="movie-card">
              <img src={Porto} className="project__thumbnail" alt="loading"/>
              <div className="content">
                <h1>PORTO: A Business template website</h1>
                <p className="synopsis">Static business web site using bootstrap</p>
                <div className="icons">
                  <a href="https://github.com/BishwasGit/PORTO" className='thumbnail_btn'>Download</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="projects__card">
            <article className="movie-card">
              <img src={Metal} className="project__thumbnail" alt="loading"/>
              <div className="content">
                <h1>News Portal: A Static News portal template website</h1>
                <p className="synopsis">Static News Portal web site using bootstrap</p>
                <div className="icons">
                  <a href="https://github.com/BishwasGit/Front-End/tree/main/Gaming%20News%20Templete" className='thumbnail_btn'>Download</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="projects__card">
            <article className="movie-card">
              <img src={Game} className="project__thumbnail"alt="loading"/>
              <div className="content">
                <h1>Assassin Creed styled - Static Website</h1>
                <p className="synopsis">Assassin Creed styled</p>
                <div className="icons">
                  <a href="https://github.com/BishwasGit/Front-End/tree/main/Gaming%20%20Web%20Templete" className='thumbnail_btn'>Download</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="projects__card">
            <article className="movie-card">
              <img src={Qr} className="project__thumbnail"alt="loading"/>
              <div className="content">
                <h1>QR Identity - A MERN STACK Project (Identity Verification)</h1>
                <p className="synopsis">QRIdentity is a identity verification platform that leverages QR code technology to enhance security and streamline authentication processes</p>
                <div className="icons">
                  <a href="https://github.com/BishwasGit/QRIdentity" className='thumbnail_btn'>Download</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="projects__card">
            <article className="movie-card">
              <img src={Cms} className="project__thumbnail"alt="loading"/>
              <div className="content">
                <h1>User Guide - 'HOW-TO Guide website' using Laravel</h1>
                <p className="synopsis">'HOW-TO Guide website' using Laravel</p>
                <div className="icons">
                  <a href="https://github.com/BishwasGit/User-Guide-CMS" className='thumbnail_btn'>Download</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
    </section>
  );
};

export default projects 
