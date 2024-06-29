import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages';
import Aboutus from './components/pages/aboutus';
import Enquiry from './components/pages/enquiry';
import Portfolio from './components/pages/portfolio';
import Service from './components/pages/service';
import ContactUs from './components/pages/contactus';
import NotFoundPage from './components/pages/NotFoundPage';
import SpecificPortfolio from './components/pages/specific-portfolio';
import './App.css';
import "../src/common/assets/index.css"

function App() {
  return (
    <div className="App">

      <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about-us" element={<Aboutus />} />
      <Route exact path="/our-service" element={<Service />} />
      <Route exact path="/our-portfolio" element={<Portfolio />} />
      <Route exact path="/enquiry" element={<Enquiry />} />
      <Route exact path="/contact-us" element={<ContactUs />} />
      <Route exact path="/portfolio/:category/" element={<SpecificPortfolio />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/404/" element={<NotFoundPage />} />
    </Routes>
  </Router>
   
    </div>
  );
}

export default App;
