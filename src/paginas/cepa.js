import React from "react";
import cepa1 from "../images/cepa1.avif";
import cepa2 from "../images/cepa2.avif";
import cepa3 from "../images/cepa3.avif";
import cepa5 from "../images/cepa5.avif";
import cepa6 from "../images/cepa6.avif";
import cepa7 from "../images/cepa7.avif";

const cepa = () => {
    return(
        <>
        <div class="container mt-5">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-6 mb-3 mb-md-0">
                    <h2 class="mb-3">COMISIÓN EJECUTIVA PORTUARIA AUTONOMA (CEPA)</h2>
                    <p>
                        Suministro e Instalación de 1,750 Toneladas de refrigeración distribuidas en 10 chillers tipo 
                        scroll marca YORK enfriados por aire con capacidad de 175 Toneladas de refrigeración cada uno, 
                        sistema de tubería de distribución y 24 bombas marca BELL & GOSSETT de recirculación de agua 
                        helada manejando un caudal total de 6600 GPM. Toda esta instalación es operada de manera automática 
                        por un sistema de control inteligente marca RELIABLE CONTROLS que administra las bombas estableciendo 
                        una como líder y la otra en standby encendiendo y apagando los equipos de manera automática, llevando 
                        registros de consumo, horas de operación, gráficos, etc. y obteniendo todos los parámetros que recoge 
                        la tarjeta principal del chiller como códigos de operación y falla, estado de válvulas, etc
                    </p>
                </div>
                <div class="col-md-6">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={cepa1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={cepa2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={cepa3} class="d-block w-100" alt="..." />
                        </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="row align-items-center justify-content-center mt-5">
                <div class="col-md-6 mb-3 mb-md-0">
                    <h2 class="mb-3">COMISIÓN EJECUTIVA PORTUARIA AUTONOMA (CEPA)</h2>
                    <p>
                    Se implementó automatización completa de equipos de aire acondicionado y sistema de iluminación en 
                    la Terminal de Pasajeros, 56 UMAS (Unidades Maneadoras de Aire), 12 chiller, 4 torres de enfriamiento, 
                    22 bombas de recirculación, 103 circuitos de iluminación, 6 sistemas de expansión directa, las cuales 
                    cuentan con horarios de encendido y apagado, sensores de temperatura en la entrada y salida del agua y 
                    aire, corrientes, estados de operación, sensor de filtro sucio, etc. Suministro e instalación de 6 chillers 
                    YORK, totalizando 1,050 Toneladas de Refrigeración, con su respectivo control e integración mediante protocolo 
                    BACnet y cambios en el sistema de control inteligente, como migración de paneles maestros y software de monitoreo. 
                    Este sistema cuenta con un MACH-ProWebCom, un potente controlador maestro 3 en 1: Controlador BACnet, Workstation 
                    BACnet y potente servidor web
                    </p>
                </div>
                <div class="col-md-6">
                    <div id="carouselExampleAutoplayingOne" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={cepa5} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={cepa6} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplayingOne" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplayingOne" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>  
            </div>
            <hr/>
            <div class="row align-items-center justify-content-center mt-5">
                <div class="col-md-6 mb-3 mb-md-0">
                    <h2 class="mb-3">COMISIÓN EJECUTIVA PORTUARIA AUTONOMA (CEPA)</h2>
                    <p>
                    Desmontaje suministro e instalación de tres puentes de abordaje para las posiciones de estacionamiento 4, 
                    7 y 11 de la rampa internacional del edificio de pasajeros del Aeropuerto Internacional El Salvador
                    </p>
                </div>
                <div class="col-md-6">
                    <img src={cepa7} class="img-fluid h-25" alt="cepa7" style={{borderRadius: '0.6rem'}} ></img>
                </div>  
            </div>
        </div>
        </>
    );
}
export default cepa;