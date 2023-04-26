import React from "react";
import panels from "../images/paneles.png";

const paneles = () => {
    return(
        <>
        <div class="container text-center">
            <div>
                <h1>Paneles Fotovoltaicos</h1>
                <p>El uso de paneles solares para ahorrar energía ya no es solo una práctica empresarial. Cada vez más las organizaciones están incorporando estos equipos a sus edificios para reducir el costo de su tarifa eléctrica.</p>        
            </div>
            <img src={panels} alt="..." class="img-fluid"></img>
        </div>
        </>
    );
}
export default paneles;