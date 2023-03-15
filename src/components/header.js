import React from 'react';
import {Link} from 'react-router-dom';
//import images//
import logo from './../images/logo.png';
import lead from './../images/lead.png';
import reliable from './../images/control.png';
import leed from './../images/hearth.png';


const Header = () =>{
    return(
      <>
      <nav className=''>
          <Link>Twitter</Link>   
          <Link>Facebook</Link>    
          <Link>Youtube</Link>   
          <Link>Instagram</Link>   
          <Link>+503 2247-3400</Link>    
          <Link>info@mpservice.com.sv</Link>    
      </nav>

      <div>
        <img src={logo} alt=''></img>
        <img src={lead} alt=''></img>
          <nav>
            <Link to="/">INICIO</Link>
            <Link to="/aboutUs">NOSOTROS</Link>
            <Link to="/products">PRODUCTOS</Link>
            <Link to="/services">SERVICIOS</Link>
            <Link to="/proyects">PROYECTOS</Link>
            <Link to="/renewable">ENERGIAS RENOVABLES</Link>
            <Link to="/brands">MARCAS</Link>
            <Link to="/contacts">CONTACTOS</Link>
            <Link to=""><img src={reliable} alt=""></img></Link>
          </nav>
        <img src={leed} alt=''></img>
      </div>
    </>
    );
}
export default Header;