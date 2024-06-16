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
          <div className="col-md-4 col-sm-4 col-xs-3">
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
              {/* <li><Link to="/enquiry">Enquiry<i className="material-icons"></i></Link></li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-0 col-xs-2 hidden">
           
            <FontAwesomeIcon icon={["fab", "facebook"]} size="xl" className="iconM"/>
            <FontAwesomeIcon icon={["fab", "twitter"]} size="xl" className="iconM"/>
            <FontAwesomeIcon icon={["fab", "instagram"]} size="xl" className="iconM"/>
          </div>
       
        </div>
        
      </div>)
 }

 export default Menu