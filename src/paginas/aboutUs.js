import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import header from "./../images/header.png"
import CarouselSlide from "../components/carousel";


const AboutUs = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md">
          <CarouselSlide />
        </div>
        <div className="col-md">
          <div>
            <h1 className="text-center">ACERCA DE NOSOTROS</h1>

            <p className="text-justify">
              Somos una empresa dedicada al montaje de equipo electromecánico
              con especialidad en aire acondicionado, refrigeración y
              ventilación mecánica.
            </p>
            <p className="text-justify">
              Contamos con una línea especializada en automatización de
              edificios. Somos representantes de empresas internacionales muy
              importantes y distribuidores de las marcas más prestigiosas del
              mercado.
            </p>
            <p className="text-justify">
              Damos soporte técnico y servicio de mantenimiento a los equipos
              que instalamos, dando un excelente servicio gracias a nuestro
              personal altamente capacitado.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Leer más
          </button>
        </div>
      </div>

        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <img src={header} alt="ACERCA DE NOSOTROS" className="img-fluid" />
                    </div>
                    <div className="modal-body">
                    <p className="text-justify">
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
                    <p className="text-justify">
                    Esto nos permite ahora ofrecer no solo un servicio de
                    mantenimiento, sino una gama de productos y servicios,
                    orientados a satisfacer multitud de necesidades en las
                    empresas: Servicios de Mantenimiento, Automatización y Control,
                    Auditorias y Asesorías Energéticas, Auditorias y Asesorías
                    Operativas, CCTV, Control de Acceso, Alarmas Contra Incendios,
                    etc.
                    </p>
                    </div>
                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary --bs-primary-rgb"
                        data-bs-dismiss="modal">
                    Cerrar
                    </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                    <div className="card-body text-center">
                        <i className="bi bi-bullseye" style={{ fontSize: '4rem' }}></i>
                        <h4 className="card-title">Misión</h4>
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
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                    <div className="card-body text-center">
                        <i className="bi bi-eye" style={{ fontSize: '4rem' }}></i>
                         <h4 className="card-title text-center">Visión</h4>
                        <p>
                        Ser una empresa de referencia, dando a nuestros clientes altos
                        estándares en instalaciones y servicios, buscando un bajo impacto
                        ambiental, a través de equipos y sistemas adecuados para cada
                        necesidad.
                        </p>
                        </div>
                        </div>
                    </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <i className="bi bi-gem" style={{ fontSize: '4rem' }}></i>
                                </div>
                                <h4 className="card-title text-center">Valores</h4>
                                <ul className="list-unstyled">
                                <li>Calidad</li>
                                <li>Compromiso</li>
                                <li>Seguridad</li>
                                <li>Confianza</li>
                                <li>Innovación</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default AboutUs;