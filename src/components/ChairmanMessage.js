import React from 'react';
import race_logo from '../assets/race_india_logo.png';
import '../components/MessageBox.css';
import { Outlet, Link } from "react-router-dom";
import { FaBrain } from 'react-icons/fa';
import image1 from '../assets/doctor_images/1.png';
import spine_img from '../assets/spine_logo_1.png';
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
            <img src={spine_img} alt='spine' className='msg-icon'/>
        </span>
        <div className='message-body'>
            <p>
                <strong>Dear Members and Friends,</strong>
            </p>
            <p>As the Chairman of RASE India Association and a practicing physician specializing in endoscopy surgery, it is a privilege to welcome you to our digital platform.</p>

            <p>RASE India has been a trailblazer in the field of endoscopy, consistently working towards enhancing healthcare standards by providing specialized training to our dedicated medical professionals. Our commitment to elevating patient care through education, innovation, and collaboration has been unwavering, and it is a testament to the dedication of our esteemed members and faculty.</p>

            <p>I extend my sincere appreciation to the entire RASE India team for their tireless efforts and our members for their commitment to our shared cause. It is through your collective passion and expertise that RASE India has become a leading institution in the realm of endoscopy surgery.</p>

            <p>Looking ahead, our focus remains on fostering innovation, expanding educational initiatives, and building international collaborations. Together, we can achieve significant milestones and contribute meaningfully to the healthcare landscape.</p>

            <p>I encourage all our members to actively participate in our upcoming programs, share their valuable insights, and collaborate towards our common goals. Your active involvement is vital in shaping the future of endoscopy surgery in our nation.</p>

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