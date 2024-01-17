import React, { useEffect, useState } from "react";
import "./GalleryPage.css";
import Navbar from '../Navbar';
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

import image1_1 from '../../assets/event_images/event_1/1_1.jpg';
import image1_2 from '../../assets/event_images/event_1/1_2.jpg';
import image1_3 from '../../assets/event_images/event_1/1_3.jpg';
import image1_4 from '../../assets/event_images/event_1/1_4.jpg';
import image1_5 from '../../assets/event_images/event_1/1_5.jpeg';
import image1_6 from '../../assets/event_images/event_1/1_6.jpg';
import image1_7 from '../../assets/event_images/event_1/1_7.jpg';
import image1_8 from '../../assets/event_images/event_1/1_8.jpg';
import image1_9 from '../../assets/event_images/event_1/1_9.jpg';
import image1_10 from '../../assets/event_images/event_1/1_10.jpg';
import image1_11 from '../../assets/event_images/event_1/1_11.jpg';
import image1_12 from '../../assets/event_images/event_1/1_12.jpg';
import image1_13 from '../../assets/event_images/event_1/1_13.jpg';
import image1_14 from '../../assets/event_images/event_1/1_14.jpg';
import image1_15 from '../../assets/event_images/event_1/1_15.jpg';
import image1_16 from '../../assets/event_images/event_1/1_16.jpg';
import image1_17 from '../../assets/event_images/event_1/1_17.jpg';
import image1_18 from '../../assets/event_images/event_1/1_18.jpg';
import image1_19 from '../../assets/event_images/event_1/1_19.jpg';
import image1_20 from '../../assets/event_images/event_1/1_20.jpg';
import image1_21 from '../../assets/event_images/event_1/1_21.jpg';
import image1_22 from '../../assets/event_images/event_1/1_22.jpg';
import image1_23 from '../../assets/event_images/event_1/1_23.jpg';
import image1_24 from '../../assets/event_images/event_1/1_24.jpg';
import image1_25 from '../../assets/event_images/event_1/1_25.jpg';
import image1_26 from '../../assets/event_images/event_1/1_26.jpg';
import image1_27 from '../../assets/event_images/event_1/1_27.jpg';
import image1_28 from '../../assets/event_images/event_1/1_28.jpg';
import image1_29 from '../../assets/event_images/event_1/1_29.jpg';
import image1_30 from '../../assets/event_images/event_1/1_30.jpg';
import image1_31 from '../../assets/event_images/event_1/1_31.jpg';
import image1_32 from '../../assets/event_images/event_1/1_32.jpg';
import image1_33 from '../../assets/event_images/event_1/1_33.jpg';
import image1_34 from '../../assets/event_images/event_1/1_34.jpg';
import image1_35 from '../../assets/event_images/event_1/1_35.jpg';
import image1_36 from '../../assets/event_images/event_1/1_36.jpg';
import image1_37 from '../../assets/event_images/event_1/1_37.jpg';
import image1_38 from '../../assets/event_images/event_1/1_38.jpg';
import image1_39 from '../../assets/event_images/event_1/1_39.jpg';
import image1_40 from '../../assets/event_images/event_1/1_40.jpg';
import image1_41 from '../../assets/event_images/event_1/1_41.jpg';
import image1_42 from '../../assets/event_images/event_1/1_42.jpg';
import image1_43 from '../../assets/event_images/event_1/1_43.jpg';
import image1_44 from '../../assets/event_images/event_1/1_44.jpg';
import image1_45 from '../../assets/event_images/event_1/1_45.jpg';
import image1_46 from '../../assets/event_images/event_1/1_46.jpg';
import image1_47 from '../../assets/event_images/event_1/1_47.jpg';
import image1_48 from '../../assets/event_images/event_1/1_48.jpg';
import image1_49 from '../../assets/event_images/event_1/1_49.jpg';
import image1_50 from '../../assets/event_images/event_1/1_50.jpg';

import image2_1 from '../../assets/event_images/event_2/2_1.jpg'
import image2_2 from '../../assets/event_images/event_2/2_2.jpg'
import image2_3 from '../../assets/event_images/event_2/2_3.jpg'
import image2_4 from '../../assets/event_images/event_2/2_4.jpg'

