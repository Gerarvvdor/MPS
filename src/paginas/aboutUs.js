import React from "react";
import { Carousel } from "react-bootstrap";
import LeerMasBoton from "../components/leerMasBoton";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./../images/banco2.jpg"
import img2 from "./../images/smp1.jpg";
import img3 from "./../images/todos.jpg"


const aboutUs = () => {
    return (
        <>
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={img1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

            <div>
                <p>ACERCA DE NOSOTROS</p>
            </div>

            <p>Somos una empresa dedicada al montaje de equipo electromecánico con especialidad en aire acondicionado, refrigeración y ventilación mecánica.</p>

            <p>Contamos con una línea especializada en automatización de edificios. Somos representantes de empresas internacionales muy importantes y distribuidores de las marcas más prestigiosas del mercado</p>

            <p>Damos soporte técnico y servicio de mantenimiento a los equipos que instalamos, dando un excelente servicio gracias a nuestro personal altamente capacitado.</p>
            <LeerMasBoton/>

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
        </>
    );

}
export default aboutUs;