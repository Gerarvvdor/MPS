import React from "react";

import c1 from "../../images/c1.png"
import c2 from "../../images/c2.png"
import c3 from "../../images/c4.png"
import c4 from "../../images/c5.png"
import c5 from "../../images/c7.png"
import c6 from "../../images/c8.png"


const ChillerAgua = () => {
    return(
        <>
            <div class="container">
                <h1 class="text-center">CHILLER ENFIRADO POR AGUA</h1>
                <p>Con estos productos podemos ayudarlo a alcanzar más eficiencia energética y operativa para su edificio. Ofrecemos la más amplia variedad de chillers industriales y comerciales del mercado, enfriados por agua.</p>
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style="width: 18rem;">
                            <img src={c1} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">CHILLER CENTRÍFUGO YZ DE RODAMIENTOS MAGNÉTICOS</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>    
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style="width: 18rem;">
                            <img src={c2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">CYK ENFRIADOR CENTRÍFUGO COMPUESTO</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>    
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style="width: 18rem;">
                            <img src={c3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">YCWL CHILLER SCROLL ENFRIADO POR AGUA</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>    
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style="width: 18rem;">
                            <img src={c4} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">YD ENFRIADOR CENTRÍFUGO DUAL</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>    
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style="width: 18rem;">
                            <img src={c5} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">YIA ENFRIADOR EFICIENTE DE UNA ETAPA DE ABSORCIÓN ENFRIADO POR AGUA</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>    
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style="width: 18rem;">
                            <img src={c6} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">YK-EP ENFRIADOR CENTRÍFUGO CON ECONOMIZADOR</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ChillerAgua;