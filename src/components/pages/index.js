import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Header from "../../common/header";
import Footer from "../../common/footer";
import Feature from '../../common/feature'
import Offer from '../../common//offer'
import Location from '../../common/location'
import Guide from '../../common/guide'

import image from "../../common/assets/img/1.jpeg"
import image1 from "../../common/assets/img/s-1.png"
import about from "../../common/assets/img/1.jpeg"
import slider1 from "../images/1.jpg"
import slider2 from "../images/2.jpg"
import slider3 from "../images/4.jpg"

import arcylic1 from "../images/A1.jpeg"
import arcylic2 from "../images/A2.jpeg"
import arcylic3 from "../images/A3.jpeg"

import formImg from "../images/acrylic.webp"

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
        <h1>Arcylic</h1>
        <p>Arcyclic photo print media has revolutionized the way we display and appreciate visual art. These prints, characterized by their vibrant colors and remarkable depth, offer a unique visual experience that traditional printing methods struggle to match.</p>
        <p>One of the standout features of arcyclic prints is their exceptional durability. Unlike paper prints that may fade or degrade over time, arcyclic prints are known for their long-lasting vibrancy.</p>
        <div className="arcylic_img">
            <img src={arcylic1} alt="a1" />
            <img src={arcylic2} alt="a2" />
            <img src={arcylic3} alt="a3" />
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
      
      <section className="gallery_sec">
          <h2>Gallery</h2>
          {/* {StandardImageList()} */}
      </section>

      <section id="tours" className="home-quick-view">
        <div className="home-main1">
          <div className="home-heading01">
            <h2 className="home-header02">See the world like a local</h2>
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
              image={image}
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
               image={image}
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
               image={image}
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
      <section id="guides" className="home-guides">
        <div className="home-heading06">
          <h2 className="home-header06">Meet our guides</h2>
          <p className="home-caption06">
            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
            tempor incididunt.
          </p>
        </div>
        <div className="home-list1">
          <Link to="/">
            <div className="home-guide-wrapper">
              <Guide></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper1">
              <Guide
                location="Paris, France"
                portrait="/Guides/guide-2.png"
                rootClassName="guide-root-class-name2"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper2">
              <Guide
                location="Bruges, Belgium"
                portrait="/Guides/guide-3.png"
                rootClassName="guide-root-class-name"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper3">
              <Guide
                location="London, UK "
                portrait="/Guides/guide-4.png"
                rootClassName="guide-root-class-name1"
              ></Guide>
            </div>
          </Link>
        </div>
      </section>
      
      <section id="find" className="home-find2">
        <div className="home-heading09">
          <h2 className="home-header14">Find a local guide now</h2>
          <p className="home-caption09">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <button className="home-find3 button">Find a local guide</button>
      </section>

        </div>
        <Footer />
        </>
    )
}

export default Home;