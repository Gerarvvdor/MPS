import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import header from "./../images/header.avif"
import CarouselSlide from "../components/carousel";


const AboutUs = () => {
  return (
    <>
    <div class="container" >
      <div class="row">
      <h1 class="text-center">ACERCA DE NOSOTROS</h1>
        <div class="col-md">
          <CarouselSlide />
        </div>
        <div class="col-md">
          <div>
            <p class="text-justify">
              Somos una empresa dedicada al montaje de equipo electromecánico
              con especialidad en aire acondicionado, refrigeración y
              ventilación mecánica.
            </p>
            <p class="text-justify">
              Contamos con una línea especializada en automatización de
              edificios. Somos representantes de empresas internacionales muy
              importantes y distribuidores de las marcas más prestigiosas del
              mercado.
            </p>
            <p class="text-justify">
              Damos soporte técnico y servicio de mantenimiento a los equipos
              que instalamos, dando un excelente servicio gracias a nuestro
              personal altamente capacitado.
            </p>
          </div>
          <button
            type="button"
            class="btn"
            style={{backgroundColor: 'var(--primary-color)'}}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Leer más
          </button>
        </div>
      </div>

        <div
            class="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">

            <div class="modal-dialog">
                <div class="modal-content" style={{backgroundColor: 'var(--secondary-color)'}}>
                  <div class="modal-header">
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <img src={header} alt="ACERCA DE NOSOTROS" class="img-fluid" />
                        </div>
                        <div class="col-auto">
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div class="modal-body">
                      <p class="text-justify">
                      MP SERVICE surge principalmente como una empresa dedicada al
                      servicio de mantenimiento en edificios e industria,
                      específicamente en equipos de aire acondicionado; así como al
                      suministro e instalación de estos sistemas. En su evolución y
                      con una filosofía orientada a disminuir los gastos operativos
                      de las empresas a las que damos servicio, damos un salto
                      tecnológico importante al ofrecer a nuestros clientes sistemas
                      de automatización y control de los equipos de aire
                      acondicionado, iluminación, sistemas de bombeo, calderas etc.
                      con tecnología de última generación, con personal calificado y
                      entrenado en Estados Unidos y Canadá.
                      </p>
                      <p class="text-justify">
                      Esto nos permite ahora ofrecer no solo un servicio de
                      mantenimiento, sino una gama de productos y servicios,
                      orientados a satisfacer multitud de necesidades en las
                      empresas: Servicios de Mantenimiento, Automatización y Control,
                      Auditorias y Asesorías Energéticas, Auditorias y Asesorías
                      Operativas, CCTV, Control de Acceso, Alarmas Contra Incendios,
                      etc.
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button
                          type="button"
                          class="btn"
                          style={{backgroundColor: 'var(--primary-color)'}}
                          data-bs-dismiss="modal">
                      Cerrar
                      </button>
                      </div>
                </div>
            </div>
        </div>
        <div class="row" style={{margin: '1rem'}}>
            <div class="col-lg-4 col-md-6 mb-4">
                <div>
                    <div class="text-center">
                        <i class="bi bi-bullseye" style={{ fontSize: '4rem' }}></i>
                        <h4>Misión</h4>
                        <p>
                        Realizar suministros y montajes de equipos electromecánicos y
                        electrónicos, en especial equipos de aire acondicionado, sistemas de
                        control y automatización, circuito cerrado de televisión, control de
                        acceso, alarmas contra incendios y energías alternativas, para uso en
                        edificios públicos o privados.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
                <div>
                    <div class="text-center">
                        <i class="bi bi-eye" style={{ fontSize: '4rem' }}></i>
                         <h4 class="text-center">Visión</h4>
                        <p>
                        Ser una empresa de referencia, dando a nuestros clientes altos
                        estándares en instalaciones y servicios, buscando un bajo impacto
                        ambiental, a través de equipos y sistemas adecuados para cada
                        necesidad.
                        </p>
                        </div>
                        </div>
                    </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div>
                        <div class="card-body">
                            <div>
                                <i class="bi bi-gem" style={{ fontSize: '4rem' }}></i>
                                </div>
                                <h4 class="">Valores</h4>
                                <div class="container text-start" style={{}}>
                                  <li className="valores-li">Calidad</li>
                                  <li className="valores">Compromiso</li>
                                  <li className="valores">Seguridad</li>
                                  <li className="valores">Confianza</li>
                                  <li >Innovación</li>
                                </div>
                                  
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default AboutUs;