// function component ref Home.js for more details
import React from 'react';
import Navbar from '../components/Navbar';  // ref Home.js for more details
import Hero2 from '../components/Hero2';  
import Footer from '../components/Footer';  // ref Home.js for more details
import Portfolio from '../components/Portfolio';


const Projects = () => {
  return (
    <div> 
      <Navbar />           {/* use  Navbar component */}
      <Hero2 />            {/* use  Hero-2 component */}
      <Portfolio />        
      <Footer />           {/* use Footer component */}
      
    </div>
  )
}

export default Projects