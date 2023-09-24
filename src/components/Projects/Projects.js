import React from "react";
import "./projects.css";
import Porto from "../../assets/1.png";
import Metal from "../../assets/2.png";
import Game from "../../assets/3.png";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const projects = () => {
  return (
    <section id="experience">
      <h5>MY PROJECT</h5>
      <h2>Full projects are available on my github</h2>
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
                <h1>News Portal: A News portal template website</h1>
                <p className="synopsis">Static News Portal web site using bootstrap</p>
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
              <img src={Game} className="project__thumbnail"alt="loading"/>
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
    </Carousel>
    </section>
  );
};

export default projects 
