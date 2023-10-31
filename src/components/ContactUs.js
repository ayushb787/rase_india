import React, { useState } from 'react';
import race_logo from '../assets/race_india_logo.png';
import '../components/ContactUs.css';
import { Outlet, Link } from "react-router-dom";
import { FaBrain, FaInstagram, FaFacebook, FaWhatsapp, FaMailBulk, FaTwitter, FaSearchLocation } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image12 from '../assets/doctor_images/12.jpg';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // You can add form validation here
      if (!name || !email || !message || !phone) {
        alert('Please fill out all fields.');
        return;
      }
  
      // If validation passes, you can perform further actions here, such as sending data to a server
      // For now, we'll just log the form data to the console
      console.log('Name:', name);
      console.log('Email:', email);
      console.log("Phone:", phone)
      console.log('Message:', message);
    }
  return (
    <footer className='container-contact-us'>   
        <div className='contact-header-one'>
            <span className='contact-header-one-part-one'>CONTACT US </span>
        </div>
        <div className='contact-header-name-two'>
            <span className='contact-header-two-part-one'>Radical Academy of Spine Endoscopy, India</span>
        </div>
        <span class="msg-icon">
            <FaBrain className='msg-icon'/>
        </span>
        <div className='contact-inner-container'>
            
            <div className='form-container'>
                <form id="contact-form" onSubmit={handleSubmit} method="POST">
                    <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPhone">Phone number</label>
                    <input
                        type="phone"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="form-control"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className='contact-icons'>
                <a target="_blank" rel="noopener" href='https://www.facebook.com/people/Rase-India/pfbid0CdQ7vfEjJpqURB6KAaGjoJFXXiv4fSbwZaWSb6TivugsRHNqAMSSKsBmLodnnc74l/'><span><FaFacebook className='icon' /></span></a>
                <a target="_blank" rel="noopener" href='https://www.instagram.com/rase4scopy/'><span><FaInstagram className='icon' /></span></a>
                <a target="_blank" rel="noopener" href='https://wa.link/22iirv'><span><FaWhatsapp className='icon' /></span></a>
                <a target="_top" href="mailto:rase4scopy@gmail.com" ><span><FaMailBulk className='icon' /></span></a>
                <a target="_blank" rel="noopener" href="https://twitter.com//raseindia"><span><FaTwitter className='icon' /></span></a>
            </div>
        </div>
    </footer>
  );
}

export default ContactUs;