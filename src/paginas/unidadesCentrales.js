import React from "react";
import { Link } from "react-router-dom";
import UC1 from "../images/u1.png"
import UC2 from "../images/u2.png"
import UC3 from "../images/u3.png"
import UC4 from "../images/u4.png"
import UC5 from "../images/u5.png"
import UC6 from "../images/u6.png"


const unidadesCentrales = () => {
    return(
        <>
            <div class="container">
                <h1 class="text-center">Unidades centrales</h1>
                <p class="text-center">Aumente la eficiencia y rendimiento de su sistema de aire acondicionado con Unidades Manejadoras de Aire YORK®</p>
                <div class="row ">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style={{width: '18rem'}}>
                            <img src={UC1} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Unidades Manejadoras de aire YORK®</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Más detalles</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style={{width: '18rem'}}>
                            <img src={UC2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Unidades Manejadoras de aire (UMA)</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Más detalles</a>
                            </div>
                        </div>
                    </div>  
                    <div class="col-lg-4 col-md-6 mb-4">   
                        <div class="card" style={{width: '18rem'}}>
                            <img src={UC3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Manejadora de aire YAH para montaje en techo</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Más detalles</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style={{width: '18rem'}}>
                            <img src={UC4} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">YAM </h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Más detalles</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card" style={{width: '18rem'}}>
                            <img src={UC5} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">YSM unidad de manejo de aire doble pared</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Más detalles</a>
                            </div>
                        </div>
                    </div>  
                    <div class="col-lg-4 col-md-6 mb-4">   
                        <div class="card" style={{width: '18rem'}}>
                            <img src={UC6} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">YSM-B</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Más detalles</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default unidadesCentrales;