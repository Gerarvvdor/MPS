import React from "react";
import pgrImage from "../images/pgr.avif"

const pgr = () => {
    return(
        <>
        <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
            <div class="col-md-6">
                <h2 style={{ margin: '0.5rem' }}>PROCURADURIA GENERAL DE LA REPUBLICA (PGR)</h2>
                <p style={{ margin: '1rem' }}>
                Se instala un sistema de Control Inteligente, operando de forma automática y monitoreando de manera 
                centralizada, dos chillers de tornillo enfriados por aire, 4 motobombas de recirculación de agua, 52 
                manejadoras de aire, y el sistema de rebombeo de agua corriente dentro del edificio, control marca 
                Reliable Controls.
                </p>
            </div>
            <div class="col-md-6">
                <img src={pgrImage} class="img-fluid" alt="PGR" style={{borderRadius: '0.6rem', height: '100%'}}></img>
            </div>
        </div>
        </>
    );
}
export default pgr;