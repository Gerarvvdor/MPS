import React from "react";
import ledLights from "../images/iluminació.avif";
import urban from "../images/urbano.avif";

const LedLights = () => {
  return (
    <>
    <div class="container text-center">
      <div>
        <h1>Instalación de iluminación led</h1>
        <p>
          Diseñamos su instalación de iluminación o sustituimos la iluminación
          de su vivienda. La iluminación LED puede ahorrar hasta un 80% de su
          gasto en iluminación, mejorar la calidad de la iluminación, reducir
          las reposiciones de bombillas, etc.
        </p>
        <div class="row">
          <div class="col-md-6">
            <img class="img-fluid" src={urban} alt="Urban" />
          </div>
          <div class="col-md-6">
            <img class="img-fluid" src={ledLights} alt="LED Lights" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default LedLights;
