import React from "react";
import asistControlDevice from "../images/asist-control.avif";

const AsistControl = () => {
  return (
    <>
      <div class="container text-center">
        <div>
          <h1>Control de asistencia</h1>
          <p>
            Tenemos diferentes soluciones que integran los mejores lectores de
            huella para el control profesional e integral de la asistencia de
            sus empleados y generación automática de la nómina.
          </p>
        </div>
        <img
          src={asistControlDevice}
          alt="..."
          class="img-fluid"
          style={{ maxWidth: "100%" }}
        ></img>
      </div>
    </>
  );
};

export default AsistControl;
