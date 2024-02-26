import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import paly_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt=" about image" className="about-img" />
        <img src={paly_icon} alt=" play icon image" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <about className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark from the transformative educational journey with our
          university's comprehensive education programs. Our cutting-edge
          curriculum is designed to empower students with the knowledge, skills,
          and experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          montership, our programs perpare aspiring educator to make a
          meaningful impact in the classrooms, schools and communities
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor or
          deucatinal leader, our diverse range of program, offer the perfect
          pathway to achieve our goals and unlock your full potential i shaping
          in future of education
        </p>
      </about>
    </div>
  );
};

export default About;
