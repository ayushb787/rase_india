import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image2 from '../assets/carousel_images/1.png';
import image3 from '../assets/carousel_images/2.png';
import image4 from '../assets/carousel_images/3.png';
import image1 from '../assets/carousel_images/RASE_Founders.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Carousel.css';
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel  activeIndex={index} onSelect={handleSelect} className='carousel-container'>
      <Carousel.Item>
        <img src={image1} alt="First slide" className='carousel-image'/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="Second slide" className='carousel-image'/>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="Third slide" className='carousel-image'/>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={image4} alt="Fourth slide" className='carousel-image'/>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
