 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import logo from "../assets/images/suncreation-logo.png";
import userLogo from './assets/img/user_icon.png';
import cartLogo from './assets/img/cart_icon.png';

 const Menu = () =>{
const [display,setDisplay] =useState(false);

library.add(fab);

const MenuToogle = () => {
setDisplay(!display);
}


    return (
      <>
        <div className="head_top">Get Up to 20% Off for First Order Use Code "PRINT20"</div>
        <header className="header">
            <div className="menu_row">
                <input id="menu-toggle" type="checkbox" onClick={MenuToogle} />
                <label className="menu-button-container" htmlFor="menu-toggle">
                  <div className="menu-button"></div>
                </label>
                  <div className="menu" style={{display: display   ? 'block' :'none'}}>
                    <ul>
                    <li><a href="/">Home<i className="material-icons"></i></a></li>
                    {/* <li><Link to="/about-us">About Us<i className="material-icons"></i></Link></li> */}
                    <li><Link to="/our-service">Our Services<i className="material-icons"></i></Link></li>
                    <li><Link to="/our-portfolio">Our Portfolio<i className="material-icons"></i></Link></li>
                    <li><Link to="/contact-us">Contact Us<i className="material-icons"></i></Link></li>
                    {/* <li><Link to="/enquiry">Enquiry<i className="material-icons"></i></Link></li> */}
                    </ul>
                  </div>
              </div>

              <div className="logo_row">
                <div className="logo">
                  <a href="/">
                  <img src = {logo}  height="100px" alt = "Digital printing services" />
                  </a>
                </div>
              </div>

              <div className="social_icon_row">
                <img src = {userLogo} alt = "user icon" />
                <img src = {cartLogo} alt = "cart icon" />
                {/* <FontAwesomeIcon icon={["fab", "facebook"]} size="xl" className="iconM"/>
                <FontAwesomeIcon icon={["fab", "twitter"]} size="xl" className="iconM"/>
                <FontAwesomeIcon icon={["fab", "instagram"]} size="xl" className="iconM"/> */}
              </div>
        </header>
      </>)
 }

 export default Menu