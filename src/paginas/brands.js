import React from "react";

//Logos//
import Reliable from "./../images/reliablec.png";
import Lennox from "./../images/lenox.png";
import Belimo from "./../images/belimo.png";
import Rib from "./../images/rib.png";
import Adelte from "./../images/adelte.png";

const Brands = () => {
    return (
        <>
        <h1>MARCAS</h1>
        <div>
            <p><a href="https://www.reliablecontrols.com/"target="_blank">Reliable Controls</a> Es una Corporación dedicada a la venta de productos y servicios en la industria de automatización de edificios. Fundada en 1986 en Surrey, Columbia Británica, Canadá. Actualmente la sede corporativa se encuentra en Victoria, BC con soporte de ventas en ubicaciones en todo el mundo. </p>
            <img src={Reliable} alt=""/>

        </div>
        <div>
            <p><a href="https://www.lennox.com/" target="_blank">Lennox International Inc. </a>Es un proveedor de productos de control climático para los mercados de calefacción, ventilación, aire acondicionado y refrigeración. fundada en 1895, en Marshalltown, Iowa, por Dave Lennox, el cual desarrollo numerosos avances en las soluciones de calefacción, refrigeración y control climático.</p>
        </div>
        <div>
            <p>York es el nombre de una compañía que comenzó en York, Pennsylvania, EE. UU., En 1874, que desarrolló la marca York de equipos de refrigeración y HVAC. La marca York ahora es propiedad (desde 2005) de <a href="http://www.johnsoncontrols.com/">Jhhnson Controls </a> una compañía americana que ofrece productos y servicios para optimizar la eficiencia energética en edificios.</p>
            <img src={Lennox} alt=""/>
        </div>
        <div>
            <p><a href="https://www.belimo.com/us/en_US/" target="_blank">Belimo</a> Es líder mundial en el mercado en el desarrollo, producción y comercialización de soluciones de actuadores para controlar sistemas de calefacción, ventilación y aire acondicionado. ofrece innovaciones en comodidad,eficiencia energética y soluciones de seguridad.</p>
            <img src={Belimo} alt=""/> 
        </div>
        <div>
            <p><a href="https://www.functionaldevices.com/" target="_blank">Functional Devices, Inc</a> ha estado diseñando y fabricando dispositivos electrónicos de calidad en los Estados Unidos de América desde 1969. se ha establecido como líder en HVAC, controles de edificios, gestión de energía, ahorro de energía, controles de iluminación e industrias inalámbricas.</p>
            <img src={Rib} alt="" />
        </div>
        <div>
            <p><a href="https://www.adelte.com/es/" target="_blank"></a></p>
            <img src={Adelte} alt="" />
        </div>
    
        </>

    );
}
export default Brands;