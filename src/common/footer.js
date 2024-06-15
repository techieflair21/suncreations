import React from "react";

import logo from  "../assets/images/footer-logo.png"
import "./assets/index.css"

const Footer = () => {
    return (
        <>
<footer className="footer-distributed">

<div className="footer-left">

<a href="/"><img src ={logo} alt="footer-logo" height="60px"/></a>

    <p className="footer-links">
    Welcome to Sun Creation, where you can find a large selection of high-quality home furnishings and accessories.
    Sun Creation, company founded with a desire  for designing elegant and practical environments, 
    pulls together an amazing selection that enhances  the beauty of both your indoor and outdoor settings.
    </p>

   
</div>

<div className="footer-center">
<p className="footer-company-about">
        <span>Company</span>
    </p>
<div className="company-sec">
<div className="left-sec">
<ul className="footer-list-menu">
    <li key="Home"><a href="/">Home</a></li>
    <li  key="About"><a href="/about">About Us</a></li>
    <li  key="Privacy"><a href="/privacy">Privacy Policy</a></li>
</ul>   
</div>
<div className="right-sec">
<ul className="footer-list-menu">
  
    <li  key="terms"> <a href="/terms">Terms & Condition</a></li>
    <li  key="Image"><a href="/imagepolicy">Image Usgae Policy</a></li>
    <li  key="Contact"><a href="/contact">Contact Us</a></li>
</ul>   

</div>
<div className="footer-icons">
<a href="https://www.instagram.com/SunCreationforyou/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
<a href="https://youtube.com/@Sun Creations" target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a>
<a href="https://www.facebook.com/people/Pink-Pages/61550884605810/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
</div>
</div>


</div>
 
<div className="footer-right">
<p className="footer-company-about">
        <span>Popular Categories</span>
    </p>
<div className="company-sec">
<div className="left-sec">
<ul className="footer-list-menu">
    <li key="Home"><a href="/travel-and-tourism/">Travel and Tourism</a></li>
    <li  key="About"><a href="/technology-and-gadgets/">Technology and Gadgets</a></li>
    <li  key="Privacy"><a href="/social-media-and-digital-marketing/">Social Media and Digital Marketing</a></li>
    <li key="Home"><a href="/health-and-wellness/">Health and Wellness</a></li>
    <li  key="About"><a href="/gaming-and-esports/">Gaming and ESports</a></li>
    <li  key="Privacy"><a href="/entertainment-and-pop-culture/">Entertainment and Pop Culture</a></li>
</ul>   
</div>
<div className="right-sec">
<ul className="footer-list-menu">
  
    <li  key="terms"> <a href="/parenting-and-family/">Parenting and Family</a></li>
    <li  key="Image"><a href="/news-and-current-events/">News and Current Events</a></li>
    <li  key="Contact"><a href="/lifestyle-and-self-improvement/">Life Style and Self Improvement</a></li>
    <li  key="terms"> <a href="/education-and-learning/">Education and Learning</a></li>
    <li  key="Image"><a href="/adult">Adult</a></li>
   
</ul>   

</div>

</div>  

</div>


</footer>
<div className="copyright"> <p className="footer-company-name">Sun Creation © 2023</p></div>
</>
    )
    
}

export default Footer