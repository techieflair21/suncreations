import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { Container } from "@mui/material";
import { Helmet } from "react-helmet";

import Guide from '../../common/guide';
import { Link } from 'react-router-dom'
import about from "../images/office.jpeg"
import team from "../images/team.jpeg"
const Aboutus = () => {
  return (
    <>
      <Header />
      <Container>

          <Helmet>
            <title>About Us - Sun Creation</title>
            <meta
              name="description"
              content="Discover the story behind Sun Creation, your go-to online directory. Learn about our mission, values, and the team dedicated to serving you. 
"
            />
          </Helmet>

        
          <section id="how-it-works" className="home-highlights">
        <div className="home-highlight1">
          <div className="home-image3">
            <img
              alt="image"
              src={about}
              className="home-image4"
            />
          </div>
          <div className="home-content04">
          <div className="home-heading04">
              <h2 className="home-header04">
             About Us
              </h2>
              <p className="home-caption03">
                <span>
                Our printing solutions cater to your business needs.
Additionally, our range of supplies and accessories are designed to produce
high-quality prints while maximising the volume
and minimising the cost per page.
                </span>
                <br></br>
                <br></br>
                <span>
                Sun creations arts are organizations that specialize in creating and developing visual concepts and designs. These companies often offer a wide range of services, including graphic design, web design, product design, interior design, and more. They play a crucial role in shaping the aesthetics and functionality of various products, spaces, and digital platforms.
                </span>
                <br></br>
              </p>
            </div>
            <button className="home-find button">Contact Now!</button>
          </div>
        </div>
      </section>

      <section id="guides" className="home-guides">
        <div className="home-heading06">
          <h2 className="home-header06">Meet our Teams</h2>
          <p className="home-caption06">
            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
            tempor incididunt.
          </p>
        </div>
        <div className="home-list1">
          <Link to="/">
            <div className="home-guide-wrapper">
            <Guide
                location="Paris, France"
                portrait={team}
                rootClassName="guide-root-class-name2"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper1">
              <Guide
                location="Paris, France"
                portrait={team}
                rootClassName="guide-root-class-name2"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper2">
              <Guide
                location="Bruges, Belgium"
                portrait={team}
                rootClassName="guide-root-class-name"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper3">
              <Guide
                location="London, UK "
                portrait={team}
                rootClassName="guide-root-class-name1"
              ></Guide>
            </div>
          </Link>
        </div>
      </section>      <br />
      </Container>
      <Footer />
    </>
  );
};

export default Aboutus;
