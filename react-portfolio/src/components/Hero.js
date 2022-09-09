import "./Hero.css";                // Importing the CSS file
import React from 'react';           // imports the react library from the node_modules folder and assigns it to the variable React
import HeroImg from "../assets/img/HeroImg-2.png"; // imports the HeroImg.png image from the src folder and assigns it to the variable HeroImg
import { Link } from 'react-router-dom'; // imports the Link component from the react-router-dom library and assigns it to the variable Link

const Hero = () => {
  return (
    <div className="hero">

        <div className="hero-bgimg">
            <img className="hero-img" src= {HeroImg} alt="backgroundimage" />
        </div>
        
        <div className="hero-text-contents">
            <h1>Hi, I'm </h1>
            <h1> <span className="hero-name">Don Avworo</span></h1>
            <p>I'm a Full Stack Web Developer</p>

            <div className="hero-btns">
                <Link to="/Projects" className="btn btn-primary">My Projects</Link>
                <Link to="/Contact" className="btn btn-secondary">Contact Me</Link>
            </div>
        </div> 
    </div>

  )
}

export default Hero