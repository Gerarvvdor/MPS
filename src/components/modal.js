import React from "react";

//import images//

import header from "./../images/header.png";

function Modal({closeModal}) {
    return (
    <div className="modalBackground">
        <div className="modalContainer">
            <img  src={header} alt="tittle"></img>

            <div className="body">
                <p>MP SERVICE surge principalmente como una empresa dedicada al servicio de mantenimiento en edificios e industria, específicamente en equipos de aire acondicionado; así como al suministro e instalación de estos sistemas. En su evolución y con una filosofía orientada a disminuir los gastos operativos de las empresas a las que damos servicio, damos un salto tecnológico importante al ofrecer a nuestros clientes sistemas de automatización y control de los equipos de aire acondicionado, iluminación, sistemas de bombeo, calderas etc. con tecnología de última generación, con personal calificado y entrenado en Estados Unidos y Canadá.</p>
                <p>Esto nos permite ahora ofrecer no solo un servicio de mantenimiento, sino una gama de productos y servicios, orientados a satisfacer multitud de necesidades en las empresas: Servicios de Mantenimiento, Automatización y Control, Auditorias y Asesorías Energéticas, Auditorias y Asesorías Operativas, CCTV, Control de Acceso, Alarmas Contra Incendios, etc.</p>
            </div>
            <div className="footer">
                <button onClick={() => closeModal(false)}>Cerrar</button>
            </div>
          </div>
    </div>
    );
}

export default Modal;