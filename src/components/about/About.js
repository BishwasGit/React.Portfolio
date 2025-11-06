import React from "react";
import "./about.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { LinearProgress, Grid } from "@mui/material";
import { FaLinux } from "react-icons/fa"; // Import Linux icon
import { FaReact } from "react-icons/fa"; // Import React icon
import { SiMongodb } from "react-icons/si"; // Import MongoDB icon

AOS.init();

const About = () => {
  const skillsData = [
    { icon: <AiOutlineHtml5 />, label: "HTML", progress: 90 },
    { icon: <DiCss3 />, label: "CSS", progress: 85 },
    { icon: <FaBootstrap />, label: "Bootstrap", progress: 90 },
    { icon: <SiMaterialui />, label: "Material UI", progress: 60 },
    { icon: <FaReact />, label: "React", progress: 75 },
    { icon: <DiPhp />, label: "PHP", progress: 80 },
    { icon: <FaLaravel />, label: "Laravel", progress: 80 },
    { icon: <SiExpress />, label: "Express", progress: 60 },
    { icon: <SiMysql />, label: "MySQL", progress: 70 },
    { icon: <FaLinux />, label: "Linux", progress: 50 },
    { icon: <FaReact />, label: "React Native", progress: 60 },
    { icon: <SiMongodb />, label: "MongoDB", progress: 50 },
  ];

  return (
    <section id="about">
      <h5>I have successfully executed projects utilizing the </h5>
      <h2>Following programming languages</h2>
      <Grid
        container
        spacing={2}
        className="about__container"
        justifyContent="center"
      >
        {skillsData.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <article className="about__card" data-aos="fade-up">
              <div className="about__card-icon">{skill.icon}</div>
              <h5>{skill.label}</h5>
              <LinearProgress
                variant="determinate"
                value={skill.progress}
                className="about__progress"
                style={{
                  height: "10px",
                  borderRadius: "5px",
                  marginTop: "10px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              />
              <span className="about__percentage">{`${skill.progress}%`}</span>
            </article>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default About;
