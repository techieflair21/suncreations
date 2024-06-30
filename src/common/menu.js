 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'



import logo from "../assets/images/suncreation-logo.png";


 const Menu = () =>{
const [display,setDisplay] =useState(false);

library.add(fab);

const MenuToogle = () => {
setDisplay(!display);
}


    return (
        <div className="header">
        <div className="container">
          <div className="col-md-3 col-sm-3 col-xs-3">
            <div className="logo">
              <a href="/">
               <img src = {logo}  height="100px" alt = "Digital printing services" />
              </a>
            </div>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-8">
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
              {/* <li><Link to="/enquiry">Enquiry<i className="material-icons"></i></Link></li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-1 hidden">
           
            <FontAwesomeIcon icon={["fab", "facebook"]} size="xl" className="iconM"/>
            <FontAwesomeIcon icon={["fab", "twitter"]} size="xl" className="iconM"/>
            <FontAwesomeIcon icon={["fab", "instagram"]} size="xl" className="iconM"/>
          </div>
       
        </div>
        
      </div>)
 }

 export default Menu