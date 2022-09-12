import "./Portfolio.css";

import React from 'react'
import { NavLink } from "react-router-dom";
import Quiz from '../assets/img/Quiz.png'
import PWGen from '../assets/img/PW-Gen.png'
import Website from '../assets/img/Website.png'

const Portfolio = () => {
  return (
    <div className="project-wrapper">
      <div className="project">
        <h2 className="project-title" >Quiz Web Appliction</h2>
        <p className="project-subtitle">This is a simple quiz app that allows users to answer questions and g
          et a score at the end of the quiz. The app is built using HTML and the questions
        </p>
        <div className="project-card-img">
          <img src= { Quiz }  alt="quiz app" className="img-1" />
        </div>
        <div className="project-links-btn">
          <NavLink to="https://donavworo.github.io/Quiz-WebApp/index.html" target="_blank" className="btn ">Website</NavLink>
          <NavLink to="https://github.com/DonAvworo/Quiz-WebApp" target="_blank" className="btn ">Source Code</NavLink>
        </div>
      </div>
      <div className="project">
        <h2 className="project-title" >Quiz Web Appliction</h2>
        <p className="project-subtitle">This is a simple quiz app that allows users to answer questions and g
          et a score at the end of the quiz. The app is built using HTML and the questions
        </p>
        <div className="project-card-img">
          <img src= { PWGen}  alt="quiz app" className="img-2" />
        </div>
        <div className="project-links-btn">
          <NavLink to="https://donavworo.github.io/Quiz-WebApp/index.html" target="_blank" className="btn ">Website</NavLink>
          <NavLink to="https://github.com/DonAvworo/Password-Generator" target="_blank" className="btn ">Source Code</NavLink>
        </div>
      </div>
      <div className="project">
        <h2 className="project-title" >Quiz Web Appliction</h2>
        <p className="project-subtitle">This is a simple quiz app that allows users to answer questions and g
          et a score at the end of the quiz. The app is built using HTML and the questions
        </p>
        <div className="project-card-img">
          <img src= { Website }  alt="quiz app" className="img-3" />
        </div>
        <div className="project-links-btn">
          <NavLink to="https://donavworo.github.io/Portfolio-Update/" target="_blank" className="btn ">Website</NavLink>
          <NavLink to="https://github.com/DonAvworo/Portfolio-Update" target="_blank" className="btn ">Source Code</NavLink>
        </div>
      </div>



    </div>
    
  )
}

export default Portfolio