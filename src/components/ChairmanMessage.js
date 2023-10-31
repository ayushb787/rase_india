import React from 'react';
import race_logo from '../assets/race_india_logo.png';
import '../components/MessageBox.css';
import { Outlet, Link } from "react-router-dom";
import { FaBrain } from 'react-icons/fa';
import image1 from '../assets/doctor_images/1.png';

function ChairmanMessage() {

  return (
    <div className='container-ceo-message shadow-lg-3 bg-white rounded'>   
        <div className='header-one'>
            <span className='header-one-part-one'>MESSAGE FROM THE </span>
            <span className='header-one-part-two'>HON. CHAIRMAN</span>
        </div>
        <div className='header-name-two'>
            <span>of the Radical Academy of Spine Endoscopy</span>
        </div>
        <span class="msg-icon">
            <FaBrain className='msg-icon'/>
        </span>
        
        <div className='message-body'>
            <p>
                <strong>Dear Friends</strong>
            </p>
            <p>I trust this message finds you all in good health and high spirits. It is with immense pleasure and a profound sense of responsibility that I address you today as the Chairman of the RASE India Association.</p>

            <p>As we all know, RASE India has been at the forefront of the field of endoscopy surgery and has consistently strived to enhance the quality of healthcare by providing specialized training to our dedicated medical professionals. Our mission to elevate the standards of patient care through education, innovation, and collaboration has always been our driving force.</p>

            <p>In our pursuit of excellence, we have successfully organized numerous training programs and workshops, equipping doctors with the latest advancements in endoscopy procedures. We firmly believe that continuous learning and skill development are the cornerstones of medical progress.</p>

            <p>I would like to take this opportunity to express my heartfelt gratitude to the entire RASE India team, our esteemed faculty, and our members who have shown unwavering commitment and dedication to our cause. It is your collective effort that has made RASE India a leading institution in the field of endoscopy surgery.</p>

            <p>Looking ahead, our focus remains on fostering innovation, expanding our educational outreach, and fostering international collaborations. Together, we can achieve remarkable milestones and contribute significantly to the healthcare landscape.</p>

            <p>I encourage all our members to actively participate in our upcoming programs, share their insights, and work collaboratively towards our shared goals. Your active engagement is invaluable in shaping the future of endoscopy surgery in India.</p>

            <p>In closing, I would like to thank each one of you for your unwavering support and dedication. Together, we will continue to make a meaningful impact on healthcare and bring better, safer, and more advanced endoscopy solutions to our patients.</p>

            <p>Wishing you all continued success and a fulfilling journey with RASE India.</p>
        </div>
        <div className="image-container">
            <img src={image1} alt="Dr. Rahul Alhuwalia" className='dr-img' />
            <div class="image-content">
                <h3 class="elementor-image-box-title">Dr. Rahul Alhuwalia</h3>
                <p class="elementor-image-box-description">Hon. Chairman<br/>RASE, India</p>
            </div>
        </div>
    </div>
  );
}

export default ChairmanMessage;