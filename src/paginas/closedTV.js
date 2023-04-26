import React from "react";
import CCTV from "../images/circuito-cerrado.png";
const closedTV = () => {
    return (
    <>
    <div class="container">
        <div class="text-center">
            <h1>Circuito Cerratdo (CCTV)</h1>
            <p>Ofrecemos los más amplios y modernos equipos de circuito cerrado de televisión (CCTV). Esta es una tecnología de vídeo vigilancia visual diseñada para supervisar una diversidad de ambientes y actividades.</p>
            <img src={CCTV} alt="..." class="img-fluid"></img>
        </div>

    </div>
    
    </>
    );
}
export default closedTV;