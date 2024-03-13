import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import image1 from '../Images/1.jpg'; // Import your images
import image2 from '../Images/2.jpg';
import image3 from '../Images/3.jpg';
import image4 from '../Images/4.jpg';
import image5 from '../Images/5.jpg';
import image6 from '../Images/6.jpg';


const HomeCarousel = () => {
  // Use React somewhere in your component to resolve the ESLint warning
  React.useEffect(() => {
    // This is just an example usage of React to resolve the warning
    console.log('Component rendered');
  }, []);

  return (
    <Carousel showArrows autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src={image1} alt="Image 1" />
      </div>
      <div>
        <img src={image2} alt="Image 2" />
      </div>
      <div>
        <img src={image3} alt="Image 3" />
      </div>
      <div>
        <img src={image4} alt="Image 4" />
      </div>
      <div>
        <img src={image5} alt="Image 5" />
      </div>
      <div>
        <img src={image6} alt="Image 6" />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
