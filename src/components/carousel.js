import React from "react";
import foto1 from './../images/banco2.avif';
import foto2 from './../images/smp1.avif';
import foto3 from './../images/todos.avif'
import "./../style/carousel.css"

const CarouselSlide = () => {
  return (
    <>
      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="carousel" data-interval="2000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={foto1} class="d-block w-100" alt="grua"/>
          </div>
          <div class="carousel-item">
            <img src={foto2} class="d-block w-100" alt="techo"/>
          </div>
          <div class="carousel-item">
            <img src={foto3} class="d-block w-100" alt="todos"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
  
export default CarouselSlide;
