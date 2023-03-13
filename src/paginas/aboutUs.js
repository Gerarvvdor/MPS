import React from "react";
import { Carousel } from "react-bootstrap";

const aboutUs = () => {
    return (
        <>
                <Carousel/>
                <div>
                    <p>ACERCA DE NOSOTROS</p>
                </div>

                <p>Somos una empresa dedicada al montaje de equipo electromecánico con especialidad en aire acondicionado, refrigeración y ventilación mecánica.</p>

                <p>Contamos con una línea especializada en automatización de edificios. Somos representantes de empresas internacionales muy importantes y distribuidores de las marcas más prestigiosas del mercado</p>

                <p>Damos soporte técnico y servicio de mantenimiento a los equipos que instalamos, dando un excelente servicio gracias a nuestro personal altamente capacitado.</p>
                
                <button>Leer mas</button>

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