import './Navbar.css';                              // Import css file
import { Link } from 'react-router-dom';            // Import Link from react-router-dom
import React from 'react';                          // imports the react library from the node_modules folder and assigns it to the variable React

const Navbar = () => {
  return (
    <div>
        <Link to="/">                               {/* the link to the Home.js (Home Page route path is "/")  */}                
            <div className="logo">Don-Avworo</div>  {/* the logo of the website  when clicked redirects to Home.js (Home Page)*/}
        </Link>                                     {/* to work, this will be called as a component in te Home.js file */}
        <ul className="nav-links">                  {/* unordered list of links to the other pages of the website */}
            <Link to="/">                           {/* the link to the Home.js (Home Page route path is "/")  */}
                <li>Home</li>                       {/* the link to the Home.js (Home Page)  */}
            </Link>
            <Link to="/about">                      {/* the link to the About.js (About Page route path is "/about")  */}
                <li>About</li>                      {/* the link to the About.js (About Page)  */}
            </Link>
            <Link to="/projects">                   {/* the link to the Projects.js (Projects Page route path is "/projects")  */}
                <li>Projects</li>                   {/* the link to the Projects.js (Projects Page)  */}
            </Link>
            <Link to="/contact">                    {/* the link to the Contact.js (Contact Page route path is "/contact")  */}
                <li>Contact</li>                    {/* the link to the Contact.js (Contact Page)  */}
            </Link>
        </ul>


    </div>

  )
}

export default Navbar;