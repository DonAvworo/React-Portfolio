import "./Hero2.css";
import Hero2Img from "../assets/img/Portfolio.png";
import React from "react";

const Hero2 = () => {
  return (
    <div className="hero2" >
      
      <div className="hero-bgimg">
          <img className="hero-img" src= {Hero2Img} alt="backgroundimage" />
      </div>

      <div className="hero2-text-contents">
        <h1 className="hero2-title">My Portfolio</h1> 
        <p className="hero2-subtitle">Here are some of my projects</p>
      </div>

    </div>
  

  )
}

export default Hero2