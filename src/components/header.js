import React from 'react';
import logo from './../images/logo.avif';
import lead from './../images/lead.avif';
import reliable from './../images/Reliable controls Authorized Dealer.webp';
import leed from './../images/LEED+Earth.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/custom-colors.css';



const Header = () => {
  return (
    <>
      
    <div class="navbar-fixed-top text-center" style={{background: 'var(--tertiary-color)', borderRadius: '0.5rem'}}>
      <img class="img-fluid" style={{ maxWidth: '5%', height: 'auto', margin: '10px' }} src={logo} alt='logo'></img>
      <img class="img-fluid" style={{ maxWidth: '7%', height: 'auto', margin: '10px' }} src={lead} alt="leed"/>
      <img class="img-fluid" style={{ maxWidth: '10%', height: 'auto', margin: '10px' }} src={leed} alt="leed Earth"/>
      <img class="img-fluid" style={{ maxWidth: '15%', height: 'auto', margin: '10px' }} src={reliable} alt='reliable-logo'/>
    </div>
    {/* 
    <div class="header" style={{ backgroundColor: 'var(--secondary-color)', marginBottom: '1rem' }} >

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
          </div>}
        <div class="text-center">
            <img class="img-fluid" style={{ maxWidth: '5%', height: 'auto', margin: '10px' }} src={logo} alt="MP Logo"/>
            <img class="img-fluid" style={{ maxWidth: '6%', height: 'auto', margin: '10px' }} src={lead} alt="leed"/>
            <img class="img-fluid" style={{ maxWidth: '10%', height: 'auto', margin: '10px' }} src={leed} alt="leed Earth"/>
            <img class="img-fluid" style={{ maxWidth: '15%', height: 'auto', margin: '10px' }} src={reliable} alt='reliable-logo'/>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light m-auto" style={{marginBottom: '10px'}}>
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color: 'var(--fift-color )'}}>
              <span class="navbar-icon"><i class="bi bi-list" style={{color: 'var(--fift-color )', width: 'auto', height: 'auto'}}/></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 display-flex">
                <li class="nav-item me-lg-2 me-3 justify-content-center">
                  <Link to="/" style={{ textDecoration: 'none', color: 'var(--fift-color)' }} class="text-center">INICIO</Link>
                  </li>
                <li class="nav-item me-lg-2 me-3 justify-content-center">
                  <Link to="aboutUs" style={{ textDecoration: 'none', color: 'var(--fift-color)' }}>NOSOTROS</Link>
                </li>
                <li class="nav-item dropdown me-lg-2 me-3 justify-content-center">
                  <div class=" dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'var(--fift-color)'}}>
                    PRODUCTOS
                  </div>
                  <ul class="dropdown-menu me-lg-2 me-3" style={{backgroundColor: 'var(--secondary-color)'}}>
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
                <li class="nav-item me-lg-2 me-3 justify-content-center">
                  <Link to="services" style={{ textDecoration: 'none', color: 'var(--fift-color)' }}>SERVICIOS</Link>
                </li>
                <li class="nav-item me-lg-2 me-3 justify-content-center">
                  <Link to="proyects" style={{ textDecoration: 'none', color: 'var(--fift-color)' }}>PROYECTOS</Link>
                </li>
                <li class="nav-item me-lg-2 me-3 justify-content-center">
                  <Link to="renewable" style={{ textDecoration: 'none', color: 'var(--fift-color)' }} class="text-center">ENERGIAS RENOVABLES</Link>
                </li>
                <li class="nav-item me-lg-2 me-3 justify-content-center">
                  <Link to="brands" style={{ textDecoration: 'none', color: 'var(--fift-color)' }}>MARCAS</Link>
                </li>
                <li class="nav-item me-lg-2 me-3">
                  <Link to="contacts" style={{ textDecoration: 'none', color: 'var(--fift-color)' }}>CONTACTOS</Link>
                </li>
                <li class="nav-item me-lg-2 me-3 justify-content-center">
                  <Link to="autoControl" style={{ textDecoration: 'none', color: 'var(--fift-color)' }}>CONTROL Y AUTOMATIZACIÓN</Link>
                </li>
              </ul>
            </div>  
          </div>
        </nav>
      </div>*/}
      
      
    </>
  );

};
  
export default Header;
