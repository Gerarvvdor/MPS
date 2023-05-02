import React from "react";
import panels from "../images/paneles.avif";

const Paneles = () => {
  return (
    <div className="container text-center">
      <div>
        <h1>Paneles Fotovoltaicos</h1>
        <p>
          El uso de paneles solares para ahorrar energía ya no es solo una práctica empresarial. Cada vez más, las organizaciones están incorporando estos equipos a sus edificios para reducir el costo de su tarifa eléctrica.
        </p>
      </div>
      <div className="row">
        <div className="col">
          <img src={panels} alt="Paneles" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Paneles;
