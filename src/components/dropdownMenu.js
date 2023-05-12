import React from "react";
import { Link} from "react-router-dom";

const dropdownMenu = () => {
    return(
        <>
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                                            <Link to="chillers" style={{textDecoration: 'none', color: 'black'}} ><li><a href="..." class="dropdown-item">Chillers</a></li></Link>
                                            <Link to="aireAcondicionado" style={{textDecoration: 'none', color: 'black'}}><li><a href="..." class="dropdown-item">Aires Acondicionados</a></li></Link>
                                            <Link to="unidadesCentrales" style={{textDecoration: 'none', color: 'black'}}><li><a href="..." class="dropdown-item">Unidades centrales</a></li></Link>
                                            <Link to="fanCoil" style={{textDecoration: 'none', color: 'black'}}><li><a href="..." class="dropdown-item">Fan COIL de agua fría</a></li></Link>
                                            <Link to="ctrlAutomatización" style={{textDecoration: 'none', color: 'black'}}><li><a href="..." class="dropdown-item">Control y Automatización</a></li></Link>
                                            <Link to="monitoreo" style={{textDecoration: 'none', color: 'black'}}><li><a href="..." class="dropdown-item">Monitoreo de agua y energía</a></li></Link>
                                            <Link to="circuitoTV" style={{textDecoration: 'none', color: 'black'}}><li><a href="..." class="dropdown-item">Circuito derrado de TV</a></li></Link>
                                            <Link to="smokeControl" style={{textDecoration: 'none', color: 'black'}}><li><a href="..." class="dropdown-item">Smoke Control</a></li></Link>
                                            <Link to="asistControl" style={{textDecoration: 'none', color: 'black'}}><li><a href="..." class="dropdown-item">Control de asistencia</a></li></Link>
                                            <Link to="paneles" style={{textDecoration: 'none', color: 'black'}}><li><a href="..." class="dropdown-item">Paneles fotovoltáicos</a></li></Link>
                                            <Link to="fireAlarm" style={{textDecoration: 'none', color: 'black'}}><li><a href="..." class="dropdown-item">Alarma contra incendios</a></li></Link>
                                            <Link to="ledLigths" style={{textDecoration: 'none', color: 'black'}}><li><a href="..." class="dropdown-item">Instalación de iluminación LED</a></li></Link>
                                            <li><hr class="dropdown-divider"/></li>
                                            <Link to="products" style={{ textDecoration: 'none', color: 'black' }}><li><a href="..." class="dropdown-item">Ver todos los productos</a></li></Link>
                                        </ul>
        </>
    );
}
export default dropdownMenu;