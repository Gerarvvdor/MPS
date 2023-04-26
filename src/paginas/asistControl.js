import React from "react";
import asistControlDevice from "../images/asist-control.png";

const asistControl = () => {
    return (
        <>
        <div class="container text-center">
            <div>
                <h1>Control de asistencia</h1>
                <p>Tenemos diferentes soluciones que integran los mejores lectores de huella para el control profesional e integral de la asistencia de sus empleados y generación automática de la nómina.</p>
            </div>
            <img src={asistControlDevice} alt="..." class="img-fluid"></img>
        </div>
        
        </>
    );
}
export default asistControl;