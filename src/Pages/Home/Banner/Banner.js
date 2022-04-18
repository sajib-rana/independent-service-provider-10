import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import gym1 from '../../../images/gym1.jpg'
import gym2 from '../../../images/gym2.jpg'
import gym3 from '../../../images/gym3.jpg'

const Banner = () => {
     const [index, setIndex] = useState(0);

     const handleSelect = (selectedIndex, e) => {
       setIndex(selectedIndex);
     };
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={gym1} alt="First slide" />
          <Carousel.Caption>
            <h3>Super body fitness</h3>
            <p>
              we are ensure the quality the service and care every man so that
              he reach his goal.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gym2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Super body fitness</h3>
            <p>
              we are ensure the quality the service and care every man so that
              he reach his goal.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gym3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Super body fitness</h3>
            <p>
              we are ensure the quality the service and care every man so that
              he reach his goal.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;