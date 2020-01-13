import React from "react";
import "./about.css";
import Particles from "react-particles-js";
import particlesjs from "./particlesjs-config.json";

const About = () => {
  return (
    <div className="about-box">
      <Particles
        className="particle-effect"
        params={particlesjs}
        width={500}
        height={800}
      />

      <div className="title-content-wrapper">
        <h1 className='page-title about-glitch'>ASTRAEA</h1>
        <section className="about">
          <p>
            In Greek mythology, ASTRAEA is the 'star-maiden', and the goddess of
            innocence.
          </p>
          <br />
          <p>
            ASTRAEA is a lifestyle brand, and the future of travel, however, we
            are more than a space travel company. We create luxury experiences
            for our clientele. With choices like the Moon, Mars, and Jupiter,
            you can choose the ultimate travel destination.
          </p>
          <br />
          <p>
            At ASTRAEA, we provide the comfort of staying at a Ritz Carlton with
            the elegance of Hermes. Your journey into space will be smooth and
            punctual, because we’ll keep time like a Vacheron Constantin watch.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
