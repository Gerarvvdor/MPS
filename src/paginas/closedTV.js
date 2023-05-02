import React from "react";
import CCTV from "../images/circuito-cerrado.avif";

const ClosedTV = () => {
  return (
    <>
      <div class="container">
        <div class="text-center">
          <h1>Circuito Cerrado (CCTV)</h1>
          <p>
            Ofrecemos los más amplios y modernos equipos de circuito cerrado de
            televisión (CCTV). Esta es una tecnología de vídeo vigilancia visual
            diseñada para supervisar una diversidad de ambientes y actividades.
          </p>
          <img src={CCTV} alt="..." class="img-fluid" style={{ maxWidth: '100%' }} />
        </div>
      </div>
    </>
  );
};

export default ClosedTV;
