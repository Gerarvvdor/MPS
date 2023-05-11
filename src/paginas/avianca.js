import React from "react";
import avianca1 from "../images/avianca.avif"
import avianca2 from "../images/avianca2.avif"
const avianca = () => {
    return(
        <>
        <div class="align-items-center justify-content-center" style={{margin: '2rem'}}>
            <h2 class="text-center">AVIANCA</h2>
            <div class="row align-items-center justify-content-center" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-md-6">
                    <p>
                    Control y Automatización de 20 UMAS (Unidades manejadoras de aire),
                     2 chillers (incluida su integración), 2 bombas de recirculación y 
                     medición de suministro de energía eléctrica de la distribuidora en 
                     la subestación eléctrica. Este sistema cuenta con los últimos modelos 
                     de controladores llamados MACH-ProZone, dispositivos que funcionan totalmente 
                     en BACnet. Para la medición en la subestación, se utiliza un medidor 
                     con protocolo MODBUS.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src={avianca1} alt="FISDL" class="img-fluid" ></img>
                </div>
            </div>
            <div class="row align-items-center justify-content-center" style={{  borderRadius: '2rem', margin: '1rem'}}>
                <div class="col-md-6">
                    <p>
                        Se instala un sistema de control inteligente, configurado stand-alone 
                        para controlar la capacidad de seis manejadoras de aire en area de simulador 
                        de vuelo en el Aeropuerto Internacional El Salvador, control marca Reliable 
                        Controls.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src={avianca2} alt="FISDL" class="img-fluid" ></img>
                </div>
            </div>
        </div>  
        </>
    );
}
export default avianca;