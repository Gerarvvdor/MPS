import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../images/logo.avif';
import lead from './../images/lead.avif';
import reliable from './../images/reliablec.avif';
import leed from './../images/hearth.avif';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/custom-colors.css';

const Header = () => {
  return (
    <>
    <div style={{ backgroundColor: 'var(--tertiary-color)' }} >
      <div class="container">

        {/*<div className='socialMedia'class="container">
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
          </div>*/}
        <div class="img-container">
            <img class="img-fluid" style={{ maxWidth: '5%', height: 'auto', margin: '10px' }} src={logo} alt="MP Logo"/>
            <img class="img-fluid" style={{ maxWidth: '6%', height: 'auto', margin: '10px' }} src={lead} alt="leed"/>
            <img class="img-fluid" style={{ maxWidth: '10%', height: 'auto', margin: '10px' }} src={leed} alt="leed Earth"/>
            <img class="img-fluid" style={{ maxWidth: '15%', height: 'auto', margin: '10px' }} src={reliable} alt='reliable-logo'/>
        </div>
        </div>
        <nav class="navbar navbar-expand-lg" style={{margin: '10px'}}>
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item me-lg-2 me-3">
                    <a href='...' class="nav-link active" aria-current="page"><Link to="/" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>INICIO</Link></a>
                  </li>
                <li class="nav-item me-lg-2 me-3">
                  <a href="..." class="nav-link active" aria-current="page"><Link to="aboutUs" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>NOSOTROS</Link></a>
                </li>
                <li class="nav-item dropdown me-lg-2 me-3">
                  <a href="..." class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'var(--primary-color)'}}>
                    PRODUCTOS
                  </a>
                  <ul class="dropdown-menu me-lg-2 me-3" style={{backgroundColor: 'var(--primary-color)'}}>
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
                </li>
                <li class="nav-item me-lg-2 me-3">
                  <a href="..." class="nav-link active" aria-current="page"><Link to="services" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>SERVICIOS</Link></a>
                </li>
                <li class="nav-item me-lg-2 me-3">
                  <a href="..." class="nav-link active" aria-current="page"><Link to="proyects" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>PROYECTOS</Link></a>
                </li>
                <li class="nav-item me-lg-2 me-3">
                  <a href="#" class="nav-link active" aria-current="page"><Link to="renewable" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>ENERGIAS RENOVABLES</Link></a>
                </li>
                <li class="nav-item me-lg-2 me-3">
                  <a href="..." class="nav-link active" aria-current="page"><Link to="brands" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>MARCAS</Link></a>
                </li>
                <li class="nav-item me-lg-2 me-3">
                  <a href="..." class="nav-link active" aria-current="page"><Link to="contacts" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>CONTACTOS</Link></a>
                </li>
                <li class="nav-item me-lg-2 me-3">
                  <a href="..." class="nav-link active" aria-current="page"><Link to="autoControl" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>CONTROL Y AUTOMATIZACIÓN</Link></a>
                </li>
              </ul>
            </div>  
          </div>
        </nav>
      </div>
    </>
  );

};
  
export default Header;
