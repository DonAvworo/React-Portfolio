import React from 'react';                // imports the react library from the node_modules folder and assigns it to the variable React
import ReactDOM from 'react-dom';         // imports the react-dom library from the node_modules folder and assigns it to the variable ReactDOM
import './index.css';                     // imports the index.css file from the same folder as the index.js file to be used in the App function component
import App from './App';                  // imports the App function component from the App.js file in the same folder
import { BrowserRouter } from 'react-router-dom';  // imports the BrowserRouter component from the react-router-dom library from the node_modules folder

ReactDOM.render(                          // renders the App function component to the browser
  // the following code is the HTML that will be rendered to the browser when the App function component is called

  // the BrowserRouter component is used to wrap the App function component...
  //...so that the App function component can use the react-router-dom library
  <BrowserRouter>                         
    <App />
  </BrowserRouter>,
  document.getElementById('root')         // renders the App function component to the element with the id of root in the index.html file in the public folder
);

