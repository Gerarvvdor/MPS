import React, {useState} from "react";

//components//
import Header from "./../src/components/header";
import Footer from "./components/footer";

//reactDOM//
import {Routes, Route} from "react-router-dom";
//pages//
import HomePage from "./paginas/Inicio";
import AboutUs from "./paginas/aboutUs";
import Products from "./paginas/products";
import Services from "./paginas/services";
import Proyects from "./paginas/proyects";
import Renewable from "./paginas/renewable"
import Brands from "./paginas/brands";
import Contacts from "./paginas/contacts";
import AutoControl from "./paginas/autoControl";

//sub pages imports//
import Chillers from "./paginas/chillers";
import AiresAcondicionados from "./paginas/airesAcondicionados";
import UnidadesCentrales from "./paginas/unidadesCentrales";
import FanCOIL from "./paginas/fanCOIL";
import CrtlAutomatización from "./paginas/crtlAutomatización";
import MonitoreoH2O from "./paginas/monitoreoAguaEnergía";
import TVcircuit from "./paginas/closedTV";
import SmokeControl from "./paginas/smokeControl";
import Asistance from "./paginas/asistControl";
import Panels from "./paginas/panels";
import FireAlarm from "./paginas/fireAlarms";
import LedLights from "./paginas/ledLigths";

const App = () => {

    return (
        <>
            <div className="contenedor">
                <Header/>

                <div className="contenido">
                    <main>
                    
                        <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/aboutUs" element={<AboutUs/>}/>
                        <Route path="/products/*" element={<Products/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/proyects" element={<Proyects/>}/>
                        <Route path="/renewable" element={<Renewable/>}/>
                        <Route path="/brands" element={<Brands/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/autoControl" element={<AutoControl/>}/>

                        {/* Creating routes for header dropdown menu */}
                        <Route path="/chillers" element={<Chillers/>}/>
                        <Route path="/aireAcondicionado" element={<AiresAcondicionados/>}/>
                        <Route path="/unidadesCentrales" element={<UnidadesCentrales/>}/>
                        <Route path="/fanCoil" element={<FanCOIL/>}/>
                        <Route path="/ctrlAutomatización" element={<CrtlAutomatización/>}/>
                        <Route path="/monitoreo" element={<MonitoreoH2O/>}/>
                        <Route path="/circuitoTV" element={<TVcircuit/>}/>
                        <Route path="/smokeControl" element={<SmokeControl/>}/>
                        <Route path="/asistControl" element={<Asistance/>}/>
                        <Route path="/paneles" element={<Panels/>}/>
                        <Route path="/fireAlarm" element={<FireAlarm/>}/>
                        <Route path="/ledLigths" element={<LedLights/>}/>

                        {/*Routes for proyects page */}

                        {/*Routes for proyects page */}
                        </Routes>
                        
                    </main>
                </div>
                <Footer/>
            </div>

        </>

    );
}
export default App;