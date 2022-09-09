 // functional component that returns the following HTML to the browser when the Home function component is called
import React from 'react';   // imports the react library from the node_modules folder and assigns it to the variable React
import Navbar from '../components/Navbar'; // imports the Navbar component from the Navbar.js file in the components folder and assigns it to the variable Navbar
import Hero from '../components/Hero';      // creates a function component called Home

const Home = () => {        // creates a function component called Home
  return (                  // returns the following HTML to the browser when the Home function component is called
    <div>
      {/* Home */}         {/* Home is commented out and replaced with the components below */}
      <Navbar />           {/* use  Navbar component */}
      <Hero />             {/* use Hero component */}
    </div>
    
  )
}

export default Home;        // exports the Home function component to be used in other files
