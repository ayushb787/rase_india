// UpcomingEvents.js
import Navbar from '../Navbar';
import { firestore } from '../Firebase/Firebase.js';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './UpcomingEvents.css';
import raseposter from '../../assets/rase_poster_1.jpg';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = await firestore.collection('eventdetails').get();
        const eventsData = eventsCollection.docs.map(doc => doc.data());
        eventsData.sort((a, b) => new Date(a.date) - new Date(b.date));
        setEvents(eventsData);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false); 
      }
    };

    fetchEvents();
  }, []);

  const handleRegistration = (registrationLink) => {
    window.location.href = registrationLink;
  };

  const getCenterSlidePercentage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return 30; // Large screens
    } else if (screenWidth >= 768) {
      return 75; // Medium screens
    } else {
      return 100; // Small screens
    }
  };

  return (
    <div className="upcoming-events-outer-container">
      <Navbar />
      <div className='poster'>
        <img id="poster" src={raseposter} alt="Race India Logo" />
      </div>
      <div className="upcoming-events-container">
        <h1>Upcoming Events</h1>
        {loading ? (
          <div className="loading-indicator">Loading...</div>
        ) : (
          <div className="carousel-container">
            <Carousel
              showThumbs={false}
              showArrows={true}
              infiniteLoop
              centerMode
              autoPlay
              autoFocus
              centerSlidePercentage={getCenterSlidePercentage()}
            >
              {events.map((event, index) => (
                <div key={index} className="carousel-card">
                  <h2>{event.eventName}</h2>
                  <p>
                    <FontAwesomeIcon icon={faCalendarAlt} /> {event.date} <br />
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {event.venue}, {event.location} <br />
                  </p>
                  <button onClick={() => handleRegistration(event.registerLink)}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Register
                  </button>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
