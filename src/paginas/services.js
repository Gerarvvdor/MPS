import React from "react";
import Mantenimiento from "./../images/mantenimento.avif";
import Reparaciones from "./../images/s7.avif";
import Auditorias from "./../images/auditoria.avif";
//style="width: 18rem;//
const Services = () => {
return (
    <>
        <div class="container">
            <h1 class="text-center">SERVICIOS</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card text-center mb-3">
                                <h3>Mantenimiento de equipos electromecánicos</h3>
                                <img src={Mantenimiento} class="card-img-top img-fluid" alt="mantenimiento"></img>
                                    <div class="card-body">
                                        <p class="card-text responsive-text">Nuestra amplia experiencia en el mantenimiento de Sistemas Electromecánicos, y el reconocimiento a nuestra labor de nuestros clientes, nos permite darle un servicio profesional.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">                            
                            <div class="card text-center mb-3">
                                <h3>Reparaciones</h3>
                                <img src={Reparaciones} class="card-img-top img-fluid" alt="reparaciones"></img>
                                    <div class="card-body">
                                        <p class="card-text responsive-text">Tenemos una amplia experiencia en la reparación de equipos electromecánicos, entre los que figuran Chillers, Air Handlers, Bombas de agua, etc.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card text-center mb-3 ">
                                <h3>Auditorias energéticas y operativas</h3>
                                <img src={Auditorias} class="card-img-top img-fluid" alt="reparaciones"></img>
                                    <div class="card-body">
                                        <p class="card-text responive-text">Consisten en conocer la cantidad y los puntos donde se consume la energía eléctrica, con el fin de poder identificar posibles puntos de ahorro o vulnerabilidades del sistema.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
);

}
export default Services;