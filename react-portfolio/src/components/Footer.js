import "./Footer.css";
import { Link } from 'react-router-dom'; 
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const footer = () => {
  return (
    <div className="footer">
        <div className="footer-wrapper">
            <div className="footer-left">
                <p>Designed and Developed by Don Avworo </p>
                <p>© 2021 Don Avworo Portfolio. All rights reserved</p>
                

            </div>
            
            <div className="footer-right">

                <div className="footer-right-icons">
                    <Link to="https://github.com/DonAvworo" target="_blank" rel="noreferrer">
                        <FaTwitter className="media-icons"/>
                    </Link>
                        <p>Twitter</p>
                </div>
                <div className="footer-right-icons">
                <Link to="https://github.com/DonAvworo" target="_blank" rel="noreferrer">
                    <FaGithub className="media-icons"/>
                </Link>
                    <p>Github</p>
                </div>
                <div className="footer-right-icons">
                <Link to="https://www.linkedin.com/in/don-avworo-0b0b1b1b9/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="media-icons"/>
                </Link>
                    <p>Linkedin</p>
                </div>
                <div className="footer-right-icons">
                    <FaInstagram className="media-icons"/>
                    <p>Instagram</p>
                </div>
            </div>
           
        </div>
    </div>
  )
}
export default footer;

//NOTE 1: the footer component is called as a component in the Home.js file
//NOTE 2: to use the icons as hyperlinks, the icons are wrapped in the <Link>  tag. like this:
// <Link to="https://twitter.com/DonAvworo" target="_blank" rel="noreferrer">
//   <FaTwitter className="media-icons" />
// </Link>