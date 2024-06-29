import React, { useEffect,useState } from "react";
import {Helmet} from "react-helmet";

import { useParams } from "react-router-dom";

import Header from "../../common/header";
import Footer from "../../common/footer";
import PortfolioLayout from "../../common/layoutportfolio";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";

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
    url: [img1,img2],
    content:'LoremImspu'
    },
    {
      category: 's2',
      url: [img3,img4],
      content:'LoremImspu'
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
            <title>Sun Creation Privacy Policy - Your Data Security Matters to Us
</title>
            <meta name="description" content="Explore Sun Creation' Privacy Policy to learn how we protect your data. Your privacy and security are our top priorities. Find out more here.
" />
        </Helmet>
<div> <PortfolioLayout 

      title={filter_portfolio[0].category}
      content ={filter_portfolio[0].content}
      images ={filter_portfolio[0].url}
      /></div>
     
       
<Footer /></>
    )
}

export default SpecificPortfolio