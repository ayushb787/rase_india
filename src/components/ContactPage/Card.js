// Card.js
import React from 'react';
import { FaPhone, FaEnvelope, FaMapPin, FaHandshake } from 'react-icons/fa';
import './Card.css';

export default function Card() {
  return (
        <div className="card-inner">
          <div className="header">
            <h5 className="text-center mr-4 mb-2 block font-sans text-xl font-semibold text-blue-gray-900 antialiased">
              Reach Us At
            </h5>
            <ul>
              <li className="list-item">
              <a target="_blank" rel="noopener" href='tel:+919405399911'><FaPhone className="icon" />
                +91-9405399911</a>
              </li>
              <li className="list-item">
              <a target="_top" rel="noopener" href='mailto:rase4scopy@gmail.com'><FaEnvelope className="icon" />
                <span>rase4scopy@gmail.com</span></a>
              </li>
              <li className="list-item">
                <FaMapPin className="icon" />
                
                <span className="pl-4">Pune, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>
   
    );
}
