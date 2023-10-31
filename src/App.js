import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import FirstPage from '../src/components/FirstPage.js';
import './App.css';
import GalleryPage from "./components/Gallery/GalleryPage.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
    // <BrowserRouter>
    //   <Routes>
        
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;