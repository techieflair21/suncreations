import React from "react";
import { Link } from 'react-router-dom'
import { Container } from "@mui/material";

import Header from "../../common/header";
import Footer from "../../common/footer";
import Location from '../../common/location'
import image1 from "../../common/assets/img/s-1.png"

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
    
<section id="destinations" className="home-destinations">
        <div className="home-video-details">
          <div className="home-heading05">
            <h2 className="home-header05">Spotlight destinations</h2>
            <p className="home-caption04">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-video-wrapper">
            <div className="home-tint1">
              <img alt="image" src="/Icons/play.svg" className="home-image5" />
            </div>
            <video
              src
              poster="/Videos/spotlight-cover1-1500w.png"
              className="home-video2"
            ></video>
          </div>
        </div>
        <p className="home-caption05">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto.
        </p>
        <div className="home-list">
          <Link to="/" className="home-navlink09">
            <div className="home-location-wrapper">
              <Location location="Bruges, Belgium"
                background={image1}></Location>
            </div>
          </Link>
          <Link to="/" className="home-navlink10">
            <div className="home-location-wrapper1">
              <Location
                location="Paris, France"
                background={image1}
              ></Location>
            </div>
          </Link>
          <Link to="/" className="home-navlink11">
            <div className="home-location-wrapper2">
              <Location
                location="Bruges, Belgium"
                background={image1}
              ></Location>
            </div>
          </Link>
          <Link to="/" className="home-navlink12">
            <div className="home-location-wrapper3">
              <Location
                location="London, UK"
                background={image1}
              ></Location>
            </div>
          </Link>
        </div>
        <button className="home-find1 button">Find a local guide</button>
      </section>
</Container>
<Footer />
</>)

})

export default Service;