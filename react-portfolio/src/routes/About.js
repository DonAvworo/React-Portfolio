// function component ref Home.js for more details
import React from 'react';
import Navbar from '../components/Navbar';  // ref Home.js for more details
import Footer from '../components/Footer';  // ref Home.js for more details
import Hero2 from '../components/Hero2';



const About = () => {
  return (
    <div>
      <Navbar />           {/* use  Navbar component */}
      <Hero2 />
      <Footer />           {/* use Footer component */}
    </div>
  )
}

export default About