import React from "react";
import { Container } from "@mui/material";
import { Link } from 'react-router-dom'

import Header from "../../common/header";
import Footer from "../../common/footer";


import arcylic1 from "../images/portofloio.jpg"
import arcylic2 from "../images/portfolio2.JPG"
import arcylic3 from "../images/portfolio3.JPG"
import arcylic4 from "../images/portfolio04.JPG"
import arcylic5 from "../images/portfolio01.JPG"
import arcylic6 from "../images/portfolio1.jpg"

import { Helmet } from "react-helmet";
const  Service = (() =>{

return(
<>
<Header >
<Helmet>
            <title>About Us - Sun Creation</title>
            <meta
              name="description"
              content="Discover the story behind Sun Creation, your go-to online directory. Learn about our mission, values, and the team dedicated to serving you. 
"
            />
          </Helmet>
</Header>
<Container >
    
<section className="arcylic_sec">
        <h1>Our Services</h1>
        <p>Arcyclic photo print media has revolutionized the way we display and appreciate visual art. These prints, characterized by their vibrant colors and remarkable depth, offer a unique visual experience that traditional printing methods struggle to match.</p>
        <p>One of the standout features of arcyclic prints is their exceptional durability. Unlike paper prints that may fade or degrade over time, arcyclic prints are known for their long-lasting vibrancy.</p>
        <div className="arcylic_img">
            <Link to ="/portfolio/s1"><img src={arcylic1} alt="a1" /><span className="portfolio_title">ACRYLIC GLASS PRINT</span></Link>
            <Link to ="/portfolio/s2"><img src={arcylic2} alt="a2" /><span className="portfolio_title">OUTDOOR/INDOOR LED SCREENS</span></Link>
            <Link to ="/portfolio/s3"><img src={arcylic3} alt="a3" /><span className="portfolio_title">LED LETTERS/CHANNEL LETTERS</span></Link>
            <Link to ="/portfolio/s4"><img src={arcylic4} alt="a4" /><span className="portfolio_title">SOLID ACRYLIC LETTERS</span></Link>
            <Link to ="/portfolio/s5"><img src={arcylic5} alt="a5" /><span className="portfolio_title">Fabrication/ACP/HPL Cladding</span></Link>
            <Link to ="/portfolio/s6"><img src={arcylic6} alt="a6" /><span className="portfolio_title">Retro Reflective Road Signs</span></Link>
        </div>
      </section>
</Container>
<Footer />
</>)

})

export default Service;