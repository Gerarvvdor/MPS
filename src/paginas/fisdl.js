import React from "react";
import fisdlImg from "../images/fisdl.avif"

const fisdl = () => {
    return(
        <>
        <div class="container" style={{margin: '2rem'}}>
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-12">
                <h2 style={{ margin: '0.5rem' }}>FONDO DE INVERCIÓN SOCIAL PARA EL DESARROLLO LOCAL (FISDL)</h2>
                </div>
                <div class="col-lg-6">
                <p>Se han instalado 2 controladores en modo STAND-ALONE, para la manipulación de 4 equipos en 2 áreas diferentes. El primero controla 2 equipos de 2 etapas expansión directa que sirven un área de cubículos. El segundo controla los 2 equipos del DATA CENTER, que es un área 24/7, donde siempre debe de haber aire acondicionado disponible. El sistema se encarga de la alternación diaria de los equipos de aire, haciendo que uno sea el equipo líder (opera todo el día) y otro sea el secundario (opera como equipo de respaldo). También se tienen control sobre la humedad relativa del lugar. Posteriormente se adicionaron 2 controladores que automatizan 4 equipos de aire acondicionado brindando más eficiencia y ahorro de energía.</p>
                </div>
                <div class="col-lg-6">
                <img src={fisdlImg} alt="FISDL" class="img-fluid" style={{borderRadius: '0.6rem', height: '100%', width: '100%'}}></img>
                </div>
            </div>
        </div>
  
        </>
    );
}
export default fisdl;