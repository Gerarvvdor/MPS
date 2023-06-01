import React from "react";

//stylesheet//
import "./../style/carousel.css"

import eolic from "./../images/er5.avif";
import fan from "./../images/eo3.avif";
import eolicTwo from "./../images/er3.avif";


const SecondCarouselSlide = () => {
    return (
      <div class="container">
      <div id="carouselExampleRide2" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={eolic} class="d-block w-100 img-fluid" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={fan} class="d-block w-100 img-fluid" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={eolicTwo} class="d-block w-100 img-fluid" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide2" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    );
  };
    
  export default SecondCarouselSlide;