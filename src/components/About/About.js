import React from "react";
import "./About.css";
import profilePic from '../../images/profile-pic.JPG';

const About = () => {
  return (
    <div className="about container">
      <h1 className="heading">About</h1>
      <div className="profile-pic">
          <img src={profilePic} alt="" />
      </div>
      <h3 className="mt-4 heading text-primary fs-4 opacity-75">Nur Mohamod Rafi</h3>
      <h4 className="m-0 heading fs-4 opacity-75">My Goal</h4>
      <p className="fs-5">Experienced associate with a track record of success in outsourcing/offshoring industries. I wish to advance my career in the Web Development sector. So I'm learning JavaScript and React with an emphasis on Frontend Development. Within next few month my goal is switch to my career as a <b>React Developer</b>. My long-term aim is to be a Full Stack Web Developer and I am also enthusiastic about blockchain technology.</p>
    </div>
  );
};

export default About;
