import React from "react";
import {Link, Routes, Route} from "react-router-dom"
import { useHistory } from "react-router-dom";

//import pages//
import ChillerAgua from "./paginasProductos/chillerAgua";
import chillerAire from "./paginasProductos/chillerAire";
import aireResidencial from "./paginasProductos/aireaAcondicionado";
import aireVRF from "./paginasProductos/VRF";
import centralUnity from "./paginasProductos/unidadesCentrales";
import fainCoil from "./paginasProductos/fainCoil";
import automatic from "./paginasProductos/autoControl";
import waterAndEnergy from "./paginasProductos/monitoreo";
import tvClosedSystem from "./paginasProductos/circuitoCerrado";
import smokeControl from "./paginasProductos/smoke";
import asistControl from "./paginasProductos/controlDeAsistencia";
import solarPanel from "./paginasProductos/paneles";
import antiFireAlarm from "./paginasProductos/alarmas";
import lightInstalation from "./paginasProductos/iluminacion";
//import images//
import agua from "./../images/chiller_agua.png";
import aire from "./../images/chiller_aire.png";
import aireAcondicionado from "./../images/aire_comercial.png";
import vrf from "./../images/VRF.png";
import unidadesCentrales from "./../images/U_central.png";
import fan from "./../images/fan_coil.png";
import autoControl from "./../images/auto-control.png";
import monitoreo from "./../images/monitoreo.png";
import circuito from "./../images/circuito-cerrado.png";
import smoke from "./../images/smoke.png";
import controlAsistencia from "./../images/asist-control.png";
import paneles from "./../images/paneles.png";
import alarmas from "./../images/alarma.png";
import iluminacion from "./../images/iluminació.png";

const Products = () => {
    return (
        <>
            <h1>PRODUCTOS</h1>
        
            <Routes>
                <Route path="/products/*" element={<ChillerAgua/>}/>
            </Routes>
                <nav>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <img src={agua} alt=""></img>
                                <h3>CHILLER ENFIRADO POR AGUA</h3>   
                            </div>
                            <div class="col">
                                <img src={aire} alt=""></img>
                                <h3>CHILLER ENFIRADO POR AIRE</h3> 
                            </div>
                            <div class="col">
                                <img src={aireAcondicionado} alt=""></img>
                                <h3>AIRE ACONDICIONADO RESIDENCIAL Y COMERCIAL</h3>
                            </div>
                        </div>
                        <div class="row">   
                            <div class="col">
                                <img src={vrf} alt=""></img>
                                <h3>AIRE ACONDICIONADO SISTEMA DE REFRIGETANDE DE FLUJO VARIABLE (VRF)</h3>
                            </div>
                            <div class="col">
                                <img src={unidadesCentrales} alt=""></img>
                                <h3>UNIDADES CENTRALES</h3>
                            </div>
                            <div class="col">
                                <img src={fan} alt=""></img>
                                <h3>FAN COIL DE AGUA FRIA</h3>
                            </div>
                        </div>
                        <div class="row">    
                            <div class="col">
                                <img src={autoControl} alt=""></img>
                                <h3>CONTROL Y AUTOMATIZACIÓN</h3>
                            </div>
                            <div class="col">
                                <img src={monitoreo} alt=""></img>
                                <h3>MONITOREO DE AGUA Y ENERGIA </h3>
                            </div>
                            <div class="col">
                                <img src={circuito} alt=""></img>
                                <h3>CIRCUITO CERRADO DE TV</h3>
                            </div>
                        </div>
                        <div class="row">    
                            <div class="col">
                                <img src={smoke} alt=""></img>
                                <h3>SMOKE CONTROL</h3>
                            </div>
                            <div class="col">
                                <img src={controlAsistencia} alt=""></img>
                                <h3>CONTROL DE ASISTENCIA</h3>
                            </div>
                            <div class="col">
                                <img src={paneles} alt=""></img>
                                <h3>PANELES SOLARES</h3>
                            </div>
                        </div>
                        <div class="row">    
                            <div class="col">
                                <img src={alarmas} alt=""></img>
                                <h3>ALARMA CONTRA INCENDIOS</h3>
                            </div>
                            <div class="col">
                                <img src={iluminacion} alt=""></img>
                                <h3>INSTALACIÓN ILUMINACIÓN LED</h3>
                            </div>
                        </div>
                    </div>
                </nav>
        
        </>

    );
}
export default Products;