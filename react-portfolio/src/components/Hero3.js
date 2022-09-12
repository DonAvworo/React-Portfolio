import "./Hero3.css";
import Hero3Img from "../assets/img/Contact.png";
import React from "react";
import { FaPhone } from "react-icons/fa";

const Hero3 = () => {
  return (
    <div className="hero3" >
      <div className="hero-bgimg">
          <img className="hero-img" src= {Hero3Img} alt="backgroundimage" />
      </div>

      <div className="hero2-text-contents">
        <FaPhone></FaPhone>
       {/* CONTACT FORM */}
        <h1 className="hero2-text">Contact Me</h1>
        <p className="hero2-text">I am currently available to work in any project. If you have any questions or would like to work together, please feel free to contact me.</p>
        <div className="hero2-btn">
          <a href="mailto:" className="btn">Email</a>
          <a href="tel:" className="btn">Phone</a>
        </div>

      </div>
    </div>
  )
}


export default Hero3