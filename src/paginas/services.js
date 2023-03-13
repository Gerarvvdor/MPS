import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Mantenimiento from "./../images/mantenimento.png";
import Reparaciones from "./../images/s7.png";
import Auditorias from "./../images/auditoria.png";

const Services = () => {
return (
    <>
    <Header/>
    <h1>SERVICIOS</h1>
    <div className="container">
        <ul>
            <li>
                <h3>MANTENIMIENTO DE EQUIPOS ELECTROMECÁNICOS</h3>
                <image src={Mantenimiento}></image>
                <p>Nuestra amplia experiencia en el mantenimiento de Sistemas Electromecánicos, y el reconocimiento a nuestra labor de nuestros clientes, nos permite darle un servicio profesional.</p>
            </li>
            <li>
                <h3>REPARACIONES</h3>
                <image src={Reparaciones}></image>
                <p>Tenemos una amplia experiencia en la reparación de equipos electromecánicos, entre los que figuran Chillers, Air Handlers, Bombas de agua, etc.</p>
            </li>
            <li>
                <h3>AUDITORIAS ENERGÉTICAS Y OPERATIVAS</h3>
                <image src={Auditorias}></image>
                <p>Consisten en conocer la cantidad y los puntos donde se consume la energía eléctrica, con el fin de poder identificar posibles puntos de ahorro o vulnerabilidades del sistema.</p>
            </li>
        </ul>

    </div>
    <Footer/>
    </>
);

}
export default Services;