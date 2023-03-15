import React from "react";
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
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/proyects" element={<Proyects/>}/>
                        <Route path="/renewable" element={<Renewable/>}/>
                        <Route path="/brands" element={<Brands/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        </Routes>
                        
                    </main>
                </div>
                <Footer/>
            </div>

        </>

    );
}
export default App;