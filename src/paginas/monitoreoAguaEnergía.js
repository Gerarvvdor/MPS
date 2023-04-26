import React from "react";
import monitor from "../images/monitoreo.png";
import waterLightBulb from "../images/agua.png";

const monitoreoAguaEnergía = () => {
    return (
        <>
            <div class="container text-center"> 
                <div>
                    <h1>Monitoreo de agua y energía</h1>
                    <p>El costo de el agua y energía eléctrica se ha convertido en el segundo egreso más representativo en las organizaciones después del recurso humano. Nuestros expertos de monitoreo y reportes de medición de agua,energía y sostenibilidad analizan los datos medidos disponibles para ayudar a visualizar áreas de oportunidad e implementar iniciativas de eficiencia energetica.</p>
                </div>
                <div class="row">
                    <div class="col">
                        <img src={monitor}></img>    
                    </div>
                    <div class="col">
                        <img src={waterLightBulb}></img>
                    </div>
                </div>
            </div>
        </>
    );
}
export default monitoreoAguaEnergía;