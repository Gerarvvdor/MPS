import React from "react";
import CCM21 from "../images/CCM2-1.avif";
import CCM22 from "../images/CCM2-2.avif";
import micas1 from "../images/cuarto de micas1.avif";
import micas2 from "../images/cuarto de micas2.avif";
import helga4 from "../images/helga4.avif";
import peroxidos1 from "../images/peroxidos1.avif";
import peroxidos2 from "../images/peroxidos2.avif";
import SHW1 from "../images/SHW1.avif";
import SHW2 from "../images/SHW2.avif";

const sherwin = () => {
    return(
        <>
        <div class="text-justify" style={{margin: '2rem'}}>
            <h2 class="text-center">SHERWIN WILLIAMS-CCM-2</h2>
            <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
                    <div class="col-md-6">
                        <p style={{ margin: '1rem' }}>
                        Se reconstruye y amplía la Tienda FREUND San Miguel Centro, 
                        instalando 120 Toneladas de Refrigeración, con sistemas 
                        separados de expansión directa, y un sistema de 
                        automatización y control marca Reliable Controls.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div id="carouselExampleAutoplayingOne" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src={CCM21} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={CCM22} class="d-block w-100" alt="..."/>
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
            <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-md-6">
                    <h2 style={{ margin: '0.5rem' }}>SHERWIN WILLIAMS CUARTO DE MICAS</h2>
                    <p style={{ margin: '1rem' }}>
                    Suministro e instalación de 1 equipo tipo paquete de 30,000 BTUH marca YORK, 
                    compresores tipo Scroll de doble etapa eficiencia SEER 15, refrigerante R-410, 
                    diseño, elaboración y montaje de ductería para el edificio de cuarto de MICAS 
                    en la planta de SHERWIN WILLIAMS en Ilopango. Este sistema de aire acondicionado 
                    se completo con la readecuación de un equipo tipo paquete marca TRANE ya existente 
                    que prestaba servicio en otra zona. Esta instalación cuenta con un sistema de control 
                    inteligente marca RELIABLE CONTROLS el cual puede operar en modo stand-alone, 
                    administrando el equipo. Esta sección del control se integra a la red ya instalada 
                    en la planta para que el usuario interactúe con ella desde la Workstation.
                    </p>
                </div>
                <div class="col-md-6">
                    <div id="carouselExampleAutoplaying2" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={micas1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={micas2} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <hr/>       
            <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
                    <div class="col-md-6">
                        <h2 style={{ margin: '0.5rem' }}>SHERWIN WILLIAMS - HELGA 4</h2>
                        <p style={{ margin: '1rem' }}>
                        Suministro e instalación de 1 equipo tipo paquete de 30,000 BTUH marca YORK, 
                        refrigerante R-410, diseño, elaboración y montaje de ductería para el edificio 
                        de cuarto de HELGA-4 en la planta de SHERWIN WILLIAMS en Ilopango. Esta instalación 
                        cuenta con un sistema de control inteligente marca RELIABLE CONTROLS el cual puede 
                        operar en modo stand-alone, administrando el equipo. Esta sección del control se integra 
                        a la red ya instalada en la planta para que el usuario interactúe con ella desde la Workstation.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <img src={helga4} class="img-fluid" alt="Freund San Miguel"  style={{borderRadius: '0.6rem'}}/>
                    </div>
            </div>
            <hr/>
            <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-md-6">
                    <h2 style={{ margin: '0.5rem' }}>SHERWIN WILLIAMS - BODEGA DE PEROXIDOS</h2>
                    <p style={{ margin: '1rem' }}>
                    Suministro e instalación de 2 equipos tipo paquete de 30,000 BTUH marca YORK, 
                    refrigerante R-410, con conexión a 220/1/60, diseño, elaboración y montaje de 
                    ductería para salas de reunión FASTOP y ULTRA en el edificio de operaciones en 
                    la planta de SHERWIN WILLIAMS en Ilopango. Esta instalación cuenta con un sistema 
                    de control inteligente marca RELIABLE CONTROLS el cual puede operar en modo stand-alone.<br/><br/>
                    Esta sección del control se integra a la red ya instalada en la planta para que el usuario 
                    interactúe con ella desde la Workstation. Inicio Septiembre 23 de 2013. Finalización Agosto 
                    20 de 2014.
                    </p>
                </div>
                <div class="col-md-6">
                    <div id="carouselExampleAutoplaying3" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={peroxidos1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={peroxidos2} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-md-6">
                    <h2 style={{ margin: '0.5rem' }}>SHERWIN WILLIAMS</h2>
                    <p style={{ margin: '1rem' }}>
                    Es una instalación completamente nueva, equipamiento de equipos de aire acondicionado y 
                    ventilación mecánica, sistema de control y automatización, un chiller scroll de alta eficiencia, 
                    125 Toneladas de Refriegeración, sistema de control inteligente Reliable Controls.
                    </p>
                </div>
                <div class="col-md-6">
                    <div id="carouselExampleAutoplaying4" class="carousel slide w-50" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={SHW1} class="d-block w-100 img-fluid" alt="..." style={{height: '50%'}}/>
                            </div>
                            <div class="carousel-item">
                            <img src={SHW2} class="d-block w-100" alt="..." style={{height: '50%'}}/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying4" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying4" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default sherwin;