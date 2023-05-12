import React from "react";

//components//
import Header from "./components/header";
import Footer from "./components/footer";

//stylesheet//
import './style/sideMenu.css'
import './style/custom-colors.css'

//reactDOM//
import {Link, Routes, Route} from "react-router-dom";

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

//products pages//
import Chillers from "./paginas/chillers";
import ChillersAgua from "./paginas/chillersAgua";
import ChillersAire from "./paginas/chillersAire";
import AiresAcondicionados from "./paginas/airesAcondicionados";
import AireComercial from "./paginas/aireComercial";
import VRF from "./paginas/vrf";
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
//proyects pages//
import Freund from "./paginas/freund";
import Sherwin from "./paginas/sherwin";
import Fosalud from "./paginas/fosalud";
import Pgr from "./paginas/pgr";
import Solaris from "./paginas/solaris";
import Cepa from "./paginas/cepa";
import BancoLocal from "./paginas/bancoLocal";
import LaCentroAmericana from "./paginas/laCentroAmericana";
import Fisdl from "./paginas/fisdl";
import Ipsfa from "./paginas/ipsfa";
import Avianca from "./paginas/avianca";
import Omnisport from "./paginas/omnisport";

const App = () => {

    return (
        <>
        <div class="conainer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-auto bg-light sticky-top">
                        <div class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                            <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                                <Link to="/" style={{ textDecoration: 'none', color: 'var(--fift-color)' }} class="text-center d-block p-1 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                                    <li>                     
                                            <span class="icon"><i class="bi-house fs-1" id="homeButton"></i></span>
                                            <span class="titulo">Inicio</span>
                                    </li>                                    
                                </Link>
                                <Link to="products" id="brandsButton" style={{ textDecoration: 'none', color: 'var(--fift-color)' }} class="text-center d-block p-1 link-dark text-decoration-none">
                                    <li>
                                        <span class="icon"><i class="bi bi-tag fs-1"></i></span>
                                        <span class="titulo">Products</span>
                                    </li>
                                </Link>
                                
                                <Link to="proyects" id="proyectsButton" style={{ textDecoration: 'none', color: 'var(--fift-color)' }} class="text-center d-block p-1 link-dark text-decoration-none">
                                    <li>
                                        <span class="icon"><i class="bi bi-clipboard fs-1"></i></span>
                                        <span class="titulo">Proyectos</span>
                                    </li>
                                </Link>
                                <Link to="renewable" id="renewableEnergyButton" style={{ textDecoration: 'none', color: 'var(--fift-color)' }} class="text-center d-block p-1 link-dark text-decoration-none">
                                    <li>    
                                        <span class="icon"><i class="bi bi-lightning-charge fs-1"></i></span>
                                        <span class="titulo">Energías renovables</span>
                                    </li>
                                </Link>
                                <Link to="brands" id="brandsButton" style={{ textDecoration: 'none', color: 'var(--fift-color)' }} class="text-center d-block p-1 link-dark text-decoration-none">
                                    <li>    
                                        <span class="icon"><i class="bi bi-tag fs-1"></i></span>
                                        <span class="titulo">Marcas</span>
                                    </li>
                                </Link>
                                <Link to="autoControl" id="autoControlButton" style={{ textDecoration: 'none', color: 'var(--fift-color)' }} class="text-center d-block p-1 link-dark text-decoration-none">
                                    <li>    
                                        <span class="icon"><i class="bi bi-gear-wide-connected fs-1"></i></span>
                                        <span class="titulo">Automatización y control</span>    
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm p-3 min-vh-100">
                        <main>
                        <Header/>
                            <Routes>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/aboutUs" element={<AboutUs/>}/>
                                <Route path="/products" element={<Products/>}/>
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

                                {/*Routes for products page */}
                                <Route path="/chillers/chillersAgua" element={<ChillersAgua/>}/>
                                <Route path="/chillers/chillersAire" element={<ChillersAire/>}/>
                                <Route path="/products/chillersAgua" element={<ChillersAgua/>}/>
                                <Route path="/products/chillersAire" element={<ChillersAire/>}/>
                                <Route path="/aireAcondicionado/aireComercial" element={<AireComercial/>}/>
                                <Route path="/aireAcondicionado/VRF" element={<VRF/>}/>
                                <Route path="/products/aireComercial" element={<AireComercial/>}/>
                                <Route path="/products/VRF" element={<VRF/>}/>
                                <Route path="/products/unidadesCentrales" element={<UnidadesCentrales/>}/>
                                <Route path="/products/fanCoil" element={<FanCOIL/>}></Route>
                                <Route path="/products/ctrlAutomatización/" element={<CrtlAutomatización/>}/>
                                <Route path="/products/monitoreo" element={<MonitoreoH2O/>}/>
                                <Route path="/products/circuitoTV" element={<TVcircuit/>}/>
                                <Route path="/products/smokeControl" element={<SmokeControl/>}/>
                                <Route path="/products/asistControl" element={<Asistance/>}/>
                                <Route path="/products/paneles" element={<Panels/>}/>
                                <Route path="/products/fireAlarm" element={<FireAlarm/>}/>
                                <Route path="/products/ledLigths" element={<LedLights/>}/>
                                
                                {/*Routes for proyects page */}
                                <Route path="/proyects/freund" element={<Freund/>}/>
                                <Route path="/proyects/sherwin" element={<Sherwin/>}/>
                                <Route path="/proyects/fosalud" element={<Fosalud/>}/>
                                <Route path="/proyects/pgr" element={<Pgr/>}/>
                                <Route path="/proyects/solaris" element={<Solaris/>}/>
                                <Route path="/proyects/cepa" element={<Cepa/>}/>
                                <Route path="/proyects/bancoLocal" element={<BancoLocal/>}/>
                                <Route path="/proyects/laCentroAmericana" element={<LaCentroAmericana/>}/>
                                <Route path="/proyects/fisdl" element={<Fisdl/>}/>
                                <Route path="/proyects/ipsfa" element={<Ipsfa/>}/>
                                <Route path="/proyects/avianca" element={<Avianca/>}/>
                                <Route path="/proyects/omnisport" element={<Omnisport/>}/>
                            </Routes>
                        </main>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default App;