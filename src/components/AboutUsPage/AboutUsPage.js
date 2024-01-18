import React from 'react';
import './AboutUsPage.css';
import Navbar from '../Navbar.js';

const AboutUsPage = () => {
  return (
    <div className='about-outer-container'>
      <Navbar/>
    <div className="about-container">
      <div className="about-header">
        <div className="elementor-widget-container">
          <div className="eael-dual-header">
            <h2 className="title">
              <span className="lead solid-color">Aims and Objectives</span> <span>NSSI</span>
            </h2>
            <span className="subtext">
              <p>
                <strong>The Aim and objectives for which the Society is established are as follows<br/></strong>
              </p>
            </span>
            <span className="eael-dch-svg-icon">
              <i aria-hidden="true" className="fas fa-snowflake"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-790305f elementor-widget elementor-widget-text-editor" data-id="790305f" data-element_type="widget" data-widget_type="text-editor.default">
        <div className="elementor-widget-container">
          <p>
            <strong>The Aims and objectives for which the Society is established are:-</strong>
          </p>
          <ul>
            {/* List items go here */}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUsPage;
