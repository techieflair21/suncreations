import React from "react";
import { Container } from "@mui/material";
import { Link } from 'react-router-dom'

import Header from "../../common/header";
import Footer from "../../common/footer";


import arcylic1 from "../images/A1.jpeg"
import arcylic2 from "../images/A2.jpeg"
import arcylic3 from "../images/A3.jpeg"



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
            <Link to ="/portfolio/s1"><img src={arcylic1} alt="a1" /></Link>
            <Link to ="/portfolio/s2"> <img src={arcylic2} alt="a2" /></Link>
            <img src={arcylic3} alt="a3" />
            <img src={arcylic1} alt="a1" />
            <img src={arcylic2} alt="a2" />
            <img src={arcylic3} alt="a3" />
        </div>
      </section>
</Container>
<Footer />
</>)

})

export default Service;