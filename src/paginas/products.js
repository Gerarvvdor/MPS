import React from "react";

//import images//
import agua from "./../images/chiller_agua.png";
import aire from "./../images/chiller_aire.png";
import aireAcondicionado from "./../images/aire_comercial.png";
import vrf from "./../images/VRF.png";
import unidadesCentrales from "./../images/U_central.png";
import fan from "./../images/fan_coil.png";

const Products = () => {
    return (
        <>
            <h1>PRODUCTOS</h1>
            <div>
                <img src={agua} alt=""></img>
                <h3>CHILLER ENFIRADO POR AGUA</h3> 
            </div>
            <div>
                <img src={aire} alt=""></img>
                <h3>CHILLER ENFIRADO POR AIRE</h3> 
            </div>
            <div>
                <h3>AIRE ACONDICIONADO RESIDENCIAL Y COMERCIAL</h3>
            </div>
            <div>
                <h3>AIRE ACONDICIONADO SISTEMA DE REFRIGETANDE DE FLUJO VARIABLE (VRF)</h3>
            </div>
            <div>
                <h3>UNIDADES CENTRALES</h3>
            </div>
            <div>
                <h3>FAN COIL DE AGUA FRIA</h3>
            </div>
            <div>
                <h3>CONTROL Y AUTOMATIZACIÓN</h3>
            </div>
            <div>
                <h3>MONITOREO DE AGUA Y ENERGIA </h3>
            </div>
            <div>
                <h3>CIRCUITO CERRADO DE TV</h3>
            </div>
            <div>
                <h3>SMOKE CONTROL</h3>
            </div>
            <div>
                <h3>CONTROL DE ASISTENCIA</h3>
            </div>
            <div>
                <h3>PANELES SOLARES</h3>
            </div>
            <div>
                <h3>ALARMA CONTRA INCENDIOS</h3>
            </div>
            <div>
                <h3>INSTALACIÓN ILUMINACIÓN LED</h3>
            </div>
        </>

    );
}
export default Products;