import React from "react";

import chiller1 from "../images/yvva.avif";
import chiller2 from "../images/ycal.avif";
import chiller3 from "../images/caire.avif";

const chillersAire = () => {
return(
    <>
    <div class="container">
    <h1 class="text-center">Chiller Enfriado por aire</h1>
        <p class="text-center">Con estos productos podemos ayudarlo a alcanzar más eficiencia energética y operativa para su edificio. Ofrecemos la más amplia variedad de chillers industriales y comerciales del mercado, enfriados por aire.</p>
        <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card" style={{width: '18rem'}}>
                    <img src={chiller1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">CHILLER CENTRÍ FUGO YZ DE RODAMIENTOS MAGNÉTICOS</h5>
                        <a href="https://www.johnsoncontrols.com/es_latinamerica/-/media/jci/be/united-states/hvac-equipment/chillers/files/beyz-centrifugal-chillerengengineering-guide.pdf?la=es" target="_blank"class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card" style={{width: '18rem'}}>
                    <img src={chiller2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">CYK ENFRIADOR CENTRÍFUGO COMPUESTO</h5>
                        <a href="https://www.johnsoncontrols.com/-/media/jci/be/united-states/hvac-equipment/chillers/be_engguide_cyk_compound-centrifugal-liquid-units-style-g.pdf" target="_blank" class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card" style={{width: '18rem'}}>
                    <img src={chiller3} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">YCWL CHILLER SCROLL ENFRIADO POR AGUA</h5>
                        <a href="https://www.johnsoncontrols.com/es_mx/-/media/jci/be/united-states/hvac-equipment/chillers/files/be_engguide_ycwlwaterscrollchiller.pdf" target="_blank" class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
);
}
export default chillersAire;