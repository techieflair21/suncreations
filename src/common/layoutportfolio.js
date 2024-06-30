import React from "react";
import { Container } from "@mui/material";

const PortfolioLayout = (props) =>{
console.log(props.images)
    return(
<Container > 
<section className="arcylic_sec">
  <h1>{props.title}</h1>
  <p>{props.content}</p>

    <div className="portfolio_img">
      {props.images.map((image) => (
        <img key={image.id} src={image} alt="sun creations" />
      ))}
    </div>
</section>
</Container>
    )
}

export default PortfolioLayout;