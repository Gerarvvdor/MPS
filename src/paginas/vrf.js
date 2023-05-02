import React from "react";
import vrf from "../images/VRF.avif"

const vrfsystem = () => {
    return(
    <>
    <div class="containe text-center">
        <h1>Sistema de refrigerante de flujo variable (VRF)</h1>
        <p>
        La tecnología de los Sistemas de Refrigerante de Flujo 
        Variable (VRF, por sus siglas en inglés) ofrece a propietario
        de edificios, arquitectos, ingenieros, consultores y contratistas; 
        una solución novedosa para abordar el reto en común de reducir costos de 
        operación, proporcionando confort en todas las zonas del edificio considerando 
        sus variaciones de carga y ocupación.
        </p>
        <img src={vrf} alt="..." class="img-fluid"></img>
    </div>
    </>
    );
}
export default vrfsystem;