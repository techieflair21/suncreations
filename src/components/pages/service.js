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
            <Link to ="/portfolio/acrylic-glass-print"><img src={arcylic1} alt="acrylic-glass-print" /><span className="portfolio_title">ACRYLIC GLASS PRINT</span></Link>
            <Link to ="/portfolio/outdoor-indoor-led-screens"><img src={arcylic2} alt="outdoor-indoor-led-screens" /><span className="portfolio_title">OUTDOOR/INDOOR LED SCREENS</span></Link>
            <Link to ="/portfolio/led-letters-channel-letters"><img src={arcylic3} alt="led-letters-channel-letters" /><span className="portfolio_title">LED LETTERS/CHANNEL LETTERS</span></Link>
            <Link to ="/portfolio/solid-acrylic-letters"><img src={arcylic4} alt="solid-acrylic-letters" /><span className="portfolio_title">SOLID ACRYLIC LETTERS</span></Link>
            <Link to ="/portfolio/fabrication-acp-hpl-cladding"><img src={arcylic5} alt="fabrication-acp-hpl-cladding" /><span className="portfolio_title">Fabrication/ACP/HPL Cladding</span></Link>
            <Link to ="/portfolio/retro-reflective-road-signs"><img src={arcylic6} alt="retro-reflective-road-signs" /><span className="portfolio_title">Retro Reflective Road Signs</span></Link>
        </div>
      </section>
</Container>
<Footer />
</>)

})

export default Service;