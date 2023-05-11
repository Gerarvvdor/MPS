import React from "react";
import laCentroAmericanaIMG from "../images/data.avif"

const laCentroAmericana = () => {
    return(
        <>
        <div class="container-fluid">
            <div class="row justify-content-center align-items-center mb-4">
                <div class="col-sm-12 col-md-6" style={{ borderRadius: '2rem', padding: '1rem'}}>
                <h2>LA CENTRO AMERICANA S.A. (DATA CENTER)</h2>
                <p>
                    Se instalan dos sistemas de control inteligente, 
                    configurados stand-alone para controlar cinco equipos de 
                    aire acondicionado de expansión directa en DATA CENTER en 
                    San Salvador y Santa Ana, control marca Reliable Controls.
                </p>
                </div>
                <div class="col-sm-12 col-md-6" style={{ borderRadius: '2rem', overflow: 'hidden'}}>
                <img src={laCentroAmericanaIMG} alt="monitoreo" class="img-fluid" style={{borderRadius: '0.6rem', height: '100%', width: '100%'}}></img>
                </div>
            </div>
        </div>
     
        </>
    );
}
export default laCentroAmericana;