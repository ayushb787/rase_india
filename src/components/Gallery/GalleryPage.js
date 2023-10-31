import React, { useEffect } from "react";
import "./GalleryPage.css";
import image1 from '../../assets/doctor_images/1.png';
import image2 from '../../assets/doctor_images/2.png';
import image3 from '../../assets/doctor_images/3.png';
import image4 from '../../assets/doctor_images/4.png';
import image5 from '../../assets/doctor_images/5.png';
import image6 from '../../assets/doctor_images/6.png';
import image7 from '../../assets/doctor_images/7.png';
import image8 from '../../assets/doctor_images/8.png';
import image9 from '../../assets/doctor_images/9.png';
import image10 from '../../assets/doctor_images/10.png';
import image11 from '../../assets/doctor_images/11.png';


import image6_1 from '../../assets/event_images/event_1/6_1.jpg'
import image6_2 from '../../assets/event_images/event_1/6_11.jpg'
import image6_3 from '../../assets/event_images/event_1/6_3.jpg'
import image6_4 from '../../assets/event_images/event_1/6_4.jpg'
import image6_5 from '../../assets/event_images/event_1/6_5.jpg'
import image6_6 from '../../assets/event_images/event_1/6_6.jpg'
import image6_7 from '../../assets/event_images/event_1/6_10.jpg'
import image6_8 from '../../assets/event_images/event_1/6_12.jpg'
import image6_9 from '../../assets/event_images/event_1/6_8.jpg'


import image5_1 from '../../assets/event_images/event_2/5_1.jpg'
import image5_2 from '../../assets/event_images/event_2/5_2.jpg'
import image5_3 from '../../assets/event_images/event_2/5_3.jpg'
import image5_4 from '../../assets/event_images/event_2/5_4.jpg'
import image5_5 from '../../assets/event_images/event_2/5_5.jpg'
import image5_6 from '../../assets/event_images/event_2/5_6.jpg'
import image5_7 from '../../assets/event_images/event_2/5_7.jpg'
import image5_8 from '../../assets/event_images/event_2/5_8.jpg'

const events = [
  {
    name: "Live Cadaver Surgery in Raipur",
    images: [
        {
            src: image6_1,
            alt: "Event 2 Image 1",
            description: "Event 2 in full swing.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
          {
            src: image6_2,
            alt: "Event 2 Image 2",
            description: "Participants enjoying the event.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
          {
            src: image6_3,
            alt: "Event 2 Image 1",
            description: "Event 2 in full swing.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
          {
            src: image6_4,
            alt: "Event 2 Image 2",
            description: "Participants enjoying the event.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
          {
            src: image6_5,
            alt: "Event 2 Image 1",
            description: "Event 2 in full swing.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
          {
            src: image6_6,
            alt: "Event 2 Image 2",
            description: "Participants enjoying the event.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
          {
            src: image6_7,
            alt: "Event 2 Image 2",
            description: "Participants enjoying the event.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
          {
            src: image6_8,
            alt: "Event 2 Image 1",
            description: "Event 2 in full swing.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
          {
            src: image6_9,
            alt: "Event 2 Image 1",
            description: "Event 2 in full swing.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
    ],
  },
  {
    name: "Conference in Raipur",
    images: [
      {
        src: image5_1,
        alt: "Event 2 Image 1",
        description: "Event 2 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      
      {
        src: image5_2,
        alt: "Event 2 Image 1",
        description: "Event 2 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      {
        src: image5_3,
        alt: "Event 2 Image 2",
        description: "Participants enjoying the event.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      {
        src: image5_4,
        alt: "Event 2 Image 1",
        description: "Event 2 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      {
        src: image5_5,
        alt: "Event 2 Image 2",
        description: "Participants enjoying the event.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      {
        src: image5_6,
        alt: "Event 2 Image 1",
        description: "Event 2 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      
      {
        src: image5_7,
        alt: "Event 2 Image 1",
        description: "Event 2 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      {
        src: image5_8,
        alt: "Event 2 Image 2",
        description: "Participants enjoying the event.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      
    ],
  },
  // Add more events as needed
];


function animateOnScroll(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}

function GalleryPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(animateOnScroll, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
        <div className="gallery-container">
          {events.map((event, index) => (
            <div key={index}>
              <h1 className="event-header">{event.name}</h1>
              <div className="event-collage">
                {event.images.map((image, i) => (
                  <div key={i} className="image-card">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="animate-on-scroll"
                    />
                    <div className="image-info">
                      <p>{image.description}</p>
                      <p>Date: {image.date}</p>
                      <p>Location: {image.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }
    
    export default GalleryPage;
