import React from "react";
//images//
import main from "./../images/principal.avif"

//components//
import AboutUs from "./aboutUs";
import Services from "./services";
import Contactos from "./contacts";
import RenewableEnergies from "./renewable";
import AutoControl from "./autoControl";

const HomePage = () => {
    return (
    <>
        <div class="container text-center">
            
            <AboutUs/>
            <hr/>
            <img class="img-fluid" src={main} alt="main_image" style={{marginTop: '2rem', borderRadius: '1.5rem'}}></img>
            <hr/>
            <Services/>
            <hr/>
            <RenewableEnergies/>
            <hr/>
            <AutoControl/>
            <hr/>
            <Contactos/>

        </div>
    </>
    );
}
export default HomePage;