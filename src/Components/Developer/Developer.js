import React from "react";
import "./developer.css";
const linkedin =
  "https://astraea-project.s3-us-west-2.amazonaws.com/Contact-Icons/linkedin.png";
const github =
  "https://astraea-project.s3-us-west-2.amazonaws.com/Contact-Icons/github.png";
const instagram =
  "https://astraea-project.s3-us-west-2.amazonaws.com/Contact-Icons/instagram.svg";

const Developer = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/kateqz/">
        <img src={linkedin} alt="LinkedIn" className="contact-icon" />
      </a>
      <a href="https://github.com/spiltmiruku">
        <img src={github} alt="GitHub" className="contact-icon" />
      </a>
      <a href="https://www.instagram.com/spiltmiruku/">
        <img src={instagram} alt="Instagram" className="contact-icon" />
      </a>
    </div>
  );
};

export default Developer;