import image4_1 from '../../assets/event_images/event_4/4_1.jpg';
import image4_2 from '../../assets/event_images/event_4/4_2.jpg';
import image4_3 from '../../assets/event_images/event_4/4_3.jpg';
import image4_5 from '../../assets/event_images/event_4/4_5.jpg';
import image4_6 from '../../assets/event_images/event_4/4_6.jpg';
import image4_7 from '../../assets/event_images/event_4/4_7.jpg';
import image4_8 from '../../assets/event_images/event_4/4_8.jpg';
import image4_9 from '../../assets/event_images/event_4/4_9.jpg';
import image4_10 from '../../assets/event_images/event_4/4_10.jpg';
import image4_14 from '../../assets/event_images/event_4/4_14.jpg';
import image4_15 from '../../assets/event_images/event_4/4_15.jpg';

import image6_1 from '../../assets/event_images/event_6/6_1.jpg'
// import image6_2 from '../../assets/event_images/event_1/6_11.jpg'
import image6_3 from '../../assets/event_images/event_6/6_3.jpg'
import image6_4 from '../../assets/event_images/event_6/6_4.jpg'
import image6_5 from '../../assets/event_images/event_6/6_5.jpg'
import image6_6 from '../../assets/event_images/event_6/6_6.jpg'
import image6_7 from '../../assets/event_images/event_6/6_10.jpg'
// import image6_8 from '../../assets/event_images/event_1/6_12.jpg'
// import image6_9 from '../../assets/event_images/event_1/6_8.jpg'


import image5_1 from '../../assets/event_images/event_5/5_1.jpg'
import image5_2 from '../../assets/event_images/event_5/5_2.jpg'
import image5_3 from '../../assets/event_images/event_5/5_3.jpg'
import image5_4 from '../../assets/event_images/event_5/5_4.jpg'
import image5_5 from '../../assets/event_images/event_5/5_5.jpg'
import image5_6 from '../../assets/event_images/event_5/5_6.jpg'
import image5_7 from '../../assets/event_images/event_5/5_7.jpg'
// import image5_8 from '../../assets/event_images/event_2/5_8.jpg'

