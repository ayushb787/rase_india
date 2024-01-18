import React, { useState, useEffect } from 'react';
import { firestore } from '../Firebase/Firebase.js';
import './CreateEvent.css'; 
const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [location, setLocation] = useState('');
  const [posterLink, setPosterLink] = useState('');
  const [registerLink, setRegisterLink] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const eventsCollection = await firestore.collection('eventdetails').get();
      const eventsData = eventsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Call fetchEvents on component mount
    fetchEvents();
  }, []); // Empty dependency array ensures it only runs once on mount

  const formatDate = (inputDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(inputDate).toLocaleDateString(undefined, options);
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedDate = formatDate(date);

      await firestore.collection('eventdetails').add({
        eventName,
        date: formattedDate,
        doctorName,
        eventDescription,
        venue,
        location,
        posterLink,
        registerLink,
      });

      setEventName('');
      setDoctorName('');
      setEventDescription('');
      setDate('');
      setVenue('');
      setLocation('');
      setPosterLink('');
      setRegisterLink('');

      // Update the events list after successful submission
      fetchEvents();

      alert('Event added successfully!');
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Error adding event. Please try again.');
    }
  };

  const handleDelete = async (eventId) => {
    try {
      await firestore.collection('eventdetails').doc(eventId).delete();

      // Update the events list after successful deletion
      fetchEvents();

      alert('Event deleted successfully!');
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Error deleting event. Please try again.');
    }
  };

  return (
    <div className="event-form-outer-container">
    <div className="event-form-container">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
        </label>
        <br />
        <label>
          Doctor Name:
          <input type="text" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} required />
        </label>
        <br />
        <label>
          Short Description:
          <input type="text" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} required />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <br />
        <label>
          Venue:
          <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} required />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>
        <br />
        <label>
          Event Poster Link:
          <input type="text" value={posterLink} onChange={(e) => setPosterLink(e.target.value)} required />
        </label>
        <br />
        <label>
          Registration Link:
          <input type="text" value={registerLink} onChange={(e) => setRegisterLink(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Add Event</button>
      </form>
    </div>
    <div className="event-delete-container">
      <h2>Delete Event</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className='unordered-event-list'>
          {events.map((event) => (
            <li key={event.id}>
              <span>{event.eventName}</span>
              <button className='delete-button' onClick={() => handleDelete(event.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
     </div>
    </div>
  );
};

export default EventForm;
