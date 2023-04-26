import React from "react";
import {Link, Routes, Route} from "react-router-dom"
import { useHistory } from "react-router-dom";

//stylesheet//
import "./../style/cards.css"

//import pages//


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
            <h1 class="text-center">PRODUCTOS</h1>
        
            <Routes>
                <Route path="/products/*" element=""/>
            </Routes>
                <nav>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <img class="img-fluid" src={agua} alt=""></img>
                                        <h6 class="text-center">CHILLER ENFRIADO POR AGUA</h6>   
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <img class="img-fluid" src={aire} alt=""></img>
                                        <h6 class="text-center">CHILLER ENFRIADO POR AIRE</h6>
                                    </div>                                
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <img class="img-fluid" src={aireAcondicionado} alt=""></img>
                                    <h6 class="text-center">AIRE ACONDICIONADO RESIDENCIAL Y COMERCIAL</h6>
                                </div>
                            </div>
                        </div>
                        <div class="row">   
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <img class="img-fluid" src={vrf} alt=""></img>
                                    <h6 class="text-center">AIRE ACONDICIONADO SISTEMA DE REFRIGERANTE DE FLUJO VARIABLE (VRF)</h6>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <img class="img-fluid" src={unidadesCentrales} alt=""></img>
                                    <h6 class="text-center">UNIDADES CENTRALES</h6>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <img class="img-fluid" src={fan} alt=""></img>
                                    <h6 class="text-center">FAN COIL DE AGUA FRIA</h6>
                                </div>
                            </div>
                        </div>
                        <div class="row">    
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <img class="img-fluid" src={autoControl} alt=""></img>
                                    <h6 class="text-center">CONTROL Y AUTOMATIZACIÓN</h6>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <img class="img-fluid" src={monitoreo} alt=""></img>
                                    <h6 class="text-center">MONITOREO DE AGUA Y ENERGIA </h6>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <img class="img-fluid" src={circuito} alt=""></img>
                                    <h6 class="text-center">CIRCUITO CERRADO DE TV</h6>
                                </div>
                            </div>
                        </div>
                        <div class="row">    
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <img class="img-fluid" src={smoke} alt=""></img>
                                    <h6 class="text-center">SMOKE CONTROL</h6>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <img class="img-fluid" src={controlAsistencia} alt=""></img>
                                    <h6 class="text-center">CONTROL DE ASISTENCIA</h6>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <img class="img-fluid" src={paneles} alt=""></img>
                                    <h6 class="text-center">PANELES SOLARES</h6>
                                </div>
                            </div>
                        </div>
                        <div class="row">    
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <img class="img-fluid" src={alarmas} alt=""></img>
                                    <h6 class="text-center">ALARMA CONTRA INCENDIOS</h6>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <img class="img-fluid" src={iluminacion} alt=""></img>
                                    <h6 class="text-center">INSTALACIÓN ILUMINACIÓN LED</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
        
        </>

    );
}
export default Products;