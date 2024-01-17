import React, { useState } from 'react';
import './Navbar.css';
import race_logo from '../assets/race_india_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  // State to track mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  return (
    <>
      {/* Navbar for Laptop/Desktop */}
      <nav className="navbar1">
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar-item">
            <a href="/raceEducation">RASE Education</a>
            <ul className="sub-menu">
              <li><a href="/raceEducation/india">India</a></li>
              <li><a href="/raceEducation/america">America</a></li>
            </ul>
          </li>
          <li className="navbar-item">
            <a href="/join-rase">Join RASE</a>
            {/* <ul className="sub-menu">
              <li><a href="/joinRace/india">India</a></li>
              <li><a href="/joinRace/america">America</a></li>
            </ul> */}
          </li>
          <li className="navbar-item">
            <a href="/memberSection">Member Section</a>
          </li>
          <li className="navbar-item">
            <a href="/downloads">Downloads</a>
          </li>
          <li className="navbar-item">
            <a href="/upcoming-events">Conferences/Events</a>
          </li>
          <li className="navbar-item">
            <a href="/gallery">Gallery</a>
          </li>
          <li className="navbar-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar (Hamburger Menu) */}
      <nav className={`navbar-mobile ${mobileMenuOpen ? 'open' : ''}`}>
      <ul className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {/* Mobile menu items */}
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar-item">
            <a href="/raceEducation">RASE&nbsp;Education</a>
          </li>
          <li className="navbar-item">
            <a href="/join-rase">Join&nbsp;RASE</a>
            {/* <ul className="sub-menu">
              <li><a href="/joinRace/india">India</a></li>
              <li><a href="/joinRace/america">America</a></li>
            </ul> */}
          </li>
          <li className="navbar-item">
            <a href="/memberSection">Member&nbsp;Section</a>
          </li>
          <li className="navbar-item">
            <a href="/downloads">Downloads</a>
          </li>
          <li className="navbar-item">
            <a href="/upcoming-events">Conferences/Events</a>
          </li>
          <li className="navbar-item">
            <a href="/gallery">Gallery</a>
          </li>
          <li className="navbar-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <span className={`mobile-menu-icon ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <FontAwesomeIcon className='hamburger-icon' icon={faTimes}/>
            ) : (
              <FontAwesomeIcon className='hamburger-icon'icon={faBars}/>
            )}
        </span>
      </nav>


    </>
  );
}

export default Navbar;
