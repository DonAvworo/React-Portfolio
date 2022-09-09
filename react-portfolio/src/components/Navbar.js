import './Navbar.css';                              // Import css file
import { Link } from 'react-router-dom';            // Import Link from react-router-dom
import React from 'react';                          // imports the react library from the node_modules folder and assigns it to the variable React
import { FaBars } from 'react-icons/fa';            // imports the FaBars component from the react-icons library from the node_modules folder and assigns it to the variable FaBars
import { FaTimes } from 'react-icons/fa';           // imports the FaTimes component from the react-icons library from the node_modules folder and assigns it to the variable FaTimes

const Navbar = () => {

    // javascript code that will be executed when the Navbar function component (harmbuger and close icons) is called 
    const [click, setClick] = React.useState(false);  // creates a state variable called click and assigns it the value of false
    const handleClick = () => setClick(!click);       // creates a function called handleClick that sets the value of click to the opposite of its current value (see NOTE-2 below)
    

  return (
    <div className='header'>
        <Link to="/">                               {/* the link to the Home.js (Home Page route path is "/")  */}                
            <h1 className="name-logo">Don-Avworo</h1>  {/* the logo of the website  when clicked redirects to Home.js (Home Page)*/}
        </Link>                                     {/* to work, this will be called as a component in te Home.js file */}
        <ul className={click ? "nav-links active" : "nav-links"}>  
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


         {/*hambuger and close icons  */}
        <div className="hambuger-menu" onClick={handleClick}>
            {click ? (<FaTimes style={{color: "white"}} size={30}/>) : (<FaBars style={{color: "white"}} size={30}/>)}  
        </div>
      
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


// NOTES: -2  import { useState } from 'react';  This imports the useState function from the react library from the node_modules folder and assigns it to the variable useState
// here userState is imported to be used to toggle the hamburger and close icons
// this method can be used along with the click, setClick method to toggle the icons LIKE THIS:
// ...const [click, setClick] = useState(false); This can substitute the code in line 10 above (useState is imported from react and called)
// in line 10 above, React.useState is called to use the useState function from the react library