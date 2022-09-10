import "./Hero3.css";
import Hero3Img from "../assets/img/Contact.png";
import React from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";

const Hero3 = () => {
  return (
    <div className="hero3" >
      <div className="hero-bgimg">
          <img className="hero-img" src= {Hero3Img} alt="backgroundimage" />
      </div>

      <div className="hero2-text-contents">
        <FaPhone></FaPhone>
        <h1 className="hero3-title">07505729649</h1> 
        <FaMailBulk></FaMailBulk>
        <p className="hero3-subtitle">theprodigaldon@icloud.com</p>
      </div>
    </div>
  )
}


export default Hero3