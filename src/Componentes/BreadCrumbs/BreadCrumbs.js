import React from 'react';
//Dependencia de Estilos
import './BreadCrumbs.css';

/* Componente BREADCRUMBS 
    Este componente recibe  por props un Array de objetos con un formato espesifico {id:,name:} 
    y arma la estructura para mostrar los atrivutos "name" con un formato de BreadCrumbs
*/
export default function BreadCrumbs({categorias}){ 
    let breadcrumbs =[];
    breadcrumbs = categorias.map((crumb,i) => {
      return <li key={`bc-item${i}`}> {crumb}  </li>;
     });
  
  return (
    <div className='contenedorBreadCrumb'>
        <ul className="breadcrumb">
            {breadcrumbs}
        </ul>
    </div>
  );
};



