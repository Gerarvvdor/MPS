import React from "react";
import omnisportIMG from "../images/omni.avif";

const omnisport = () => {
    return(
        <>
        <div class="align-items-center justify-content-center" style={{margin: '2rem'}}>
            <h2 class="text-center">OMNISPORT S.A de C.V.</h2>
            <div class="row align-items-center justify-content-center" style={{borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-lg-6 col-md-12">
                <p class="text-center">
                    Se instalan sistemas de aire acondicionado de expansión directa en zonas de producción 
                    de tabletas, polvos, líquidos y sueros, 100 Toneladas de Refrigeración, con sistemas 
                    separados de expansión directa, filtros HEPA y filtros finales en zonas limpias, control 
                    marca Reliable Controls.
                </p>
                </div>
                <div class="col-lg-6 col-md-12">
                <img src={omnisportIMG} alt="FISDL" class="img-fluid" style={{maxWidth: '100%'}} />
                </div>
            </div>
        </div>

        </>
    );
}
export default omnisport;