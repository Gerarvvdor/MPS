import React from "react";
import { Carousel } from "react-bootstrap";
import eolic from "./../images/er5.jpg";
import fan from "./../images/eo3.jpg";
import eolicTwo from "./../images/er3.jpg";

const images = [
    {eolic},
    {fan},
    {eolicTwo},
  ];
const SecondCarouselSlide = () => {
    return (
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };
    
  export default SecondCarouselSlide;