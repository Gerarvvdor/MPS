import React from "react";

import chiller1 from "../images/chiller_agua.avif";
import chiller2 from "../images/c2.avif";
import chiller3 from "../images/c4.avif";
import chiller4 from "../images/c5.avif";
import chiller5 from "../images/c7.avif";
import chiller6 from "../images/c8.avif";

const chillersAgua = () => {
    return(
    <>
    <div class="container">
        <h1 class="text-center">Chiller Enfriado por agua</h1>
        <p class="text-center">Con estos productos podemos ayudarlo a alcanzar más eficiencia energética y operativa para su edificio. Ofrecemos la más amplia variedad de chillers industriales y comerciales del mercado enfriados por agua.</p>
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
        <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card" style={{width: '18rem'}}>
                    <img src={chiller4} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">YD ENFRIADOR CENTRÍFUGODUAL</h5>
                        <a href="https://www.johnsoncontrols.com/es_mx/-/media/jci/be/latin-america/brochures/yd--dual-centrifugal-compressor-chillers.pdf" target="_blank" class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card" style={{width: '18rem'}}>
                    <img src={chiller5} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">YIA ENFRIADOR EFICIENTE DE UNA ETAPA DE ABSORCIÓN ENFRIADO POR AGUA</h5>
                        <a href="https://www.johnsoncontrols.com/-/media/jci/be/united-states/hvac-equipment/chillers/be_engguide_yia_singleeffect-absorption-chillers-steam-and-hot-water-chillers.pdf" target="_blank" class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card" style={{width: '18rem'}}>
                    <img src={chiller6} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">YK-EP ENFRIADOR CENTRÍFUGO CON ECONOMIZADOR</h5>
                        <a href="https://www.johnsoncontrols.com/-/media/jci/be/united-states/hvac-equipment/chillers/files/be_eng_160-87eg1_model-yk-ep-916.pdf" target="_blank" class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default chillersAgua;