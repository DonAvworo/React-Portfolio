import "./Portfolio.css";

import React from 'react'
import { NavLink } from "react-router-dom";
import Quiz from '../assets/img/Quiz.png'

const Portfolio = () => {
  return (
    <div className="project-wrapper">
      <div className="project-1">
        <h2 className="project-title" >Quiz Web Appliction</h2>
        <p>This is a simple quiz app that allows users to answer questions and g
          et a score at the end of the quiz. The app is built using HTML and the questions
          are fetched from an API (Application Programming Interface) using javascript. <br />
          The app is currently being made to be responsive so it can viewed on mobile devices.
          Expect some irregularities in the UI when scaled down or when using the app in mobile
          devices as the app is still being worked on. Enjoy the app and feel free to give feedback.
        </p>
        <div className="project-card">
          <img src= { Quiz }  alt="quiz app" />
        </div>
        <div className="project-links-btn">
          <NavLink to="https://donavworo.github.io/Quiz-WebApp/index.html" target="_blank" className="btn ">Website</NavLink>
          <NavLink to="https://donavworo.github.io/Quiz-WebApp/index.html" target="_blank" className="btn ">Source Code</NavLink>
        </div>
      </div>



    </div>
    
  )
}

export default Portfolio