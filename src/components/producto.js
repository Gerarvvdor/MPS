import React from 'react';
import { Link } from 'react-router-dom';

//import pages//
import chillerAgua from "./../paginas/subPaginas/chillerAgua"
import chillerAire from "./../paginas/subPaginas/chillerAire";
//import images//

function ProductDetails(props) {
  const { page } = props;

  let imgSrc = '';

  switch (page) {
    case chillerAgua:
      imgSrc = 'ruta-a-imagen-home.jpg';
      break;
    case chillerAire:
      imgSrc = 'ruta-a-imagen-productos.jpg';
      break;
    case 'contacto':
      imgSrc = 'ruta-a-imagen-contacto.jpg';
      break;
    default:
      imgSrc = 'ruta-a-imagen-por-defecto.jpg';
      break;
  }

  return (
    <div>
      <img src={imgSrc} alt="Imagen del producto" />

      <Link to="/detalles-del-producto">
        <button>Ver Especificaciones</button>
      </Link>
    </div>
  );
}

export default ProductDetails;
