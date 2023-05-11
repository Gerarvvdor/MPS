import React from "react";
import monitoreo from "../images/monitoreo.avif"
import banco from "../images/banco.avif"
const bancoLocal = () => {
    return(
        <>
        <div class="container-fluid align-items-center justify-content-center" style={{margin: '2rem'}}>
            <h2 class="text-center" style={{ margin: '0.5rem' }}>BANCO LOCAL</h2>
            <div class="row align-items-center justify-content-center" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-md-4 mb-3 mb-md-0">
                    <p style={{ margin: '1rem' }}>
                        Se realizó la instalación de un sistema de control inteligente para el Ahorro de Energía en el Edificio 
                        Central, más 29 Sucursales al interior del país. El sistema controla los equipos de Aire Acondicionado, 
                        obteniendo datos de la temperatura del lugar, así como los KW demandados por cada equipo y los KWH totales 
                        consumidos mensualmente. Cada Sistema está conectado a la Intranet del Banco, por lo que es posible monitorear 
                        cada sucursal desde el Edificio Central en San Salvador.
                    </p>
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                    <img src={monitoreo} alt="monitoreo" class="img-fluid" style={{borderRadius: '0.6rem', height: '100%'}}></img>
                </div>
                <div class="col-md-4">
                    <img src={banco} alt="imagenBanco" class="img-fluid" style={{borderRadius: '0.6rem', height: '100%'}}></img>
                </div>
            </div>
        </div>
       
        </>
    );
}
export default bancoLocal;