import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Header from "../../common/header";
import Footer from "../../common/footer";
import Offer from '../../common//offer'


import image from "../images/portofloio.jpg"
import image1 from "../images/portfolio1.jpg"

import about from "../images/office.jpeg"
import slider1 from "../images/1.jpg"
import slider2 from "../images/2.jpg"
import slider3 from "../images/4.jpg"

import arcylic1 from "../images/portofloio.jpg"
import arcylic2 from "../images/portfolio2.JPG"
import arcylic3 from "../images/portfolio3.JPG"
import arcylic4 from "../images/portfolio04.JPG"
import arcylic5 from "../images/portfolio01.JPG"
import arcylic6 from "../images/portfolio5.JPG"

import formImg from "../images/7.png"

// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

// export default function StandardImageList() {
//   return (
//     <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//             src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//             alt={item.title}
//             loading="lazy"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];

const Home = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <>
        <Header />

        <Helmet>
            <title>SS Creations: YOUR VISION, OUR EXPERTISE 
</title>
            <meta name="description" content=""/>
        </Helmet>
        <div className ="container">
   

        <section className="home-hero">
      
 
        <AutoplaySlider
     play={true}
     cancelOnInteraction={false} // should stop playing on user interaction
     interval={6000}
   >
     <div data-src={slider1} />
     <div data-src={slider2} />
     <div data-src={slider3} />
   </AutoplaySlider>
          </section>
       
      <section className="arcylic_sec">
        <h1>Our Services</h1>
        <p>Arcyclic photo print media has revolutionized the way we display and appreciate visual art. These prints, characterized by their vibrant colors and remarkable depth, offer a unique visual experience that traditional printing methods struggle to match.</p>
        <p>One of the standout features of arcyclic prints is their exceptional durability. Unlike paper prints that may fade or degrade over time, arcyclic prints are known for their long-lasting vibrancy.</p>
        <div className="arcylic_img">
            <div className="arcylic_col">
              <div className="click_here">Click here!</div>
              <img src={arcylic1} alt="acrylic-glass-print" />
              <span className="portfolio_title">ACRYLIC GLASS PRINT</span>
            </div>
            <div className="arcylic_col">
            <div className="click_here">Click here!</div>
              <img src={arcylic2} alt="outdoor-indoor-led-screens" />
              <span className="portfolio_title">OUTDOOR/INDOOR LED SCREENS</span>
            </div>
            <div className="arcylic_col">
            <div className="click_here">Click here!</div>
              <img src={arcylic3} alt="led-letters-channel-letters" />
              <span className="portfolio_title">LED LETTERS/CHANNEL LETTERS</span>
            </div>
            <div className="arcylic_col">
            <div className="click_here">Click here!</div>
              <img src={arcylic4} alt="solid-acrylic-letters" />
              <span className="portfolio_title">SOLID ACRYLIC LETTERS</span>
            </div>
            <div className="arcylic_col">
            <div className="click_here">Click here!</div>
              <img src={arcylic5} alt="fabrication-acp-hpl-cladding" />
              <span className="portfolio_title">Fabrication/ACP/HPL Cladding</span>
            </div>
            <div className="arcylic_col">
            <div className="click_here">Click here!</div>
              <img src={arcylic6} alt="retro-reflective-road-signs" />
              <span className="portfolio_title">Retro Reflective Road Signs</span>
            </div>           
        </div>
      </section>

  {/* About Us */}
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
            <button className="home-find button">Find a Design Expert</button>
          </div>
        </div>
      </section>
      <section className="arcylic_form">
        <img src={formImg} />
        <form>
          <div className="form-box1 form_comman_style">
            <label>Name <span>*</span></label>
            <input type="text" name="name" />
          </div>
          <div className="form-box2 form_comman_style">
            <label>Email <span>*</span></label>
            <input type="email" name="email" />
          </div>
          <div className="form-box2 form_comman_style">
            <label>Contact <span>*</span></label>
            <input type="number" name="number" />
          </div>
          <div className="form-box2 form_comman_style">
            <label>Address <span>*</span></label>
            <input type="text" name="address" />
          </div>
          <div className="form-box2 form_comman_style">
            <label>Message <span>*</span></label>
            <textarea name="textarea" />
          </div>
          <input type="submit" name="Send Message" />
        </form>
      </section>
      
      {/* <section className="gallery_sec"> */}
          {/* <h2>Gallery</h2> */}
          {/* {StandardImageList()} */}
      {/* </section> */}

      <section id="tours" className="home-quick-view">
        <div className="home-main1">
          <div className="home-heading01">
            <h2 className="home-header02">SS Creations- Portfolio</h2>
            <p className="home-caption01">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
        </div>
        <div className="home-offers">
          <Link to="/">
            <div className="home-offer-container">
              <Offer image={image}></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container1">
              <Offer
              image={image1}
                guides="54 Local guides"
                location="Barcelona, Spain"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container2">
              <Offer
               image={image}
                guides="34 Local Guides"
                location="Machu Picchu, Peru"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container3">
              <Offer
               image={image1}
                guides="1 Local guide"
                location="Doha, Quatar"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container4">
              <Offer
               image={image}
                guides="6 Local guides"
                location="Rhodes, Greece"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container5">
              <Offer
               image={image1}
                guides="132 Local guides"
                location="New York, USA"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container6">
              <Offer
               image={image}
                guides="1 Local guide"
                location="Doha, Quatar"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container7">
              <Offer
                image={image}
                guides="6 Local guides"
                location="Rhodes, Greece"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container8">
              <Offer
               image={image}
                guides="132 Local guides"
                location="New York, USA"
              ></Offer>
            </div>
          </Link>
        </div>
      
      </section>

    


   
      
      {/* <section id="find" className="home-find2">
        <div className="home-heading09">
          <h2 className="home-header14">Personalized Acrylic Art</h2>
          <p className="home-caption09">
          You're in the right place for premium Acrylic Posters! Discover our bespoke service, where we create unique and personalized pieces that add elegance to your space, perfect for commemorating all your special occasions.
          </p>
        </div>
        <button className="home-find3 button">Find a Design Expert</button>
      </section> */}

        </div>
        <Footer />
        </>
    )
}

export default Home;