import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { Container } from "@mui/material";
import { Helmet } from "react-helmet";
const Aboutus = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="page">
          <Helmet>
            <title>About Us - Sun Creation</title>
            <meta
              name="description"
              content="Discover the story behind Sun Creation, your go-to online directory. Learn about our mission, values, and the team dedicated to serving you. 
"
            />
          </Helmet>

        
          <section id="how-it-works" className="home-highlights">
        <div className="home-highlight">
          <div className="home-content03">
            <div className="home-heading03">
              <h2 className="home-header03">
                About Us
              </h2>
              <p className="home-caption02">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <button className="button-arrow button">
              <span className="home-text15">Read more</span>
              <span className="home-text16">&gt;</span>
            </button>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/Highlights/highlight-1-1500w.png"
              className="home-image2"
            />
            <div className="home-rectangle"></div>
          </div>
        </div>
        <div className="home-highlight1">
          <div className="home-image3">
            <img
              alt="image"
              src="/Highlights/highlight-2-1500w.png"
              className="home-image4"
            />
          </div>
          <div className="home-content04">
            <div className="home-heading04">
              <h2 className="home-header04">
                Excepteur sint occaecat cupidatat non proident
              </h2>
              <p className="home-caption03">
                <span>
                  Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </span>
                <br></br>
                <br></br>
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
                <br></br>
              </p>
            </div>
            <button className="home-find button">Find a local guide</button>
          </div>
        </div>
      </section>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Aboutus;
