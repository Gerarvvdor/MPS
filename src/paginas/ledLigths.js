import React from "react";
import ledLights from "../images/iluminació.png";
import urban from "../images/urbano.png";

const LedLights = () => {
  return (
    <div className="container text-center">
      <div>
        <h1>Instalación de iluminación led</h1>
        <p>
          Diseñamos su instalación de iluminación o sustituimos la iluminación
          de su vivienda. La iluminación LED puede ahorrar hasta un 80% de su
          gasto en iluminación, mejorar la calidad de la iluminación, reducir
          las reposiciones de bombillas, etc.
        </p>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={urban} alt="Urban" />
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={ledLights} alt="LED Lights" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LedLights;
