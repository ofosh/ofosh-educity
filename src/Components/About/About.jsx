import React from "react";
import "./About.css";
import aboutImg from "../../assets/about.png";
import playImg from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImg} alt="/" className="about-img" />
        <img
          src={playImg}
          alt="/"
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skils, and experience
          needed to excel in the dynamic field of education.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          architecto excepturi vero eveniet rem a sapiente magni perspiciatis
          consequuntur tenetur assumenda sunt, necessitatibus hic debitis minima
          iure voluptates blanditiis saepe!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam a error
          porro dignissimos voluptatibus laudantium odit libero, perferendis
          maxime perspiciatis velit totam, ut quae saepe, pariatur eum harum?
        </p>
      </div>
    </div>
  );
};

export default About;
