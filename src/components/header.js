import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../images/logo.png';
import lead from './../images/lead.png';
import reliable from './../images/control.png';
import leed from './../images/hearth.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-end --bg-green-500">
        <nav className="d-flex align-items-center" class="img-fluid">
          <Link className="mx-2">Twitter</Link>
          <Link className="mx-2">Facebook</Link>
          <Link className="mx-2">Youtube</Link>
          <Link className="mx-2">Instagram</Link>
          <Link className="mx-2">+503 2247-3400</Link>
          <Link className="mx-2">info@mpservice.com.sv</Link>
        </nav>
      </div>

      <div className="d-flex align-items-center justify-content-between bg-light p-3">
        <img src={logo} alt="MPLogo" />
        <img src={lead} alt="leadLogo" />
        <nav className="d-flex align-items-center">
          <Link to="/" className="mx-3">INICIO</Link>
          <Link to="/aboutUs" className="mx-3">NOSOTROS</Link>
          <Link to="/products" className="mx-3">PRODUCTOS</Link>
          <Link to="/services" className="mx-3">SERVICIOS</Link>
          <Link to="/proyects" className="mx-3">PROYECTOS</Link>
          <Link to="/renewable" className="mx-3">ENERGIAS RENOVABLES</Link>
          <Link to="/brands" className="mx-3">MARCAS</Link>
          <Link to="/contacts" className="mx-3">CONTACTOS</Link>
          <img src={reliable} alt="" className="mx-3" />
        </nav>
        <img src={leed} alt="leed" />
      </div>
    </>
  );
};

export default Header;