import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { Container } from "@mui/material";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const NotFoundPage = () =>{

    return(
        <>
        <Helmet>
            <title >Page not found</title>
        </Helmet>
        <Header />
        <Container component="main" maxWidth="xs">
        <h2>Page not Found</h2>

        <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
        </Container>
        <Footer />
        </>
    )
}

export default NotFoundPage;