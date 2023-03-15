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
            <p><a href="https://www.reliablecontrols.com/" >Reliable Controls</a> Es una Corporación dedicada a la venta de productos y servicios en la industria de automatización de edificios. Fundada en 1986 en Surrey, Columbia Británica, Canadá. Actualmente la sede corporativa se encuentra en Victoria, BC con soporte de ventas en ubicaciones en todo el mundo. </p>
            <img src={Reliable} alt=""/>

        </div>
        <div>
            <p><a href="https://www.lennox.com/">Lennox International Inc. </a>Es un proveedor de productos de control climático para los mercados de calefacción, ventilación, aire acondicionado y refrigeración. fundada en 1895, en Marshalltown, Iowa, por Dave Lennox, el cual desarrollo numerosos avances en las soluciones de calefacción, refrigeración y control climático.</p>
        </div>
        <div>
            <p>York es el nombre de una compañía que comenzó en York, Pennsylvania, EE. UU., En 1874, que desarrolló la marca York de equipos de refrigeración y HVAC. La marca York ahora es propiedad (desde 2005) de <a href="http://www.johnsoncontrols.com/">Jhhnson Controls </a> una compañía americana que ofrece productos y servicios para optimizar la eficiencia energética en edificios.</p>
            <img src={Lennox} alt=""/>
        </div>
        <div>
            <img src={Belimo} alt=""/> 
        </div>
        <div>
            <img src={Rib} alt="" />
        </div>
        <div>
            <img src={Adelte} alt="" />
        </div>
    
        </>

    );
}
export default Brands;