import React from "react";
import "./../style/cards.css"
//Logos//
import Reliable from "./../images/reliablec.avif";
import Lennox from "./../images/lenox.avif";
import Belimo from "./../images/belimo.avif";
//Import York logo//
import York from "../images/york.avif"
import Rib from "./../images/rib.avif";
import Adelte from "./../images/adelte.avif";
//style="width: 18rem;"//
const Brands = () => {
    return (
        <>
        <div class="container">
        <h1 class="text-center">MARCAS</h1>
            
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <img src={Reliable} class="img-fluid" alt="reliableLogo"/>
                            <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                <h5 class="card-title">Reliable</h5>
                                <p><a href="https://www.reliablecontrols.com/" target="_blank" rel="noreferrer">Reliable Controls</a> 
                                Es una Corporación dedicada a la venta de productos y servicios en la industria de automatización de 
                                edificios. Fundada en 1986 en Surrey, Columbia Británica, Canadá. Actualmente la sede corporativa se 
                                encuentra en Victoria, BC con soporte de ventas en ubicaciones en todo el mundo. </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <img src={Lennox} class="img-fluid" alt="LennoxLogo"/>
                            <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                <h5 class="card-title">Lennox</h5>
                                <p><a href="https://www.lennox.com/" target="_blank" rel="noreferrer">Lennox International Inc.</a> 
                                Es un proveedor de productos de control climático para los mercados de calefacción, ventilación, aire 
                                acondicionado y refrigeración. fundada en 1895, en Marshalltown, Iowa, por Dave Lennox, el cual desarrollo 
                                numerosos avances en las soluciones de calefacción, refrigeración y control climático.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <img src={York} class="img-fluid" alt="YorkLogo"/>
                            <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                <h5 class="card-title">York</h5>
                                <p>York es el nombre de una compañía que comenzó en York, Pennsylvania, EE. UU., En 1874, que desarrolló 
                                    la marca York de equipos de refrigeración y HVAC. La marca York ahora es propiedad (desde 2005) de 
                                    <a href="http://www.johnsoncontrols.com/" target="_blank" rel="noreferrer">Johnson Controls </a> 
                                    una compañía americana que ofrece productos y servicios para optimizar la eficiencia energética 
                                    en edificios.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="row">   
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <img src={Belimo} class="img-fluid" alt="belimoLogo"  rel="noreferrer"/>
                            <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                <h5 class="card-title">Belimo</h5>
                                <p><a href="https://www.belimo.com/us/en_US/" target="_blank"  rel="noreferrer">Belimo</a> Es líder mundial en el mercado en el desarrollo, producción y comercialización de soluciones de actuadores para controlar sistemas de calefacción, ventilación y aire acondicionado. ofrece innovaciones en comodidad,eficiencia energética y soluciones de seguridad.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <img src={Rib} class="img-fluid" alt="ribLogo"/>
                            <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                <h5 class="card-title">Functional Devices, Inc.</h5>
                                <p><a href="https://www.functionaldevices.com/" target="_blank"  rel="noreferrer">Functional Devices, Inc</a> ha estado diseñando y fabricando dispositivos electrónicos de calidad en los Estados Unidos de América desde 1969. se ha establecido como líder en HVAC, controles de edificios, gestión de energía, ahorro de energía, controles de iluminación e industrias inalámbricas.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <img src={Adelte} class="img-fluid" alt="adelteLogo"/>
                            <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                <h5 class="card-title">Adelte</h5>
                                <p><a href="https://www.adelte.com/es/" target="_blank"  rel="noreferrer">Adelte</a> es una empresa con más de cinco décadas de experiencia en el diseño, la fabricación, el suministro y el mantenimiento de soluciones innovadoras y servicios orientados a los resultados que mejoran las operaciones aeroportuarias, portuarias y terrestre en todo el mundo.</p>
                            </div>
                        </div>
                    </div>        
                </div> 
            
        </div>

        </>

    );
}
export default Brands;