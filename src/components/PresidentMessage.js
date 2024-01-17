import React from 'react';
import race_logo from '../assets/race_india_logo.png';
import '../components/MessageBox.css';
import { Outlet, Link } from "react-router-dom";
import { FaBrain } from 'react-icons/fa';
import image2 from '../assets/doctor_images/2.png';
import spine_img from '../assets/spine_logo_1.png';
function PresidentMessage() {

  return (
    <div className='container-ceo-message shadow-lg-3 bg-white rounded'>   
        <div className='header-one'>
            <span className='header-one-part-one'>MESSAGE FROM THE </span>
            <span className='header-one-part-two'>HON. President</span>
        </div>
        <div className='header-name-two'>
            <span>of the Radical Academy of Spine Endoscopy</span>
        </div>
        <span class="msg-icon">
            <img src={spine_img} alt='spine' className='msg-icon'/>
        </span>
        
        <div className='message-body'>
            <p>
                <strong>Dear Members and Colleagues</strong>
            </p>
            <p>As the President of RASE India Association and a practicing physician specializing in endoscopy surgery, I extend a warm welcome to you all. It is both an honor and a responsibility to address you through our digital platform.</p>

            <p>RASE India has been a beacon of excellence in advancing the frontiers of endoscopic procedures. Our commitment to enhancing healthcare standards through education, innovation, and collaboration has been the cornerstone of our mission. As medical professionals, we understand the vital role that continuous learning and skill development play in elevating patient care.</p>

            <p>Heartfelt appreciation goes out to the entire RASE India team, our distinguished faculty, and dedicated members for their unwavering commitment to advancing the field. It is through your collective expertise and dedication that RASE India stands as a pioneering institution in endoscopy surgery.</p>

            <p>Looking ahead, our focus remains steadfast on fostering innovation, expanding educational initiatives, and nurturing international collaborations. Together, we have the potential to achieve significant milestones and contribute substantially to the advancement of healthcare in India.</p>

            <p>I urge all our esteemed members to actively engage in our upcoming programs, share their invaluable insights, and collaborate towards our common objectives. Your active participation is crucial in shaping the future landscape of endoscopy surgery in our country.</p>

            <p>In conclusion, I express my gratitude to each one of you for your ongoing support and dedication. Together, as a united medical community, we will continue to make substantial strides in healthcare, delivering safer, more advanced endoscopy solutions to our patients.</p>
            
            <p>Wishing you all continued success and a rewarding journey with RASE India.</p>
        </div>
        <div className="image-container">
            <img src={image2} alt="Dr. Atmaranjan Dash" className='dr-img' />
            <div class="image-content">
                <h3 class="elementor-image-box-title">Dr. Atmaranjan Dash</h3>
                <p class="elementor-image-box-description">Hon. President<br/>RASE, India</p>
            </div>
        </div>
    </div>
  );
}

export default PresidentMessage;