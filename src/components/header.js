import React, { useState } from 'react';

import logo from './../images/logo.png';
import lead from './../images/lead.png';
import reliable from './../images/reliablec.png';
import leed from './../images/hearth.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleClick = () => {
    setShowSubMenu(!showSubMenu);
  };
  
  return (
    <>
    <div className='socialMedia'>
      <div class="text-center">
          <div class="row row-cols-auto">
          <div class="col"><a href='https://twitter.com/MPSservice' target='_blank'><i class="bi bi-twitter" style={{ fontSize: '1.5rem' , color: '#00acee'}}></i></a></div>
          <div class="col"><a href='https://www.facebook.com/profile.php?id=100063475033565' target='_blank'><i class="bi bi-facebook" style={{ fontSize: '1.5rem', color: '#3b5998'}}></i></a></div>
          <div class="col"><a href='https://www.youtube.com/channel/UC8Pm_a_1mfNMEsJuf66P56w?view_as=subscriber' target='_blank'><i class="bi bi-youtube" style={{ fontSize: '1.5rem', color: '#FF0000' }}></i></a></div>
          <div class="col"><a href='https://www.instagram.com/mp_service_/' target='_blank'><i class="bi bi-instagram" style={{ fontSize: '1.5rem' , color: '#E1306C'}}></i></a>   </div>
        </div>
      </div>
    </div>
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
        
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <img class="navbar-brand img-fluid" src={logo} alt="MP Logo"/>
          <img class='navbar-brand img-fluid' src={lead} alt="leed"/>
          <img class="navbar-brand img-fluid" src={leed} alt="leed Earth"/>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">INICIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/aboutUs">NOSOTROS</a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PRODUCTOS
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item dropend" onClick={handleClick}>
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Chillers
                    </a>
                    {showSubMenu && (
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" onClick={handleClick}>Enfriados por agua</a></li>
                        <li><a class="dropdown-item" href="#" onClick={handleClick}>Enfriados por aire</a></li>
                      </ul>
                    )}
                  </li>
                  <li class="nav-item dropend" onClick={handleClick}>
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Aires Acondicionados
                    </a>
                    {showSubMenu && (
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" onClick={handleClick}>Residencial y comercial</a></li>
                        <li><a class="dropdown-item" href="#" onClick={handleClick}>Sistema de refrigerante de flujo variable</a></li>
                      </ul>
                    )}
                  </li>
                  <li><a class="dropdown-item" href="#">Unidades centrales</a></li>
                  <li><a class="dropdown-item" href="#">Fan COIL de agua fría</a></li>
                  <li><a class="dropdown-item" href="#">Control y Automatización</a></li>
                  <li><a class="dropdown-item" href="#">Monitoreo de agua y energía</a></li>
                  <li><a class="dropdown-item" href="#">Circuito derrado de TV</a></li>
                  <li><a class="dropdown-item" href="#">Smoke Control</a></li>
                  <li><a class="dropdown-item" href="#">Control de asistencia</a></li>
                  <li><a class="dropdown-item" href="#">Paneles fotovoltáicos</a></li>
                  <li><a class="dropdown-item" href="#">Alarma contra incendios</a></li>
                  <li><a class="dropdown-item" href="#">Instalación de iluminación LED</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="/products">Ver todos los productos</a></li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/services">SERVICIOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/proyects">PROYECTOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/renewable">ENERGIAS RENOVABLES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/brands">MARCAS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/contacts">CONTACTOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/autoControl">CONTROL Y AUTOMATIZACIÓN</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">

                </a>
              </li>
            </ul>
          </div>  
        </div>
      </nav>
    </>
  );

};
  
export default Header;
