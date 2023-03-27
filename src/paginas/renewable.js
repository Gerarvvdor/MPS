import React from "react";

import solar1 from "./../images/solar1.jpg"
import eolicPanel from "./../images/er5.jpg"
import fan from "./../images/eo3.jpg"
import eolicNoPanel from "./../images/er3.jpg"
import SecondCarouselSlide from "../components/caruselTwo";



const RenewableEnergies = () => {
    return (
        <>
            <h1 class="text-center mb-3">Energías renovables</h1>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h3>ENERGÍA FOTOVOLTAICA</h3>
                        <p>Los paneles fotovoltaicos: están formados por numerosas celdas que convierten la luz en electricidad. Las celdas a veces son llamadas células fotovoltaicas. Estas celdas dependen del efecto fotovoltaico por el que la energía luminosa produce cargas positiva y negativa en dos semiconductores próximos de diferente tipo, produciendo así un campo eléctrico capaz de generar una corriente.</p>                </div>
                    </div>
                    <div class="col-md-auto">
                        <img src={solar1} alt="" class="img-fluid"></img>
                    </div>
                </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h3>ENERGÍA EÓLICA</h3>
                        <p>Resultado de la conversión de la energía cinética, del viento en otras formas de energía, o eléctrico o mecánico. Hoy en día, es en su mayoría convertidos en energía eléctrica mediante turbinas eólicas.</p>
                    </div>
                    <div class="col">
                        <SecondCarouselSlide/>
                    </div>
                </div>
            </div>
            
        </>

    );
}
export default RenewableEnergies;