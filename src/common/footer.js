import React from "react";

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
<footer className="footer-distributed">
    <div className="footer_col1 footer_comman_style">
        <img src ={logo} alt="footer-logo" height="60px" />
        <p>Welcome to Sun Creation, where you can find a large selection of high-quality home furnishings and accessories.</p>
    </div>
    <div className="footer_col2 footer_comman_style">
        <h4>Address</h4>
        <p>SIGNEX PRINT MEDIA <br />
        Plot No. 182, Ground Floor, <br />
        Rama Market, Pitampura, <br />
        New Delhi-110034 <br />

        Telephone :  <a href="tel:01142696157">01142696157</a> <br />
        Working Day :  Monday - Saturday <br />
        Timings :  10:00 AM - 7:30 PM</p>
    </div>
    <div className="footer_col3 footer_comman_style">
        <h4>Location</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6147512395814!2d77.12803931440894!3d28.701168687723474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03deecbf10bf%3A0x91f954db4fd2c105!2sSignex%20Print%20Media!5e0!3m2!1sen!2sin!4v1588333215895!5m2!1sen!2sin" width="100%" height="" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    <div className="footer_col3 footer_comman_style">
        <h4>Projects</h4>
        <div className="footer_img_box">
            <img src ={imgBox1} alt="project 1" />
            <img src ={imgBox2} alt="project 2" />
            <img src ={imgBox3} alt="project 3" />
            <img src ={imgBox4} alt="project 4" />
            <img src ={imgBox5} alt="project 5" />
            <img src ={imgBox6} alt="project 6" />
        </div>
    </div>
</footer>
<div className="copyright"> <p className="footer-company-name">Sun Creation © 2023</p></div>
<a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
</>
    )
    
}

export default Footer