import './Navbar.css';                              // Import css file
import { Link } from 'react-router-dom';            // Import Link from react-router-dom
import React from 'react';                          // imports the react library from the node_modules folder and assigns it to the variable React

const Navbar = () => {
  return (
    <div className='header'>
        <Link to="/">                               {/* the link to the Home.js (Home Page route path is "/")  */}                
            <h1 className="name-logo">Don-Avworo</h1>  {/* the logo of the website  when clicked redirects to Home.js (Home Page)*/}
        </Link>                                     {/* to work, this will be called as a component in te Home.js file */}
        <ul className="nav-links">                  {/* unordered list of links to the other pages of the website */}
            <li>
                <Link to="/">Home</Link>             {/* the link to the Home.js (Home Page route path is "/")  */}
            </li>
            <li>
                <Link to="/about">About</Link>       {/* the link to the About.js (About Page route path is "/about")  */}
            </li>
            <li>
                <Link to="/projects">Projects</Link> {/* the link to the Projects.js (Projects Page route path is "/projects")  */}
            </li>
            <li>
                <Link to="/contact">Contact</Link>   {/* the link to the Contact.js (Contact Page route path is "/contact")  */}
            </li>
        </ul>
    </div>

  )
}

export default Navbar;

// NOTE: 
// the Navbar component is called as a component in the Home.js file
// the link property is the same as the <a> anchor tag property in HTML so when used in css, it is called by using the <a> anchor tag in css as shown below
// .nav-links a {}
// the to property is the same as the href property in HTML
// the Link property or component is imported from the react-router-dom library
// the Link component is used to link to other pages of the website