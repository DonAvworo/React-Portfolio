import "./Hero.css";                // Importing the CSS file
import React from 'react';           // imports the react library from the node_modules folder and assigns it to the variable React
import HeroImg from "../assets/img/HeroImg.png"; // imports the HeroImg.png image from the src folder and assigns it to the variable HeroImg

const Hero = () => {
  return (
    <div className="hero">

        <div className="hero-bgimg">
            <img className="hero-img" src= {HeroImg} alt="backgroundimage" />
        </div>
        
        <div className="hero-text-contents">
            <h1>Hi, I'm <span className="hero-name">Don Avworo</span></h1>
            <p>I'm a Full Stack Web Developer</p>

            <div className="hero-btns">
                <a href="#projects" className="btn btn-primary">My Projects</a>
                <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
        </div> 
    </div>

  )
}

export default Hero