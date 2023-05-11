import React from "react";
import solarisIMG from "../images/solaris.avif";

const solaris = () => {
    return(
        <>
        <div class="row" style={{  borderRadius: '2rem', margin: '1rem'}}>
            <div class="col-md-6">
                <h2 style={{ margin: '0.5rem' }}>LABORATORIOS SOLARIS</h2>
                <p style={{ margin: '1rem' }}>
                Se instalan sistemas de aire acondicionado de expansión directa en zonas de producción de 
                tabletas, polvos, líquidos y sueros, 100 Toneladas de Refrigeración, con sistemas separados 
                de expansión directa, filtros HEPA y filtros finales en zonas limpias, control marca Reliable 
                Controls.
                </p>
            </div>
            <div class="col-md-6">
                <img src={solarisIMG} class="img-fluid" alt="LaboratoriosSolaris" style={{borderRadius: '0.6rem', height: '100%'}} />
            </div>
        </div>

        </>
    );
}
export default solaris;