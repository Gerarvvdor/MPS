import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../images/logo.png';
import lead from './../images/lead.png';
import reliable from './../images/reliablec.png';
import leed from './../images/hearth.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
        <img class="navbar-brand img-fluid" src={logo}/>
          <img class='navbar-brand img-fluid' src={lead}/>
          <img class="navbar-brand img-fluid" src={leed}/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
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
                  <li class="nav-item dropend">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Chillers
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Enfriados por agua</a></li>
                      <li><a class="dropdown-item" href="#">Enfriados por aire</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropend">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Aires Acondicionados
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Residencial y comercial</a></li>
                      <li><a class="dropdown-item" href="#">Sistema de refrigerante de flujo variable</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="#">Unidades centrales</a></li>
                  <li><a class="dropdown-item" href="#">Fan COIL de agua fría</a></li>
                  <li><a class="dropdown-item" href="#">Control y Automatización</a></li>
                  <li><a class="dropdown-item" href="#">Monitoreo de agua y energía</a></li>
                  <li><a class="dropdown-item" href="#">Circuito derrado de TV</a></li>
                  <li><a class="dropdown-item" href="#">Smoke Control</a></li>
                  <li><a class="dropdown-item" href="#">Control de asistencia</a></li>
                  <li><a class="dropdown-item" href="#">Paneles Solares</a></li>
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
                <a class="nav-link active" aria-current="page">
                  <i class="bi bi-twitter"></i>
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