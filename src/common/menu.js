 import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/suncreation-logo.png";
 const Menu = () =>{
const [display,setDisplay] =useState(false);


const MenuToogle = () => {
setDisplay(!display);
}


    return (
        <div className="header">
        <div className="container">
          <div className="col-md-2 col-sm-2 col-xs-2">
            <div className="logo">
              <a href="/">
               <img src = {logo}  height="100px" alt = "Digital printing services" />
              </a>
            </div>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-7">
<input id="menu-toggle" type="checkbox" onClick={MenuToogle} />
<label className="menu-button-container" htmlFor="menu-toggle">
  <div className="menu-button"></div>
</label>
            <div className="menu" style={{display: display   ? 'block' :'none'}}>
              <ul>
              <li><a href="/">Home<i className="material-icons"></i></a></li>
              <li><Link to="/about-us">About Us<i className="material-icons"></i></Link></li>
              <li><Link to="/our-service">Our Services<i className="material-icons"></i></Link></li>
              <li><Link to="/our-portfolio">Our Portfolio<i className="material-icons"></i></Link></li>
              <li><Link to="/contact-us">Contact Us<i className="material-icons"></i></Link></li>
              <li><Link to="/enquiry">Enquiry<i className="material-icons"></i></Link></li>
              </ul>
            </div>
          </div>
       
        </div>
        
      </div>)
 }

 export default Menu