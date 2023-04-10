import React from "react";

//import images//
import YVAA from "../../images/yvva.png"
import YCAL from "../../images/ycal.png"
import YLAA from "../../images/ycal.png"

const chillerAire = () => {
    return (
        <>
            <div class="container tex-center">
                <h1>Chiller enfriado por aire</h1>
                    <p>Con estos productos podemos ayudarlo a alcanzar más eficiencia energética y operativa para su edificio. Ofrecemos la más amplia variedad de chillers industriales y comerciales del mercado, enfriados por aire.
                        <div class="row">
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card" style="width: 18rem;">
                                    <img src={YVAA} class="card-img-top" alt="YVAA.png"/>
                                    <div class="card-body">
                                        <h5 class="card-title">YORK® YVAA CHILLER ENFRIADO POR AIRE</h5>
                                        <a href="#" class="btn btn-primary" target="_blank">Go somewhere</a>
                                    </div>    
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card" style="width: 18rem;">
                                    <img src={YCAL} class="card-img-top" alt="YCAL.png"/>
                                    <div class="card-body">
                                        <h5 class="card-title">YORK® YCAL CHILLER CROLL ENFRIADO POR AIRE</h5>
                                        <a href="#" class="btn btn-primary" target="_blank">Go somewhere</a>
                                    </div>    
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card" style="width: 18rem;">
                                    <img src={YLAA} class="card-img-top" alt="YLAA.png"/>
                                    <div class="card-body">
                                        <h5 class="card-title">YORK® YLAA CHILLER SCROLL ENFRIADO POR AIRE</h5>
                                        <a href="#" class="btn btn-primary" target="_blank">Go somewhere</a>
                                    </div>    
                                </div>
                            </div>

                        </div>
                    </p>
            </div>
        </>

    );
}
export default chillerAire;
