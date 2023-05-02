import React from "react";
import alarma from "../images/alarma.avif";

const FireAlarm = () => {
  return (
    <>
      <div class="container text-center">
        <div>
          <h1>Alarma contra incendios</h1>
          <p>
            Disfrute un entorno más seguro en su empresa. La mayor cantidad de
            pérdidas causadas por un incendio se debe a la falta de notificación
            para los ocupantes en el momento oportuno cuando un fuego se
            encuentra en sus etapas de inicio y es posible aún combatirlo por
            medio de equipos portátiles. Los sistemas de Detección y Alarma de
            Incendio son recomendados para prácticamente todas las instalaciones
            como un medio de monitoreo continuo para cualquier edificación.
          </p>
          <img src={alarma} alt="..." class="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default FireAlarm;
