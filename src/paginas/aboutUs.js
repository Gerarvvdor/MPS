import React from "react";
import { Carousel } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./../images/banco2.jpg"
import img2 from "./../images/smp1.jpg";
import img3 from "./../images/todos.jpg"
import header from "./../images/header.png"
import CarouselSlide from "../components/carousel";


const aboutUs = () => {
    return (
        <>
        <div class="container">
                <CarouselSlide/>
                <div>
                    <p>ACERCA DE NOSOTROS</p>
                </div>

                <p>Somos una empresa dedicada al montaje de equipo electromecánico con especialidad en aire acondicionado, refrigeración y ventilación mecánica.</p>

                <p>Contamos con una línea especializada en automatización de edificios. Somos representantes de empresas internacionales muy importantes y distribuidores de las marcas más prestigiosas del mercado</p>

                <p>Damos soporte técnico y servicio de mantenimiento a los equipos que instalamos, dando un excelente servicio gracias a nuestro personal altamente capacitado.</p>
            

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Leer mas</button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <img src={header} alt="modalHeaderImage" ></img>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>MP SERVICE surge principalmente como una empresa dedicada al servicio de mantenimiento en edificios e industria, específicamente en equipos de aire acondicionado; así como al suministro e instalación de estos sistemas. En su evolución y con una filosofía orientada a disminuir los gastos operativos de las empresas a las que damos servicio, damos un salto tecnológico importante al ofrecer a nuestros clientes sistemas de automatización y control de los equipos de aire acondicionado, iluminación, sistemas de bombeo, calderas etc. con tecnología de última generación, con personal calificado y entrenado en Estados Unidos y Canadá.</p>
                                <p>Esto nos permite ahora ofrecer no solo un servicio de mantenimiento, sino una gama de productos y servicios, orientados a satisfacer multitud de necesidades en las empresas: Servicios de Mantenimiento, Automatización y Control, Auditorias y Asesorías Energéticas, Auditorias y Asesorías Operativas, CCTV, Control de Acceso, Alarmas Contra Incendios, etc.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary --bs-primary-rgb" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1>Misión</h1>
                        <p>Realizar suministros y montajes de equipos electromecánicos y electrónicos, en especial equipos de aire acondicionado, sistemas de control y automatización, circuito cerrado de televisión, control de acceso, alarmas contra incendios y energías alternativas, para uso en edificios públicos o privados.</p>
                    </div>
                    <div>
                        <h1>Visión</h1>
                        <p>Ser una empresa de referencia, dando a nuestros clientes altos estándares en instalaciones y servicios, buscando un bajo impacto ambiental, a través de equipos y 2 sistemas adecuados para cada necesidad.</p>
                    </div>
                    <div>
                        <h1>Valores</h1>
                        <li>Calidad</li>
                        <li>Compromiso</li>
                        <li>Seguridad</li>
                        <li>Confianza</li>
                        <li>Innovación</li>
                    </div>

                </div>
            </div>
        </>
    );

}
export default aboutUs;