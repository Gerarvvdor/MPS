import React from "react";
import ca1 from "../images/ca1.png"
import ca2 from "../images/ca2.png"
import ca3 from "../images/ca3.png"
import ca4 from "../images/ca4.png"
import ca5 from "../images/ca5.png"


//dropdown menu//
const crtlAutomatización = () => {
    return (
        <>
            <div class="container text-center">
                <div>
                    <h1>Control y Automatización</h1>
                    <p>Los sistemas de control y automatización han tomado parte importante en la Industria, el Comercio y la vivienda, haciéndose cada vez más necesarios en el manejo e incremento de eficiencia de sistemas.MP Service es Dealer Autorizado de la prestigiosa marca <a href="https://www.reliablecontrols.com/" target="_blank" style={{textDecoration: 'none'}}>RELIABLE CONTROLS CORPORATION</a></p>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style={{width: '28rem'}}>
                            <div class="card-body">
                                <img src={ca1} alt="..."></img>
                                <h5 class="card-tittle"></h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Más detalles</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style={{width: '28rem'}}>
                            <div class="card-body">
                                <img src={ca2} aalt="..."></img>
                                <h5 class="card-tittle"></h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Más detalles</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style={{width: '28rem'}}>
                            <div class="card-body">
                                <img src={ca3} alt="..."></img>
                                <h5 class="card-tittle"></h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Más detalles</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style={{width: '28rem'}}>
                            <div class="card-body">
                                <img src={ca4} alt="..."></img>
                                <h5 class="card-tittle"></h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Más detalles</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style={{width: '28rem'}}>
                            <div class="card-body">
                                <img src={ca5} alt="..."></img>
                                <h5 class="card-tittle"></h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Más detalles</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default crtlAutomatización;