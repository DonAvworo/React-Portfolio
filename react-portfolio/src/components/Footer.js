import "./Footer.css";

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
                    <FaTwitter className="media-icons"/>
                    <p>Twitter</p>
                </div>
                <div className="footer-right-icons">
                    <FaGithub className="media-icons"/>
                    <p>Github</p>
                </div>
                <div className="footer-right-icons">
                    <FaLinkedin className="media-icons"/>
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
export default footer