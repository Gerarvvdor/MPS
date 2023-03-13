import React from "react";
import { Carousel } from "react-bootstrap";
import foto1 from './../images/banco2.jpg';
import foto2 from './../images/smp1.jpg';
import foto3 from './../images/todos.jpg'

const images = [
    {foto1},
    {foto2},
    {foto3},
  ];
  
  const CarouselSlide = () => {
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
  
  export default CarouselSlide;
