import React from "react";
import { Link } from "react-router-dom";
import comercial from "../images/aire_comercial.png";
import VRF from "../images/VRF.png"

const airesAcondicionados = () => {

    return (
        <>
            <div class="container">
                <h1 class="text-center">Aires Acondicionados</h1>
                <div class="row">
                    <div class="col">
                        <Link to="..." style={{textDecoration: 'none', color: 'black'}}>
                          <div class="card">
                                <div class="card-body">
                                    <h3 class="card-text text-center">Aire acondicionado residencial y comercial</h3>
                                    <img src={comercial} class="card-img-top img-fluid" alt="..."/>
                                </div>
                            </div>  
                        </Link>
                    </div>
                    <div class="col">
                        <Link to="..." style={{textDecoration: 'none', color: 'black'}}>
                            <div class="card" >
                                <div class="card-body">
                                    <h3 class="card-text text-center">Aire acondicionado sistema de refrigenrante de flujo variable (VRF)</h3>
                                    <img src={VRF} class="card-img-top img-fluid" alt="..."/>
                                </div>
                            </div>
                        </Link>    
                    </div>
                </div>
            </div>
        </>
    );
}
export default airesAcondicionados;