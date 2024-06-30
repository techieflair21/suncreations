import React, { useEffect,useState } from "react";
import {Helmet} from "react-helmet";

import { useParams } from "react-router-dom";

import Header from "../../common/header";
import Footer from "../../common/footer";
import PortfolioLayout from "../../common/layoutportfolio";

import img1 from "../images/portfolio1.jpg";
import img2 from "../images/portfolio6.JPG";
import img3 from "../images/portfolio1.jpg";
import img4 from "../images/portfolio2.JPG";
import img5 from "../images/portfolio3.JPG";
import img6 from "../images/portfolio04.JPG";

const SpecificPortfolio = () => {
  const params = useParams();
  
  const [filter_portfolio,setFilterPortfolio] = useState([
    {
    category: '',
    url: [img1],
    content:''
    }

  ]);
  let portfolio_details = [
    {
      category: 's1',
      url: [img1,img2,img3],
      content:"Acrylic glass prints are modern, sleek displays where a photo or artwork is sandwiched between acrylic and a backing, often aluminum dibond. The acrylic's transparent, glossy finish enhances colors, depth, and durability, suitable for indoor or outdoor use. Face mounting ensures a secure, vibrant display with a high-definition appearance that makes images stand out. Customizable in size and shape, they offer a professional, contemporary look, though they require careful handling to prevent scratches."
    },
    {
      category: 's2',
      url: [img3,img4,img1],
      content: "Indoor and outdoor signs serve distinct purposes based on location and environment. Indoor signs guide, inform, and brand within enclosed spaces, using materials like acrylic, metal, or vinyl to convey messages effectively. Outdoor signs withstand weather conditions and attract attention, typically made from durable materials like aluminum, PVC, or corrugated plastic. Both types enhance communication and branding strategies, ensuring clarity and visibility in their respective settings."
      },
      {
        category: 's3',
        url: [img3,img4,img2],
        content: "LED letters and channel letters are both popular choices for signage, each offering unique advantages. LED letters utilize illuminated LEDs inside the letters, providing energy efficiency and high visibility day and night. They are ideal for creating eye-catching displays that stand out in various lighting conditions. Channel letters, on the other hand, are three-dimensional signs with individual elements and hollow backsides for internal lighting. This design allows for a bold, professional look and is customizable in size, font, and color to suit branding noods. Both types are widely used for storefronts, businesses, and outdoor advertising due to their versatility and impact."
        },
        {
          category: 's4',
          url: [img5,img6,img1],
          content: "Solid acrylic letters are crafted from durable acrylic material, offering a sleek and modern appearance for signage. They are often used in indoor and outdoor settings where a clean, dimensional look is desired. Available in various colors and finishes, they enhance branding and visibility effectively."
          },
        {
          category: 's5',
          url: [img2,img3,img5],
          content: "Solid acrylic letters are crafted from durable acrylic material, offering a sleek and modern appearance for signage. They are often used in indoor and outdoor settings where a clean, dimensional look is desired. Available in various colors and finishes, they enhance branding and visibility effectively."
          },
        {
          category: 's6',
          url: [img4,img6,img1],
          content: "Solid acrylic letters are crafted from durable acrylic material, offering a sleek and modern appearance for signage. They are often used in indoor and outdoor settings where a clean, dimensional look is desired. Available in various colors and finishes, they enhance branding and visibility effectively."
          }
  ]

  useEffect(() => {
let str=params.category.trim();
const result =portfolio_details.filter((item) => {
return item.category === str;
})
setFilterPortfolio(result)
  },[params.category])
    return (
        <>
        <Header />
        <Helmet>
            <title>Sun Creation Privacy Policy - Your Data Security Matters to Us</title>
            <meta name="description" content="Explore Sun Creation' Privacy Policy to learn how we protect your data. Your privacy and security are our top priorities. Find out more here." />
        </Helmet>
    <div> <PortfolioLayout title={filter_portfolio[0].category}
      content ={filter_portfolio[0].content}
      images ={filter_portfolio[0].url} /></div><Footer /></>
    )
}

export default SpecificPortfolio