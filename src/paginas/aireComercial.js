import React from "react";
import aire1 from "../images/aire1.avif";
import aire2 from "../images/aire2.avif";
import aire3 from "../images/aire3.avif";
import aire4 from "../images/aire4.avif";
import aire5 from "../images/aire5.avif";
import aire6 from "../images/aire6.avif";
import aire7 from "../images/aire7.avif";

const aireComercial = () => {
    return(
        <>
        <di class="container">
            <h1 class="text-center">Aire acondicionado residencial y comercial</h1>
            <p class="text-center">Nuestra línea de aire acondicionado residencial y comercial son diseñados y fabricados en Norteamérica por Johnson Controls, una compañía líder de clase mundial – con YORK® usted podrá asegurarse de obtener lo máximo en ahorro de energía, comodidad y fiabilidad.</p>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={aire1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">HIGHT WALL INVERTER – R410A 60HZ</h5>
                            <a href="https://www.johnsoncontrols.com/es_mx/-/media/jci/be/mexico/brochures/high-wall-r410a-60hz_inverter_publ8491esla-(1116).pdf" target="_blank" class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={aire2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">HIGHT WALL FIJO - R410A 60HZ</h5>
                            <a href="https://www.johnsoncontrols.com/es_mx/-/media/jci/be/mexico/brochures/high-wall-r410a-60hz_fixed_publ8490esla-(1116).pdf" target="_blank" class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={aire3} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">PISO TECHO, CASSETTE Y DUCTO/FAN COIL FIJO – R410A 60HZ</h5>
                            <a href="https://www.johnsoncontrols.com/es_mx/-/media/jci/be/mexico/brochures/pac-r410a-60hz_fixed_publ8492esla-(1116).pdf" target="_blank" class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={aire4} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">PISO TECHO, CASSETTE Y DUCTO /FAN COIL INVERTER – R410A 60HZ</h5>
                            <a href="https://www.johnsoncontrols.com/es_mx/-/media/jci/be/mexico/brochures/pac-r410a-60hz_inverter_publ8493esla-(1116).pdf" target="_blank"class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={aire5} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">PAQUETES COMERCIALES - R410A 60HZ</h5>
                            <a href="https://www.johnsoncontrols.com/es_mx/-/media/jci/be/latin-america/brochures/paquetes/2paquetes-y-divididos-comerciales_publ-8520esla-(0117).pdf" target="_blank" class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={aire6} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">EQUIPOS CENTRALES</h5>
                            <a href="https://www.johnsoncontrols.com/es_mx/-/media/jci/be/latin-america/brochures/paquetes/1paquetes-y-divididos-hasta-5trpubl8521esla-0117.pdf" target="_blank" class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={aire7} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">PAQUETES RESIDENCIALES HASTA 5 TR DE CAPACIDAD - R410A 60HZ</h5>
                            <a href="https://www.johnsoncontrols.com/es_mx/-/media/jci/be/latin-america/brochures/paquetes/3paquetes-y-divididos-residenciales-hasta-5trpubl8519esla-0217.pdf" target="_blank"class="btn btn-primary" rel="noreferrer">Ver espeficicaciones</a>
                        </div>
                    </div>
                </div>
            </div>
        </di>
        </>
    );
}
export default aireComercial;