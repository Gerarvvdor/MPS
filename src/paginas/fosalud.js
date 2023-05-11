import React from "react";
import fsZacamil from "../images/fosaludZacamil.avif";
import fsSBartolo from "../images/fosaludSanBartolo.avif";

const fosalud = () => {
    return(
        <>
        <div class="text-justify" style={{margin: '2rem'}}>
            <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-md-6">
                    <h2 style={{ margin: '0.5rem' }}>FOSALUD HOSPITAL ZACAMIL</h2>
                    <p style={{ margin: '1rem' }}>
                    Suministro, instalación y puesta e marcha de 1 chiller tipo Scroll de 40 TR marca YORK, 
                    refrigerante R-410, conexión 230/3/60, 2 bombas de recirculación de agua helada, sistema 
                    de tuberías con sensores de caudal y presión para alimentar 4 UMAS que prestan servicio 
                    en el área de quirófanos. Toda esta instalación es operada de manera automática por un sistema 
                    de control inteligente marca RELIABLE CONTROLS que administra las bombas estableciendo una como 
                    líder y la otra en standby encendiendo y apagando los equipos de manera automática, llevando 
                    registros de consumo, horas de operación, gráficos, etc. y obteniendo todos los parámetros 
                    que recoge la tarjeta principal del chiller como códigos de operación y falla, estado de válvulas, 
                    etc. Desplegando la información a través de un servidor web alojado en el controlador maestro.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src={fsZacamil} class="img-fluid" alt="Freund San Miguel"  style={{borderRadius: '0.6rem'}}/>
                </div>
            </div>
            <hr/>
            <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-md-6">
                    <h2 style={{ margin: '0.5rem' }}>FOSALUD HOSPITAL SAN BARTOLO</h2>
                    <p style={{ margin: '1rem' }}>
                    Suministro, instalación y puesta e marcha de 2 equipos de expansión directa, uno de 20 TR y 
                    otro de 30 TR con doble condensador ambos marca YORK, refrigerante R-410, que prestan servicio 
                    en área de quirófanos, salas de maternidad y arsenal. El evaporador cuenta con una toma de aire 
                    exterior para hacer el aire 100% renovado, pasando el aire por 3 tipos de filtro: alta eficiencia, 
                    UV y HEPA. También cuenta con resistencia eléctrica para el control de la humedad relativa. Toda 
                    esta instalación es operada de manera automática por un sistema de control inteligente marca RELIABLE 
                    CONTROLS que administra los equipos de acuerdo a las áreas a las cuales les prestan servicio. Desplegando 
                    la información a través de un servidor web alojado en el controlador maestro.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src={fsSBartolo} class="img-fluid" alt="Freund San Miguel"  style={{borderRadius: '0.6rem'}}/>
                </div>
            </div>
        </div>
        </>
    );
}
export default fosalud;