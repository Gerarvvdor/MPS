import React from "react";
import { Link } from "react-router-dom";
import awa from "../images/chiller_agua.png"
import aire from "../images/chiller_aire.png"
const chillers = () => {

    return (
        <>
            <div class="container">
                <h1 class="text-center">Chillers</h1>
                <div class="row">
                    <div class="col">
                        <Link to="..." style={{textDecoration: 'none', color: 'black'}}>
                          <div class="card">
                                <div class="card-body">
                                    <h3 class="card-text text-center">Chillers enfriados por agua</h3>
                                    <img src={awa} class="card-img-top img-fluid" alt="..."/>
                                </div>
                            </div>  
                        </Link>
                    </div>
                    <div class="col">
                        <Link to="..." style={{textDecoration: 'none', color: 'black'}}>
                            <div class="card" >
                                <div class="card-body">
                                    <h3 class="card-text text-center">Chillers enfriados por aire</h3>
                                    <img src={aire} class="card-img-top img-fluid" alt="..."/>
                                </div>
                            </div>
                        </Link>    
                    </div>
                </div>
            </div>
        </>
    );
}
export default chillers;