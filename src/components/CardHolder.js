import React from 'react';
import '../components/CardHolder.css';
import Carousel from 'react-grid-carousel';
import image1 from '../assets/doctor_images/1.png';
import image2 from '../assets/doctor_images/2.png';
import image3 from '../assets/doctor_images/3.png';
import image4 from '../assets/doctor_images/4.png';
import image5 from '../assets/doctor_images/5.png';
import image6 from '../assets/doctor_images/6.png';
import image7 from '../assets/doctor_images/7.png';
import image8 from '../assets/doctor_images/8.png';
import image9 from '../assets/doctor_images/9.png';
import image10 from '../assets/doctor_images/10.png';
import image11 from '../assets/doctor_images/11.png';
import { Card } from 'react-bootstrap';
import spine_img from '../assets/spine_logo_1.png';
const CardHolder = () => {
    return (
       <div className="container-carousel-2 shadow-lg-3 bg-white rounded">
            <div className='header-one'>
                <span className='header-one-part-one'>OFFICE BEARERS </span>
                <span className='header-one-part-two'>RASE India</span>
            </div>
            <div className='header-name-two'>
                <span>The Office Bearers of RASE</span>
            </div>
            <span class="msg-icon">
                <img src={spine_img} alt='spine' className='msg-icon'/>
            </span>
            <div className='carousel-inner-container'>
            <Carousel  cols={4} rows={1} gap={5} autoplay={2500} step={1} loop>
                <Carousel.Item>
                    <div className="card-body shadow-lg-3 rounded">
                        <img
                            className="img-fluid"
                            src={image1}
                            alt="Image 1"
                        />
                            <h3 className="name">DR RAHUL ALHUWALIA</h3>
                            <p className="post">Chairman</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-body shadow-lg-3 rounded">
                        <img
                            className="img-fluid"
                            src={image2}
                            alt="Image 2"
                        />
                            <h3 className="name">DR ATMARANJAN DASH</h3>
                            <p className="post">President</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-body shadow-lg-3 rounded">
                        <img
                            className="img-fluid"
                            src={image3}
                            alt="Image 3"
                        />
                            <h3 className="name">DR SUMEET PAWAR</h3>
                            <p className="post">Director</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-body shadow-lg-3 rounded">
                        <img
                            className="img-fluid"
                            src={image4}
                            alt="Image 4"
                        />
                            <h3 className="name">DR ESWARA RAO THAMATAPU</h3>
                            <p className="post">Director</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-body shadow-lg-3 rounded">
                        <img
                            className="img-fluid"
                            src={image5}
                            alt="Image 5"
                        />
                            <h3 className="name">DR SAIDILEEP VISWANADHA</h3>
                            <p className="post">Director</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-body shadow-lg-3 rounded">
                        <img
                            className="img-fluid"
                            src={image6}
                            alt="Image 6"
                        />
                            <h3 className="name">DR VAIBHAV JAIN</h3>
                            <p className="post">Director</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-body shadow-lg-3 rounded">
                        <img
                            className="img-fluid"
                            src={image7}
                            alt="Image 7"
                        />
                            <h3 className="name">DR HARIN MODI</h3>
                            <p className="post">Director</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-body shadow-lg-3 rounded">
                        <img
                            className="img-fluid"
                            src={image8}
                            alt="Image 8"
                        />
                            <h3 className="name">DR VARUN PENDRO</h3>
                            <p className="post">Director</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-body shadow-lg-3 rounded">
                        <img
                            className="img-fluid"
                            src={image9}
                            alt="Image 9"
                        />
                            <h3 className="name">DR ACHAL GUPTA</h3>
                            <p className="post">Director</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-body shadow-lg-3 rounded">
                        <img
                            className="img-fluid"
                            src={image10}
                            alt="Image 10"
                        />
                            <h3 className="name">DR RITESH NAWKHARE</h3>
                            <p className="post">Director</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-body shadow-lg-3 rounded">
                        <img
                            className="img-fluid"
                            src={image11}
                            alt="Image 11"
                        />
                            <h3 className="name">DR TEJA ADAM</h3>
                            <p className="post">Director</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-body shadow-lg-3 rounded">
                        <img
                            className="img-fluid"
                            src={image1}
                            alt="Image 1"
                        />
                            <h3 className="name">DR RAHUL ALHUWALIA</h3>
                            <p className="post">Chairman</p>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>
       </div>
    );
};

export default CardHolder;

