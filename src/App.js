import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import FirstPage from '../src/components/FirstPage.js';
import './App.css';
import GalleryPage from "./components/Gallery/GalleryPage.js";
import ContactUsPage from "./components/ContactPage/ContactPage.js";
import JoinRaseForms from "./components/JoinRase/JoinRaceForms.js";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents.js";
import EventForm from "./components/UpcomingEvents/CreateEvent.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/join-rase" element={<JoinRaseForms />} />
        <Route path='/upcoming-events' element={<UpcomingEvents/>}/>
        <Route path='/create-event' element={<EventForm/>}/>
      </Routes>
    </Router>
    // <BrowserRouter>
    //   <Routes>
        
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;