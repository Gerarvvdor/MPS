import React from "react";
import ipsfa1 from "../images/ipsfa.avif";
import ipsfa2 from "../images/ipsfa2.avif"

const ipsfa = () => {
    return(
        <>
        <div class="d-flex flex-column align-items-center justify-content-center" style={{margin: '2rem'}}>
            <div class="row align-items-center justify-content-center" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-md-6">
                <h2 style={{ margin: '0.5rem' }}>INSTITUTO DE PREVISIÓN SOCIAL DE LA FUERZA ARMADA (IPSFA)</h2>
                <p style={{ margin: '1rem' }}>
                    Implementación de un controlador para la automatización de 2 equipos de aire 
                    acondicionado, monitoreo de temperatura y porcentaje de humedad relativa en 
                    el DATA CENTER.
                </p>
                </div>
                <div class="col-md-6">
                <div id="carouselExampleAutoplaying3" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={ipsfa1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={ipsfa2} class="d-block w-100" alt="..."/>
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
        </div>

        </>
    );
}
export default ipsfa;