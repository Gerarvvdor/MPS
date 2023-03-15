import React from "react";

import solar1 from "./../images/solar1.jpg"
import eolicPanel from "./../images/er5.jpg"
import fan from "./../images/eo3.jpg"
import eolicNoPanel from "./../images/er3.jpg"
import SecondCarouselSlide from "../components/caruselTwo";



const RenewableEnergies = () => {
    return (
        <>
            <h1>Energías renovables</h1>
            <div>
                <h3>ENERGÍA FOTOVOLTAICA</h3>
                <p>Los paneles fotovoltaicos: están formados por numerosas celdas que convierten la luz en electricidad. Las celdas a veces son llamadas células fotovoltaicas. Estas celdas dependen del efecto fotovoltaico por el que la energía luminosa produce cargas positiva y negativa en dos semiconductores próximos de diferente tipo, produciendo así un campo eléctrico capaz de generar una corriente.</p>
                <img src={solar1} alt=""></img>
            </div>
            <div>
                <h3>ENERGÍA EÓLICA</h3>
                <p>Resultado de la conversión de la energía cinética, del viento en otras formas de energía, o eléctrico o mecánico. Hoy en día, es en su mayoría convertidos en energía eléctrica mediante turbinas eólicas.</p>
                <img src={eolicPanel} alt=""></img>            
                <img src={fan} alt=""></img>            
                <img src={eolicNoPanel} alt=""></img>
            </div>
            <SecondCarouselSlide/>
        </>

    );
}
export default RenewableEnergies;