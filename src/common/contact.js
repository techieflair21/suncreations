import { Container } from '@mui/material';
import React from 'react';
import Header from './header';
import Footer from './footer';
import { Helmet } from 'react-helmet';

const Contact =() =>{

    return(
        <>
<Header />
<Helmet>
            <title>Contact Sun Creation - We're Here to Assist You
</title>
            <meta name="description" content="Reach out to Sun Creation with any questions, inquiries, or feedback. Our team is here to assist you in any way we can. Get in touch today.
"/>
        </Helmet>
        <Container >
            <h2>Contact Us</h2>
        <b>For any queries/feedback/complaint .Send mail at <a href="mailto:info@Sun Creations.com" style={{color:'#ff6ab6'}}>info@Sun Creations.com</a></b>
       <br></br><br></br><b><i>We'd be happy to assist you :)</i></b>
        </Container>
        <Footer />
        </>
    )

}

export default Contact;