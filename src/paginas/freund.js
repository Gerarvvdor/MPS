import React from "react";
import "../style/custom-colors.css"
import freundSMC from "../images/freudSMC.avif";
import freundMerliot from "../images/freundMerliot.avif";
import freundEscalon from "../images/freundEscalón.avif";
import freundSonso from "../images/freundSonson.avif";
import freundSistemas from "../images/freundSistemas.avif";

const freund = () => {
    return(
        <>
        <div style={{margin: '2rem'}}>
            <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <h2 style={{ margin: '0.5rem' }}>FREUND Lourdes Colón</h2>
                <p style={{ margin: '1rem' }}>
                Suministro e instalación de sistema de aire acondicionado 
                compuesto por un chiller tipo scroll de 125 
                toneladas de refrigeración marca YORK, tubería de distribución, 
                2 bombas de recirculación de agua helada marca BELL & GOSSETT, 
                4 UMAS y 3 Fan Coil para la aclimatación de la nueva tienda. 
                Toda la instalación es operada de manera automática por un 
                sistema de control inteligente marca RELIABLE CONTROLS que 
                administra los encendidos y apagados de los equipos según horarios y 
                fechas, manteniendo temperaturas de confort establecidas mediante la 
                modulación de válvulas de control de capacidad, alternando las bombas 
                estableciendo una como líder y la otra en standby, llevando registros 
                de consumo, horas de operación, gráficos, etc. y obteniendo todos 
                los parámetros que recoge la tarjeta principal del chiller como 
                códigos de operación y falla, estado de válvulas, etc. desplegando 
                el sistema en interfaces graficas a través de un servidor web.
                </p>   
            </div>
            <hr/>
            <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-md-6">
                    <h2 style={{ margin: '0.5rem' }}>FREUND San Miguel Centro</h2>
                    <p style={{ margin: '1rem' }}>
                    Se reconstruye y amplía la Tienda FREUND San Miguel Centro, 
                    instalando 120 Toneladas de Refrigeración, con sistemas 
                    separados de expansión directa, y un sistema de 
                    automatización y control marca Reliable Controls.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src={freundSMC} class="img-fluid" alt="Freund San Miguel"  style={{margin: '0.5rem'}}/>
                </div>
            </div>
            <hr/>
            <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-md-6">
                    <h2 style={{ margin: '0.5rem' }}>FREUND Merliot</h2>
                    <p style={{ margin: '1rem' }}>
                    Se remodela y amplía la Tienda FREUND Merliot, 
                    instalando capacidad adicional, llegando a 90 
                    Toneladas de Refrigeración, todo con sistemas 
                    separados de expansión directa, y un sistema de 
                    automatización y control marca Reliable Controls.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src={freundMerliot} class="img-fluid" alt="Freund Merliot" style={{margin: '0.5rem'}}/>
                </div>
            </div>
            <hr/>
            <div div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-md-6">
                    <h2 style={{ margin: '0.5rem' }}>FREUND Escalón</h2>
                    <p style={{ margin: '1rem' }}>
                    Se remodela y amplía la Tienda FREUND Escalón, 
                    instalando capacidad adicional, llegando a 125 
                    Toneladas de Refrigeración, en un sistema mixto 
                    de chiller de tornillo enfriados por aire y sistemas 
                    separados de expansión directa, y un sistema de 
                    automatización y control marca Reliable Controls.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src={freundEscalon} class="img-fluid" alt="Freund escalón" style={{margin: '0.5rem'}}/>
                </div>
            </div>
            <hr/>
            <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}} >
                <div class="col-md-6" >
                    <h2 style={{ margin: '0.5rem' }} >FREUND Sonsonate</h2>
                    <p style={{ margin: '1rem' }} >
                    Es una instalación completamente nueva, equipamiento 
                    de equipos de aire acondicionado y ventilación mecánica, 
                    sistema de control y automatización, un chiller scroll de 
                    alta eficiencia, 125 Toneladas de Refriegeración, sistema 
                    de control inteligente Reliable Controls.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src={freundSonso} class="img-fluid" alt="Freund Sonsonate" style={{margin: '0.5rem'}}/>
                </div>
            </div>
            <hr/>
            <div class="text-center" style={{ borderRadius: '2rem'}}>
                <h2 style={{margin: '0.5rem'}}>FREUND Sistemas</h2>
                <p>
                Implementación de control inteligente para 5 equipos de 
                aire acondicionado que sirven en el DATA CENTER.
                </p>
                <img src={freundSistemas} class="img-fluid col" alt="sistemas Freund" style={{margin: '0.5rem'}}/>
            </div>
        </div>
        </>
    );
}
export default freund;