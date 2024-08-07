import React from "react";
import { Link } from "react-router-dom";

import logo from  "../assets/images/footer-logo.png"
import "./assets/index.css"
import imgBox1 from  "../assets/images/Project-1.jpeg"
import imgBox2 from  "../assets/images/Project-2.jpeg"
import imgBox3 from  "../assets/images/Project-3.jpeg"
import imgBox4 from  "../assets/images/Project-4.jpeg"
import imgBox5 from  "../assets/images/Project-5.jpeg"
import imgBox6 from  "../assets/images/Project-6.jpeg"

const Footer = () => {
    return (
        <>
        <footer className="footer-distributed footer_mobile">
            <section class="accordion accordion--radio">
                <div class="tab">
                    <input type="radio" name="accordion-2" id="rd1" />
                    <label for="rd1" class="tab__label"><img src ={logo} alt="footer-logo" height="60px" /></label>
                    <div class="tab__content">                    
                        <p>Welcome to Sun Creation, where you can find a large selection of high-quality home furnishings and accessories.</p>
                    </div>
                </div>
                <div class="tab">
                    <input type="radio" name="accordion-2" id="rd2" />
                    <label for="rd2" class="tab__label">CONTACT WITH US</label>
                    <div class="tab__content">
                    <p>Phone: <a href="tel:+918840966752">+91 8840966752</a></p>
                    <p>Email: <a href="mailto:info.suncreations@gmail.com">info.suncreations@gmail.com</a></p>
                    <p>Working Day :  Monday - Saturday <br /> Timings :  10:00 AM - 7:30 PM</p>
                    </div>
                </div>
                <div class="tab">
                    <input type="radio" name="accordion-2" id="rd3" />
                    <label for="rd3" class="tab__label">QUICK LINKS</label>
                    <div class="tab__content">
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
                <div class="tab">
                    <input type="radio" name="accordion-2" id="rd4" />                    
                    <label for="rd4" class="tab__label">FOLLOW US</label>
                    <div class="tab__content">
                        <ul className="social_icon_footer">
                            <li><a href="https://www.instagram.com/SunCreationforyou/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="https://www.facebook.com/people/Pink-Pages/61550884605810/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.youtube.com/@SunCreations" target="_blank"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
        <div className="copyright copyright_mobile"> <p className="footer-company-name">All Rights Reserved Sun Creation © 2024</p></div>
<footer className="footer-distributed footer_desktop">
<div className="footer_col4 footer_comman_style">
        <img src ={logo} alt="footer-logo" height="60px" />
        <p>Welcome to Sun Creation, where you can find a large selection of high-quality home furnishings and accessories.</p>
    </div>
    <div className="footer_col2 footer_comman_style">
        <h4>CONTACT WITH US</h4>
        <p>Phone: <a href="tel:+918840966752">+91 8840966752</a></p>
        <p>Email: <a href="mailto:info.suncreations@gmail.com">info.suncreations@gmail.com</a></p>
        <p>Working Day :  Monday - Saturday <br /> Timings :  10:00 AM - 7:30 PM</p>
    </div>
    <div className="footer_col1 footer_comman_style">
        <h4>QUICK LINKS</h4>
        <ul>
            <li><a href="/">Home<i className="material-icons"></i></a></li>
            <li><Link to="/about-us">About Us<i className="material-icons"></i></Link></li>
            <li><Link to="/our-service">Our Services<i className="material-icons"></i></Link></li>
            <li><Link to="/our-portfolio">Our Portfolio<i className="material-icons"></i></Link></li>
            <li><Link to="/contact-us">Contact Us<i className="material-icons"></i></Link></li>
            <li><Link to="/enquiry">Enquiry<i className="material-icons"></i></Link></li>
        </ul>
    </div>
    <div className="footer_col3 footer_comman_style">
        <h4>FOLLOW US</h4>
        <ul>
            <li><a href="https://www.instagram.com/SunCreationforyou/" target="_blank"><i className="fa fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/people/Pink-Pages/61550884605810/" target="_blank"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://www.youtube.com/@SunCreations" target="_blank"><i className="fa fa-youtube"></i></a></li>
        </ul>
    </div>
            
</footer>
<div className="copyright footer_desktop"> <p className="footer-company-name">All Rights Reserved Sun Creation © 2024</p></div>
</>
    )
    
}

export default Footer