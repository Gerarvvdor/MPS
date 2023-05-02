import React from "react";
import monitor from "../images/monitoreo.avif";
import waterLightBulb from "../images/agua.avif";

const MonitoreoAguaEnergía = () => {
  return (
    <>
    <div class="container text-center">
      <div>
        <h1>Monitoreo de agua y energía</h1>
        <p>
          El costo del agua y la energía eléctrica se ha convertido en el segundo egreso más representativo en las organizaciones después del recurso humano. Nuestros expertos en monitoreo y reportes de medición de agua, energía y sostenibilidad analizan los datos medidos disponibles para ayudar a visualizar áreas de oportunidad e implementar iniciativas de eficiencia energética.
        </p>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <img class="img-fluid" src={monitor} alt="Monitor" />
        </div>
        <div class="col-sm-6">
          <img class="img-fluid" src={waterLightBulb} alt="Water Light Bulb" />
        </div>
      </div>
    </div>
    </>
  );
};

export default MonitoreoAguaEnergía;
