import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";

import { Container,CssBaseline} from "@mui/material";
import formImg from "../images/7.png"
import { Helmet } from "react-helmet";
const  ContactUs = (() =>{



return(
<>
<Header />
<Container component="main" maxWidth="xs">

      <CssBaseline />
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
      
    </Container>

<Footer />
</>)

})

export default ContactUs;