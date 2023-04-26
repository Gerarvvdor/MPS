import React from "react";
import smoke from "../images/smoke.png"

const smokeControl = () => {
    return(
        <>
        <div class="container text-center">
            <div>
                <h1>Smoke Control</h1>
                <p>El conocimiento completo del diseño y los proveedores de calidad superior de Smoke Control, combinados con nuestra experiencia de instalación y servicios de mantenimiento, aseguran la integración perfecta de los sistemas contra incendio y humo en cualquier proyecto</p>
            </div>
            <img src={smoke} alt="..." class="img-fluid"></img>
        </div>
        </>
    );
}
export default smokeControl;
