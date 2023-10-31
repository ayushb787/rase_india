import React from 'react';
import race_logo from '../assets/race_india_logo.png';
import '../components/FirstPage.css';
import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/Navbar.js'
import UpcomingEvents from '../components/UpcomingEvent.js'
import ControlledCarousel from '../components/Carousel.js';
import CardHolder from './CardHolder';
import ChairmanMessage from './ChairmanMessage';
import CEOMessage from './CEOMessage';
import PresidentMessage from './PresidentMessage';
import ContactUs from './ContactUs'
import GalleryPage from './Gallery/GalleryPage';
function FirstPage() {

  return (
    <div className="outer-container">
    
    
      <div className="container">
        <img id="logo1" src={race_logo} alt="Race India Logo" />
        <p className='company-header'>RASE INDIA</p>
        <img id="logo2" src={race_logo} alt="Race India Logo" />
      </div>
      
      <Navbar/>
      <ControlledCarousel/>
      {/* <UpcomingEvents/> */}
      <ChairmanMessage/>
      <PresidentMessage/>
      <CEOMessage/>
      <CardHolder/>
      <ContactUs/>

      <Outlet />
    </div>
  );
}

export default FirstPage;
