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
      <div className='socialMedia'>
          <div className="container-fluid text-center">
            <div className="d-flex justify-content-end">
              <a href='https://twitter.com/MPSservice' target='_blank' rel="noreferrer" className='me-3'>
                <i className="bi bi-twitter" style={{ fontSize: '1.5rem' , color: '#00acee'}}></i>
              </a>
              <a href='https://www.facebook.com/profile.php?id=100063475033565' target='_blank' rel="noreferrer" className='me-3'>
                <i className="bi bi-facebook" style={{ fontSize: '1.5rem', color: '#3b5998'}}></i>
              </a>
              <a href='https://www.youtube.com/channel/UC8Pm_a_1mfNMEsJuf66P56w?view_as=subscriber' target='_blank' rel="noreferrer" className='me-3'>
                <i className="bi bi-youtube" style={{ fontSize: '1.5rem', color: '#FF0000' }}></i>
              </a>
              <a href='https://www.instagram.com/mp_service_/' target='_blank' rel="noreferrer" className='me-3'>
                <i className="bi bi-instagram" style={{ fontSize: '1.5rem' , color: '#E1306C'}}></i>
              </a>
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
                  <a class="nav-link active" aria-current="page"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>INICIO</Link></a>
                </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to="aboutUs" style={{ textDecoration: 'none', color: 'black' }}>NOSOTROS</Link></a>
              </li>

              <li class="nav-item dropdown" style={{color: 'black'}}>
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PRODUCTOS
                </a>
                <ul class="dropdown-menu">
                  <Link to="chillers" style={{textDecoration: 'none', color: 'black'}} ><li><a class="dropdown-item">Chillers</a></li></Link>
                  <Link to="aireAcondicionado" style={{textDecoration: 'none', color: 'black'}}><li><a class="dropdown-item">Aires Acondicionados</a></li></Link>
                  <Link to="unidadesCentrales" style={{textDecoration: 'none', color: 'black'}}><li><a class="dropdown-item">Unidades centrales</a></li></Link>
                  <Link to="fanCoil" style={{textDecoration: 'none', color: 'black'}}><li><a class="dropdown-item">Fan COIL de agua fría</a></li></Link>
                  <Link to="ctrlAutomatización" style={{textDecoration: 'none', color: 'black'}}><li><a class="dropdown-item">Control y Automatización</a></li></Link>
                  <Link to="monitoreo" style={{textDecoration: 'none', color: 'black'}}><li><a class="dropdown-item">Monitoreo de agua y energía</a></li></Link>
                  <Link to="circuitoTV" style={{textDecoration: 'none', color: 'black'}}><li><a class="dropdown-item">Circuito derrado de TV</a></li></Link>
                  <Link to="smokeControl" style={{textDecoration: 'none', color: 'black'}}><li><a class="dropdown-item">Smoke Control</a></li></Link>
                  <Link to="asistControl" style={{textDecoration: 'none', color: 'black'}}><li><a class="dropdown-item">Control de asistencia</a></li></Link>
                  <Link to="paneles" style={{textDecoration: 'none', color: 'black'}}><li><a class="dropdown-item">Paneles fotovoltáicos</a></li></Link>
                  <Link to="fireAlarm" style={{textDecoration: 'none', color: 'black'}}><li><a class="dropdown-item">Alarma contra incendios</a></li></Link>
                  <Link to="ledLigths" style={{textDecoration: 'none', color: 'black'}}><li><a class="dropdown-item">Instalación de iluminación LED</a></li></Link>
                  <li><hr class="dropdown-divider"/></li>
                  <Link to="products" style={{ textDecoration: 'none', color: 'black' }}><li><a class="dropdown-item">Ver todos los productos</a></li></Link>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to="services" style={{ textDecoration: 'none', color: 'black' }}>SERVICIOS</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to="proyects" style={{ textDecoration: 'none', color: 'black' }}>PROYECTOS</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to="renewable" style={{ textDecoration: 'none', color: 'black' }}>ENERGIAS RENOVABLES</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to="brands" style={{ textDecoration: 'none', color: 'black' }}>MARCAS</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to="contacts" style={{ textDecoration: 'none', color: 'black' }}>CONTACTOS</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to="autoControl" style={{ textDecoration: 'none', color: 'black' }}>CONTROL Y AUTOMATIZACIÓN</Link></a>
              </li>
            </ul>
          </div>  
        </div>
      </nav>
    </>
  );

};
  
export default Header;
