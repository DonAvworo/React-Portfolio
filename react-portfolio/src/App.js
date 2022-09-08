import React from "react";                  // imports the react library from the node_modules folder and assigns it to the variable React
import "./index.css";                       // imports the index.css file from the same folder as the App.js file to be used in the App function component
import Home from "./routes/Home";           // imports the Home function component from the Home.js file in the components folder
import About from "./routes/About";         // imports the About function component from the About.js file in the components folder
import Projects from "./routes/Projects";   // imports the Projects function component from the Projects.js file in the components folder
import Contact from "./routes/Contact";     // imports the Contact function component from the Contact.js file in the components folder
import { Route } from "react-router-dom";   // imports the Route component from the react-router-dom library from the node_modules folder
import { Routes } from "react-router-dom";  // imports the Routes component from the react-router-dom library from the node_modules folder

function App() {
  return (
    // The following code is the HTML that will be rendered to the browser when the App function component is called
    <>                {/* React fragment */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* renders the Home function component to the browser when the user navigates to the root route */}
        <Route path="/about" element={<About />} />  {/* renders the About function component to the browser when the user navigates to the /about route */}
        <Route path="/projects" element={<Projects />} />  {/* renders the Projects function component to the browser when the user navigates to the /projects route */}
        <Route path="/contact" element={<Contact />} />  {/* renders the Contact function component to the browser when the user navigates to the /contact route */}
      </Routes>
    </>
    
  );
}

export default App;
