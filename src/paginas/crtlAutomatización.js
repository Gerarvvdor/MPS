import React from "react";
import ca1 from "../images/ca1.avif";
import ca2 from "../images/ca2.avif";
import ca3 from "../images/ca3.avif";
import ca4 from "../images/ca4.avif";
import ca5 from "../images/ca5.avif";

const crtlAutomatización = () => {
  return (
    <>
        <div class="container text-center">
            <div>
                <h1>Control y Automatización</h1>
                <p>
                    Los sistemas de control y automatización han tomado una parte
                    importante en la Industria, el Comercio y la vivienda, haciéndose
                    cada vez más necesarios en el manejo e incremento de eficiencia de
                    sistemas. MP Service es Dealer Autorizado de la prestigiosa marca{" "}
                    <a
                    href="https://www.reliablecontrols.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}>
                    RELIABLE CONTROLS CORPORATION
                    </a>
                </p>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" style={{ width: "100%" }}>
                        <div class="card-body">
                            <img src={ca1} alt="..." class="img-fluid" style={{width: '45%', height: 'auto'}}/>
                            <h5 class="card-title"></h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary">
                            Más detalles
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" style={{ width: "100%" }}>
                        <div class="card-body">
                            <img src={ca2} alt="..." class="img-fluid" style={{width: '45%', height: 'auto'}}/>
                            <h5 class="card-title"></h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary">
                            Más detalles
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" style={{ width: "100%" }}>
                        <div class="card-body">
                            <img src={ca3} alt="..." class="img-fluid" />
                            <h5 class="card-title"></h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary">
                            Más detalles
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" style={{ width: "100%" }}>
                    <div class="card-body">
                        <img src={ca4} alt="..." class="img-fluid" />
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-primary">
                        Más detalles
                        </a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" style={{ width: "100%" }}>
                        <div class="card-body">
                            <img src={ca5} alt="..." class="img-fluid" />
                            <h5 class="card-title"></h5>
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