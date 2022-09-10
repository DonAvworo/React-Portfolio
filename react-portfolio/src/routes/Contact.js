// function component ref Home.js for more details
import React from 'react';
import Navbar from '../components/Navbar';  // ref Home.js for more details
import Footer from '../components/Footer';  // ref Home.js for more details
import Hero3 from '../components/Hero3';

const Contact = () => {
  return (
    <div>
      <Navbar />           {/* use  Navbar component */}
      < Hero3/>
      <Footer />           {/* use Footer component */}
    </div>
  )
}

export default Contact