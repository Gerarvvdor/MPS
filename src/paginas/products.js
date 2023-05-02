import React from "react";
import {Link} from "react-router-dom"

//stylesheet//
import "./../style/cards.css"

//import pages//

//import images//
import agua from "./../images/chiller_agua.avif";
import aire from "./../images/chiller_aire.avif";
import aireAcondicionado from "./../images/aire-comercial.avif";
import vrf from "./../images/VRF.avif";
import unidadesCentrales from "./../images/U_central.avif";
import fan from "./../images/fan_coil.avif";
import autoControl from "./../images/auto-control.avif";
import monitoreo from "./../images/monitoreo.avif";
import circuito from "./../images/circuito-cerrado.avif";
import smoke from "./../images/smoke.avif";
import controlAsistencia from "./../images/asist-control.avif";
import paneles from "./../images/paneles.avif";
import alarmas from "./../images/alarma.avif";
import iluminacion from "./../images/iluminació.avif";

const Products = () => {
    return (
        <>
            <h1 class="text-center">PRODUCTOS</h1>
    
                <nav>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="chillersAgua" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <div class="card-body">
                                            <img class="img-fluid" src={agua} alt=""></img>
                                            <h6 class="text-center">CHILLER ENFRIADO POR AGUA</h6>   
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="chillersAire" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <div class="card-body">
                                            <img class="img-fluid" src={aire} alt=""></img>
                                            <h6 class="text-center">CHILLER ENFRIADO POR AIRE</h6>
                                        </div>                                
                                    </div>
                                </Link>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="aireComercial" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <img class="img-fluid" src={aireAcondicionado} alt=""></img>
                                        <h6 class="text-center">AIRE ACONDICIONADO RESIDENCIAL Y COMERCIAL</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="row">   
                            <div class="col-lg-4 col-md-6 mb-4">
                               <Link to="vrf" style={{textDecoration: 'none', color: 'black'}}>                          
                                    <div class="card">
                                        <img class="img-fluid" src={vrf} alt=""></img>
                                        <h6 class="text-center">AIRE ACONDICIONADO SISTEMA DE REFRIGERANTE DE FLUJO VARIABLE (VRF)</h6>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="unidadesCentrales" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <img class="img-fluid" src={unidadesCentrales} alt=""></img>
                                        <h6 class="text-center">UNIDADES CENTRALES</h6>
                                    </div>
                                </Link>
                            </div>                           
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="fanCoil" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <img class="img-fluid" src={fan} alt=""></img>
                                        <h6 class="text-center">FAN COIL DE AGUA FRIA</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="row">    
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="ctrlAutomatización" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <img class="img-fluid" src={autoControl} alt=""></img>
                                        <h6 class="text-center">CONTROL Y AUTOMATIZACIÓN</h6>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="monitoreo" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <img class="img-fluid" src={monitoreo} alt=""></img>
                                        <h6 class="text-center">MONITOREO DE AGUA Y ENERGIA </h6>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="circuitoTV" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <img class="img-fluid" src={circuito} alt=""></img>
                                        <h6 class="text-center">CIRCUITO CERRADO DE TV</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="row">    
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="smokeControl" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <img class="img-fluid" src={smoke} alt=""></img>
                                        <h6 class="text-center">SMOKE CONTROL</h6>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="asistControl" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <img class="img-fluid" src={controlAsistencia} alt=""></img>
                                        <h6 class="text-center">CONTROL DE ASISTENCIA</h6>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="paneles" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <img class="img-fluid" src={paneles} alt=""></img>
                                        <h6 class="text-center">PANELES SOLARES</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="row">    
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="fireAlarm" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <img class="img-fluid" src={alarmas} alt=""></img>
                                        <h6 class="text-center">ALARMA CONTRA INCENDIOS</h6>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <Link to="ledLigths" style={{textDecoration: 'none', color: 'black'}}>
                                    <div class="card">
                                        <img class="img-fluid" src={iluminacion} alt=""></img>
                                        <h6 class="text-center">INSTALACIÓN ILUMINACIÓN LED</h6>
                                    </div>
                                </Link>    
                            </div>
                        </div>
                    </div>
                </nav>
        
        </>

    );
}
export default Products;