const events = [
  {
    name: "BSECON-1",
    images:[
      {
        src: image1_1,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "‎24 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_2,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "‎24 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_7,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "‎24 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_4,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "‎24 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_5,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "‎24 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_6,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "‎24 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_3,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "‎24 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_8,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "25 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_9,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "25 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_10,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "25 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_11,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "25 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_12,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "26 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_13,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "26 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_14,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "26 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_15,
        alt: "BSECON-1",
        description: "BSECON-1",
        date:"26 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_16,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "26 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_17,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "26 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_18,
        alt: "BSECON-1",
        description: "Event 1 description for image 18.",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_19,
        alt: "BSECON-1",
        description: "Event 1 description for image 19.",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_20,
        alt: "BSECON-1",
        description: "Event 1 description for image 20.",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_21,
        alt: "BSECON-1",
        description: "Event 1 description for image 21.",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_22,
        alt: "BSECON-1",
        description: "Event 1 description for image 22.",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_23,
        alt: "BSECON-1",
        description: "Event 1 description for image 23.",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_24,
        alt: "BSECON-1",
        description: "Event 1 description for image 24.",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_25,
        alt: "BSECON-1",
        description: "Event 1 description for image 25.",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_26,
        alt: "BSECON-1",
        description: "Event 1 description for image 26.",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_27,
        alt: "BSECON-1",
        description: "Event 1 description for image 27.",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_28,
        alt: "BSECON-1",
        description: "Event 1 description for image 28.",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_29,
        alt: "BSECON-1",
        description: "Event 1 description for image 29.",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_30,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_31,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_32,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_33,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_34,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_35,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_36,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_37,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_38,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_39,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_40,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_41,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_42,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_43,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_44,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_45,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_46,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_47,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_48,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_49,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      },
      {
        src: image1_50,
        alt: "BSECON-1",
        description: "BSECON-1",
        date: "27 ‎February ‎2023",
        location: "Bhubaneswar",
      }
    ],
    
    // You can use the 'event1Images' array in your code
    
  },
  {
    name: "Live Cadaver Surgery in Raipur",
    images: [
        {
            src: image2_1,
            alt: "Event 2 Image 1",
            description: "Event 2 in full swing.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
          {
            src: image2_2,
            alt: "Event 2 Image 1",
            description: "Event 2 in full swing.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
          {
            src: image2_3,
            alt: "Event 2 Image 2",
            description: "Participants enjoying the event.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
          {
            src: image2_4,
            alt: "Event 2 Image 1",
            description: "Event 2 in full swing.",
            date: "2023-02-20",
            location: "Los Angeles",
          },
          
          
    ],
  },
  {
    name: "Live Cadaver Surgery in Raipur",
    images: [
      {
        src: image4_1,
        alt: "Event 4 Image 1",
        description: "Event 4 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      {
        src: image4_2,
        alt: "Event 4 Image 2",
        description: "Event 4 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      {
        src: image4_3,
        alt: "Event 4 Image 3",
        description: "Participants enjoying the event.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      {
        src: image4_5,
        alt: "Event 4 Image 4",
        description: "Event 4 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      
      {
        src: image4_6,
        alt: "Event 4 Image 4",
        description: "Event 4 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      {
        src: image4_14,
        alt: "Event 4 Image 4",
        description: "Event 4 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      {
        src: image4_7,
        alt: "Event 4 Image 4",
        description: "Event 4 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      {
        src: image4_8,
        alt: "Event 4 Image 4",
        description: "Event 4 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      {
        src: image4_9,
        alt: "Event 4 Image 4",
        description: "Event 4 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },

      {
        src: image4_10,
        alt: "Event 4 Image 4",
        description: "Event 4 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
     
      
      {
        src: image4_15,
        alt: "Event 4 Image 4",
        description: "Event 4 in full swing.",
        date: "2023-02-20",
        location: "Los Angeles",
      },
      // ... Add more images in a similar fashion for 4_5 to 4_15
    ],
  },
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
    ],
  },
  // Add more events as needed
];


const imageSources = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
  image6_1, image6_3, image6_4, image6_5, image6_6, image6_7,
  image5_1, image5_3, image5_4, image5_5, image5_6, image5_7,image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
  image6_1, image6_3, image6_4, image6_5, image6_6, image6_7,
  image5_1, image5_2, image5_3, image5_4, image5_5, image5_6, image5_7,image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
  image6_1, image6_3, image6_4, image6_5, image6_6, image6_7,
  image5_1, image5_2, image5_3, image5_4, image5_5, image5_6, image5_7,image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
  image6_1, image6_3, image6_4, image6_5, image6_6, image6_7,
  image5_1, image5_2, image5_3, image5_4, image5_5, image5_6, image5_7,image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
  image6_1, image6_3, image6_4, image6_5, image6_6, image6_7,
  image5_1, image5_2, image5_3, image5_4, image5_5, image5_6, image5_7,image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
  image6_1, image6_3, image6_4, image6_5, image6_6, image6_7,
  image5_1, image5_2, image5_3, image5_4, image5_5, image5_6, image5_7,image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
  image6_1, image6_3, image6_4, image6_5, image6_6, image6_7,
  image5_1, image5_2, image5_3, image5_4, image5_5, image5_6, image5_7,image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
  image6_1, image6_3, image6_4, image6_5, image6_6, image6_7,
  image5_1, image5_2, image5_3, image5_4, image5_5, image5_6, image5_7,image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
  image6_1, image6_3, image6_4, image6_5, image6_6, image6_7,
  image5_1, image5_2, image5_3, image5_4, image5_5, image5_6, image5_7,image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
  image6_1, image6_3, image6_4, image6_5, image6_6, image6_7,
  image5_1, image5_2, image5_3, image5_4, image5_5, image5_6, image5_7,
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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const loadImage = (src) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = src;
          image.onload = resolve;
          image.onerror = reject;
        });
      };

      Promise.all(imageSources.map(loadImage))
        .then(() => {
          setImagesLoaded(true);
        })
        .catch((error) => {
          console.error("Error loading images", error);
          setImagesLoaded(true);
        });
    }, 4000); 
  }, []);
  useEffect(() => {
    if (!imagesLoaded) {
      // If images are not loaded, set animation for two bouncing balls
      const loadingIndicator = document.querySelector(".loading-indicator");
      loadingIndicator.innerHTML = `<div class="ball ball1"></div><div class="ball ball2"></div><div class="ball ball3"></div><div class="ball ball4"></div>`;
    }
  }, [imagesLoaded]);

  return (
    <>
      <Navbar />
      {imagesLoaded ? (
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
                      <p>{image.date}</p>
                      <p>{image.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loading-overlay">
          <div className="loading-indicator"></div>
        </div>
      )}
    </>
  );
}

export default GalleryPage;