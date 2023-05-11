import React from "react";
//images//
import main from "./../images/principal.avif"

//components//
import AboutUs from "./aboutUs";
import Services from "./services";
import Contactos from "./contacts";

const HomePage = () => {
    return (
    <>
        <div class="container text-center">
            <img class="img-fluid" src={main} alt="main_image" style={{marginTop: '2rem'}}></img>
            <hr/>
            <AboutUs/>
            <hr/>
            <Services/>
            <hr/>
            <Contactos/>
        </div>
    </>
    );
}
export default HomePage;